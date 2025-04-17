import type React from "react"
import { CodeCopyButton } from "./CodeCopyButton"

export function CodeBlock(props: React.HTMLAttributes<HTMLPreElement>) {
  const code = props.children?.toString() || ""

  return (
    <div className="relative my-4">
      <pre {...props} className="rounded-xl bg-gray-900 text-gray-100 overflow-x-auto p-4 text-sm" />
      <CodeCopyButton code={code} />
    </div>
  )
}
