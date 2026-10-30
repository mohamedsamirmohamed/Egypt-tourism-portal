"use client"

import { useState, useMemo } from "react"
import { Search, Building, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { Reveal } from "@/components/reveal"
import { HotelCard } from "@/components/hotel-card"
import { hotels } from "@/lib/hotels"

export default function HotelsPage() {
  const { t, lang } = useLanguage()
  const ALL_KEY = "ALL"
  const [selectedCity, setSelectedCity] = useState<string>(ALL_KEY)
  const [searchQuery, setSearchQuery] = useState("")

  const isAllSelected = selectedCity === ALL_KEY || selectedCity === t("filterAll")

  const cities = useMemo(() => {
    const list = Array.from(new Set(hotels.map((h) => h.city[lang])))
    return [t("filterAll"), ...list]
  }, [lang, t])

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchCity =
        isAllSelected || hotel.city[lang] === selectedCity
      const matchQuery =
        searchQuery.trim() === "" ||
        hotel.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.city[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.tagline[lang].toLowerCase().includes(searchQuery.toLowerCase())

      return matchCity && matchQuery
    })
  }, [isAllSelected, selectedCity, searchQuery, lang])

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-28 pb-20">
        {/* Hero Header */}
        <section className="relative py-12 md:py-16 bg-secondary/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                <Building className="h-3.5 w-3.5" />
                {t("hotelsKicker")}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-6xl">
                {t("hotelsTitle")}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-3 mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                {t("hotelsSubtitle")}
              </p>
            </Reveal>

            {/* Filter & Search */}
            <div className="mt-8 flex flex-col items-center gap-4 max-w-4xl mx-auto">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground ltr:left-4 rtl:right-4 rtl:left-auto" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="w-full rounded-full border border-border bg-card py-3 ltr:pl-11 ltr:pr-4 rtl:pr-11 rtl:pl-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {cities.map((city) => {
                  const isAllCity = city === t("filterAll")
                  const isActive = isAllCity ? isAllSelected : selectedCity === city
                  return (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(isAllCity ? ALL_KEY : city)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md scale-105"
                          : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
                      }`}
                    >
                      {city}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Hotels Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            {filteredHotels.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">
                  {lang === "ar" ? "لم نجد فنادق تطابق بحثك." : "No hotels match your search."}
                </p>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredHotels.map((hotel, i) => (
                  <HotelCard key={hotel.slug} hotel={hotel} index={i} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
