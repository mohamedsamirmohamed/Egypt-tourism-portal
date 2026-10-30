"use client"

import { motion } from "motion/react"
import { UserCheck, Route, ShieldCheck, BadgeDollarSign } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

export function ExperiencesSection() {
  const { t } = useLanguage()

  const items = [
    { icon: UserCheck, title: "exp1Title" as const, body: "exp1Body" as const },
    { icon: Route, title: "exp2Title" as const, body: "exp2Body" as const },
    { icon: ShieldCheck, title: "exp3Title" as const, body: "exp3Body" as const },
    { icon: BadgeDollarSign, title: "exp4Title" as const, body: "exp4Body" as const },
  ]

  return (
    <section id="experiences" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("expKicker")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
              {t("expTitle")}
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-serif text-xl text-foreground">{t(item.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(item.body)}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
