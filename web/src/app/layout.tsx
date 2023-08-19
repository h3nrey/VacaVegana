import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Chewy } from 'next/font/google'

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ['latin'],
  variable: "--font-poppins"
})
const chewy = Chewy({
  weight: "400",
  subsets: ['latin'],
  variable: "--font-chewy"
})

export const metadata: Metadata = {
  title: 'Vaca vegana',
  description: 'Created by Pedro Novaes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${chewy.variable}`}>{children}</body>
    </html >
  )
}
