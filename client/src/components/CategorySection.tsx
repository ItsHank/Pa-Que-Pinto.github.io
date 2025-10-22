import { Card, CardContent } from "@/components/ui/card";
import autosImage from "@assets/stock_images/luxury_sports_cars_c_a23fb30d.jpg";
import camionetasImage from "@assets/stock_images/pickup_trucks_and_su_d44d552b.jpg";
import motosImage from "@assets/stock_images/luxury_motorcycles_m_4c53dec4.jpg";
import otrosImage from "@assets/stock_images/camion.jpg"
import type { VehicleCategory } from "@shared/schema";

interface CategorySectionProps {
  onCategorySelect: (category: VehicleCategory) => void;
}

const categories = [
  { 
    name: "Autos", 
    value: "AUTOS" as VehicleCategory,
    image: autosImage,
    count: 54,
    description: "Deportivos y sedanes de lujo"
  },
  { 
    name: "Camionetas", 
    value: "CAMIONETAS" as VehicleCategory,
    image: camionetasImage,
    count: 17,
    description: "SUVs y pickups potentes"
  },
  { 
    name: "Motos", 
    value: "MOTOS" as VehicleCategory,
    image: motosImage,
    count: 9,
    description: "Motos de alta gama"
  },
  { 
    name: "Otros", 
    value: "OTROS" as VehicleCategory,
    image: otrosImage,
    count: 6,
    description: "Vehículos de carga, buses y más."
  },
];

export default function CategorySection({ onCategorySelect }: CategorySectionProps) {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Categorías Destacadas
          </h2>
          <p className="text-xl text-muted-foreground">
            Explora nuestra colección organizada por tipo de vehículo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.value}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => onCategorySelect(category.value)}
              data-testid={`card-category-${category.value.toLowerCase()}`}
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {category.description}
                </p>
                <p className="text-lg font-mono font-bold text-primary">
                  {category.count} vehículos
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
