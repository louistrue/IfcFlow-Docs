import { notFound } from "next/navigation"
import { allDocs } from "../../../lib/mock-docs"
import { Mdx } from "../../../components/Mdx"

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const slug = params.slug.join("/")
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === slug)

  if (!doc) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
  }

  return {
    title: doc.title,
    description: doc.description || `Learn about ${doc.title} in IFC Flow Map`,
  }
}

export default function DocPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join("/")
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === slug)

  if (!doc) notFound()

  return (
    <article className="gradient-card bg-white dark:bg-gray-900 p-6 md:p-8">
      <Mdx code={doc.body.code} />
    </article>
  )
}
