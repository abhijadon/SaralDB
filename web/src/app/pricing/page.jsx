"use client";

import React from "react";
import { Check } from "lucide-react";

export default function Price() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 to-blue-800 text-white px-6 py-20">
            {/* Heading */}
            <div className="text-center max-w-2xl mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                    SaralDB Pricing Plans
                </h2>
                <p className="text-white tracking-normal leading-relaxed">
                    Simple plans. Transparent pricing. Built to scale with your needs.
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
                {/* Starter */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 flex flex-col justify-between hover:scale-105 transition duration-300">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                        <p className="text-blue-200 mb-6">For small AI projects</p>

                        <div className="text-4xl font-bold mb-6">
                            ₹0 <span className="text-lg font-normal">/month</span>
                        </div>

                        <ul className="space-y-3 text-blue-100">
                            <li className="flex items-center gap-2">
                                <Check size={18} /> 5 GB Storage
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={18} /> Basic AI Queries
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={18} /> Community Support
                            </li>
                        </ul>
                    </div>

                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 py-2 rounded-full transition cursor-pointer">
                        Get Started
                    </button>
                </div>

                {/* Pro (Most Popular) */}
                <div className="relative backdrop-blur-xl bg-white/20 border border-blue-400 rounded-2xl p-8 flex flex-col justify-between hover:scale-105 duration-300 shadow-2xl">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
                        Most Popular
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                        <p className="text-blue-200 mb-6">For growing AI startups</p>

                        <div className="text-4xl font-bold mb-6">
                            ₹1,999 <span className="text-lg font-normal">/month</span>
                        </div>

                        <ul className="space-y-3 text-blue-100">
                            <li className="flex items-center gap-2">
                                <Check size={18} /> 100 GB Storage
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={18} /> High-Speed AI Queries
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={18} /> Priority Support
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={18} /> Auto Scaling
                            </li>
                        </ul>
                    </div>

                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 py-2 rounded-full transition cursor-pointer">
                        Upgrade Now
                    </button>
                </div>

                {/* Enterprise */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 flex flex-col justify-between hover:scale-105 transition duration-300">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                        <p className="text-blue-200 mb-6">For large AI systems</p>

                        <div className="text-4xl font-bold mb-6">
                            Custom
                        </div>
                        <ul className="space-y-3 text-blue-100">
                            <li className="flex items-center gap-2">
                                <Check size={18} /> Unlimited Storage
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={18} /> Dedicated Cluster
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={18} /> 24/7 Support
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={18} /> Custom Integrations
                            </li>
                        </ul>
                    </div>

                    <button className="mt-8 bg-white text-blue-700 hover:bg-gray-100 py-2 rounded-full transition cursor-pointer">
                        Contact Sales
                    </button>
                </div>

            </div>
        </section>
    );
}