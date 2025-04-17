"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { allDocs } from "../lib/mock-docs"
import { ChevronRight } from "lucide-react"

// Define chapter structure
const chapters = [
  {
    title: "Getting Started",
    items: ["introduction", "quick-start"],
  },
  {
    title: "Reference",
    items: ["node-reference"],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  // Sort docs by order
  const docs = allDocs.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <div className="sticky top-24">
      <nav className="gradient-card bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">Documentation</h3>

        <div className="space-y-8">
          {chapters.map((chapter, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {chapter.title}
              </h4>
              <ul className="space-y-1 pl-1">
                {chapter.items.map((slug) => {
                  const doc = docs.find((d) => d._raw.flattenedPath === slug)
                  if (!doc) return null

                  const path = `/docs/${doc._raw.flattenedPath}`
                  const isActive = pathname === path

                  return (
                    <li key={doc._id} className="relative">
                      <Link
                        href={path}
                        className={`group flex items-center py-2 px-3 rounded-md transition-colors ${
                          isActive
                            ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-500"
                        }`}
                      >
                        <span className="flex-1">{doc.title}</span>
                        <ChevronRight
                          className={`w-4 h-4 opacity-0 -translate-x-2 transition-all ${
                            isActive ? "opacity-100 translate-x-0" : "group-hover:opacity-70 group-hover:translate-x-0"
                          }`}
                        />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="https://github.com/louistrue/ifc-flow-map"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
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
            View on GitHub
          </Link>
        </div>
      </nav>
    </div>
  )
}
