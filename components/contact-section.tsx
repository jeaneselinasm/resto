import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">Contact Us</h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Restaurant Information</h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base">
                <strong>Address:</strong> 123 Main St, City, State 12345
              </p>
              <p className="text-sm sm:text-base">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-sm sm:text-base">
                <strong>Email:</strong> info@restaurant.com
              </p>
            </div>

            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Hours of Operation</h4>
            <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>

            <div className="w-full h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616562308246!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Make a Reservation</h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="First Name" required className="text-sm sm:text-base" />
                <Input type="text" placeholder="Last Name" required className="text-sm sm:text-base" />
              </div>
              <Input type="email" placeholder="Email" required className="text-sm sm:text-base" />
              <Input type="tel" placeholder="Phone" required className="text-sm sm:text-base" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input type="date" required className="text-sm sm:text-base" />
                <Input type="time" required className="text-sm sm:text-base" />
              </div>
              <Input type="number" placeholder="Number of Guests" min="1" required className="text-sm sm:text-base" />
              <Textarea placeholder="Special Requests" rows={4} className="text-sm sm:text-base resize-none" />
              <Button type="submit" className="w-full text-sm sm:text-base py-3 sm:py-4">
                Make Reservation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
