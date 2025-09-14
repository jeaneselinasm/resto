import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Chef+Preparing+Food"
              alt="Chef preparing food"
              width={800}
              height={600}
              className="rounded-lg w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">About Us</h2>
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Our restaurant has been serving delicious meals since 1990. We take pride in using only the freshest
                ingredients and creating memorable dining experiences for our guests.
              </p>
              <p>
                Our head chef, John Doe, brings over 20 years of culinary expertise to our kitchen. His passion for
                innovative flavors and traditional techniques ensures that every dish is a masterpiece.
              </p>
              <p>
                We believe in sustainable practices and support local farmers and producers whenever possible. Our
                commitment to quality and service has made us a beloved part of the community for over three decades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
