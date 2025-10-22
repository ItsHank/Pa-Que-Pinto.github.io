import { useState, useMemo, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FilterBar from "@/components/FilterBar";
import VehicleCard from "@/components/VehicleCard";
import VIPSelector from "@/components/VIPSelector";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";
import { vehicles, type VehicleCategory, type PriceRange } from "@shared/schema";
import { dealershipConfig } from "@shared/config";
import type { VIPLevel } from "@/lib/vipDiscounts";
import { useDebounce } from "@/hooks/use-debounce";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory | "ALL">("ALL");
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange | "ALL">("ALL");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "name">("price-desc");
  const [vipLevel, setVipLevel] = useState<VIPLevel>("NONE");
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  
  const catalogRef = useRef<HTMLDivElement>(null);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const isSearching = searchQuery !== debouncedSearchQuery;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleExploreClick = () => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategorySelect = (category: VehicleCategory) => {
    setSelectedCategory(category);
    catalogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const hasActiveFilters = debouncedSearchQuery || selectedCategory !== "ALL" || selectedPriceRange !== "ALL";

  const filteredVehicles = useMemo(() => {
    let filtered = vehicles;

    if (debouncedSearchQuery) {
      filtered = filtered.filter(v => 
        v.model.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "ALL") {
      filtered = filtered.filter(v => v.category === selectedCategory);
    }

    if (selectedPriceRange !== "ALL") {
      filtered = filtered.filter(v => v.priceRange === selectedPriceRange);
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return a.model.localeCompare(b.model);
    });

    return sorted;
  }, [debouncedSearchQuery, selectedCategory, selectedPriceRange, sortBy]);

  const displayedVehicles = useMemo(() => {
    if (hasActiveFilters || showAll) {
      return filteredVehicles;
    }
    return filteredVehicles.slice(0, 8);
  }, [filteredVehicles, hasActiveFilters, showAll]);

  const vipGradients = {
    NONE: "from-yellow-500/5 via-transparent to-transparent",
    PLATINO: "from-slate-500/5 via-transparent to-transparent",
    ORO: "from-amber-500/5 via-transparent to-transparent",
    DIAMANTE: "from-cyan-500/5 via-transparent to-transparent",
  };

  const scrollToFilters = () => {
    filterBarRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("ALL");
    setSelectedPriceRange("ALL");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection onExploreClick={handleExploreClick} />
      <CategorySection onCategorySelect={handleCategorySelect} />
      
      <div className={`py-16 px-6 bg-gradient-to-b ${vipGradients[vipLevel]} bg-muted/30 transition-all duration-700`} ref={catalogRef}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Catálogo Completo
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {isSearching ? (
                <span className="animate-pulse">Buscando...</span>
              ) : (
                `${filteredVehicles.length} vehículo${filteredVehicles.length !== 1 ? 's' : ''} disponible${filteredVehicles.length !== 1 ? 's' : ''}`
              )}
            </p>

            <div className="mb-8">
              <VIPSelector selectedLevel={vipLevel} onLevelChange={setVipLevel} />
            </div>

            <div ref={filterBarRef}>
              <FilterBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedPriceRange={selectedPriceRange}
                onPriceRangeChange={setSelectedPriceRange}
                sortBy={sortBy}
                onSortChange={setSortBy}
                onClearFilters={handleClearFilters}
              />
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-32">
              <p className="text-gray-500 text-lg animate-pulse">Cargando vehículos...</p>
            </div>
          ) : filteredVehicles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-muted-foreground">
                No se encontraron vehículos con los filtros seleccionados
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} vipLevel={vipLevel} />
                ))}
              </div>

              {!hasActiveFilters && !showAll && filteredVehicles.length > 8 && (
                <div className="mt-16 text-center space-y-6">
                  <div className="bg-card border-2 border-dashed border-primary/30 rounded-lg p-8 max-w-2xl mx-auto">
                    <Search className="w-12 h-12 mx-auto mb-4 text-primary/60" />
                    <h3 className="text-2xl font-bold mb-2">¿No encuentras lo que buscas?</h3>
                    <p className="text-muted-foreground mb-6">
                      Usa nuestros filtros de búsqueda para encontrar el vehículo perfecto entre {filteredVehicles.length} opciones disponibles
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                      <Button 
                        onClick={scrollToFilters}
                        size="lg"
                        className="gap-2"
                      >
                        <Search className="w-4 h-4" />
                        Ir a Búsqueda Avanzada
                      </Button>
                      <Button 
                        onClick={() => setShowAll(true)}
                        size="lg"
                        variant="outline"
                        className="gap-2"
                      >
                        <ChevronDown className="w-4 h-4" />
                        Ver Todos los Vehículos
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <footer className="bg-card border-t py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">{dealershipConfig.name}</h3>
          <p className="text-muted-foreground">
            {dealershipConfig.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
}
