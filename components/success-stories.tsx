import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "HSA SOCIAL SCIENCE,",
      rank: "1st Rank Holder",
      image: "/testimonial_01.png",
      year: "2024",
      type: "main",
    },
    {
      id: 2,
      title: "Lorem Ipsum is simply",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it...",
      author: "Ashiq Usman K",
      role: "Civil Service Officer",
      type: "testimonial",
      bgColor: "bg-[#022935]",
      avatar: "/girl_01.png",
    },
    {
      id: 3,
      name: "ACE SUCCESS STORY - HSST RANK HOLDER",
      year: "2024",
      image: "/youtube_02.png",
      type: "banner",
    },
    {
      id: 4,
      name: "HSA SOCIAL SCIENCE - 1st Rank Holder",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it...",
      year: "2025",
      image: "/youtube_01.png",
      type: "testimonial",
      bgColor: "bg-[#ffeef7]",
    },
    {
      id: 5,
      title: "Lorem Ipsum is simply",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it...",
      author: "Aswani K",
      avatar: "/boy_01.png",
      role: "Civil Service Officer",
      type: "testimonial",
      bgColor: "bg-[#d3f9ff]",
      textColor: "text-gray-700",
    },
    {
      id: 6,
      quote: '"എന്റെ റാങ്കിന് കാരണം ACE ആണ്" അഭിമാനത്തോടെ പറയുന്നു',
      image: "/testimonial_02.png",
      type: "quote",
      bgColor: "bg-cyan-500",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Success Stories
          </h2>
          <div className="mt-2 flex justify-center mr-32">
            <img
              src="/line_02.png"
              alt="underline"
              className="h-2 w-32 md:w-40 object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* First Column */}
          <div className="col-span-1">
            {/* Main Story */}
            <Card
              className={`overflow-hidden hover:shadow-lg transition-shadow rounded-3xl ${
                stories[0].bgColor || "bg-white"
              } h-[70vh]`}
            >
              <CardContent
                className={`p-0 ${stories[0].textColor || "text-gray-900"}`}
              >
                {stories[0].type === "main" && (
                  <div className="relative h-full">
                    <img
                      src={stories[0].image || "/placeholder.svg"}
                      alt={stories[0].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-14 bg-white rounded-xl left-0 right-0  px-6 py-3 mx-4">
                      <h3 className="text-gray-800 font-bold text-xl mb-1">
                        {stories[0].name} <br />
                        <span className="text-md text-gray-700">
                          {" "}
                          1st Rank Holder
                        </span>
                      </h3>
                      {/* <p className="text-white/90 text-sm">{stories[0].rank}</p> */}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Testimonial 1 */}
            <Card
              className={`overflow-hidden hover:shadow-lg rounded-3xl transition-shadow ${
                stories[1].bgColor || "bg-white"
              } h-[40vh] mt-6`}
            >
              <CardContent
                className={`p-6 ${stories[1].textColor || "text-gray-100"}`}
              >
                {stories[1].type === "testimonial" && (
                  <div>
                    <img src="/quates_white.png" alt="" className="mb-2" />
                    <h3 className="font-bold text-lg mb-2">
                      {stories[1].title}
                    </h3>
                    <p className="text-sm mb-3 leading-relaxed">
                      {stories[1].description}{" "}
                      <Button
                        variant="link"
                        className=" p-0 h-auto text-cyan-600"
                      >
                        Read More
                      </Button>
                    </p>
                    {stories[1].author && (
                      <div className="flex items-center">
                        <img
                          src={stories[1].avatar}
                          alt={stories[1].author}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-semibold text-sm">
                            {stories[1].author}
                          </p>
                          <p className="text-xs opacity-70">
                            {stories[1].role}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Second Column */}
          <div className="col-span-1">
            {/* Testimonial 2 */}
            <Card
              className={`overflow-hidden hover:shadow-lg rounded-3xl transition-shadow ${
                stories[4].bgColor || "bg-white"
              } h-[55vh] `}
            >
              <CardContent
                className={`p-6 ${stories[4].textColor || "text-gray-800"}`}
              >
                {stories[4].type === "testimonial" && (
                  <div>
                    <img src="/quates_blue.png" alt="" className="mb-10" />
                    <h3 className="font-bold text-lg mb-2">
                      {stories[4].title}
                    </h3>
                    <p className="text-sm mb-10 leading-relaxed">
                      {stories[4].description}
                      <Button
                        variant="link"
                        className=" p-0 h-auto text-cyan-600"
                      >
                        Read More
                      </Button>
                    </p>
                    {stories[4].author && (
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img
                            src={stories[4].avatar}
                            alt={stories[4].author}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">
                            {stories[4].author}
                          </p>
                          <p className="text-xs opacity-70">
                            {stories[4].role}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* banner 1 */}
            <Card
              className={`overflow-hidden rounded-3xl hover:shadow-lg transition-shadow ${
                stories[3].bgColor || "bg-[#ffeef7]"
              } h-[55vh] mt-6`}
            >
              <CardContent
                className={`p-0 ${stories[2].textColor || "text-gray-900"}`}
              >
                {stories[2].type === "banner" && (
                  <div className="relative">
                    <img
                      src={stories[3].image || "/placeholder.svg"}
                      alt={stories[3].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="p-4 ">
                      <h3 className="font-bold text-xl">{stories[3].name}</h3>
                      <p className="text-[12px]">{stories[3].description}</p>
                      <div className="text-xs text-gray-100 bg-blue-500 w-fit px-3 py-1 mt-3 rounded-md">{stories[3].year}</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Third Column */}
          <div className="col-span-1">
            {/* Banner 2 */}
            <Card
              className={`overflow-hidden rounded-3xl hover:shadow-lg transition-shadow ${
                stories[2].bgColor || "bg-[#ffeef7]"
              } h-[40vh] `}
            >
              <CardContent
                className={`p-0 ${stories[2].textColor || "text-gray-900"}`}
              >
                {stories[2].type === "banner" && (
                  <div className="relative">
                    <img
                      src={stories[2].image || "/placeholder.svg"}
                      alt={stories[2].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="p-4 ">
                      <h3 className="font-bold text-lg leading-[18px] text-gray-700">{stories[2].name}</h3>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quote */}
            <Card
              className={`overflow-hidden hover:shadow-lg rounded-3xl transition-shadow ${
                stories[5].bgColor || "bg-white"
              } h-[70vh] mt-6`}
            >
              <CardContent
                className={`p-0 ${stories[5].textColor || "text-gray-900"}`}
              >
                {stories[5].type === "quote" && (
                  <div className="relative h-full">
                    <img
                      src={stories[5].image || "/placeholder.svg"}
                      alt="Success story"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute flex items-end bottom-28 bg-blue-400 me-10 rounded-e-full">
                      <div className="p-6">
                        <p className="text-white font-bold text-sm leading-relaxed">
                          {stories[5].quote}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
