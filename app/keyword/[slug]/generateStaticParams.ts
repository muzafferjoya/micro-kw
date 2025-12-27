import { KEYWORDS } from "@/data/keywords"

export function generateStaticParams() {
  return KEYWORDS.map((k) => ({
    slug: k.replace(/\s+/g, "-"),
  }))
}
