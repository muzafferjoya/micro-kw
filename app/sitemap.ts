import { keywordData } from "@/lib/keywords"

export default function sitemap() {
  const baseUrl = "https://micro-kw.vercel.app"

  const keywordPages = Object.keys(keywordData).map((slug) => ({
    url: `${baseUrl}/keyword/${slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...keywordPages,
  ]
}
