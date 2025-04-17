import Link from "next/link"
import { ArrowRight, FileCode, Book, Code } from "lucide-react"

export default function HomePage() {
  return (
    <section className="flex flex-col items-center text-center">
      <h1 className="text-center">IFC Flow Map</h1>

      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        A visual node‑based tool for exploring & automating BIM data workflows.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <Link
          href="/docs/introduction"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="https://github.com/louistrue/ifc-flow-map"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          GitHub
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="gradient-border">
          <div className="bg-white dark:bg-gray-900 p-6 h-full flex flex-col items-center text-center">
            <FileCode className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Visual Workflows</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create data processing pipelines with an intuitive drag-and-drop interface.
            </p>
          </div>
        </div>

        <div className="gradient-border">
          <div className="bg-white dark:bg-gray-900 p-6 h-full flex flex-col items-center text-center">
            <Book className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">BIM Integration</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Seamlessly work with IFC files and BIM data directly in your browser.
            </p>
          </div>
        </div>

        <div className="gradient-border">
          <div className="bg-white dark:bg-gray-900 p-6 h-full flex flex-col items-center text-center">
            <Code className="w-10 h-10 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Extensible</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create custom nodes and extend functionality with JavaScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
