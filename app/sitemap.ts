import { MetadataRoute } from "next"
import { KEYWORDS } from "@/data/keywords"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://micro-kw.vercel.app"

  const keywordUrls = KEYWORDS.map((k) => ({
    url: `${baseUrl}/keyword/${k.replace(/\s+/g, "-")}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...keywordUrls,
  ]
}
