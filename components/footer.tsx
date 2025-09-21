import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-light mb-4">
              Contact{" "}
              <span className="text-cyan-400 font-semibold text-2xl">
                Ace Institute
              </span>
            </h3>
            <div className="space-y-2 text-gray-300">
              {/* Phone Numbers */}
              <p className="flex gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler-phone"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <a href="tel:9995076789" className="hover:text-cyan-400">
                  9995076789,
                </a>{" "}
                <a href="tel:9037363615" className="hover:text-cyan-400">
                  9037363615,
                </a>
                {" "}
                <a href="tel:9048058888" className="hover:text-cyan-400">
                  9048058888,
                </a>
                {" "}
                <a href="tel:7994005222" className="hover:text-cyan-400">
                  7994005222
                </a>
              </p>

              {/* Emails */}
              <p className="flex gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler-mail"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
                <a
                  href="mailto:acemanjeri@gmail.com"
                  className="hover:text-cyan-400"
                >
                  acemanjeri@gmail.com
                </a>
                ,{" "}
                <a
                  href="mailto:info@aceinstitutions.com"
                  className="hover:text-cyan-400"
                >
                  info@aceinstitutions.com
                </a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Social Media Links</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/aceinstitutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.youtube.com/@aceinstitutions_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.instagram.com/aceinstitutions/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://x.com/ace_institute/status/641468102346051584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Learners portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Exam & Results
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <ul className="space-y-2 text-gray-300 mt-8 md:mt-0">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Learners portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Exam & Results
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms and Conditions
              </a>
            </div>
            <p>©2025 Ace Institute. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
