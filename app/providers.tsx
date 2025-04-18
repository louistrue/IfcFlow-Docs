"use client"

import { ThemeProvider } from "next-themes"
import type React from "react"
import { ThemeInitializer } from "./theme-init"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="ifc-flow-theme" // Use a specific storage key
    >
      <ThemeInitializer />
      {children}
    </ThemeProvider>
  )
}
