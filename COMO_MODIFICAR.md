# Guía de Modificación - Tu Concesionario

Esta guía te explica cómo modificar el nombre del concesionario y cómo agregar, editar o eliminar vehículos del catálogo.

---

## 📝 Cambiar el Nombre del Concesionario

Para cambiar el nombre del concesionario en la aplicación, sigue estos pasos:

### Paso 1: Editar la Configuración Principal

Edita el archivo **`shared/config.ts`**:

```typescript
export const dealershipConfig = {
  name: "Tu Concesionario",  // ← Cambia esto por el nombre que quieras
  tagline: "Tu destino para vehículos de alta calidad con descuentos VIP exclusivos"  // ← Cambia el eslogan aquí
};
```

Este cambio actualizará automáticamente el nombre en:
- ✅ La barra de navegación superior
- ✅ La sección principal (Hero)
- ✅ El pie de página

### Paso 2: Editar el Título del Navegador

Para cambiar el título y descripción que aparece en la pestaña del navegador, edita **`client/index.html`** (líneas 9-10):

```html
<title>Tu Concesionario - Encuentra Tu Vehículo Ideal</title>
<meta name="description" content="Descubre nuestro catálogo de más de 86 vehículos premium en Tu Concesionario..." />
```

**Ejemplo completo:**
```typescript
// shared/config.ts
export const dealershipConfig = {
  name: "AutoPlaza Premium",
  tagline: "Los mejores vehículos al mejor precio"
};
```

```html
<!-- client/index.html -->
<title>AutoPlaza Premium - Encuentra Tu Vehículo Ideal</title>
<meta name="description" content="Descubre nuestro catálogo de más de 86 vehículos premium en AutoPlaza Premium..." />
```

---

## 🚗 Modificar Vehículos

Todos los vehículos están almacenados en el archivo:

**`shared/schema.ts`**

### Estructura de un Vehículo

Cada vehículo tiene la siguiente estructura:

```typescript
{
  id: "86",                           // ID único (número como texto)
  category: "AUTOS",                  // Categoría: "AUTOS", "CAMIONETAS", "MOTOS", "OTROS"
  priceRange: "Medio",                // Rango de precio: "Alto", "Medio", "Bajo"
  model: "ALFA ROMEO",                // Nombre del modelo
  price: 245000,                      // Precio en tu moneda
  maxSpeed: 150,                      // Velocidad máxima en km/h
  tankCapacity: 80,                   // Capacidad del tanque en litros
  trunkCapacity: 90                   // Capacidad del maletero (null para motos/camionetas)
}
```

### Agregar un Nuevo Vehículo

1. Abre el archivo `shared/schema.ts`
2. Busca el array `vehicles` (comienza en la línea 34)
3. Copia un vehículo existente similar
4. Pega al final del array (antes del `];`)
5. Modifica los valores:
   - **id**: Usa el siguiente número disponible (actualmente el último es "86")
   - **category**: Elige entre "AUTOS", "CAMIONETAS", "MOTOS", "OTROS"
   - **priceRange**: Elige entre "Alto", "Medio", "Bajo"
   - **model**: Nombre del vehículo (debe coincidir con el nombre de la imagen)
   - Los demás campos: precio, velocidad, capacidades

**Ejemplo:**
```typescript
{ id: "87", category: "AUTOS", priceRange: "Alto", model: "LAMBORGHINI URUS", price: 3500000, maxSpeed: 190, tankCapacity: 85, trunkCapacity: 90 },
```

### Editar un Vehículo Existente

1. Abre `shared/schema.ts`
2. Busca el vehículo por su **model** (nombre)
3. Modifica los valores que necesites
4. Guarda el archivo

**Ejemplo - Cambiar precio del ALFA ROMEO:**
```typescript
// Antes:
{ id: "86", category: "AUTOS", priceRange: "Medio", model: "ALFA ROMEO", price: 245000, ... }

// Después:
{ id: "86", category: "AUTOS", priceRange: "Medio", model: "ALFA ROMEO", price: 280000, ... }
```

### Eliminar un Vehículo

1. Abre `shared/schema.ts`
2. Busca la línea completa del vehículo
3. Elimina toda la línea (incluyendo la coma final)
4. Guarda el archivo

---

## 🖼️ Imágenes de Vehículos

Las imágenes de los vehículos se encuentran en:

**`attached_assets/`**

### ✨ Cómo Funciona el Sistema de Imágenes

El sistema carga automáticamente las imágenes y las muestra en las tarjetas de vehículos según el nombre del modelo. 

