import { Metadata } from "next"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

/* =======================
   SEO METADATA (FIXED)
======================= */
export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {

  const params = await props.params
  const keyword = params.slug.replace(/-/g, " ")

  return {
    title: `${keyword} business ideas | Micro KW`,
    description: `Complete guide on ${keyword} business including cost, profit and how to start.`,
  }
}

/* =======================
   PAGE COMPONENT (FIXED)
======================= */
export default async function KeywordPage(props: PageProps) {

  const params = await props.params
  const keyword = params.slug.replace(/-/g, " ")

  return (
    <main style={{ padding: "20px" }}>
      <h1>{keyword} business ideas</h1>

      <p>
        Starting a {keyword} business is one of the best micro business ideas in 2025.
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
    </main>
  )
}
export async function generateStaticParams() {
  return [
    { slug: "bakery-business" },
    { slug: "yoga-studio" },
    { slug: "online-tuition" },
  ]
}
