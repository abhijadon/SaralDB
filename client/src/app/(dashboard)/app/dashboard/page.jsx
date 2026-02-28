"use client";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#0b1120] text-white p-8">
            <h1 className="text-3xl font-bold mb-6">SaralDB Dashboard</h1>

            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-lg font-semibold">Collections</h2>
                    <p className="text-gray-400 mt-2">users, projects, logs</p>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-lg font-semibold">Storage Buckets</h2>
                    <p className="text-gray-400 mt-2">images, backups</p>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-lg font-semibold">Analytics</h2>
                    <p className="text-gray-400 mt-2">Requests: 2,341</p>
                </div>
            </div>
        </div>
    );
}