"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Phone, Globe, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/trips"

export function SiteFooter() {
  const { t, lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-primary/40 bg-[#1476bb] shadow-sm shrink-0">
              <Image
                src="/images/logo-original.png"
                alt="New Smart Travel"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-foreground leading-tight">{t("brandName")}</span>
              <span className="text-[11px] uppercase tracking-wider text-primary font-medium">
                {t("brandSlogan")}
              </span>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t("footerBlurb")}</p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary">{t("navTrips")}</h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            <li>
              <Link href="/#trips" className="transition-colors hover:text-foreground">
                {t("tripsTitle")}
              </Link>
            </li>
            <li>
              <Link href="/#about" className="transition-colors hover:text-foreground">
                {t("navAbout")}
              </Link>
            </li>
            <li>
              <Link href="/#experiences" className="transition-colors hover:text-foreground">
                {t("navExperiences")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary">{t("navContact")}</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <a
              href={whatsappLink(lang === "ar" ? "مرحبًا" : "Hello")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              WhatsApp
            </a>
            <a href={`tel:+2${WHATSAPP_DISPLAY}`} dir="ltr" className="flex items-center gap-2 transition-colors hover:text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              {WHATSAPP_DISPLAY}
            </a>
            <div className="mt-2 flex gap-3">
              <a href="#" aria-label="Website" className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Telegram" className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary">
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {year} {t("brandName")}. {t("footerRights")}.
        </p>
      </div>
    </footer>
  )
}
