"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { gsap } from "gsap";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("offline");
  const gridRef = useRef<HTMLDivElement | null>(null);

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
      src: "/course_card_02.png",
      iconBg: "bg-blue-200",
    },
    {
      id: 3,
      title: "BANK",
      subtitle: "Banking Exam (Clerk / PO / Other Recruitments)",
      src: "/course_card_03.png",
      iconBg: "bg-teal-200",
    },
    {
      id: 4,
      title: "RRB",
      subtitle: "Railway Recruitment Board",
      src: "/course_card_04.png",
      iconBg: "bg-green-200",
    },
    {
      id: 5,
      title: "ETT",
      subtitle: "ELIGIBILITY TEST",
      src: "/course_card_05.png",
      iconBg: "bg-yellow-200",
    },
    {
      id: 6,
      title: "MONTESSORI",
      subtitle: "Pre-Primary Teacher Training",
      src: "/course_card_06.png",
      iconBg: "bg-purple-200",
    },
    {
      id: 7,
      title: "KAS",
      subtitle: "Kerala Administrative Service",
      src: "/course_card_07.png",
      iconBg: "bg-indigo-200",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(
            ".course-card",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  return (
    <section
      className="md:py-16 py-10 relative"
      style={{
        backgroundImage: "url('/transperent_full.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative Images */}
      <div className="absolute top-32 left-0 hidden md:block">
        <img
          src="/transperent_top.png"
          alt="Top Decoration"
          className="w-auto h-72"
        />
      </div>
      <div className="absolute bottom-0 right-0 hidden md:block">
        <img
          src="/transperent_bottom.png"
          alt="Bottom Decoration"
          className="w-auto h-72"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:mb-12 mb-6 text-gray-900">
          Courses
        </h2>

        {/* Course Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {[
            { key: "offline", label: "Offline Courses" },
            { key: "online", label: "Online Courses" },
            { key: "scholarship", label: "Scholarship Exams" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-4 sm:px-6 py-2 cursor-pointer whitespace-nowrap ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-[#1F67A5] to-[#00A0E3] text-white hover:bg-blue-600"
                  : "text-blue-600 bg-blue-100 hover:bg-blue-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {courses.map((course) => (
            <Card
              key={course.id}
              className="course-card opacity-0 bg-gray-50/80 border-0 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer z-10"
            >
              <CardContent className="p-4 sm:p-6 flex flex-col items-start justify-between gap-4 sm:gap-6">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 ${course.iconBg} rounded-full flex items-center justify-center mb-2 sm:mb-4`}
                >
                  <img
                    src={course.src}
                    alt={course.title}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <div className="text-start">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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
