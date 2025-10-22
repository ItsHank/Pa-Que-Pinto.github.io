import type { PriceRange } from "@shared/schema";

export type VIPLevel = "NONE" | "PLATINO" | "ORO" | "DIAMANTE";

export interface VIPDiscount {
  level: VIPLevel;
  label: string;
  discountRange: string;
}

export const VIP_LEVELS: VIPDiscount[] = [
  { level: "NONE", label: "Primera Compra", discountRange: "10-15%" },
  { level: "PLATINO", label: "VIP Platino", discountRange: "15-17%" },
  { level: "ORO", label: "VIP Oro", discountRange: "17-20%" },
  { level: "DIAMANTE", label: "VIP Diamante", discountRange: "20-25%" },
];

export function calculateVIPDiscount(
  originalPrice: number,
  priceRange: PriceRange,
  vipLevel: VIPLevel
): { discountedPrice: number; discountPercentage: number } {
  let discountPercentage = 0;

  switch (vipLevel) {
    case "NONE":
      // Descuento de bienvenida 10–15%
      if (priceRange === "Alto") discountPercentage = 15;
      else if (priceRange === "Medio") discountPercentage = 12.5;
      else discountPercentage = 10;
      break;

    case "PLATINO":
      // 15–17%
      if (priceRange === "Alto") discountPercentage = 17;
      else if (priceRange === "Medio") discountPercentage = 16;
      else discountPercentage = 15;
      break;

    case "ORO":
      // 17–20%
      if (priceRange === "Alto") discountPercentage = 20;
      else if (priceRange === "Medio") discountPercentage = 18.5;
      else discountPercentage = 17;
      break;

    case "DIAMANTE":
      // 20–25%
      if (priceRange === "Alto") discountPercentage = 25;
      else if (priceRange === "Medio") discountPercentage = 22.5;
      else discountPercentage = 20;
      break;
  }

  const discountedPrice = originalPrice * (1 - discountPercentage / 100);
  return { discountedPrice, discountPercentage };
}

