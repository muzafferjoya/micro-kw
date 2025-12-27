import { KEYWORDS } from "@/data/keywords"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"

type Props = {
  params: Promise<{
    slug: string
  }>
}

const formatKeyword = (slug: string) =>
  slug.replace(/-/g, " ")

/* 🔹 SEO META */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } = await params
  const keyword = formatKeyword(slug)

  if (!KEYWORDS.includes(keyword)) return {}

  return {
    title: `${keyword} business ideas | Micro Business 2025`,
    description: `Complete guide on starting ${keyword} business in 2025. Investment, profit, setup and growth explained.`,
    alternates: {
      canonical: `https://micro-kw.vercel.app/keyword/${slug}`,
    },
  }
}

/* 🔹 BUILD ALL PAGES (100+) */
export async function generateStaticParams() {
  return KEYWORDS.map(k => ({
    slug: k.replace(/\s+/g, "-"),
  }))
}

/* 🔹 PAGE CONTENT */
export default async function KeywordPage({ params }: Props) {

  const { slug } = await params
  const keyword = formatKeyword(slug)

  if (!KEYWORDS.includes(keyword)) notFound()

  return (
    <article className="prose mx-auto px-4 py-8">

      <h1>{keyword} business ideas</h1>

      <p>
        Starting a <strong>{keyword}</strong> business is one of the best micro business
        ideas in 2025.
      </p>

      <h2>Why start a {keyword} business?</h2>
      <p>
        Low investment, high demand and scalable opportunity.
      </p>

      <h2>Investment & Profit</h2>
      <p>
        Initial investment is low with healthy profit margins.
      </p>

      <h2>How to start {keyword} business</h2>
      <ul>
        <li>Market research</li>
        <li>Registration</li>
        <li>Setup</li>
        <li>Marketing</li>
      </ul>

      <hr className="my-8" />

      <h2>Related business ideas</h2>

      <ul>
        {KEYWORDS
          .filter(k => k !== keyword)
          .slice(0, 5)
          .map(k => (
            <li key={k}>
              <Link href={`/keyword/${k.replace(/\s+/g, "-")}`}>
                {k} business ideas
              </Link>
            </li>
          ))}
      </ul>

    </article>
  )
}
