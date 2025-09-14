import Image from "next/image"
import { ChevronDown } from "lucide-react"

import Header from "@/components/header"
import MenuSection from "@/components/menu-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { ShinyButton } from "@/components/magicui/shiny-button";
import { GridBeams } from "@/components/magicui/grid-beams";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <GridBeams gridSize={10} backgroundColor="#ffe2e2">
          <section className="relative h-screen min-h-[600px]">
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=Restaurant+Interior"
              alt="Restaurant interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0  flex flex-col items-center justify-center text-black px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center max-w-4xl">
                Welcome to Our Restaurant
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center max-w-2xl">
                Experience culinary excellence in every bite
              </p>
              <ShinyButton
                className="rounded-xl text-md sm:text-md px-6 sm:px-8 py-3 sm:py-4 "
              >Make a Reservation</ShinyButton>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </section>
        </GridBeams>

        <MenuSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
