import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/jollof-rice.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Home cooked meals, just like mama's</h1>
        <p className="text-lg md:text-xl mb-8 text-balance max-w-2xl mx-auto">
          Experience authentic Nigerian cuisine made with love and delivered fresh to your doorstep
        </p>
        <Button size="lg" className="bg-[#000035] hover:bg-[#000035]/90 text-white px-8 py-3 text-lg">
          Order Now
        </Button>
      </div>
    </section>
  )
}
