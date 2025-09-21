"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
  Home,
  BookOpen,
  GraduationCap,
  FileText,
  Star,
  Info,
  Phone,
} from "lucide-react"
import { gsap } from "gsap"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  const menuLinks = [
    { label: "Home", href: "#", icon: Home },
    { label: "Courses", href: "#", icon: BookOpen },
    { label: "Learners portal", href: "#", icon: GraduationCap },
    { label: "Exam & results", href: "#", icon: FileText },
    { label: "Highlights", href: "#", icon: Star },
    { label: "About", href: "#", icon: Info },
    { label: "Contact us", href: "#", icon: Phone },
  ]

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        pointerEvents: "auto",
      })
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      })

      // Animate links stagger
      gsap.fromTo(
        ".mobile-link",
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.4,
          ease: "power3.out",
        }
      )
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        pointerEvents: "none",
      })
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      })
    }
  }, [isMenuOpen])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo_blue.png" alt="logo" className="h-10 sm:h-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Courses
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Learners portal
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Exam & results
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Highlights
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 opacity-0 pointer-events-none"
      ></div>

      {/* Sidebar Offcanvas */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-64 bg-white/80 backdrop-blur-md shadow-xl z-50 p-6 flex flex-col translate-x-full"
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="self-end mb-6 text-gray-700 hover:text-blue-600"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Nav links with icons */}
        <nav className="flex flex-col gap-3">
          {menuLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="mobile-link flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-100/70 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium shadow-sm opacity-0"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
