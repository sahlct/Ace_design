"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded transform rotate-45"></div> */}
              {/* <span className="text-xl font-bold text-gray-900">ace</span> */}
              {/* <span className="text-sm text-gray-600">Institutions</span> */}
              <img src="/logo_blue.png" alt="logo" />
            </div>
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
              Exam &results
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
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Courses
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Learners portal
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Exam &results
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Highlights
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
