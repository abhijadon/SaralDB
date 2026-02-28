"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../public/images/igm.png";
import Image from "next/image";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed left-0 w-full flex justify-center z-50 transition-all duration-500 ${scrolled ? "top-0 px-0" : "top-8 px-6"}`}>
            <header className="h-12 w-full max-w-7xl backdrop-blur-2xl bg-white/20 border border-white/20 shadow-xl flex items-center justify-between px-4 py-2 rounded-full transition-all duration-500">

                {/* LEFT */}
                <div className="flex items-center gap-8">
                    <Link href="/">
                        <Image height={40} src={Logo} alt="saraldb logo" priority />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-2 text-sm text-white relative">

                        {/* PRODUCTS */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-2 py-1 rounded-full duration-300">
                                Products
                                <motion.span animate={{ rotate: productsOpen ? 180 : 0 }}>
                                    <MdOutlineKeyboardArrowDown size={18} />
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        className="absolute top-10 left-0 w-[650px] bg-white/20 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6"
                                    >
                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">Database Platform</h4>
                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/docs">SaralDB Core</Link>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/pricing">SaralDB Cloud</Link>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/docs">SaralDB AI</Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">Enterprise & Insights</h4>
                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/docs">SaralDB Analytics</Link>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/docs">SaralDB Security</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* RESOURCES */}
                        <div
                            className="relative"
                            onMouseEnter={() => setResourcesOpen(true)}
                            onMouseLeave={() => setResourcesOpen(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-2 py-1 rounded-full duration-300">
                                Resources
                                <motion.span animate={{ rotate: resourcesOpen ? 180 : 0 }}>
                                    <MdOutlineKeyboardArrowDown size={18} />
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {resourcesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        className="absolute top-10 left-0 w-[500px] bg-white/20 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6"
                                    >
                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">Learn</h4>
                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/docs">Documentation</Link>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/docs">API Reference</Link>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/docs">Tutorials</Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">Community</h4>
                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/blog">Blog</Link>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <a href="https://github.com/abhijadon/SaralDB" target="_blank">GitHub</a>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <a href="https://discord.gg/xydepExn" target="_blank">Discord</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* COMPANY */}
                        <div
                            className="relative"
                            onMouseEnter={() => setCompanyOpen(true)}
                            onMouseLeave={() => setCompanyOpen(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-2 py-1 rounded-full duration-300">
                                Company
                                <motion.span animate={{ rotate: companyOpen ? 180 : 0 }}>
                                    <MdOutlineKeyboardArrowDown size={18} />
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {companyOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        className="absolute top-10 left-0 w-[500px] bg-white/20 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6"
                                    >
                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">About SaralDB</h4>
                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/about">About Us</Link>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/careers">Careers</Link>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/press">Press</Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-4 text-white">Legal & Contact</h4>
                                            <ul className="space-y-3 text-sm text-white">
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/privacy">Privacy Policy</Link>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/terms">Terms of Service</Link>
                                                </li>
                                                <li className="p-2 rounded-xl hover:bg-white/20">
                                                    <Link href="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/docs" className="px-2 py-1 rounded-full hover:bg-white/20">Docs</Link>
                        <Link href="/pricing" className="px-2 py-1 rounded-full hover:bg-white/20">Pricing</Link>
                        <Link href="/why-saraldb" className="px-2 py-1 rounded-full hover:bg-white/20">Why SaralDB</Link>
                    </nav>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2">
                        <a href="https://discord.gg/xydepExn" target="_blank" className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
                            <FaDiscord size={16} />
                        </a>

                        <a href="https://github.com/abhijadon/SaralDB" target="_blank" className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
                            <FaGithub size={16} />
                        </a>

                        <Link href="/login" className="text-sm px-4 py-1 rounded-full border border-white/30 text-white">
                            Sign In
                        </Link>

                        <button className="bg-blue-700 px-4 py-1 rounded-full text-white">
                            Try SaralDB
                        </button>
                    </div>

                    <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </header>
        </div>
    );
}