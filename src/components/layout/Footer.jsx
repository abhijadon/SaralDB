export default function Footer() {
    return (
        <footer className="w-full py-4 shadow-inner
                       bg-card-light dark:bg-card-dark">

            <div className="mx-auto max-w-7xl px-6 py-3 text-center text-sm
                      text-text-mutedLight dark:text-text-mutedDark">

                © {new Date().getFullYear()} SaralDB ORM. All rights reserved.
            </div>
        </footer>
    );
}