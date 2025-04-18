"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Toggle function that explicitly sets the theme
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return (
      <button
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 w-10 h-10 flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <span className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></span>
      </button>
    )
  }

  // Use the actual theme value for rendering
  const currentTheme = theme === "system" ? resolvedTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-gray-700 gradient-border-sm"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <div className="relative">
        <Sun
          className={`w-5 h-5 text-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ${
            isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`w-5 h-5 text-indigo-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  )
}
