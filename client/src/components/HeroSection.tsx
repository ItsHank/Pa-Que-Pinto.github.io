import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroImage from "@assets/stock_images/luxury_car_dealershi_bc30eeaf.jpg";
import { dealershipConfig } from "@shared/config";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Encuentra Tu Vehículo Ideal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Descubre nuestro catálogo premium de más de 86 vehículos en {dealershipConfig.name} con descuentos VIP exclusivos
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={onExploreClick}
              data-testid="button-explore-catalog"
            >
              <Search className="mr-2 h-5 w-5" />
              Explorar Catálogo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20"
              data-testid="button-contact"
              onClick={() => window.location.href = "https://discord.gg/ZajTsc3P"}
            >
              Contactar
            </Button>
          </div>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white">86+</p>
              <p className="text-sm text-gray-300">Vehículos Disponibles</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4</p>
              <p className="text-sm text-gray-300">Categorías</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">3</p>
              <p className="text-sm text-gray-300">Rangos de Precio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
