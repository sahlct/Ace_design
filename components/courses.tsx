"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("offline");

  const courses = [
    {
      id: 1,
      title: "Kerala PSC",
      subtitle: "Kerala Public Service Commission",
      src: "/course_card_01.png",
      iconBg: "bg-pink-200",
    },
    {
      id: 2,
      title: "SSC",
      subtitle: "Staff Selection Commission",
      src: "course_card_02.png",
      iconBg: "bg-blue-200",
    },
    {
      id: 3,
      title: "BANK",
      subtitle: "Banking Exam (Clerk / PO / Other Recruitments)",
      src: "course_card_03.png",
      iconBg: "bg-teal-200",
    },
    {
      id: 4,
      title: "RRB",
      subtitle: "Railway Recruitment Board",
      src: "course_card_04.png",
      iconBg: "bg-green-200",
    },
    {
      id: 5,
      title: "ETT",
      subtitle: "ELIGIBILITY TEST",
      src: "course_card_05.png",
      iconBg: "bg-yellow-200",
    },
    {
      id: 6,
      title: "MONTESSORI",
      subtitle: "Pre-Primary Teacher Training",
      src: "course_card_06.png",
      iconBg: "bg-purple-200",
    },
    {
      id: 7,
      title: "KAS",
      subtitle: "Kerala Administrative Service",
      src: "course_card_07.png",
      iconBg: "bg-indigo-200",
    },
  ];

  return (
    <section className="py-16 relative" style={{ backgroundImage: "url('/transperent_full.png')", backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute top-32 left-0">
        <img src="/transperent_top.png" alt="Top Decoration" className="w-auto h-72" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src="/transperent_bottom.png" alt="Bottom Decoration" className="w-auto h-72" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Courses
        </h2>

        {/* Course Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveTab("offline")}
            className={`rounded-full cursor-pointer px-6 py-2 ${
              activeTab === "offline"
                ? "bg-gradient-to-r from-[#1F67A5] to-[#00A0E3] hover:bg-blue-600 text-white"
                : "text-blue-600 bg-blue-100 hover:bg-blue-200"
            }`}
          >
            Offline Courses
          </button>
          <button
            onClick={() => setActiveTab("online")}
            className={`rounded-full cursor-pointer px-6 py-2 ${
              activeTab === "online"
                ? "bg-gradient-to-r from-[#1F67A5] to-[#00A0E3] hover:bg-blue-600 text-white"
                : "text-blue-600 bg-blue-100 hover:bg-blue-200"
            }`}
          >
            Online Courses
          </button>
          <button
            onClick={() => setActiveTab("scholarship")}
            className={`rounded-full cursor-pointer px-6 py-3 ${
              activeTab === "scholarship"
                ? "bg-gradient-to-r from-[#1F67A5] to-[#00A0E3] hover:bg-blue-600 text-white"
                : "text-blue-600 bg-blue-100 hover:bg-blue-200"
            }`}
          >
            Scholarship Exams
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`bg-[#ffffffb5] border-0 rounded-4xl hover:shadow-lg transition-shadow cursor-pointer z-10`}
            >
              <CardContent className="p-6 px-8 text-center flex flex-col items-start justify-between gap-12">
                <div
                  className={`w-16 h-16 ${course.iconBg} rounded-full flex items-center justify-center mb-4`}
                >
                  <img src={course.src} alt="" />
                </div>
                <div className="text-start">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {course.subtitle}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}