"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Languages, Sun, Moon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useTheme } from "@/components/theme-provider"
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/trips"

export function SiteHeader() {
  const { t, lang, toggle, dir } = useLanguage()
  const { theme, toggle: toggleTheme } = useTheme()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "/", label: t("navHome") },
    { href: "/trips", label: t("navTrips") },
    { href: "/hotels", label: t("navHotels") },
    { href: "/about", label: t("navAbout") },
    { href: "/#experiences", label: t("navExperiences") },
    { href: "/#contact", label: t("navContact") },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-xl border border-primary/30 bg-[#1476bb] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:shadow-md shrink-0">
            <Image
              src="/images/logo-original.png"
              alt="New Smart Travel"
              fill
              sizes="48px"
              priority
              className="object-cover"
            />
          </div>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold tracking-wide text-foreground transition-colors group-hover:text-primary">
              {t("brandName")}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {t("brandTagline")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isHash = l.href.startsWith("/#")
            const href = isHash && pathname === "/" ? l.href.substring(1) : l.href
            return (
              <Link
                key={l.href}
                href={href}
                className="relative text-sm text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={whatsappLink(
              lang === "ar"
                ? "مرحبًا، أريد الاستفسار عن الرحلات السياحية إلى مصر."
                : "Hello, I would like to inquire about your tours to Egypt.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 sm:inline-block"
          >
            {t("heroBook")}
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2.5">
                <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-primary/30 bg-[#1476bb] shrink-0">
                  <Image src="/images/logo-original.png" alt="New Smart Travel" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base font-bold text-foreground leading-tight">{t("brandName")}</span>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground">{t("brandTagline")}</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.nav
              className="flex flex-col gap-2 px-5 pt-8"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
              {links.map((l) => {
                const isHash = l.href.startsWith("/#")
                const href = isHash && pathname === "/" ? l.href.substring(1) : l.href
                return (
                  <motion.div
                    key={l.href}
                    variants={{ hidden: { opacity: 0, x: dir === "rtl" ? 30 : -30 }, show: { opacity: 1, x: 0 } }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-border py-4 font-serif text-2xl text-foreground"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                )
              })}
              <a
                href={whatsappLink(
                  lang === "ar"
                    ? "مرحبًا، أريد الاستفسار عن الرحلات السياحية إلى مصر."
                    : "Hello, I would like to inquire about your tours to Egypt.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full bg-primary px-6 py-3 text-center font-medium text-primary-foreground"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
