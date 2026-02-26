export default function Cookies() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-white px-6 py-16">
            <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl space-y-10">

                <h1 className="text-4xl font-bold text-center">
                    Cookies Policy
                </h1>

                <p className="text-gray-300 text-center">
                    Last updated: {new Date().getFullYear()}
                </p>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Cookies are small text files stored on your device when you visit
                        a website. They help improve performance and user experience.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">2. How We Use Cookies</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Authentication & session management</li>
                        <li>Analytics & performance monitoring</li>
                        <li>Security protection</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">3. Managing Cookies</h2>
                    <p className="text-gray-300 leading-relaxed">
                        You can control cookies through your browser settings.
                        Disabling cookies may affect platform functionality.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">4. Contact</h2>
                    <p className="text-gray-300">
                        For questions about cookies:
                    </p>
                    <p className="text-blue-400">
                        support@saraldb.com
                    </p>
                </section>

            </div>
        </div>
    );
}