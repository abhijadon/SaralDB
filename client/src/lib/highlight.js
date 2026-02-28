import { createHighlighter } from "shiki"

let highlighter

export async function highlight(code, lang = "ts") {
    if (!highlighter) {
        highlighter = await createHighlighter({
            themes: ["material-theme-ocean"],
            langs: ["ts", "js"],
        })
    }

    return highlighter.codeToHtml(code, {
        lang,
        theme: "material-theme-ocean",
    })
}