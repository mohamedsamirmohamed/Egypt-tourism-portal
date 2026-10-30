"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight, Maximize2, X, Image as ImageIcon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface ImageGalleryProps {
  images: string[]
  title: string
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const { dir } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  if (!images || images.length === 0) return null

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const PrevIcon = dir === "rtl" ? ChevronRight : ChevronLeft
  const NextIcon = dir === "rtl" ? ChevronLeft : ChevronRight

  return (
    <div className="space-y-4">
      {/* Main Image Frame */}
      <div className="group relative h-[380px] sm:h-[480px] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${title} - image ${currentIndex + 1}`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Counter Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-background/70 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-md border border-border">
          <ImageIcon className="h-3.5 w-3.5 text-primary" />
          <span>
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Fullscreen Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-md border border-border transition-transform hover:scale-110 hover:border-primary"
          aria-label="Expand image gallery"
        >
          <Maximize2 className="h-4 w-4" />
        </button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <div className="absolute inset-x-4 top-1/2 z-10 flex -translate-y-1/2 justify-between opacity-90 transition-opacity group-hover:opacity-100">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-md border border-border transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
              aria-label="Previous image"
            >
              <PrevIcon className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-md border border-border transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
              aria-label="Next image"
            >
              <NextIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails Strip */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                i === currentIndex
                  ? "border-primary ring-2 ring-primary/30 scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={img || "/placeholder.svg"} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close fullscreen"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative max-h-[85vh] max-w-5xl w-full h-full flex items-center justify-center">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`${title} - fullscreen view`}
                fill
                className="object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    aria-label="Previous image"
                  >
                    <PrevIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    aria-label="Next image"
                  >
                    <NextIcon className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
