"use client";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.35)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-700 via-blue-700 to-blue-700" />

            {/* Hero Content */}
            <div className="relative z-10 px-6 text-center max-w-4xl">

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                    Built for AI Workloads
                </h1>

                {/* Sub Heading */}
                <h2 className="mt-4 text-xl md:text-2xl font-semibold text-blue-200">
                    Handle Massive Data Without Slowing Down
                </h2>

                {/* Description */}
                <p className="mt-6 text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    Store AI datasets, process complex systems, and scale effortlessly —
                    all on a high-performance database designed to stay fast at any size.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-medium">
                        Start for free
                    </button>

                    <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition font-medium">
                        Visit documentation
                    </button>
                </div>

            </div>
        </section>
    );
}