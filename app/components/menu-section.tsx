import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const menuCategories = [
  { id: "appetizers", name: "Appetizers" },
  { id: "main-course", name: "Main Course" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
]

const menuItems = [
  {
    id: 1,
    name: "Bruschetta",
    description: "Toasted bread with tomatoes, garlic, and basil",
    price: "$8",
    category: "appetizers",
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description: "Fresh salmon with lemon butter sauce",
    price: "$22",
    category: "main-course",
  },
  {
    id: 3,
    name: "Tiramisu",
    description: "Classic Italian coffee-flavored dessert",
    price: "$9",
    category: "desserts",
  },
  {
    id: 4,
    name: "Mojito",
    description: "Refreshing cocktail with rum, mint, and lime",
    price: "$10",
    category: "drinks",
  },
  // Add more menu items as needed
]

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        <Tabs defaultValue="appetizers" className="w-full">
          <TabsList className="flex justify-center mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 gap-8">
                {menuItems
                  .filter((item) => item.category === category.id)
                  .map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-primary font-bold mt-2">{item.price}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

