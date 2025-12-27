import { KEYWORDS } from "@/data/keywords"
import Link from "next/link"

export const metadata = {
  title: "HTML Sitemap | Micro Business Keywords",
  description: "Browse all micro business keyword pages",
}

export default function HtmlSitemap() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Micro Business Keyword Sitemap
      </h1>

      <p className="mb-6 text-gray-600">
        Browse all business idea pages available on this site.
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {KEYWORDS.map(k => {
          const slug = k.replace(/\s+/g, "-")
          return (
            <li key={k}>
              <Link
                href={`/keyword/${slug}`}
                className="text-blue-600 hover:underline"
              >
                {k} business ideas
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
