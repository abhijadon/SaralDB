export default function Container({ children }) {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                {children}
            </div>
        </section>
    );
}