"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FaGoogle, FaGithub, FaFacebookF, FaApple } from "react-icons/fa";
import Logo from "../../../../public/images/igm.png";
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Yaha backend API call hoga later
        setTimeout(() => {
            setLoading(false);
            router.push("/app/dashboard"); // 👈 redirect
        }, 1000);
    };

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#020617] px-6 overflow-hidden">

            {/* Glow Effects */}
            <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
            <div className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full bottom-[-80px] right-[-80px]" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:26px_26px]" />

            <div className="relative w-full max-w-sm backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

                {/* Logo */}
                <div className="flex justify-center mb-2">
                    <Image src={Logo} height={55} alt="SaralDB Logo" />
                </div>

                <h2 className="text-3xl font-semibold text-center text-white mb-1 tracking-wide">
                    Welcome Back
                </h2>

                <p className="text-gray-300 text-center mb-8 text-sm">
                    Login to your SaralDB account
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Email */}
                    <div className="relative group">
                        <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 
               text-gray-400 z-10
               group-focus-within:text-blue-400 transition duration-300"
                        />

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Email Address"
                            className="dark-input w-full pl-12 pr-4 py-2 rounded-2xl
               border border-white/20 text-white placeholder-gray-400
               focus:outline-none transition-all duration-300"
                        />
                    </div>
                    {/* Password */}
                    <div className="relative group">
                        <Lock
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 
               text-gray-400 z-10
               group-focus-within:text-blue-400 transition duration-300"
                        />

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            required
                            placeholder="Password"
                            className="dark-input w-full pl-12 pr-12 py-2 rounded-2xl
               border border-white/20 text-white placeholder-gray-400
               focus:outline-none transition-all duration-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 
               text-gray-400 hover:text-white transition z-10"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    <div className="text-left">
                        <Link
                            href="/forgot-password"
                            className="text-sm text-blue-400 hover:text-blue-300 transition"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 rounded-2xl cursor-pointer bg-blue-500 border border-gray-950 text-white font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-8">
                    <div className="flex-1 h-px bg-white/10"></div>
                    <span className="px-4 text-gray-400 text-sm">OR</span>
                    <div className="flex-1 h-px bg-white/10"></div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-4 gap-2">
                    <button className="flex cursor-pointer items-center justify-center py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-white">
                        <FaGoogle className="text-red-500" />
                    </button>

                    <button className="flex items-center cursor-pointer justify-center py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-white">
                        <FaGithub />
                    </button>

                    <button className="flex items-center cursor-pointer justify-center py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-white">
                        <FaFacebookF className="text-blue-500" />
                    </button>

                    <button className="flex items-center cursor-pointer justify-center py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-white">
                        <FaApple />
                    </button>
                </div>

                <p className="text-center text-sm text-gray-400 mt-8">
                    Don’t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                        Register now
                    </Link>
                </p>

            </div>
        </div>
    );
}