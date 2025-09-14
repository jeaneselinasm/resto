import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    comment:
      "The food was absolutely delicious! The atmosphere is perfect for a romantic dinner. I'll definitely be coming back with my family.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Doe",
    comment:
      "Great atmosphere and excellent service. The staff was very attentive and the food exceeded our expectations. Highly recommended!",
    rating: 4,
  },
  {
    id: 3,
    name: "Mike Johnson",
    comment:
      "The chef's special was out of this world. Every bite was a perfect blend of flavors. A must-try for any food lover!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">What Our Customers Say</h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <Image
                  src={`/placeholder-60x60.png?height=60&width=60&text=${encodeURIComponent(testimonial.name.split(" ")[0])}`}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg">{testimonial.name}</h3>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} fill-current`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
