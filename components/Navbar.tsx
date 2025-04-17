"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { allDocs } from "../lib/mock-docs"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle" // Add this import

// Update the navbar to include ThemeToggle in the desktop and mobile views
export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Sort docs by order
  const docs = allDocs.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <header className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur-md dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex items-center justify-between h-16">
        <Link href="/" className="text-xl md:text-2xl font-bold">
          IFC Flow Map
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/docs/introduction" className="hover:text-primary-500 transition-colors">
            Docs
          </Link>
          <Link
            href="https://github.com/louistrue/ifc-flow-map"
            target="_blank"
            rel="noopener"
            className="hover:text-primary-500 transition-colors flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            GitHub
          </Link>
          <ThemeToggle /> {/* Add the ThemeToggle component here */}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle /> {/* Add the ThemeToggle component for mobile */}
          <button onClick={() => setOpen(!open)} className="p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-4 pb-4">
          <div className="py-2 font-medium text-gray-900 dark:text-gray-100">Documentation</div>
          <ul className="pl-2 border-l border-gray-200 dark:border-gray-800 space-y-1 mb-4">
            {docs.map((doc) => {
              const path = `/docs/${doc._raw.flattenedPath}`
              const isActive = pathname === path

              return (
                <li key={doc._id}>
                  <Link
                    href={path}
                    className={`block py-1.5 px-2 rounded-md text-sm ${
                      isActive
                        ? "text-primary-600 dark:text-primary-400 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary-500"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {doc.title}
                  </Link>
                </li>
              )
            })}
          </ul>

          <Link
            href="https://github.com/louistrue/ifc-flow-map"
            target="_blank"
            rel="noopener"
            className="block py-2 hover:text-primary-500 transition-colors flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            GitHub
          </Link>
        </div>
      )}
    </header>
  )
}
