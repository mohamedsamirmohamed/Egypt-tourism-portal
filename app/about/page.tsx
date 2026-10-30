import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { AboutContent } from "@/components/about-content"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-24 pb-12">
        <AboutContent />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
