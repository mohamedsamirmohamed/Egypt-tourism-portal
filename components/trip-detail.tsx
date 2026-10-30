"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowLeft, ArrowRight, MapPin, Clock, Check, MessageCircle, Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { Reveal } from "@/components/reveal"
import { TripCard } from "@/components/trip-card"
import { ImageGallery } from "@/components/image-gallery"
import { EgyptMap } from "@/components/egypt-map"
import { trips, whatsappLink, type Trip } from "@/lib/trips"

export function TripDetail({ trip }: { trip: Trip }) {
  const { t, lang, dir } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const BackArrow = dir === "rtl" ? ArrowRight : ArrowLeft
  const others = trips.filter((x) => x.slug !== trip.slug).slice(0, 3)

  const bookMsg =
    lang === "ar"
      ? `مرحبًا، أريد حجز رحلة "${trip.title.ar}" (${trip.duration.ar}). أرجو إرسال التفاصيل.`
      : `Hello, I would like to book the "${trip.title.en}" trip (${trip.duration.en}). Please send me the details.`

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <div ref={heroRef} className="relative h-[80svh] min-h-[520px] w-full overflow-hidden">
          <motion.div style={{ y, scale }} className="absolute inset-0">
            <Image src={trip.image || "/placeholder.svg"} alt={trip.title[lang]} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
          </motion.div>

          <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-5 pb-16 md:px-8">
            <Link
              href="/trips"
              className="mb-auto mt-28 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-sm text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
            >
              <BackArrow className="h-4 w-4" />
              {t("backToTrips")}
            </Link>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="inline-block w-fit rounded-full bg-primary/15 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary"
            >
              {trip.category[lang]}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-5 max-w-3xl text-balance font-serif text-4xl leading-tight text-foreground md:text-6xl"
            >
              {trip.title[lang]}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/80"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                {trip.location[lang]}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                {trip.duration[lang]}
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-primary text-primary" />
                4.9 / 5
              </span>
            </motion.div>
          </div>
        </div>

        {/* Body */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_360px] md:px-8">
            <div className="min-w-0 space-y-12">
              {/* Photo Gallery */}
              {trip.gallery && trip.gallery.length > 0 && (
                <Reveal>
                  <div>
                    <h2 className="mb-4 font-serif text-3xl text-foreground">{t("photoGallery")}</h2>
                    <ImageGallery images={trip.gallery} title={trip.title[lang]} />
                  </div>
                </Reveal>
              )}

              <Reveal>
                <h2 className="font-serif text-3xl text-foreground">{t("tripOverview")}</h2>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{trip.overview[lang]}</p>
              </Reveal>

              {/* Highlights */}
              <div>
                <Reveal>
                  <h2 className="font-serif text-3xl text-foreground">{t("tripHighlights")}</h2>
                </Reveal>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {trip.highlights.map((h, i) => (
                    <Reveal key={i} delay={0.05 * i}>
                      <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="text-sm text-foreground">{h[lang]}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Interactive Map */}
              {trip.mapMarkers && trip.mapMarkers.length > 0 && (
                <Reveal>
                  <div>
                    <h2 className="font-serif text-3xl text-foreground mb-6">{t("interactiveMap")}</h2>
                    <EgyptMap points={trip.mapMarkers} title={trip.title[lang]} />
                  </div>
                </Reveal>
              )}

              {/* Itinerary */}
              <div>
                <Reveal>
                  <h2 className="font-serif text-3xl text-foreground">{t("tripItinerary")}</h2>
                </Reveal>
                <div className="mt-8 ltr:border-l rtl:border-r border-border ltr:pl-6 rtl:pr-6">
                  {trip.itinerary.map((step, i) => (
                    <Reveal key={i} delay={0.05 * i}>
                      <div className="relative pb-10 last:pb-0">
                        <span className="absolute top-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary ltr:-left-[30px] rtl:-right-[30px]">
                          <span className="h-3 w-3 animate-ping rounded-full bg-primary/50" />
                        </span>
                        <span className="text-xs uppercase tracking-widest text-primary">{step.day[lang]}</span>
                        <h3 className="mt-1 font-serif text-xl text-foreground">{step.title[lang]}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail[lang]}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div>
                <Reveal>
                  <h2 className="font-serif text-3xl text-foreground">{t("tripIncludes")}</h2>
                </Reveal>
                <div className="mt-6 flex flex-wrap gap-3">
                  {trip.includes.map((inc, i) => (
                    <Reveal key={i} delay={0.04 * i}>
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        {inc[lang]}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky booking card */}
            <aside className="md:sticky md:top-28 md:h-fit">
              <div className="rounded-2xl border border-border bg-card p-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{t("fromPrice")}</span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-primary">${trip.priceFrom}</span>
                  <span className="text-sm text-muted-foreground">{t("perPerson")}</span>
                </div>
                <div className="mt-5 flex flex-col gap-3 border-y border-border py-5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t("navTrips")}</span>
                    <span className="text-foreground">{trip.category[lang]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t("tripItinerary")}</span>
                    <span className="text-foreground">{trip.duration[lang]}</span>
                  </div>
                </div>
                <a
                  href={whatsappLink(bookMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t("bookThisTrip")}
                </a>
                <a
                  href={whatsappLink(bookMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t("askAbout")}
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* Other trips */}
        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">{t("otherTrips")}</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o, i) => (
                <TripCard key={o.slug} trip={o} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
