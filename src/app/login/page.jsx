"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            alert("Login logic here");
        }, 1500);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-700 to-blue-900 px-6">

            <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 text-white">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-2">
                    Welcome Back
                </h2>
                <p className="text-blue-200 text-center mb-8">
                    Login to your SaralDB account
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div className="relative">
                        <Mail size={18} className="absolute left-3 top-3 text-blue-300" />
                        <input
                            type="email"
                            placeholder="Email address"
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-full bg-white/20 border border-white/30 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Lock size={18} className="absolute left-3 top-3 text-blue-300" />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-full bg-white/20 border border-white/30 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right text-sm text-blue-200">
                        <Link href="#" className="hover:text-white transition">
                            Forgot password?
                        </Link>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full font-medium transition"
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>

                </form>

                {/* Signup */}
                <p className="text-center text-sm text-blue-200 mt-6">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-white font-medium hover:underline">
                        Create one
                    </Link>
                </p>

            </div>

        </section>
    );
}