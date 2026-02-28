export default function CompanyStrip() {
    return (
        <div className="marquee-wrapper relative mt-10">

            {/* Left Fade */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>

            {/* Right Fade */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>

            <div className="marquee-track gap-20 items-center text-gray-600 text-2xl md:text-3xl font-semibold tracking-wider">

                <span>NVIDIA</span>
                <span>SAMSUNG</span>
                <span>Tencent</span>
                <span>PolyAI</span>
                <span>Verizon</span>
                <span>Walmart</span>

                {/* Duplicate for seamless loop */}
                <span>NVIDIA</span>
                <span>SAMSUNG</span>
                <span>Tencent</span>
                <span>PolyAI</span>
                <span>Verizon</span>
                <span>Walmart</span>

            </div>
        </div>
    );
}