"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { MapPin, Navigation, Compass, Info } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import type { Localized } from "@/lib/trips"

export interface MapPoint {
  name: Localized
  lat: number
  lng: number
  description?: Localized
}

interface EgyptMapProps {
  points: MapPoint[]
  title?: string
}

export function EgyptMap({ points, title }: EgyptMapProps) {
  const { lang, t } = useLanguage()
  const [activePoint, setActivePoint] = useState<MapPoint | null>(points[0] || null)

  // Map coordinates projection formula for Egypt's geographic range (lat 22..32, lng 25..36)
  const getCoords = (lat: number, lng: number) => {
    const minLat = 23.5
    const maxLat = 31.8
    const minLng = 25.0
    const maxLng = 35.5

    const x = ((lng - minLng) / (maxLng - minLng)) * 100
    const y = 100 - ((lat - minLat) / (maxLat - minLat)) * 100

    return {
      x: Math.max(5, Math.min(95, x)),
      y: Math.max(5, Math.min(95, y)),
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium text-foreground">
              {title || t("interactiveMap")}
            </h3>
            <p className="text-xs text-muted-foreground">
              {lang === "ar" ? "اضغط على الدبابيس للاستكشاف" : "Click pins to inspect locations"}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
          <Navigation className="h-3.5 w-3.5 text-primary" />
          {points.length} {lang === "ar" ? "نقاط فريدة" : "Locations"}
        </span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* Visual Map Canvas */}
        <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden rounded-xl border border-border/80 bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 p-4">
          {/* Grid background lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Decorative Nile River curve line */}
          <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 68 95 C 64 70, 62 55, 58 40 C 55 30, 52 20, 55 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-cyan-500/80 stroke-dasharray-[4_2]"
            />
            {/* Red Sea shoreline preview */}
            <path
              d="M 85 95 Q 80 60 90 35 L 98 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-amber-500/40"
            />
          </svg>

          {/* City label overlays */}
          <div className="pointer-events-none absolute right-4 top-4 text-[10px] uppercase tracking-widest text-slate-400 opacity-60">
            Cairo · Giza · Luxor · Aswan · Red Sea
          </div>

          {/* Map Pins */}
          {points.map((pt, idx) => {
            const { x, y } = getCoords(pt.lat, pt.lng)
            const isActive = activePoint?.name[lang] === pt.name[lang]

            return (
              <div
                key={idx}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                onClick={() => setActivePoint(pt)}
              >
                <div className="group relative flex items-center justify-center">
                  {/* Ping Animation */}
                  {isActive && (
                    <span className="absolute h-8 w-8 animate-ping rounded-full bg-primary/40" />
                  )}

                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all ${
                      isActive
                        ? "bg-primary border-white text-primary-foreground shadow-lg shadow-primary/50 scale-110 z-30"
                        : "bg-slate-900/90 border-primary/60 text-primary hover:border-primary"
                    }`}
                  >
                    <MapPin className="h-4 w-4" />
                  </motion.div>

                  {/* Marker Tooltip */}
                  <div className={`absolute top-full mt-1.5 whitespace-nowrap rounded-md bg-slate-900/90 px-2.5 py-1 text-[11px] text-slate-100 shadow-md backdrop-blur-md border border-slate-700/50 pointer-events-none transition-all ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                  }`}>
                    {pt.name[lang]}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected Location Details Sidebar */}
        <div className="flex flex-col justify-between rounded-xl border border-border bg-card/60 p-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary">
              {lang === "ar" ? "الموقع المحدد" : "Selected Spot"}
            </span>
            <h4 className="mt-1 font-serif text-xl text-foreground">
              {activePoint ? activePoint.name[lang] : points[0]?.name[lang]}
            </h4>

            <div className="mt-4 space-y-2">
              {points.map((pt, i) => {
                const isSel = activePoint?.name[lang] === pt.name[lang]
                return (
                  <button
                    key={i}
                    onClick={() => setActivePoint(pt)}
                    className={`flex w-full items-center justify-between rounded-lg p-2.5 text-right text-xs transition-colors ${
                      isSel
                        ? "bg-primary/15 text-primary font-medium border border-primary/30"
                        : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-2 truncate">
                      <MapPin className={`h-3.5 w-3.5 shrink-0 ${isSel ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="truncate">{pt.name[lang]}</span>
                    </span>
                    <span className="text-[10px] opacity-70">#{i + 1}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-lg border border-border bg-background p-3 text-xs text-muted-foreground">
            <Info className="h-4 w-4 text-primary shrink-0" />
            <span>
              {lang === "ar"
                ? "تتضمن هذه الوجهة استقبال وسيارات حديثة مكيفة لموقع الزيارة."
                : "Includes pickup and private air-conditioned vehicle transfers."}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
