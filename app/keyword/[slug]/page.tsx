import { KEYWORDS } from "@/data/keywords"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type Props = {
  params: Promise<{
    slug: string
  }>
}

const formatKeyword = (slug: string) =>
  slug.replace(/-/g, " ")

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } = await params
  const keyword = formatKeyword(slug)

  if (!KEYWORDS.includes(keyword)) {
    return {}
  }

  return {
    title: `${keyword} business ideas | Micro Business 2025`,
    description: `Complete guide on starting ${keyword} business in 2025. Investment, profit, setup and growth explained.`,
    alternates: {
      canonical: `/keyword/${slug}`,
    },
  }
}

export default async function KeywordPage({ params }: Props) {

  const { slug } = await params
  const keyword = formatKeyword(slug)

  if (!KEYWORDS.includes(keyword)) {
    notFound()
  }

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
    </article>
  )
}
