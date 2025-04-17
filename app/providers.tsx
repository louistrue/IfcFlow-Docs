"use client"

import { ThemeProvider } from "next-themes"
import type React from "react"
import { DarkModeScript } from "./dark-mode-script"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DarkModeScript />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
    </>
  )
}
