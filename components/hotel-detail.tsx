"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Star,
  MessageCircle,
  Wifi,
  Waves,
  Sun,
  Utensils,
  Sparkles,
  Car,
  Coffee,
  Check,
  Building,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { Reveal } from "@/components/reveal"
import { ImageGallery } from "@/components/image-gallery"
import { EgyptMap } from "@/components/egypt-map"
import { HotelCard } from "@/components/hotel-card"
import { hotels, type Hotel } from "@/lib/hotels"
import { whatsappLink } from "@/lib/trips"

const iconMap: Record<string, React.ElementType> = {
  Wifi,
  Pool: Waves,
  Waves,
  Eye: Sparkles,
  Sparkles,
  Car,
  Utensils,
  Anchor: Building,
  Sun,
  Compass: MapPin,
  Coffee,
}

export function HotelDetail({ hotel }: { hotel: Hotel }) {
  const { t, lang, dir } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  const BackArrow = dir === "rtl" ? ArrowRight : ArrowLeft
  const others = hotels.filter((x) => x.slug !== hotel.slug).slice(0, 3)

  const reserveMsg =
    lang === "ar"
      ? `مرحبًا، أريد حجز في فندق "${hotel.name.ar}" في مدينة ${hotel.city.ar}. أرجو تزويدي بالأسعار والتوافر.`
      : `Hello, I would like to reserve at "${hotel.name.en}" in ${hotel.city.en}. Please send availability and rates.`

  const mapPoints = [
    {
      name: hotel.name,
      lat: hotel.coordinates.lat,
      lng: hotel.coordinates.lng,
    },
    ...hotel.nearbyAttractions.map((att, idx) => ({
      name: att.name,
      lat: hotel.coordinates.lat + (idx % 2 === 0 ? 0.015 : -0.012) * (idx + 1),
      lng: hotel.coordinates.lng + (idx % 2 === 0 ? -0.018 : 0.014) * (idx + 1),
    })),
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        {/* Top Header Banner */}
        <div ref={heroRef} className="relative pt-28 pb-12 bg-secondary/30 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Link
              href="/hotels"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <BackArrow className="h-4 w-4" />
              {t("backToHotels")}
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/15 px-3.5 py-1 text-xs uppercase tracking-widest text-primary font-medium">
                {hotel.city[lang]}
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full">
                <Star className="h-3.5 w-3.5 fill-amber-500" />
                {hotel.rating} / 5 ({hotel.reviewsCount} {lang === "ar" ? "تقييم" : "reviews"})
              </span>
            </div>

            <h1 className="mt-4 font-serif text-3xl md:text-5xl text-foreground text-balance">
              {hotel.name[lang]}
            </h1>
            <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-3xl">
              {hotel.tagline[lang]}
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{hotel.address[lang]}</span>
            </div>
          </div>
        </div>

        {/* Gallery & Main Content Grid */}
        <section className="py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_360px] md:px-8">
            <div className="min-w-0 space-y-12">
              {/* Photo Gallery */}
              <Reveal>
                <div>
                  <h2 className="mb-4 font-serif text-2xl text-foreground">
                    {t("photoGallery")}
                  </h2>
                  <ImageGallery images={hotel.gallery} title={hotel.name[lang]} />
                </div>
              </Reveal>

              {/* Overview */}
              <Reveal>
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h2 className="font-serif text-2xl text-foreground">{t("tripOverview")}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-pretty text-base md:text-lg">
                    {hotel.overview[lang]}
                  </p>
                </div>
              </Reveal>

              {/* Hotel Amenities */}
              <Reveal>
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-6">
                    {t("hotelAmenities")}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {hotel.amenities.map((am) => {
                      const IconComp = iconMap[am.icon] || Sparkles
                      return (
                        <div
                          key={am.id}
                          className="flex items-center gap-3.5 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <IconComp className="h-5 w-5" />
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {am.name[lang]}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Reveal>

              {/* Room Types & Pricing */}
              <Reveal>
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-6">{t("roomTypes")}</h2>
                  <div className="space-y-4">
                    {hotel.roomTypes.map((room) => (
                      <div
                        key={room.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-border bg-card p-5"
                      >
                        <div className="space-y-1">
                          <h3 className="font-serif text-lg font-medium text-foreground">
                            {room.name[lang]}
                          </h3>
                          <p className="text-xs text-muted-foreground">{room.description[lang]}</p>
                          <span className="inline-block text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mt-2">
                            {room.capacity[lang]}
                          </span>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-border">
                          <div className="flex items-baseline gap-1">
                            <span className="font-serif text-2xl font-bold text-primary">
                              ${room.price}
                            </span>
                            <span className="text-xs text-muted-foreground">{t("perNight")}</span>
                          </div>
                          <a
                            href={whatsappLink(
                              lang === "ar"
                                ? `مرحبًا، أريد الاستفسار عن حجز "${room.name.ar}" في فندق ${hotel.name.ar}.`
                                : `Hello, I'd like to book "${room.name.en}" at ${hotel.name.en}.`,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-105"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            {lang === "ar" ? "طلب حجز الغرفة" : "Book Room"}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Location & Map */}
              <Reveal>
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-6">
                    {t("hotelLocationMap")}
                  </h2>
                  <EgyptMap points={mapPoints} title={hotel.name[lang]} />
                </div>
              </Reveal>

              {/* Nearby Attractions */}
              <Reveal>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="font-serif text-xl text-foreground mb-4">
                    {t("nearbyAttractions")}
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {hotel.nearbyAttractions.map((att, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-between rounded-xl bg-secondary/40 p-3.5"
                      >
                        <span className="text-xs font-medium text-foreground">
                          {att.name[lang]}
                        </span>
                        <span className="mt-2 text-[11px] font-semibold text-primary">
                          {att.distance[lang]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sticky Reservation Sidebar Card */}
            <aside className="md:sticky md:top-28 md:h-fit">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t("fromPrice")}
                </span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-primary font-bold">
                    ${hotel.pricePerNight}
                  </span>
                  <span className="text-sm text-muted-foreground">{t("perNight")}</span>
                </div>

                <div className="mt-5 space-y-3 border-y border-border py-5 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>{t("navHotels")}</span>
                    <span className="font-medium text-foreground">{hotel.city[lang]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{lang === "ar" ? "التصنيف" : "Star Rating"}</span>
                    <span className="font-medium text-foreground">{hotel.stars} {lang === "ar" ? "نجوم" : "Stars"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{lang === "ar" ? "التقييم" : "Review Score"}</span>
                    <span className="font-medium text-foreground">{hotel.rating} / 5</span>
                  </div>
                </div>

                <a
                  href={whatsappLink(reserveMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t("bookThisHotel")}
                </a>

                <a
                  href={whatsappLink(reserveMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-center text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {t("askAboutHotel")}
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* Other Hotels Suggestions */}
        <section className="bg-secondary/30 py-16 border-t border-border">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <h2 className="font-serif text-3xl text-foreground">{t("otherHotels")}</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((h, i) => (
                <HotelCard key={h.slug} hotel={h} index={i} />
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
