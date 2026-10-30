"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowDown, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { whatsappLink } from "@/lib/trips"

export function Hero() {
  const { t, lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <Image
          src="/images/hero-pyramids.png"
          alt={lang === "ar" ? "أهرامات الجيزة عند الغروب" : "The Pyramids of Giza at sunset"}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent dark:from-background dark:via-background/50 dark:to-background/30" />
        <div className="absolute inset-0 hidden dark:block dark:bg-gradient-to-r dark:from-background/60 dark:to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-20 md:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-5 mt-4 sm:mt-6 md:mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary"
        >
          {t("heroKicker")}
        </motion.span>

        <h1 className="font-serif text-6xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
          <OverflowLine delay={0.4}>{t("heroTitle1")}</OverflowLine>
          <OverflowLine delay={0.55}>
            <span className="text-primary italic">{t("heroTitle2")}</span>
          </OverflowLine>
          <OverflowLine delay={0.7}>{t("heroTitle3")}</OverflowLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-foreground/75 md:text-lg"
        >
          {t("heroSubtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/#trips"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            {t("heroCta")}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Link>
          <a
            href={whatsappLink(
              lang === "ar"
                ? "مرحبًا، أريد الاستفسار عن الرحلات السياحية إلى مصر."
                : "Hello, I would like to inquire about your tours to Egypt.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" />
            {t("heroBook")}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t("scrollHint")}</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  )
}

function OverflowLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  )
}
