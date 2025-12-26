import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://micro-kw.vercel.app",
      lastModified: new Date(),
    },
  ]
}
