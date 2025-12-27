type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function KeywordPage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <div>
      <h1>Keyword Page</h1>
      <p>Slug: {resolvedParams.slug}</p>
    </div>
  );
}
