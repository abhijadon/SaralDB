"use client"

import { Settings, Bell } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DashboardHeader() {
    return (
        <header className="h-12 flex items-center justify-between px-6 border-b border-white/20 bg-[#0f172a]">

            {/* Logo */}
            <div className="flex items-center">
                <Image
                    src="/images/igm.png"
                    width={120}
                    height={25}
                    alt="SaralDB Logo"
                    priority
                />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 text-white">

                {/* Notification Icon */}
                <button className="relative hover:text-blue-400 transition cursor-pointer">
                    <Bell size={18} />
                    {/* Notification Badge */}
                    <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                        3
                    </span>
                </button>

                {/* Settings */}
                <Link href="/app/settings" className="hover:text-blue-400 transition">
                    <Settings size={18} />
                </Link>

                {/* Profile Avatar */}
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-white text-sm font-semibold hover:bg-white hover:text-black transition">
                    A
                </button>

            </div>
        </header>
    )
}