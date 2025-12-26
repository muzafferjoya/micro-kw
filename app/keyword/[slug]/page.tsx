type PageProps = {
  params: {
    slug: string
  }
}

export default function KeywordPage({ params }: PageProps) {
  return (
    <div>
      <h1>Keyword Page</h1>
      <p>Slug: {params.slug}</p>
    </div>
  )
}
