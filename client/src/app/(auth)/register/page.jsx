"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import Logo from "../../../../public/images/igm.png";

export default function RegisterPage() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            alert("Register logic here");
        }, 1500);
    };

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#020617] px-6 overflow-hidden">

            {/* Background Glow Effects */}
            <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
            <div className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full bottom-[-80px] right-[-80px]" />

            <div className="relative w-full max-w-sm backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all duration-500">

                {/* Logo */}
                <div className="flex justify-center mb-2">
                    <Image src={Logo} height={55} alt="SaralDB Logo" />
                </div>

                {/* Heading */}
                <h2 className="text-3xl font-semibold text-center text-white mb-1 tracking-wide">
                    Create Account
                </h2>
                <p className="text-gray-300 text-center mb-8 text-sm">
                    Register your SaralDB account
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Full Name */}
                    <div className="relative group">
                        <User className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-400 transition" size={18} />
                        <input
                            type="text"
                            required
                            placeholder="Full Name"
                            className="w-full pl-12 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                        <Mail className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-400 transition" size={18} />
                        <input
                            type="email"
                            required
                            placeholder="Email Address"
                            className="w-full pl-12 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative group">
                        <Lock className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-400 transition" size={18} />
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Password"
                            className="w-full pl-12 pr-12 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-white transition"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative group">
                        <Lock className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-400 transition" size={18} />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            placeholder="Confirm Password"
                            className="w-full pl-12 pr-12 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-white transition"
                        >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 rounded-lg bg-blue-600 cursor-pointer text-white font-medium tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60"
                    >
                        {loading ? "Creating Account..." : "Register"}
                    </button>
                </form>

                {/* Login Redirect */}
                <p className="text-center text-sm text-gray-400 mt-8">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                        Sign In
                    </Link>
                </p>

            </div>
        </div>
    );
}