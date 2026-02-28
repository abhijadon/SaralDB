export default function Terms() {
    return (
        <div className="min-h-screen bg-background-light text-white px-6 py-16">
            <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl space-y-10">

                <h1 className="text-4xl font-bold text-center">
                    Terms of Service
                </h1>

                <p className="text-gray-300 text-center">
                    Last updated: {new Date().getFullYear()}
                </p>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
                    <p className="text-gray-300 leading-relaxed">
                        By accessing or using SaralDB, you agree to comply with these
                        Terms of Service. If you do not agree, please do not use our platform.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">2. Use of Service</h2>
                    <p className="text-gray-300 leading-relaxed">
                        SaralDB provides database infrastructure and related services.
                        You agree to use the platform responsibly and not engage in
                        illegal or harmful activities.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">3. Account Responsibility</h2>
                    <p className="text-gray-300 leading-relaxed">
                        You are responsible for maintaining the confidentiality of your
                        login credentials and all activities under your account.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">4. Data Ownership</h2>
                    <p className="text-gray-300 leading-relaxed">
                        You retain full ownership of your data. SaralDB does not claim
                        ownership of any database content stored on our platform.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
                    <p className="text-gray-300 leading-relaxed">
                        SaralDB is provided “as is.” We are not liable for data loss,
                        service interruption, or indirect damages.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">6. Contact</h2>
                    <p className="text-gray-300">
                        Questions? Contact us at:
                    </p>
                    <p className="text-blue-400">
                        support@saraldb.com
                    </p>
                </section>

            </div>
        </div>
    );
}