"use client"

import { useState, useEffect } from "react"
import { Check, Copy } from "lucide-react"

interface CodeCopyButtonProps {
  code: string
}

export function CodeCopyButton({ code }: CodeCopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isCopied])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
    } catch (error) {
      console.error("Failed to copy code:", error)
    }
  }

  return (
    <button
      onClick={copyToClipboard}
      className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
      aria-label="Copy code to clipboard"
    >
      {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  )
}
