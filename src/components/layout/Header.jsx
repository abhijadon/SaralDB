"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/app/theme/themetoggle";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`
        fixed left-0 w-full flex justify-center z-50 
        transition-all duration-500 ease-in-out
        ${scrolled ? "top-0 px-0" : "top-8 px-6"}
      `}
        >
            <header
                className={`
          w-full max-w-6xl
          backdrop-blur-4xl
          bg-white/30 dark:bg-white/30
          border border-white/20 dark:border-white/10
          shadow-xl
          flex items-center justify-between
          transition-all duration-500
          px-4 py-1 rounded-full
        `}
            >
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="bg-blue-700 px-3 py-0.5 rounded-full text-white leading-relaxed cursor-pointer">
                        🚀 SaralDB
                    </Link>
                    <nav className="hidden lg:flex items-center gap-4 text-sm text-white dark:text-text-mutedDark">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="hover:text-white transition hover:bg-white/30 hover:scale-100 duration-75 rounded-full px-2 py-1 flex items-center">
                                Docs <MdOutlineKeyboardArrowDown size={18} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white/20 backdrop-blur-xl border border-white/20 text-white">
                                <DropdownMenuItem className="hover:bg-white/30 transition cursor-pointer">
                                    AI-Powered Search
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-white/30 transition cursor-pointer">
                                    Vector Database
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-white/30 transition cursor-pointer">
                                    Knowledge Graphs
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-white/30 transition cursor-pointer">
                                    Data Analytics
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="#" className="hover:text-white transition hover:bg-white/30 hover:scale-100 duration-75 rounded-full px-2 py-1">
                            Products
                        </Link>
                        <Link href="#" className="hover:text-white transition hover:bg-white/30 hover:scale-100 duration-75 rounded-full px-2 py-1">
                            Resources
                        </Link>
                        <Link href="/pricing" className="hover:text-white transition hover:bg-white/30 hover:scale-100 duration-75 rounded-full px-2 py-1">
                            Pricing
                        </Link>
                        <Link href="#" className="hover:text-white transition hover:bg-white/30 hover:scale-100 duration-75 rounded-full px-2 py-1">
                            Why SaralDB
                        </Link>
                    </nav>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2">
                    <TooltipProvider>
                        <div className="hidden lg:flex items-center gap-3">

                            {/* Discord */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="#"
                                        className="
                      flex items-center justify-center
                      w-8 h-8
                      backdrop-blur-xl
                      bg-white/30 dark:bg-white/10
                      border border-white/20
                      rounded-full
                      shadow-lg
                      hover:scale-110
                      transition-all duration-300
                    "
                                    >
                                        <FaDiscord
                                            className="text-black dark:text-white"
                                            size={16}
                                        />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    Discord
                                </TooltipContent>
                            </Tooltip>

                            {/* GitHub */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="#"
                                        className="
                      flex items-center justify-center
                      w-8 h-8
                      backdrop-blur-xl
                      bg-white/30 dark:bg-white/10
                      border border-white/20
                      rounded-full
                      shadow-lg
                      hover:scale-110
                      transition-all duration-300
                    "
                                    >
                                        <FaGithub
                                            className="text-black dark:text-white"
                                            size={16}
                                        />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    GitHub
                                </TooltipContent>
                            </Tooltip>

                            {/* Buttons */}
                            <Link href="/login" className="cursor-pointer text-sm px-3 py-1 rounded-full border border-border-light dark:border-border-dark hover:bg-white/40 dark:hover:bg-white/10 transition text-white">
                                Sign In
                            </Link>

                            <button className="cursor-pointer bg-blue-700 text-white text-sm px-3 py-1.5 rounded-full hover:bg-blue-800 transition">
                                Try SaralDB
                            </button>
                        </div>
                    </TooltipProvider>

                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>
        </div>
    );
}