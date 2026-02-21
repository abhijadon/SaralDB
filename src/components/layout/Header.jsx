"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/app/theme/themetoggle";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false); // ✅ FIXED
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed left-0 w-full flex justify-center z-50 transition-all duration-500 ${scrolled ? "top-0 px-0" : "top-8 px-6"
                }`}
        >
            <header className="w-full max-w-7xl backdrop-blur-2xl bg-white/20 border border-white/20 shadow-xl flex items-center justify-between px-6 py-1 rounded-full transition-all duration-500">

                {/* LEFT */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="bg-blue-700 px-4 py-1 rounded-full text-white font-semibold"
                    >
                        🚀 SaralDB
                    </Link>

                    <nav className="hidden lg:flex items-center gap-6 text-sm text-white relative">

                        {/* PRODUCTS DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition">
                                Products
                                <motion.span
                                    animate={{ rotate: productsOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <MdOutlineKeyboardArrowDown size={18} />
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute top-10 left-0 w-[650px] bg-white/20 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6"
                                    >
                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">
                                                Database Platform
                                            </h4>

                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">SaralDB Core</p>
                                                    <p className="text-xs text-gray-200">
                                                        High-performance Rust database engine
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">SaralDB Cloud</p>
                                                    <p className="text-xs text-gray-200">
                                                        Fully managed scalable hosting
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">SaralDB AI</p>
                                                    <p className="text-xs text-gray-200">
                                                        Vector search & AI storage
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">
                                                Enterprise & Insights
                                            </h4>

                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">SaralDB Analytics</p>
                                                    <p className="text-xs text-gray-200">
                                                        Real-time dashboards & forecasting
                                                    </p>
                                                </li>

                                                <li className="p-2 rounded-xl hover:bg-white/20 transition cursor-pointer">
                                                    <p className="font-medium">SaralDB Security</p>
                                                    <p className="text-xs text-gray-200">
                                                        RBAC & multi-tenant control
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="#" className="hover:text-white transition">
                            Docs
                        </Link>

                        <Link href="#" className="hover:text-white transition">
                            Resources
                        </Link>

                        <Link href="/pricing" className="hover:text-white transition">
                            Pricing
                        </Link>

                        <Link href="#" className="hover:text-white transition">
                            Why SaralDB
                        </Link>
                    </nav>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">

                    {/* Desktop Icons */}
                    <div className="hidden lg:flex items-center gap-2">
                        <a
                            href="https://discord.gg/xydepExn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:scale-110 transition duration-300"
                        >
                            <FaDiscord size={16} />
                        </a>

                        <a
                            href="https://github.com/abhijadon/SaralDB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:scale-110 transition duration-300"
                        >
                            <FaGithub size={16} />
                        </a>

                        <Link
                            href="/login"
                            className="text-sm px-4 py-1 rounded-full border border-white/30 hover:bg-white/30 transition text-white duration-300 hover:scale-110"
                        >
                            Sign In
                        </Link>

                        <button className="bg-blue-700 px-4 py-1 rounded-full text-white hover:bg-blue-500 transition duration-300 cursor-pointer">
                            Try SaralDB
                        </button>   
                    </div>

                    <ThemeToggle />

                    {/* MOBILE BUTTON */}
                    <button
                        className="lg:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </header>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-20 w-full max-w-7xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-4 text-white text-lg">
                            <Link href="#">Products</Link>
                            <Link href="#">Docs</Link>
                            <Link href="#">Resources</Link>
                            <Link href="/pricing">Pricing</Link>
                            <Link href="#">Why SaralDB</Link>
                            <Link href="/login">Sign In</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}