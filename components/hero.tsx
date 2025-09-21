import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent min-h-[600px] flex items-center overflow-hidden z-10">

      {/* Background Images */}
      <div className="absolute inset-0 flex justify-between items-center px-0 z-0">
        <img
          src="/logo_only.png"
          alt="Logo"
          className="w-[450px] h-auto opacity-80"
        />

        {/* Hero Lady with Overlays */}
        <div className="relative w-3/5 h-full z-0">
          <img
            src="/hero_lady.png"
            alt="Students studying together"
            className="w-full h-full object-cover z-0"
          />

          {/* LEFT overlay (blue fade) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ace5] to-transparent pointer-events-none" />

          {/* RIGHT overlay (white fade) */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/75 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-white text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-2">
            Prepare Yourself for IT Era
          </h1>
          <p className="text-lg md:text-xl mb-6 text-cyan-100 font-extralight">Get Yourself Renovated</p>
          <div className="space-y-2 mb-8 text-base md:text-lg">
            <p>Software Development, Web Designing & Development</p>
            <p>Multimedia & Animation, Graphic Designing, Accounting Packages</p>
            <p>PSC Approved Packages</p>
          </div>
          <Button size="lg" className="bg-white text-gray-700 cursor-pointer hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Explore Now
          </Button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center absolute -bottom-10 left-[45%] space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
