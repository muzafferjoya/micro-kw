import type { Metadata } from "next"
import { KEYWORDS } from "@/data/keywords"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

/* ✅ Static pages generation */
export async function generateStaticParams() {
  return KEYWORDS.map((k) => ({
    slug: k.replace(/\s+/g, "-"),
  }))
}

/* ✅ SEO metadata (NO ERROR) */
export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params
  const keyword = slug.replace(/-/g, " ")

  return {
    title: `${keyword} business ideas | Micro KW`,
    description: `Learn how to start a ${keyword} business with low investment and high profit potential.`,
  }
}

/* ✅ Page render (NO ERROR) */
export default async function KeywordPage(props: PageProps) {
  const { slug } = await props.params
  const keyword = slug.replace(/-/g, " ")

  return (
    <main className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold capitalize">
        {keyword} business ideas
      </h1>

      <p className="mt-4">
        Starting a {keyword} business is one of the best
        micro business ideas in 2025.
      </p>

      <h2 className="mt-6 font-semibold text-xl">
        Why start a {keyword} business?
      </h2>

      <p className="mt-2">
        Low investment, high demand and scalable opportunity.
      </p>

      <h2 className="mt-6 font-semibold text-xl">
        Investment & Profit
      </h2>

      <p className="mt-2">
        Initial investment is low with healthy profit margins.
      </p>

      <h2 className="mt-6 font-semibold text-xl">
        How to start {keyword} business
      </h2>

      <ul className="list-disc ml-6 mt-2">
        <li>Market research</li>
        <li>Registration</li>
        <li>Setup</li>
        <li>Marketing</li>
      </ul>
    </main>
  )
}
