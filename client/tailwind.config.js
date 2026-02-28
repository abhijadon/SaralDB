/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: "#4F46E5",
                background: "#F9FAFB",
                card: "#FFFFFF",
                text: "#111827",
                textMuted: "#6B7280",
                border: "#E5E7EB",
            },
        },
    },

    plugins: [],
};

export default config;