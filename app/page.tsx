import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { InfographicsSection } from "@/components/infographics-section"
import { FoodCardsSection } from "@/components/food-cards-section"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <InfographicsSection />
      <FoodCardsSection />
      <Footer />
      <WhatsAppChat />
    </main>
  )
}
