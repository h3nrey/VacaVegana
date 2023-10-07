import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Chewy } from 'next/font/google'
import { cookies } from 'next/headers'
import { User } from '@/lib/constants'
import { getUser } from '@/lib/api'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tokenObj = cookies().get("token")
  const userToken = tokenObj ? tokenObj.value : null
  const user: User | null = await getUser(userToken)

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${chewy.variable} font-sans`}>
        <Header user={user} />
        {children}
      </body>
    </html >
  )
}
