export default function Privacy() {
    return (
        <div className="min-h-screen bg-background-light text-white px-6 py-16">
            <div className="max-w-4xl mx-auto space-y-10">

                <h1 className="text-4xl font-bold text-center">
                    Privacy Policy
                </h1>

                <p className="text-gray-300 text-center">
                    Last updated: {new Date().getFullYear()}
                </p>

                {/* Introduction */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">1. Introduction</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Welcome to SaralDB. We respect your privacy and are committed to protecting
                        your personal data. This Privacy Policy explains how we collect, use,
                        and safeguard your information when you use our platform.
                    </p>
                </section>

                {/* Data We Collect */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Account information (name, email, login details)</li>
                        <li>Usage data (API requests, logs, analytics)</li>
                        <li>Technical information (IP address, browser type, device data)</li>
                        <li>Database configuration details provided by you</li>
                    </ul>
                </section>

                {/* How We Use */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">3. How We Use Your Data</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We use your information to operate and improve SaralDB services,
                        enhance security, provide customer support, and ensure system stability.
                    </p>
                </section>

                {/* Data Security */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">4. Data Security</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We implement modern security practices including encryption,
                        role-based access control (RBAC), audit logging, and
                        secure infrastructure to protect your data.
                    </p>
                </section>

                {/* Third Party */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">5. Third-Party Services</h2>
                    <p className="text-gray-300 leading-relaxed">
                        SaralDB may use third-party services such as cloud providers,
                        analytics tools, or monitoring platforms to ensure optimal performance.
                        These services comply with industry-standard data protection policies.
                    </p>
                </section>

                {/* User Rights */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">6. Your Rights</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Access your personal data</li>
                        <li>Request correction or deletion</li>
                        <li>Withdraw consent at any time</li>
                        <li>Export your stored data</li>
                    </ul>
                </section>

                {/* Contact */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">7. Contact Us</h2>
                    <p className="text-gray-300 leading-relaxed">
                        If you have any questions regarding this Privacy Policy,
                        please contact us at:
                    </p>

                    <p className="text-blue-400">
                        support@saraldb.com
                    </p>
                </section>

            </div>
        </div>
    );
}