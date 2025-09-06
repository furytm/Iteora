import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function FoodCardsSection() {
  const foods = [
    {
      id: 1,
      name: "Special Jollof Rice",
      description: "Aromatic jollof rice served with fish, boiled egg, and fried plantains",
      price: "₦2,500",
      image: "/images/jollof-rice.jpg",
    },
    {
      id: 2,
      name: "Beans & Plantain",
      description: "Traditional beans stew with perfectly fried sweet plantains",
      price: "₦1,800",
      image: "/images/beans-plantain.jpg",
    },
    {
      id: 3,
      name: "Assorted Spaghetti",
      description: "Delicious spaghetti with chicken, vegetables, and rich tomato sauce",
      price: "₦2,200",
      image: "/images/spaghetti-chicken.jpg",
    },
    {
      id: 4,
      name: "Pap with Akara & Bread",
      description: "Smooth corn pap served with crispy akara and fresh bread",
      price: "₦1,500",
      image: "/images/pap-akara.jpg",
    },
  ]

  return (
    <section id="order" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000035] mb-4">Our Menu</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-balance">
            Choose from our selection of authentic Nigerian dishes, all made fresh daily
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foods.map((food) => (
            <Card key={food.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={food.image || "/placeholder.svg"}
                  alt={food.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-[#000035] mb-2">{food.name}</h3>
                <p className="text-gray-600 text-sm mb-3 text-balance">{food.description}</p>
                <p className="text-xl font-bold text-[#000035]">{food.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-[#000035] hover:bg-[#000035]/90 text-white">Order Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
