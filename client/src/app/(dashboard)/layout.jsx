import DashboardHeader from "@/components/layout/DashboardHeader"
import DashboardFooter from "@/components/layout/DashboardFooter"

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-[#0b1120] text-white">
            {/* Right Section */}
            <div className="flex-1 flex flex-col">
                <DashboardHeader />

                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>

                <DashboardFooter />
            </div>

        </div>
    )
}