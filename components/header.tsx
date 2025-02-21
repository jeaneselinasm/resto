import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Restaurant Name
        </Link>
        <nav>
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
            <li>
              <Button size="sm">Reserve</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

