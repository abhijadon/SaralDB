import Link from "next/link"

export default function DocsLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-[#030712] text-white">

            {/* Docs Topbar */}
            <div className="h-16 border-b border-white/10 flex items-center px-6">
                <Link href="/" className="font-semibold text-lg">
                    SaralDB Docs
                </Link>
            </div>

            <div className="flex flex-1">

                {/* Sidebar */}
                <aside className="w-64 border-r border-white/10 p-6 hidden md:block">
                    <p className="text-gray-400 text-sm mb-4">Getting Started</p>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/docs/getting-started/introduction">
                                Introduction
                            </Link>
                        </li>
                    </ul>
                </aside>

                {/* Content */}
                <main className="flex-1 p-10">
                    {children}
                </main>

            </div>

            {/* Docs Footer */}
            <div className="border-t border-white/10 p-6 text-sm text-gray-400">
                © 2026 SaralDB Docs
            </div>

        </div>
    )
}