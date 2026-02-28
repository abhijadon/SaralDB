import { getDocBySlug } from "../../../lib/docs"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"

export async function generateMetadata({ params }) {
    const resolvedParams = await params
    const slugArray = resolvedParams.slug || []

    const doc = getDocBySlug(slugArray)
    if (!doc) return {}

    return {
        title: doc.title,
        description: doc.description,
    }
}

export default async function DocPage({ params }) {
    const resolvedParams = await params
    const slugArray = resolvedParams.slug || []

    if (!slugArray.length) return notFound()

    const doc = getDocBySlug(slugArray)
    if (!doc) return notFound()

    const { content } = await compileMDX({
        source: doc.content,
    })

    return (
        <div className="max-w-4xl mx-auto py-20 px-6 text-white prose prose-invert">
            <h1>{doc.title}</h1>
            {content}
        </div>
    )
}