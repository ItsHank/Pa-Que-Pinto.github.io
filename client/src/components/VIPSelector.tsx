import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Award, Gem, X } from "lucide-react";
import type { VIPLevel } from "@/lib/vipDiscounts";
import { VIP_LEVELS } from "@/lib/vipDiscounts";

interface VIPSelectorProps {
  selectedLevel: VIPLevel;
  onLevelChange: (level: VIPLevel) => void;
}

const levelIcons = {
  NONE: Award,
  PLATINO: Award,
  ORO: Crown,
  DIAMANTE: Gem,
};

const levelColors = {
  NONE: "bg-yellow-800/20 text-yellow-500 border-yellow-800/30",
  PLATINO: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  ORO: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  DIAMANTE: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
};

export default function VIPSelector({ selectedLevel, onLevelChange }: VIPSelectorProps) {
  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">Descuentos VIP Exclusivos</h3>
          <p className="text-sm text-muted-foreground">
            Selecciona tu nivel VIP para ver precios especiales
          </p>
        </div>
        {selectedLevel !== "NONE" && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLevelChange("NONE")}
            data-testid="button-clear-vip"
          >
            <X className="h-4 w-4 mr-1" />
            Quitar VIP
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {VIP_LEVELS.map((vip) => {
          const Icon = levelIcons[vip.level];
          const isSelected = selectedLevel === vip.level;
          
          return (
            <Button
              key={vip.level}
              variant={isSelected ? "default" : "outline"}
              className={`h-auto py-4 px-4 flex flex-col items-center gap-2 ${
                isSelected ? "" : "hover-elevate"
              }`}
              onClick={() => onLevelChange(vip.level)}
              data-testid={`button-vip-${vip.level.toLowerCase()}`}
            >
              {Icon && <Icon className="h-6 w-6" />}
              <div className="text-center">
                <p className="font-semibold text-sm">{vip.label}</p>
                <Badge 
                  variant="outline" 
                  className={`mt-2 ${levelColors[vip.level]}`}
                >
                  {vip.discountRange}
                </Badge>
              </div>
            </Button>
          );
        })}
      </div>
      
      {selectedLevel === "NONE" ? (
        <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-md">
          <p className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">
            📸 ¡Muestra una captura de pantalla en tu ticket y recibe el descuento de primera compra!
          </p>
        </div>
      ) : (
        <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-md">
          <p className="text-sm text-primary font-medium">
            ✨ Descuentos activos: Los vehículos de precio alto obtienen mayor descuento
          </p>
        </div>
      )}
    </div>
  );
}
