"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-primary">
          Restaurant Name
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="#menu" className="hover:text-primary transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>

          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#menu"
                  className="block hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
