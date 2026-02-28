import fs from "fs"
import path from "path"
import matter from "gray-matter"

const docsDirectory = path.join(process.cwd(), "src/content/docs")

export function getDocBySlug(slugArray) {
    const slugPath = slugArray.join("/")
    const fullPath = path.join(docsDirectory, `${slugPath}.mdx`)

    if (!fs.existsSync(fullPath)) return null

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { content, data } = matter(fileContents)

    return {
        content,
        ...data,
    }
}