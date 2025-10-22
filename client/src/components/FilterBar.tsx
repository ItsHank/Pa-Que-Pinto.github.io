import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import type { VehicleCategory, PriceRange } from "@shared/schema";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: VehicleCategory | "ALL";
  onCategoryChange: (category: VehicleCategory | "ALL") => void;
  selectedPriceRange: PriceRange | "ALL";
  onPriceRangeChange: (range: PriceRange | "ALL") => void;
  sortBy: "price-asc" | "price-desc" | "name";
  onSortChange: (sort: "price-asc" | "price-desc" | "name") => void;
  onClearFilters: () => void;
}

const categories = [
  { label: "Todas las Categorías", value: "ALL" },
  { label: "Autos", value: "AUTOS" },
  { label: "Camionetas", value: "CAMIONETAS" },
  { label: "Motos", value: "MOTOS" },
  { label: "Otros", value: "OTROS" },
];

const priceRanges = [
  { label: "Todos los Precios", value: "ALL" },
  { label: "Alto", value: "Alto" },
  { label: "Medio", value: "Medio" },
  { label: "Bajo", value: "Bajo" },
];

export default function FilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPriceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
  onClearFilters,
}: FilterBarProps) {
  const hasActiveFilters = selectedCategory !== "ALL" || selectedPriceRange !== "ALL" || searchQuery !== "";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar modelo..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
            data-testid="input-search"
          />
        </div>

        <Select value={selectedCategory} onValueChange={(value) => onCategoryChange(value as VehicleCategory | "ALL")}>
          <SelectTrigger data-testid="select-category">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedPriceRange} onValueChange={(value) => onPriceRangeChange(value as PriceRange | "ALL")}>
          <SelectTrigger data-testid="select-price-range">
            <SelectValue placeholder="Rango de Precio" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={(value) => onSortChange(value as "price-asc" | "price-desc" | "name")}>
          <SelectTrigger data-testid="select-sort">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
            <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
            <SelectItem value="name">Nombre A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm text-muted-foreground">Filtros activos:</p>
          {searchQuery && (
            <Badge variant="secondary" className="gap-1">
              Búsqueda: {searchQuery}
              <X className="h-3 w-3 cursor-pointer" onClick={() => onSearchChange("")} />
            </Badge>
          )}
          {selectedCategory !== "ALL" && (
            <Badge variant="secondary" className="gap-1">
              {categories.find(c => c.value === selectedCategory)?.label}
              <X className="h-3 w-3 cursor-pointer" onClick={() => onCategoryChange("ALL")} />
            </Badge>
          )}
          {selectedPriceRange !== "ALL" && (
            <Badge variant="secondary" className="gap-1">
              Precio: {selectedPriceRange}
              <X className="h-3 w-3 cursor-pointer" onClick={() => onPriceRangeChange("ALL")} />
            </Badge>
          )}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearFilters}
            data-testid="button-clear-filters"
          >
            Limpiar todo
          </Button>
        </div>
      )}
    </div>
  );
}
