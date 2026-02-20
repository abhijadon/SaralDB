"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="
          p-2 rounded-full cursor-pointer
          backdrop-blur-xl
          bg-white/30 dark:bg-white/10
          border border-white/20 dark:border-white/10
        "
            />
        );
    }

    const currentTheme = resolvedTheme; // 👈 IMPORTANT

    return (
        <button
            onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
            }
            className="
        p-2 rounded-full cursor-pointer
        backdrop-blur-xl
        bg-white/30 dark:bg-white/10
        border border-white/20 dark:border-white/10
        hover:scale-110
        transition-all duration-300
      "
        >
            {currentTheme === "dark" ? (
                <FaSun size={18} />
            ) : (
                <FaMoon size={18} />
            )}
        </button>
    );
}