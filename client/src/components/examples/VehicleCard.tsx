import VehicleCard from '../VehicleCard';

export default function VehicleCardExample() {
  const vehicle = {
    id: "1",
    category: "AUTOS" as const,
    priceRange: "Alto" as const,
    model: "LAMBORGHINI AVENTADOR",
    price: 2200000,
    maxSpeed: 197,
    tankCapacity: 100,
    trunkCapacity: 90
  };

  return <VehicleCard vehicle={vehicle} />;
}
