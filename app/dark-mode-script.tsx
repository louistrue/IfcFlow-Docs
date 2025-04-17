"use client"

import { useEffect } from "react"

export function DarkModeScript() {
  useEffect(() => {
    // This script runs on the client after hydration
    document.documentElement.classList.add("dark")
  }, [])

  // This script runs immediately during SSR and client-side rendering
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          })();
        `,
      }}
    />
  )
}
