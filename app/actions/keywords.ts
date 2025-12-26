"use server"

type Result = {
  base: string[]
  questions: string[]
}

async function fetchSuggest(query: string): Promise<string[]> {
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    cache: "no-store",
  })

  const data = await res.json()
  return data[1] || []
}

export async function getKeywords(
  query: string,
  country: string
): Promise<Result> {
  if (!query || query.length < 2) {
    return { base: [], questions: [] }
  }

  const localizedQuery = `${query} in ${country}`

  const base = await fetchSuggest(localizedQuery)

  const prefixes = ["how", "what", "why", "best", "near me"]
  let questions: string[] = []

  for (const p of prefixes) {
    const q = await fetchSuggest(`${p} ${localizedQuery}`)
    questions.push(...q)
  }

  return {
    base: Array.from(new Set(base)),
    questions: Array.from(new Set(questions)),
  }
}
