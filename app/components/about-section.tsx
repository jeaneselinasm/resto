import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Chef preparing food"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">
              Our restaurant has been serving delicious meals since 1990. We take pride in using only the freshest
              ingredients and creating memorable dining experiences for our guests.
            </p>
            <p className="text-gray-600 mb-4">
              Our head chef, John Doe, brings over 20 years of culinary expertise to our kitchen. His passion for
              innovative flavors and traditional techniques ensures that every dish is a masterpiece.
            </p>
            <p className="text-gray-600">
              We believe in sustainable practices and support local farmers and producers whenever possible. Our
              commitment to quality and service has made us a beloved part of the community for over three decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

