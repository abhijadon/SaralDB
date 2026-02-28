import nextMDX from "@next/mdx"

const withMDX = nextMDX({
  extension: /\.mdx?$/,
})

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"],
}

export default withMDX(nextConfig)