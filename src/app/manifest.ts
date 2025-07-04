import type { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    background_color: "#FFFFFF",
    description: "",
    display: "standalone" as const,
    icons: [
      {
        purpose: "maskable" as const,
        sizes: "192x192",
        src: "/android-chrome-192x192.png",
        type: "image/png",
      },
      {
        sizes: "512x512",
        src: "/icon-512x512.png",
        type: "image/png",
      },
    ],
    id: "/",
    lang: "en",
    name: "Stride",
    orientation: "portrait" as const,
    scope: "/",
    short_name: "Stride",
    start_url: "/",
    theme_color: "#FFFFFF",
  };
}
