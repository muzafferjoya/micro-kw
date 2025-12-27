"use client"

import { useState } from "react"
import { getKeywords } from "./actions/keywords"
import Link from "next/link"



export default function Home() {

  const [query, setQuery] = useState("")
  const [country, setCountry] = useState("india")
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    // SIMPLE DAILY LIMIT (5)
    const today = new Date().toDateString()
    const used = Number(localStorage.getItem(today) || "0")

    if (used >= 5) {
      alert("Daily free limit reached (5 searches).")
      return
    }

    localStorage.setItem(today, String(used + 1))

    setLoading(true)
    const res = await getKeywords(query, country)
    setData(res)
    setLoading(false)
  }

  const downloadCSV = () => {
    if (!data) return

    const rows = [
      ["Type", "Keyword"],
      ...data.base.map((k: string) => ["Keyword", k]),
      ...data.questions.map((k: string) => ["Question", k]),
    ]

    const csv = rows.map(r => r.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "keywords.csv"
    a.click()
  }

  return (
    <main className="max-w-2xl mx-auto p-10">
      <h1 className="text-3xl font-bold">
        Free Keyword Research Tool
      </h1>

      <p className="text-gray-600 mt-2">
        Simple keyword ideas for small businesses.
      </p>

      <input
        className="border p-3 w-full mt-6 rounded"
        placeholder="e.g. bakery business"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <select
        className="border p-3 w-full mt-3 rounded"
        value={country}
        onChange={e => setCountry(e.target.value)}
      >
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
      </select>

      <button
        onClick={handleSearch}
        className="bg-black text-white px-6 py-3 rounded mt-4"
      >
        {loading ? "Searching..." : "Find Keywords"}
      </button>

      {data && (
        <div className="mt-10">
          <h2 className="font-semibold text-xl mb-2">
            Keyword Ideas
          </h2>

          <ul className="list-disc ml-6">
            {data.base.map((k: string) => (
              <li key={k}>{k}</li>
            ))}
          </ul>

          <h2 className="font-semibold text-xl mt-6 mb-2">
            Questions
          </h2>

          <ul className="list-disc ml-6">
            {data.questions.map((k: string) => (
              <li key={k}>{k}</li>
            ))}
          </ul>

          <button
            onClick={downloadCSV}
            className="border px-4 py-2 mt-6"
          >
            Download CSV
          </button>
        </div>
      )}
      <section className="mt-16 text-sm text-gray-600">
  <h2 className="font-semibold text-lg">
    Free Keyword Research Tool for Small Businesses
  </h2>

  <p className="mt-2">
    This free keyword research tool helps small business owners
    find long-tail, low-competition keyword ideas using real
    Google search suggestions. No paid SEO tools required.
  </p>

  <p className="mt-10 text-sm">
  <a href="/html-sitemap" className="underline">
    View full keyword sitemap
  </a>
</p>

  
  
</section>

<section style={{ marginTop: 60 }}>
  <h2>Popular Keyword Pages</h2>
  <ul>
  <li><Link href="/keyword/bakery-business">Bakery Business Keywords</Link></li>
  <li><Link href="/keyword/yoga-studio">Yoga Studio Keywords</Link></li>
  <li><Link href="/keyword/online-tuition">Online Tuition Keywords</Link></li>

  </ul>
</section>


    </main>
  )
}


