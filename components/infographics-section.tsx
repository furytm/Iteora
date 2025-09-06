import { Heart, Users, Truck } from "lucide-react"

export function InfographicsSection() {
  const features = [
    {
      icon: Heart,
      title: "Home cooked meals, just like mama's",
      description: "Traditional recipes passed down through generations",
    },
    {
      icon: Heart,
      title: "Freshly made with love",
      description: "Every dish prepared with care and authentic ingredients",
    },
    {
      icon: Users,
      title: "Bowls, bulk orders and catering 24/7",
      description: "Perfect for individuals, families, and events",
    },
    {
      icon: Truck,
      title: "Fast delivery",
      description: "Hot, fresh meals delivered quickly to your location",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#000035] rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#000035] mb-2 text-balance">{feature.title}</h3>
              <p className="text-gray-600 text-sm text-balance">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
