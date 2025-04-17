"use client"

import { useState, useEffect, useRef } from "react"
import { SearchIcon, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { allDocs } from "contentlayer/generated"

type SearchResult = {
  title: string
  excerpt: string
  slug: string
}

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault()
        setIsOpen(true)
      }
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }

    const searchResults = allDocs
      .filter((doc) => {
        const content = doc.body.raw.toLowerCase()
        return doc.title.toLowerCase().includes(query.toLowerCase()) || content.includes(query.toLowerCase())
      })
      .map((doc) => {
        const content = doc.body.raw
        let excerpt = ""
        const queryIndex = content.toLowerCase().indexOf(query.toLowerCase())
        if (queryIndex !== -1) {
          const start = Math.max(0, queryIndex - 40)
          const end = Math.min(content.length, queryIndex + query.length + 40)
          excerpt = (start > 0 ? "..." : "") + content.slice(start, end) + (end < content.length ? "..." : "")
        } else {
          excerpt = content.slice(0, 80) + "..."
        }

        return {
          title: doc.title,
          excerpt,
          slug: doc._raw.flattenedPath,
        }
      })

    setResults(searchResults)
  }, [query])

  const handleResultClick = (slug: string) => {
    router.push(`/docs/${slug}`)
    setIsOpen(false)
    setQuery("")
  }

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
      >
        <SearchIcon className="w-4 h-4" />
        <span>Search...</span>
        <span className="hidden md:inline ml-2 text-xs border rounded px-1 py-0.5 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          ⌘K
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-xl overflow-hidden">
            <div className="flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
              <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search documentation..."
                className="w-full px-4 py-3 text-gray-900 dark:text-gray-100 bg-transparent border-0 focus:outline-none focus:ring-0"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {results.length > 0 ? (
                <ul className="py-2">
                  {results.map((result, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleResultClick(result.slug)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{result.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{result.excerpt}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : query ? (
                <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                  No results found for &quot;{query}&quot;
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">Type to start searching...</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
