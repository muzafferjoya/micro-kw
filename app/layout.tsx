import "./globals.css"

export const metadata = {
  title: "Free Keyword Research Tool for Small Businesses",
  description:
    "Find long-tail keyword ideas without expensive SEO tools.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
