/**
 * Sistema de carga dinámica con dos orígenes:
 * 1️⃣ /attached_assets → imágenes reales de vehículos (BD visual)
 * 2️⃣ /assets → recursos del servidor (incluye sin-imagen.png)
 *
 * Si no existe en ninguno, devuelve el fallback sin-imagen.
 */

const VEHICLE_ASSETS_PATH = "/attached_assets/";
const SERVER_ASSETS_PATH = "/assets/";

export function getVehicleImage(model: string): string {
  if (!model) return `${SERVER_ASSETS_PATH}sin-imagen.png`;

  // Normaliza y codifica el nombre del modelo
  const normalizedModel = model.trim().replace(/\s+/g, " ");
  const encodedName = encodeURIComponent(normalizedModel);

  const extensions = ["png", "jpg", "jpeg", "webp"];

  // Verifica primero en attached_assets
  for (const ext of extensions) {
    const attachedPath = `${VEHICLE_ASSETS_PATH}${encodedName}.${ext}`;
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", attachedPath, false);
    try {
      xhr.send();
      if (xhr.status === 200) {
        return attachedPath; // encontrada en attached_assets
      }
    } catch (_) {
      // Ignorar errores de CORS o inexistencia
    }
  }

  // Si no se encontró, usa fallback en /assets/
  return `${SERVER_ASSETS_PATH}sin-imagen.png`;
}
