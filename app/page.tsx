import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { Features } from "@/components/features"
import { ShippingRates } from "@/components/shipping-rates"
import { ExpediaForFreight } from "@/components/expedia-for-freight"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { FAQ } from "@/components/faq"
import { Certifications } from "@/components/certifications"
import { Footer } from "@/components/footer"
import { FloatingCallButton } from "@/components/floating-call-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Features />
      <ShippingRates />
      <Certifications />
      <ExpediaForFreight />
      <Testimonials />
      <Stats />
      <FAQ />
      <Footer />
      <FloatingCallButton />
    </main>
  )
}
