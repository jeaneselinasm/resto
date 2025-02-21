import Image from "next/image"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import MenuSection from "@/components/menu-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative h-screen">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Restaurant</h1>
            <p className="text-xl mb-8">Experience culinary excellence</p>
            <Button size="lg">Make a Reservation</Button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </section>

        <MenuSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

