"use client"

import type React from "react"

import { useState } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"

export function Feedback() {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null)
  const [comment, setComment] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the feedback to your backend
    console.log("Feedback:", { type: feedback, comment })

    // For demo purposes, just show a success message
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="mt-12 p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900">
        <p className="text-center text-gray-700 dark:text-gray-300">Thank you for your feedback!</p>
      </div>
    )
  }

  return (
    <div className="mt-12 p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Was this page helpful?</h3>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setFeedback("positive")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${
            feedback === "positive"
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <ThumbsUp className="w-4 h-4" />
          Yes
        </button>

        <button
          onClick={() => setFeedback("negative")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${
            feedback === "negative"
              ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
              : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <ThumbsDown className="w-4 h-4" />
          No
        </button>
      </div>

      {feedback && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={
              feedback === "positive" ? "What did you like about this page?" : "How can we improve this page?"
            }
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 mb-3"
            rows={3}
          />

          <button type="submit" className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  )
}
