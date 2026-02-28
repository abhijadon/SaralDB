"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full mt-24 relative"
        >
            {/* Gradient Top Border */}
            {/* Main Footer */}
            <div className="bg-white/10 backdrop-blur-3xl border-t border-white/20 text-white">

                <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            🚀 SaralDB
                        </h2>
                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            High-performance document database built in Rust.
                            Designed for modern SaaS, AI workloads, and scalable platforms.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/abhijadon/SaralDB"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center 
  bg-white/20 rounded-full 
  hover:scale-110 
  hover:bg-gray-900 
  transition-all duration-300"
                            >
                                <FaGithub className="text-white" />
                            </a>
                            <a
                                href="https://discord.gg/xydepExn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center 
  bg-white/20 rounded-full 
  hover:scale-110 
  hover:bg-[#5865F2] 
  hover:shadow-[0_0_15px_rgba(88,101,242,0.8)] 
  transition-all duration-300"
                            >
                                <FaDiscord className="text-white" />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center 
  bg-white/20 rounded-full 
  hover:scale-110 
  bg-gradient-to-tr 
  hover:from-purple-500 
  hover:via-pink-500 
  hover:to-yellow-400 
  transition-all duration-300"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-semibold mb-6 text-white text-lg">
                            Products
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="hover:text-white transition cursor-pointer">
                                SaralDB Core
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                SaralDB Cloud
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                SaralDB AI
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Analytics
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold mb-6 text-white text-lg">
                            Resources
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="hover:text-white transition cursor-pointer">
                                Documentation
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                API Reference
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Tutorials
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Blog
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold mb-6 text-white text-lg">
                            Stay Updated
                        </h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Get product updates and engineering insights.
                        </p>

                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 rounded-xl bg-white/20 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            <button className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 shadow">
                    <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>
                            © {new Date().getFullYear()} SaralDB. All rights reserved.
                        </p>

                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-white transition cursor-pointer">
                                Privacy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition cursor-pointer">
                                Terms
                            </Link>
                            <span className="text-gray-500">
                                Built in 🇮🇳 India
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </motion.footer>
    );
}