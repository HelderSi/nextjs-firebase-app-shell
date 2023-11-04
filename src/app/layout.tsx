import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from "@/app/context/auth-provider"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Firebase Starter App',
  description: 'An App starter project that has NextJS with Firebase set up beforehand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html >
  )
}
