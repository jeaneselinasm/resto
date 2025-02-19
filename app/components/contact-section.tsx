import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Restaurant Information</h3>
            <p className="mb-2">
              <strong>Address:</strong> 123 Main St, City, State 12345
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@restaurant.com
            </p>
            <h4 className="text-xl font-semibold mt-6 mb-2">Hours of Operation</h4>
            <p className="mb-1">Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p className="mb-1">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616562308246!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Make a Reservation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" placeholder="First Name" required />
                <Input type="text" placeholder="Last Name" required />
              </div>
              <Input type="email" placeholder="Email" required />
              <Input type="tel" placeholder="Phone" required />
              <div className="grid grid-cols-2 gap-4">
                <Input type="date" required />
                <Input type="time" required />
              </div>
              <Input type="number" placeholder="Number of Guests" min="1" required />
              <Textarea placeholder="Special Requests" rows={4} />
              <Button type="submit" className="w-full">
                Make Reservation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

