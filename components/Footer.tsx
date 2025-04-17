import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link href="https://www.lt.plus" target="_blank" rel="noopener" className="flex items-center gap-2">
              <div className="w-10 h-10 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LT%2BBlackOnWhite%20%28Custom%29-btOxBiXUoqLERK52HteeD6UBkaZ4ti.png"
                  alt="LT+ Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300">LT+</span>
            </Link>
          </div>

          <div className="text-center md:text-right text-sm text-gray-500 dark:text-gray-400">
            <p>
              © 2025{" "}
              <Link href="https://www.lt.plus" className="hover:text-primary-500 transition-colors">
                LT+
              </Link>{" "}
              — Built with Next.js & Tailwind CSS
            </p>
            <p className="mt-1">Digital Planning. Sustainable Construction.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
