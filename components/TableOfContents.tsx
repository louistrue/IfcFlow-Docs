"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

type Heading = {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const pathname = usePathname()

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3, h4")).filter((element) => element.id)

    const newHeadings = headingElements.map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: Number(element.tagName.substring(1)),
    }))

    setHeadings(newHeadings)
  }, [pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    const headingElements = document.querySelectorAll("h2, h3, h4")
    headingElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      headingElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="hidden xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pl-8 pr-4">
        <h4 className="text-sm font-semibold mb-4 text-gray-900 dark:text-gray-100">On This Page</h4>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={heading.id} className={`${heading.level === 2 ? "pl-0" : heading.level === 3 ? "pl-4" : "pl-8"}`}>
              <Link
                href={`#${heading.id}`}
                className={`block py-1 ${
                  activeId === heading.id
                    ? "text-primary-500 font-medium"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                {heading.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
