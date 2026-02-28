const blogs = {
  "getting-started-with-saraldb": {
    title: "Getting Started with SaralDB",
    content:
      "This is a static blog post about getting started with SaralDB. You can expand this content later with real markdown or database-driven content."
  },
  "why-saraldb-is-fast": {
    title: "Why SaralDB is Fast",
    content:
      "This article explains why SaralDB is optimized for speed. Built with Rust, designed for performance, and optimized for modern workloads."
  }
};

export function generateStaticParams() {
  return Object.keys(blogs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs[slug];

  return {
    title: blog?.title || "Blog",
    description: blog?.content?.slice(0, 140) || "",
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = blogs[slug];

  if (!blog) {
    return (
      <div className="bg-[#0b1120] min-h-screen text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#0b1120] min-h-screen text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 leading-tight">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="text-sm text-gray-400 mb-10">
          Published by SaralDB • 5 min read
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none text-gray-300 leading-8">
          <p>{blog.content}</p>

          <h2 className="mt-10 text-2xl font-semibold text-white">
            Why It Matters
          </h2>

          <p>
            SaralDB is built to deliver performance, scalability, and reliability.
            As your applications grow, SaralDB grows with you.
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-white">
            What’s Next?
          </h2>

          <p>
            Stay tuned for more engineering deep dives and product updates.
          </p>
        </article>

      </div>
    </div>
  );
}