import Link from "next/link";
import CompanyStrip from "../Scroll/CompanyStrip";
import { highlight } from "../../lib/highlight";

export default async function Hero() {
    const code = `import saraldb from "saraldb"

await saraldb.tx()
  .flow(async tx => {

    const course = await tx.courses.id(courseId)

    const duplicate = await tx.leads
      .when(l =>
        l.email === email ||
        l.phone === formattedPhone
      )

    if (duplicate?.course?.category === course.category) {
      throw new Error("Duplicate lead category")
    }

    const stage = await tx.stages.when("New Leads")

    const lead = await tx.leads.create({
      ...req.body,
      phone: formattedPhone,
      stage: stage.id
    })

    await tx.leadHistory.create({
      lead: lead.id,
      type: "created"
    })

  })
  .commit()`;

    const highlighted = await highlight(code, "ts");

    return (
        <section className="relative w-full min-h-screen bg-gray-950 overflow-hidden">

            {/* Blue Glow Background */}
            <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
                <div className="w-[900px] h-[900px] bg-blue-600/20 blur-[160px] rounded-full -top-40 absolute"></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:26px_26px]"></div>

            {/* HERO SECTION */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div>
                    <p className="text-blue-400 text-sm uppercase tracking-wider mb-4">
                        Flow-Based Unified Data Engine
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                        Everything Is a Flow.
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
                        SaralDB unifies document storage, in-memory performance, and event streaming
                        under a single abstraction. No Redis. No Kafka. No fragmented systems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">

                        {/* External anchor allowed */}
                        <a
                            href="#features"
                            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white font-medium text-center shadow-lg shadow-blue-600/30"
                        >
                            Try SaralDB Free
                        </a>

                        {/* ✅ Internal navigation fixed */}
                        <Link
                            href="/docs"
                            className="border border-white/20 hover:bg-white/10 transition px-6 py-3 rounded-full text-white font-medium text-center"
                        >
                            View Documentation
                        </Link>

                    </div>
                </div>

                {/* RIGHT SIDE - CODE BLOCK */}
                <div className="bg-[#0b1220]/90 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-2xl h-80 overflow-y-auto">

                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>

                    <div
                        className="text-sm"
                        dangerouslySetInnerHTML={{ __html: highlighted }}
                    />

                </div>
            </div>

            {/* COMPANY STRIP */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-8">
                <CompanyStrip />
            </div>

            {/* WHY CHOOSE SECTION */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-16 pb-32">

                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Why Choose SaralDB?
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Designed for modern AI systems that demand performance and scale.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl transition duration-300 hover:border-blue-500/40 hover:shadow-blue-500/20 hover:shadow-xl cursor-pointer">
                        <h3 className="text-xl font-semibold text-white">
                            High Performance
                        </h3>
                        <p className="mt-3 text-gray-400">
                            Built in Rust for blazing-fast queries.
                        </p>
                    </div>

                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl transition duration-300 hover:border-blue-500/40 hover:shadow-blue-500/20 hover:shadow-xl cursor-pointer">
                        <h3 className="text-xl font-semibold text-white">
                            AI Ready
                        </h3>
                        <p className="mt-3 text-gray-400">
                            Optimized for vector search.
                        </p>
                    </div>

                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl transition duration-300 hover:border-blue-500/40 hover:shadow-blue-500/20 hover:shadow-xl cursor-pointer">
                        <h3 className="text-xl font-semibold text-white">
                            Scalable
                        </h3>
                        <p className="mt-3 text-gray-400">
                            Horizontal scaling without slowdown.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}