export default function Loading() {
  return (
    <div className="lg:grid lg:grid-cols-[240px_1fr] gap-8">
      <div className="hidden lg:block">
        <div className="sticky top-24 pr-4 space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg w-3/4 animate-pulse" />

        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          ))}
        </div>

        <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />

        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
