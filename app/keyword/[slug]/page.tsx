import { keywordData } from "@/lib/keywords"
import { notFound } from "next/navigation"

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(keywordData).map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const data = keywordData[params.slug]
  if (!data) return {}

  return {
    title: `${data.title} Keyword Ideas | Free Keyword Research Tool`,
    description: `Free keyword ideas and questions for ${data.title.toLowerCase()}.`,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = keywordData[params.slug]

  if (!data) {
    notFound()
  }

  return (
    <main style={{ maxWidth: 800, margin: "auto", padding: "40px 20px" }}>
      <h1>{data.title} Keyword Ideas</h1>

      <p>
        Free keyword research ideas for <strong>{data.title}</strong>.
      </p>

      <h2>Keyword Ideas</h2>
      <ul>
        {data.keywords.map((k) => (
          <li key={k}>{k}</li>
        ))}
      </ul>

      <h2>People Also Ask</h2>
      <ul>
        {data.questions.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>

      <p>
        ← <a href="/">Back to Home</a>
      </p>
    </main>
  )
}
