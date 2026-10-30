import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { TripsSection } from "@/components/trips-section"
import { HotelsSection } from "@/components/hotels-section"
import { ExperiencesSection } from "@/components/experiences-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <TripsSection />
        <HotelsSection />
        <ExperiencesSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
