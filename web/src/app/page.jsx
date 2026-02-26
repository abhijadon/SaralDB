import Hero from "../components/sections/Hero";
import { MdMessage } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen relative">

      <Hero />

      {/* Floating Chat Button */}
      <button
        className="
          fixed bottom-8 right-8
          backdrop-blur-xl
          bg-white/20
          border border-white/20
          text-white
          p-3 rounded-full
          shadow-[0_0_20px_rgba(79,70,229,0.4)]
          hover:scale-110
          transition-all duration-300
          cursor-pointer
          z-50
        "
      >
        <MdMessage size={24} />
      </button>

    </div>
  );
}