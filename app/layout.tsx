import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  verification: {
    google: "5Ac2VpoA6NiVCiEg3thCU12IydBb8G70E",
  },
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