**Proceso automático:**
1. El sistema lee todas las imágenes de `attached_assets/`
2. Extrae el nombre del archivo (antes del `_` si existe)
3. Compara el nombre con el `model` del vehículo
4. Muestra la imagen en la tarjeta correspondiente

### Reglas de Nombres de Imágenes

El nombre de la imagen **debe coincidir exactamente** con el campo `model` del vehículo:

- **Nombre del modelo:** `ALFA ROMEO`
- **Nombre de imagen:** `ALFA ROMEO_1759780885135.png` o `ALFA ROMEO.png`

**Importante:** 
- El nombre debe ser **exactamente igual** (incluyendo mayúsculas/minúsculas)
- El sistema ignora el número después del `_` (timestamp)
- Si el nombre no coincide, la tarjeta mostrará "Sin imagen"

### Agregar una Nueva Imagen

**Pasos:**

1. **Guarda** tu imagen en la carpeta `attached_assets/`
2. **Nombra** el archivo exactamente igual al modelo del vehículo
   - Formato: `NOMBRE_DEL_MODELO.png` o `NOMBRE_DEL_MODELO_123456.png`
3. **Formatos** aceptados: `.png`, `.jpg`, `.jpeg`

**Ejemplos correctos:**
```
attached_assets/LAMBORGHINI URUS.png
attached_assets/BMW M3_1234567890.jpg
attached_assets/TOYOTA COROLLA.png
attached_assets/FORD MUSTANG_9876543210.jpeg
```

**Ejemplos incorrectos:**
```
❌ attached_assets/lamborghini urus.png        (minúsculas)
❌ attached_assets/BMW-M3.png                  (guión en lugar de espacio)
❌ attached_assets/TOYOTA  COROLLA.png         (doble espacio)
```

### Verificar que una Imagen se Muestre

1. Abre el catálogo de vehículos
2. Busca la tarjeta del vehículo
3. Si dice "Sin imagen", verifica:
   - ✓ El archivo existe en `attached_assets/`
   - ✓ El nombre coincide exactamente con el modelo
   - ✓ No hay espacios extra o caracteres especiales

---

## 📊 Vehículos Actualmente Cargados

Según las imágenes que proporcionaste, estos vehículos ya están en el sistema:

### Categoría: AUTOS (Precio Alto)
- AUDI R8
- FERRARI SPIDER
- FERRARI 365 GTS
- FERRARI TESTAROSA

### Categoría: AUTOS (Precio Medio)
- ALFA ROMEO ⭐ **(Nuevo - agregado)**
- AUDI A7
- FORD 1938
- ASTON MARTIN
- BMW F10

### Categoría: AUTOS (Precio Bajo)
- AUDI RS4
- FORD GRAN TORINO
- BF INJECTION
- CHEVROLET IMPALA 2020
- FORD SIERRA
- CHEVROLET ONIX
- CLUB
- CHEVROLET CORVETTE
- CHEVROLET CAMARO 1950
- CITROEN
- FLASH

**Total: 86 vehículos** (incluido el nuevo ALFA ROMEO)

---

## ⚙️ Aplicar Cambios

Los cambios se aplican **automáticamente** cuando guardas los archivos. El servidor detectará los cambios y recargará la página.

Si no ves los cambios:
1. Guarda los archivos modificados
2. Espera unos segundos
3. Recarga la página en tu navegador (F5 o Ctrl+R)

---

## 🎨 Rangos de Precio y Colores

El sistema usa códigos de colores para los rangos de precio:

- **Alto** 🟡 Dorado - Vehículos premium (>$200,000)
- **Medio** 🔵 Azul - Vehículos de gama media ($50,000 - $200,000)  
- **Bajo** 🟢 Verde - Vehículos económicos (<$50,000)

---

## 💡 Consejos

1. **Siempre usa comillas dobles** en los valores de texto
2. **Los números no llevan comillas** (precio, velocidad, etc.)
3. **No olvides las comas** al final de cada vehículo (excepto el último)
4. **IDs únicos:** Nunca repitas un ID
5. **Nombres consistentes:** El nombre del modelo debe coincidir con el nombre de la imagen

---

## 🆘 ¿Problemas?

Si algo no funciona:

1. Revisa que no falten comas o llaves
2. Verifica que los nombres de los campos estén correctos
3. Asegúrate de que las imágenes existan en `attached_assets/`
4. Revisa la consola del servidor para ver errores

---

**Última actualización:** Octubre 2025
