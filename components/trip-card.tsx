"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowUpRight, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import type { Trip } from "@/lib/trips"

export function TripCard({ trip, index = 0 }: { trip: Trip; index?: number }) {
  const { t, lang, dir } = useLanguage()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={`/trips/${trip.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={trip.image || "/placeholder.svg"}
            alt={trip.title[lang]}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 hidden dark:block bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
          <span className="absolute top-4 inline-block rounded-full bg-background/70 px-3 py-1 text-xs text-primary backdrop-blur-md ltr:left-4 rtl:right-4">
            {trip.category[lang]}
          </span>
          <span className="absolute top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 ltr:right-4 rtl:left-4 ltr:translate-x-2 rtl:-translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight className={`h-5 w-5 ${dir === "rtl" ? "-scale-x-100" : ""}`} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-balance font-serif text-2xl leading-snug text-foreground transition-colors group-hover:text-primary">
            {trip.title[lang]}
          </h3>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              {trip.location[lang]}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              {trip.duration[lang]}
            </span>
          </div>
          <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
            {trip.tagline[lang]}
          </p>
          <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                {t("fromPrice")}
              </span>
              <span className="font-serif text-2xl text-foreground">
                ${trip.priceFrom}
                <span className="text-sm text-muted-foreground">{t("perPerson")}</span>
              </span>
            </div>
            <span className="text-sm font-medium text-primary">{t("viewDetails")}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
