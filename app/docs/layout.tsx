import type React from "react"
import { Sidebar } from "../../components/Sidebar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:grid lg:grid-cols-[240px_1fr] gap-8">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      {children}
    </div>
  )
}
