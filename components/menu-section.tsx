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
    name: "Singkong Goreng Rempah",
    description: "Crispy cassava fries seasoned with Maluku spices.",
    price: "$8",
    category: "appetizers",
  },
  {
    id: 2,
    name: "Perkedel Kenari",
    description: "Savory kenari (canarium nut) fritters, golden fried",
    price: "$12",
    category: "appetizers",
  },
  {
    id: 3,
    name: "Papeda & Kuah Kuning Ikan",
    description: "Traditional sago porridge served with turmeric fish soup",
    price: "$22",
    category: "main-course",
  },
  {
    id: 4,
    name: "Garo Rica-Rica Daging",
    description: "Spicy beef cooked Maluku-style with rich spice paste",
    price: "$28",
    category: "main-course",
  },
  {
    id: 5,
    name: "Kue Lontar",
    description: "Maluku-style egg custard tart",
    price: "$9",
    category: "desserts",
  },
  {
    id: 6,
    name: "Halua Kenari",
    description: "Candied kenari nuts, sweet and nutty",
    price: "$11",
    category: "desserts",
  },
  {
    id: 7,
    name: "Es Kelapa Muda Maluku",
    description: "Young coconut served with palm sugar syrup",
    price: "$10",
    category: "drinks",
  },
  {
    id: 8,
    name: "Sopi Mocktail",
    description: "Inspired by traditional Maluku liquor (non-alcoholic blend with spices & citrus)",
    price: "$8-15",
    category: "drinks",
  },
]

export default function MenuSection() {
  return (
    <section id="menu" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">Our Menu</h2>
        <Tabs defaultValue="appetizers" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full max-w-2xl mx-auto mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="px-2 sm:px-4 py-2 text-xs sm:text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                {menuItems
                  .filter((item) => item.category === category.id)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm"
                    >
                      <Image
                        src={`/placeholder-120x120.png?height=120&width=120&text=${encodeURIComponent(item.name)}`}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="rounded-lg w-full sm:w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32 object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                          </div>
                          <p className="text-primary font-bold text-lg sm:text-xl mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                            {item.price}
                          </p>
                        </div>
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
