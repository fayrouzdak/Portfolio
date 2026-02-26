/**
 * Resolves asset paths from the data layer to Astro ImageMetadata.
 *
 * Data layer stores paths relative to /src/assets/ (e.g. "avatar.jpg").
 * import.meta.glob keys are absolute from the project root (e.g. "/src/assets/avatar.jpg").
 */
const allImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/**/*.{png,jpg,jpeg,webp,avif,svg}"
);

export async function resolveImage(relativePath: string): Promise<ImageMetadata> {
  const key = `/src/assets/${relativePath}`;
  const loader = allImages[key];
  if (!loader) {
    throw new Error(`Image not found: ${key}. Make sure the file exists in src/assets/.`);
  }
  const mod = await loader();
  return mod.default;
}
