import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SocialService() {
  const programmes = [
    {
      title: "Career Guidance Programme",
      hasArrow: true,
    },
    {
      title: "Effective parental training",
      hasArrow: true,
    },
    {
      title: "Pre marital Counselling",
      hasArrow: true,
      highlighted: true,
    },
    {
      title: "Anti Drugs Programme\nFinancial improvement Programme",
      hasArrow: true,
      large: true,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-0 items-start">
          {/* Content */}
          <div className="md:col-span-2">
            <div className="relative inline-block mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Social Service Programme
              </h2>
              <img
                src="/line_01.png"
                alt="underline"
                className="absolute left-32 -bottom-3 w-20"
              />
            </div>

            {/* Programme Grid */}
            <div className="grid grid-cols-2 gap-6 max-w-2xl auto-rows-[100px]">
              {programmes.map((programme, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`flex flex-col items-start justify-between text-left shadow-md rounded-3xl px-6 py-6 transition-all duration-300 h-full
                    ${
                      programme.highlighted
                        ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
                        : "bg-white text-gray-800 hover:text-blue-600"
                    }
                    ${programme.large ? "row-span-2" : ""}
                  `}
                >
                  <span className="text-base font-medium leading-snug whitespace-pre-line">
                    {programme.title}
                  </span>
                  {programme.hasArrow && (
                    <ArrowRight
                      className={`w-5 h-5 mt-3 ml-auto ${
                        programme.highlighted ? "text-white" : "text-cyan-600"
                      }`}
                    />
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Right-side logo design */}
          <div className="relative h-full flex items-stretch justify-center">
            {/* Top rotated */}
            <img
              src="/logo_full.png"
              alt="rotated_logo"
              className="w-40 md:w-72 h-40 md:h-56 transform rotate-180 absolute -left-16 top-16"
            />
            {/* Bottom normal */}
            <img
              src="/logo_full.png"
              alt="normal_logo"
              className="w-40 md:w-72 h-40 md:h-56 absolute right-10 bottom-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
