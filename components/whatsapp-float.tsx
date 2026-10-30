"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { whatsappLink } from "@/lib/trips"

export function WhatsappFloat() {
  const { lang } = useLanguage()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink(
            lang === "ar"
              ? "مرحبًا، أريد الاستفسار عن الرحلات السياحية إلى مصر."
              : "Hello, I would like to inquire about your tours to Egypt.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ltr:right-6 rtl:left-6"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
          <MessageCircle className="relative h-6 w-6" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
