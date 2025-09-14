import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-start">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Restaurant Name</h3>
            <p className="text-sm sm:text-base text-gray-300">Delicious food, great atmosphere</p>
          </div>

          <nav className="text-center md:text-left">
            <ul className="flex flex-col space-y-2 sm:space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              <li>
                <Link href="#menu" className="text-sm sm:text-base hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm sm:text-base hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm sm:text-base hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex justify-center md:justify-end space-x-4 sm:space-x-6">
            <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <p className="text-xs sm:text-sm text-gray-400">&copy; 2023 Restaurant Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
