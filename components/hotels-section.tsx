"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Building } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { hotels } from "@/lib/hotels"
import { HotelCard } from "@/components/hotel-card"
import { Reveal } from "@/components/reveal"

export function HotelsSection() {
  const { t, lang, dir } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Track active slide index on scroll
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const scrollPosition = Math.abs(container.scrollLeft)
    const cardWidth = container.firstElementChild?.clientWidth || 380
    const gap = 24
    const newIndex = Math.round(scrollPosition / (cardWidth + gap))
    setActiveIndex(Math.min(Math.max(0, newIndex), hotels.length - 1))
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Scroll to a specific slide index
  const scrollToSlide = useCallback(
    (index: number) => {
      if (!scrollRef.current) return
      const container = scrollRef.current
      const cardWidth = container.firstElementChild?.clientWidth || 380
      const gap = 24
      const targetScroll = index * (cardWidth + gap)
      const finalScroll = dir === "rtl" ? -targetScroll : targetScroll

      container.scrollTo({ left: finalScroll, behavior: "smooth" })
      setActiveIndex(index)
    },
    [dir]
  )

  // Auto-play carousel effect
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % hotels.length
      scrollToSlide(nextIndex)
    }, 3500)

    return () => clearInterval(timer)
  }, [activeIndex, isPaused, scrollToSlide])

  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section id="hotels" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Header & View All Button */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3.5 py-1 text-xs font-medium uppercase tracking-[0.25em] text-primary">
                <Building className="h-3.5 w-3.5" />
                {t("hotelsKicker")}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
                {t("hotelsTitle")}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t("hotelsSubtitle")}</p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            {/* View All Hotels Button */}
            <Link
              href="/hotels"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 shadow-md shrink-0"
            >
              <span>{lang === "ar" ? "عرض كل الفنادق" : "View All Hotels"}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Auto-Play Carousel Track */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {hotels.map((hotel, i) => (
              <div
                key={hotel.slug}
                className="snap-start shrink-0 w-[88vw] sm:w-[350px] md:w-[380px] lg:w-[400px]"
              >
                <HotelCard hotel={hotel} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Coordinated Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {hotels.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative py-2 px-1 focus:outline-none"
            >
              <div
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-8 bg-primary shadow-sm"
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
