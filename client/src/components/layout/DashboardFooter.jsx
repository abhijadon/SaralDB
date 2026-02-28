export default function DashboardFooter() {
    return (
        <footer className="h-12 flex items-center justify-center border-t border-white/10 bg-[#0f172a] text-sm text-gray-400">
            © {new Date().getFullYear()} SaralDB. All rights reserved.
        </footer>
    )
}