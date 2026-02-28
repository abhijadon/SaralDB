import Link from "next/link";

export const metadata = {
  title: "SaralDB Blog",
  description: "Latest updates and articles from SaralDB",
};

const blogs = [
  {
    title: "Getting Started with SaralDB",
    slug: "getting-started-with-saraldb",
    description: "Learn how to start using SaralDB step by step.",
  },
  {
    title: "Why SaralDB is Fast",
    slug: "why-saraldb-is-fast",
    description: "Understand performance architecture of SaralDB.",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#0b1120] min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            SaralDB Blog
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Engineering insights, product updates, and deep dives into SaralDB architecture.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group block p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-white/10 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
                {blog.title}
              </h2>

              <p className="text-gray-400 mb-6">
                {blog.description}
              </p>

              <span className="text-sm text-blue-400 group-hover:underline">
                Read Article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}