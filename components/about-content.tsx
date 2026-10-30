"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ShieldCheck, Star, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

export function AboutContent() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Star,
      titleKey: "aboutPageValue1Title" as const,
      descKey: "aboutPageValue1Desc" as const,
    },
    {
      icon: ShieldCheck,
      titleKey: "aboutPageValue2Title" as const,
      descKey: "aboutPageValue2Desc" as const,
    },
    {
      icon: Users,
      titleKey: "aboutPageValue3Title" as const,
      descKey: "aboutPageValue3Desc" as const,
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Header Section */}
      <section className="relative px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("aboutPageHeader")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance font-serif text-5xl leading-tight text-foreground md:text-6xl lg:text-7xl">
              {t("aboutPageTitle")}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal delay={0.2}>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl">
              <Image 
                src="/images/hero-pyramids.png" 
                alt="Egypt Pyramids" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story & Intro Section */}
      <section className="px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-pretty font-serif text-xl leading-relaxed text-muted-foreground md:text-2xl md:leading-loose">
              "{t("aboutPageIntro")}"
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="bg-secondary/30 px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24">
          <Reveal>
            <div className="flex flex-col items-start gap-6">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Star className="h-8 w-8" />
              </span>
              <h2 className="font-serif text-3xl text-foreground">{t("aboutPageVisionTitle")}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{t("aboutPageVisionDesc")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-start gap-6">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </span>
              <h2 className="font-serif text-3xl text-foreground">{t("aboutPageMissionTitle")}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{t("aboutPageMissionDesc")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center font-serif text-4xl text-foreground md:text-5xl">{t("aboutPageValuesTitle")}</h2>
          </Reveal>
          
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((val, i) => (
              <Reveal key={val.titleKey} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full rounded-3xl border border-border bg-card p-10 transition-colors hover:border-primary/50"
                >
                  <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <val.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-4 font-serif text-2xl text-foreground">{t(val.titleKey)}</h3>
                  <p className="leading-relaxed text-muted-foreground">{t(val.descKey)}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
