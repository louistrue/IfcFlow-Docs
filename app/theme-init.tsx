"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ThemeInitializer() {
  const { setTheme } = useTheme()

  useEffect(() => {
    // Get the saved theme from localStorage
    const savedTheme = localStorage.getItem("ifc-flow-theme")

    // Only set the theme if it exists in localStorage
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Default to dark if no preference is saved
      setTheme("dark")
    }
  }, [setTheme])

  return null
}
