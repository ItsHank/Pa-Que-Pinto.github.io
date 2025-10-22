# Design Guidelines: Concesionario de Vehículos

## Design Approach

**Selected Approach:** Reference-Based (Automotive E-commerce)

**Primary References:** Tesla, Carvana, Mercedes-Benz configurators, and premium automotive marketplaces

**Design Philosophy:** Create a premium, immersive browsing experience that treats every vehicle—from the Lamborghini Aventador to the Faggio motorcycle—with equal visual respect. The design should evoke emotion and desire while maintaining practical functionality for comparing specifications.

**Language:** All content in Spanish (interface labels, buttons, navigation)

---

## Core Design Elements

### A. Color Palette

**Dark Mode Primary (Default):**
- Background Base: 220 15% 8%
- Surface: 220 12% 12%
- Surface Elevated: 220 10% 16%
- Border Subtle: 220 10% 22%

**Accent Colors:**
- Primary Brand: 210 100% 55% (Electric Blue - automotive energy)
- Secondary Accent: 0 0% 95% (Bright White - luxury contrast)
- Price High Tier: 45 100% 60% (Gold undertone)
- Price Medium Tier: 210 80% 65% (Blue gradient)
- Price Low Tier: 160 60% 55% (Accessible green)

**Light Mode** (for future consideration):
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text: 220 15% 20%

### B. Typography

**Primary Font:** 'Inter' (Google Fonts) - Clean, modern, automotive-grade
- Headings: 600-700 weight
- Body: 400-500 weight
- Price displays: 700 weight (bold, prominent)
- Specifications: 400 weight (readable data)

**Secondary Font:** 'Rajdhani' (Google Fonts) - Technical specifications, speed indicators
- All caps for category labels
- Medium weight (500) for numerical data

**Type Scale:**
- Hero: text-6xl to text-7xl (72-96px)
- Section Headers: text-4xl (48px)
- Vehicle Names: text-2xl (32px)
- Prices: text-3xl (40px) - commanding presence
- Specifications: text-sm to text-base (14-16px)

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Component padding: p-6, p-8
- Section spacing: py-16, py-24
- Card gaps: gap-6, gap-8
- Grid spacing: gap-4 (mobile), gap-6 (desktop)

**Container Widths:**
- Full sections: max-w-7xl mx-auto
- Content areas: max-w-6xl
- Vehicle cards grid: 100% with internal constraints

**Grid Systems:**
- Vehicle Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Specification Details: grid-cols-2 md:grid-cols-4
- Category Navigation: grid-cols-2 md:grid-cols-4 (equal tiles)

### D. Component Library

**Navigation:**
- Fixed top navigation with backdrop blur
- Category pills/tabs (Autos, Camionetas, Motos, Otros)
- Price filter chips (Alto, Medio, Bajo) - color-coded
- Search bar with icon (magnifying glass from Heroicons)
- Sort dropdown (by price, alphabetical, max speed)

**Vehicle Cards:**
- Elevated cards with hover transform (scale-105 transition)
- Large vehicle placeholder area (16:9 aspect ratio)
- Model name prominently displayed
- Price in large bold text with "P$" currency prefix
- Specification grid: 4 icons with data (speed, tank, trunk capacity)
- Category badge (top-right corner, color-coded by price tier)
- "Ver Detalles" button (outline variant with blur background when over images)
- Subtle shadow: shadow-lg with dark mode adaptation

**Filters & Controls:**
- Multi-select category buttons (active state: filled background)
- Range slider for price filtering (alternative to chips)
- Search input: rounded-lg, border-2, focus ring in brand color
- Sort select: custom styled dropdown with chevron icon
- Clear filters button (ghost variant)

**Data Display:**
- Icon + label + value pattern for specifications
- Icons from Heroicons: 
  - Bolt for speed
  - BeakerIcon for tank capacity  
  - CubeIcon for trunk/cargo capacity
- Numerical values with units (KM/H, L, KG)
- "N/D" handled gracefully with muted text

**Hero Section:**
- Large hero image (high-quality automotive lifestyle image)
- Gradient overlay (dark to transparent) for text readability
- Primary headline: "Encuentra Tu Vehículo Ideal"
- Subheadline highlighting inventory size and variety
- Primary CTA: "Explorar Catálogo"
- Trust indicators: "86+ Vehículos Disponibles"

**Informational Sections:**
- "Categorías Destacadas": 4-column grid showcasing vehicle types
- "Rangos de Precio": Visual explanation of Alto/Medio/Bajo tiers
- Stats bar: Total vehicles, price range span, financing options

### E. Animations

**Minimal, Purposeful Motion:**
- Card hover: transform scale-105, duration-300
- Filter selection: smooth color transition, duration-200
- Page transitions: fade-in for content areas
- **Avoid:** Scroll-triggered animations, parallax, excessive movement
- **Focus:** Crisp, immediate interactions that feel responsive

---

## Images

**Hero Section:**
- Large, cinematic automotive lifestyle image (1920x800px minimum)
- Options: Luxury showroom interior, sleek vehicle lineup, or dramatic single vehicle shot
- Dark vignette overlay to ensure white text readability
- Position: Full-width background, top of page

**Vehicle Placeholders:**
- 16:9 ratio cards with gradient backgrounds matching price tier
- Icon or text overlay: "Imagen próximamente" 
- Different gradient per category (Autos: blue, Camionetas: gray, Motos: orange, Otros: green)
- Use subtle automotive silhouette patterns as background texture

**Category Section:**
- 4 feature images representing each category
- Square ratio (1:1), minimum 600x600px
- Suggested: Close-up detail shots of vehicles in each category

**Trust & Credibility:**
- No stock photo headshots
- Focus on vehicles and facility imagery

---

## Spanish Language Elements

**Key Interface Terms:**
- Navigation: "Inicio", "Catálogo", "Categorías", "Contacto"
- Filters: "Filtrar por:", "Rango de Precio", "Tipo de Vehículo"
- Actions: "Ver Detalles", "Comparar", "Consultar Precio"
- Specifications: "Velocidad Máxima", "Capacidad del Tanque", "Capacidad del Maletero"
- Categories: "Autos", "Camionetas", "Motos", "Otros"
- Price Ranges: "Alto", "Medio", "Bajo"

---

## Critical Implementation Notes

- Create rich, complete vehicle cards—not sparse layouts
- Every vehicle deserves equal visual treatment regardless of price
- Price tier color-coding should be subtle accent, not dominant
- Maintain professional dealership aesthetic across all tiers
- Responsive: mobile shows 1 column, tablet 2, desktop 3 vehicle cards
- Dark mode is primary; light mode optional future enhancement
- Handle "N/D" (No Data) values gracefully with em dashes or "No aplica"