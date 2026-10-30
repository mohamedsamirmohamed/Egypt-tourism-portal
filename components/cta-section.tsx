"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import { MessageCircle, Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/trips"
import { Reveal } from "@/components/reveal"

export function CtaSection() {
  const { t, lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden py-28 md:py-40">
      <motion.div style={{ y }} className="absolute inset-[-15%]">
        <Image src="/images/desert-safari.png" alt="" fill className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-background/10 dark:bg-background/80" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("contactKicker")}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 text-balance font-serif text-5xl leading-tight text-foreground md:text-6xl">
            {t("ctaTitle")}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">{t("ctaBody")}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(
                lang === "ar"
                  ? "مرحبًا، أريد تصميم رحلة سياحية إلى مصر."
                  : "Hello, I would like to plan a trip to Egypt.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              {t("ctaButton")}
            </a>
            <a
              href={`tel:+2${WHATSAPP_DISPLAY}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              dir="ltr"
            >
              <Phone className="h-5 w-5" />
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
