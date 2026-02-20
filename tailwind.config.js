/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "class",

    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: "#4F46E5",
                "primary-dark": "#4338CA",

                background: {
                    light: "#F9FAFB",
                    dark: "#111827",
                },

                card: {
                    light: "#FFFFFF",
                    dark: "#1F2937",
                },

                text: {
                    light: "#111827",
                    dark: "#F9FAFB",
                    mutedLight: "#6B7280",
                    mutedDark: "#9CA3AF",
                },
                border: {
                    light: "#E5E7EB",
                    dark: "#374151",
                },
            },
        },
    },

    plugins: [],
};

export default config;