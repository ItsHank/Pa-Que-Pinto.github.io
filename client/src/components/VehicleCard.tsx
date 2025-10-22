import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gauge, Fuel, Package, Sparkles } from "lucide-react";
import type { Vehicle } from "@shared/schema";
import type { VIPLevel } from "@/lib/vipDiscounts";
import { calculateVIPDiscount } from "@/lib/vipDiscounts";
import { getVehicleImage } from "@/lib/vehicleImages";

interface VehicleCardProps {
  vehicle: Vehicle;
  vipLevel?: VIPLevel;
}

const priceRangeColors = {
  Alto: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Medio: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Bajo: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

const categoryGradients = {
  AUTOS: "from-blue-500/10 to-blue-600/5",
  CAMIONETAS: "from-slate-500/10 to-slate-600/5",
  MOTOS: "from-orange-500/10 to-orange-600/5",
  OTROS: "from-green-500/10 to-green-600/5",
};

export default function VehicleCard({ vehicle, vipLevel = "NONE" }: VehicleCardProps) {
  const { discountedPrice, discountPercentage } = calculateVIPDiscount(
    vehicle.price,
    vehicle.priceRange,
    vipLevel
  );
  
  const hasDiscount = discountPercentage > 0;
  const vehicleImage = getVehicleImage(vehicle.model);
  
  return (
    <Card 
      className="overflow-hidden hover-elevate transition-all duration-300 hover:scale-105"
      data-testid={`card-vehicle-${vehicle.id}`}
    >
      <div className={`aspect-video bg-gradient-to-br ${categoryGradients[vehicle.category]} flex items-center justify-center relative overflow-hidden`}>
        {vehicleImage ? (
          <img 
            src={vehicleImage} 
            alt={vehicle.model}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <p className="text-muted-foreground text-sm">Sin imagen</p>
        )}
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge 
            variant="outline" 
            className={`${priceRangeColors[vehicle.priceRange]} font-mono text-xs backdrop-blur-sm`}
            data-testid={`badge-price-${vehicle.id}`}
          >
            {vehicle.priceRange}
          </Badge>
{hasDiscount && (
  <Badge 
    variant="outline" 
    className="bg-primary/20 text-primary border-primary/30 font-mono text-xs backdrop-blur-sm"
    data-testid={`badge-discount-${vehicle.id}`}
  >
    <Sparkles className="h-3 w-3 mr-1" />
    {vipLevel === "NONE" ? "Bienvenida" : `-${discountPercentage}%`}
  </Badge>
)}

        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-semibold mb-2" data-testid={`text-model-${vehicle.id}`}>
            {vehicle.model}
          </h3>
          {hasDiscount ? (
            <div className="space-y-1">
              <p className="text-lg text-muted-foreground line-through font-mono" data-testid={`text-price-original-${vehicle.id}`}>
                P$ {vehicle.price.toLocaleString('es-ES')}
              </p>
              <p className="text-3xl font-bold text-primary font-mono" data-testid={`text-price-${vehicle.id}`}>
                P$ {discountedPrice.toLocaleString('es-ES')}
              </p>
              <p className="text-sm text-primary font-medium">
                ¡Ahorras P$ {(vehicle.price - discountedPrice).toLocaleString('es-ES')}!
              </p>
            </div>
          ) : (
            <p className="text-3xl font-bold text-primary font-mono" data-testid={`text-price-${vehicle.id}`}>
              P$ {vehicle.price.toLocaleString('es-ES')}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Vel. Máxima</p>
              <p className="font-mono font-medium" data-testid={`text-speed-${vehicle.id}`}>
                {vehicle.maxSpeed} KM/H
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Tanque</p>
              <p className="font-mono font-medium" data-testid={`text-tank-${vehicle.id}`}>
                {vehicle.tankCapacity} L
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 col-span-2">
            <Package className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Maletero</p>
              <p className="font-mono font-medium" data-testid={`text-trunk-${vehicle.id}`}>
                {vehicle.trunkCapacity !== null ? `${vehicle.trunkCapacity} KG` : 'N/D'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
