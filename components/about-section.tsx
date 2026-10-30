"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: 1200, suffix: "+", key: "stat1" as const },
  { value: 45, suffix: "+", key: "stat2" as const },
  { value: 12, suffix: "", key: "stat3" as const },
  { value: 99, suffix: "%", key: "stat4" as const },
]

export function AboutSection() {
  const { t } = useLanguage()
  const imgRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"])

  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div ref={imgRef} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <motion.div style={{ y }} className="absolute inset-[-12%]">
            <Image src="/images/nile-cruise.png" alt="" fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
        </div>

        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("aboutKicker")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
              {t("aboutTitle")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{t("aboutBody")}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.key} delay={0.1 * i}>
                <div>
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="mt-1 text-sm text-muted-foreground">{t(s.key)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="font-serif text-4xl text-primary md:text-5xl">
      {display}
      {suffix}
    </span>
  )
}
