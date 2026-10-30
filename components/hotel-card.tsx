"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { MapPin, Star, ArrowRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import type { Hotel } from "@/lib/hotels"

export function HotelCard({ hotel, index }: { hotel: Hotel; index: number }) {
  const { t, lang, dir } = useLanguage()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="h-full"
    >
      <Link
        href={`/hotels/${hotel.slug}`}
        className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl cursor-pointer"
      >
        {/* Image container */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={hotel.image || "/placeholder.svg"}
            alt={hotel.name[lang]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 dark:opacity-100" />

          {/* City badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {hotel.city[lang]}
          </div>

          {/* Rating badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-amber-500/90 px-2.5 py-1 text-xs font-semibold text-black backdrop-blur-md">
            <Star className="h-3.5 w-3.5 fill-black" />
            <span>{hotel.rating}</span>
          </div>

          {/* Stars indicator */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1">
            {Array.from({ length: hotel.stars }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
              {hotel.name[lang]}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
              {hotel.tagline[lang]}
            </p>

            {/* Top amenities preview */}
            <div className="mt-4 flex flex-wrap gap-2">
              {hotel.amenities.slice(0, 3).map((am) => (
                <span
                  key={am.id}
                  className="rounded-md bg-secondary/60 px-2.5 py-1 text-[11px] text-muted-foreground"
                >
                  {am.name[lang]}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <div>
              <span className="text-[11px] text-muted-foreground block uppercase tracking-wider">
                {t("fromPrice")}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-2xl font-semibold text-primary">
                  ${hotel.pricePerNight}
                </span>
                <span className="text-xs text-muted-foreground">{t("perNight")}</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <span>{t("viewDetails")}</span>
              <Arrow className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
