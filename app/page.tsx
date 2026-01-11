import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ShippingRates } from "@/components/shipping-rates"
import { ExpediaForFreight } from "@/components/expedia-for-freight"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { FloatingCallButton } from "@/components/floating-call-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ShippingRates />
      <ExpediaForFreight />
      <Testimonials />
      <Stats />
      <FAQ />
      <Footer />
      <FloatingCallButton />
    </main>
  )
}
