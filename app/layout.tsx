import "./globals.css"

export const metadata = {
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
