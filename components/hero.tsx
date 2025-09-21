import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-cyan-500 md:to-transparent to-cyan-200 min-h-[600px] flex items-center overflow-hidden z-10">
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:px-0 z-0">
        {/* Mobile Logo */}
        <img
          src="/logo_full.png"
          alt="Logo"
          className="block md:hidden w-80 sm:w-56 h-auto opacity-90 mb-6 md:mb-0"
        />

        {/* Desktop Logo */}
        <img
          src="/logo_only.png"
          alt="Logo"
          className="hidden md:block w-[300px] lg:w-[450px] h-auto opacity-80"
        />
        <div className="hidden md:block relative w-3/5 h-full z-0">
          <img
            src="/hero_lady.png"
            alt="Students studying together"
            className="w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ace5] to-transparent pointer-events-none" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-white/75 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
        <div className="text-white text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2">
            Prepare Yourself for IT Era
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-cyan-100 font-extralight">
            Get Yourself Renovated
          </p>
          <div className="space-y-2 mb-8 text-sm sm:text-base md:text-lg">
            <p>Software Development, Web Designing & Development</p>
            <p>Multimedia & Animation, Graphic Designing, Accounting Packages</p>
            <p>PSC Approved Packages</p>
          </div>
          <Button
            size="lg"
            className="bg-white text-gray-700 cursor-pointer hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
          >
            Explore Now
          </Button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center md:justify-start absolute -bottom-8 md:-bottom-10 left-1/2 md:left-[45%] transform -translate-x-1/2 md:translate-x-0 space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
