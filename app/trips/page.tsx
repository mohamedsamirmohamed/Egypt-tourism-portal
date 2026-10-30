"use client"

import { useState, useMemo } from "react"
import { Search, Compass, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { Reveal } from "@/components/reveal"
import { TripCard } from "@/components/trip-card"
import { trips } from "@/lib/trips"

export default function TripsPage() {
  const { t, lang } = useLanguage()
  const ALL_KEY = "ALL"
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_KEY)
  const [searchQuery, setSearchQuery] = useState("")

  const isAllSelected = selectedCategory === ALL_KEY || selectedCategory === t("filterAll")

  const categories = useMemo(() => {
    const cats = Array.from(new Set(trips.map((tr) => tr.category[lang])))
    return [t("filterAll"), ...cats]
  }, [lang, t])

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchCat =
        isAllSelected || trip.category[lang] === selectedCategory
      const matchQuery =
        searchQuery.trim() === "" ||
        trip.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.location[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.overview[lang].toLowerCase().includes(searchQuery.toLowerCase())

      return matchCat && matchQuery
    })
  }, [isAllSelected, selectedCategory, searchQuery, lang])

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-28 pb-20">
        {/* Header Hero */}
        <section className="relative py-12 md:py-16 bg-secondary/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                <Compass className="h-3.5 w-3.5" />
                {t("tripsKicker")}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-6xl">
                {t("tripsTitle")}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-3 mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                {t("tripsSubtitle")}
              </p>
            </Reveal>

            {/* Filter & Search Bar */}
            <div className="mt-8 flex flex-col items-center gap-4 max-w-4xl mx-auto">
              {/* Search bar */}
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

              {/* Category pills */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {categories.map((cat) => {
                  const isAllCat = cat === t("filterAll")
                  const isActive = isAllCat ? isAllSelected : selectedCategory === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(isAllCat ? ALL_KEY : cat)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md scale-105"
                          : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
                      }`}
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Trips Catalog Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            {filteredTrips.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">
                  {lang === "ar" ? "لم نجد رحلات تطابق بحثك." : "No trips match your search."}
                </p>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTrips.map((trip, i) => (
                  <TripCard key={trip.slug} trip={trip} index={i} />
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
