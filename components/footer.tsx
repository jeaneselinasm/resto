import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Restaurant Name</h3>
            <p className="mt-2">Delicious food, great atmosphere</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
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
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Facebook />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Restaurant Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

