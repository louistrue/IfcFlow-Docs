import type React from "react"
import "../styles/globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Providers } from "./providers"

export const metadata = {
  title: {
    default: "IFC Flow Map Docs",
    template: "%s | IFC Flow Map Docs",
  },
  description: "Elegant, interactive documentation for the IFC Flow Map project.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F4C81" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
    generator: 'v0.dev'
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen flex flex-col font-sans antialiased">
        {/* Gradient top border */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <Providers>
          <Navbar />

          <main className="flex-1 w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-8 prose dark:prose-invert max-w-3xl">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
