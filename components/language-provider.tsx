"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import type { Lang } from "@/lib/trips"

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  dir: "rtl" | "ltr"
  t: (key: keyof typeof dictionary) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export const dictionary = {
  brandName: { ar: "نيو سمارت ترافل", en: "New Smart Travel" },
  brandTagline: { ar: "خبراء السياحة في مصر", en: "Egypt Travel Curators" },
  brandSlogan: { ar: "طريقك الذكي إلى العالم", en: "The Smart Way to the World" },
  navHome: { ar: "الرئيسية", en: "Home" },
  navTrips: { ar: "الرحلات", en: "Trips" },
  navHotels: { ar: "الفنادق", en: "Hotels" },
  navAbout: { ar: "من نحن", en: "About" },
  navExperiences: { ar: "التجارب", en: "Experiences" },
  navContact: { ar: "تواصل", en: "Contact" },
  langLabel: { ar: "EN", en: "ع" },
  heroKicker: { ar: "من الخارج إلى قلب مصر", en: "From Abroad to the Heart of Egypt" },
  heroTitle1: { ar: "اكتشف", en: "Discover" },
  heroTitle2: { ar: "مصر", en: "Egypt" },
  heroTitle3: { ar: "الخالدة", en: "Timeless" },
  heroSubtitle: {
    ar: "رحلات مصممة بعناية تأخذك عبر سبعة آلاف عام من الحضارة — من أهرامات الجيزة إلى شعاب البحر الأحمر.",
    en: "Thoughtfully crafted journeys through seven thousand years of civilization — from the Pyramids of Giza to the reefs of the Red Sea.",
  },
  heroCta: { ar: "استكشف الرحلات", en: "Explore Trips" },
  heroBook: { ar: "احجز عبر واتساب", en: "Book via WhatsApp" },
  scrollHint: { ar: "مرّر للأسفل", en: "Scroll" },
  aboutKicker: { ar: "من نحن", en: "About Us" },
  aboutTitle: {
    ar: "نصنع رحلات لا تُنسى إلى أرض الحضارات",
    en: "We craft unforgettable journeys to the land of civilizations",
  },
  aboutBody: {
    ar: "منذ سنوات ونحن ننظّم رحلات سياحية للزوار القادمين من كل أنحاء العالم إلى مصر. نهتم بأدق التفاصيل — من الاستقبال في المطار حتى آخر لحظة — لنمنحك تجربة أصيلة وآمنة ومريحة تجعل مصر تسكن قلبك.",
    en: "For years we have organized tours for visitors arriving in Egypt from all over the world. We care about every detail — from the airport welcome to the very last moment — to give you an authentic, safe, and comfortable experience that makes Egypt stay in your heart.",
  },
  stat1: { ar: "رحلة منظّمة", en: "Trips Organized" },
  stat2: { ar: "دولة زارتنا", en: "Countries Served" },
  stat3: { ar: "سنوات خبرة", en: "Years of Experience" },
  stat4: { ar: "رضا العملاء", en: "Client Satisfaction" },
  tripsKicker: { ar: "وجهاتنا", en: "Our Destinations" },
  tripsTitle: { ar: "رحلات مختارة بعناية", en: "Curated Journeys" },
  tripsSubtitle: {
    ar: "اختر تجربتك من بين مجموعة متنوعة تناسب كل الأذواق.",
    en: "Choose your experience from a diverse collection for every taste.",
  },
  hotelsKicker: { ar: "إقامات فاخرة", en: "Luxury Stays" },
  hotelsTitle: { ar: "أفضل الفنادق والمنتجعات", en: "Handpicked Hotels & Resorts" },
  hotelsSubtitle: {
    ar: "استمتع بإقامة استثنائية مطلة على الأهرامات، النيل، أو شواطئ البحر الأحمر.",
    en: "Enjoy an exceptional stay overlooking the Pyramids, the Nile, or Red Sea beaches.",
  },
  filterAll: { ar: "الكل", en: "All" },
  fromPrice: { ar: "يبدأ من", en: "From" },
  perPerson: { ar: "/ للفرد", en: "/ per person" },
  perNight: { ar: "/ ليلة", en: "/ night" },
  viewDetails: { ar: "عرض التفاصيل", en: "View Details" },
  expKicker: { ar: "لماذا نحن", en: "Why Us" },
  expTitle: { ar: "تجربة تهتم بأدق التفاصيل", en: "An Experience Down to the Detail" },
  exp1Title: { ar: "مرشدون خبراء", en: "Expert Guides" },
  exp1Body: {
    ar: "مرشدون متخصصون في التاريخ المصري يتحدثون لغتك.",
    en: "Specialist Egyptology guides who speak your language.",
  },
  exp2Title: { ar: "رحلات خاصة", en: "Private Tours" },
  exp2Body: {
    ar: "برامج مرنة ومصممة حسب رغبتك وميزانيتك.",
    en: "Flexible programs tailored to your wishes and budget.",
  },
  exp3Title: { ar: "أمان تام", en: "Complete Safety" },
  exp3Body: {
    ar: "تنقلات مؤمّنة ودعم على مدار الساعة طوال رحلتك.",
    en: "Secured transfers and 24/7 support throughout your trip.",
  },
  exp4Title: { ar: "أفضل الأسعار", en: "Best Value" },
  exp4Body: {
    ar: "باقات شاملة بأسعار عادلة وبدون رسوم خفية.",
    en: "All-inclusive packages at fair prices with no hidden fees.",
  },
  ctaTitle: { ar: "جاهز لرحلة العمر؟", en: "Ready for the trip of a lifetime?" },
  ctaBody: {
    ar: "تواصل معنا مباشرة على واتساب وسنصمم لك رحلتك المثالية.",
    en: "Contact us directly on WhatsApp and we will design your perfect trip.",
  },
  ctaButton: { ar: "تواصل عبر واتساب", en: "Chat on WhatsApp" },
  contactKicker: { ar: "تواصل معنا", en: "Get in Touch" },
  footerBlurb: {
    ar: "رحلات سياحية وفنادق احترافية في مصر للزوار من كل أنحاء العالم.",
    en: "Professional tours & handpicked hotels in Egypt for visitors from all over the world.",
  },
  footerRights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
  backHome: { ar: "العودة للرئيسية", en: "Back to Home" },
  backToHotels: { ar: "العودة للفنادق", en: "Back to Hotels" },
  backToTrips: { ar: "العودة للرحلات", en: "Back to Trips" },
  tripOverview: { ar: "نظرة عامة", en: "Overview" },
  tripHighlights: { ar: "أبرز المعالم", en: "Highlights" },
  tripItinerary: { ar: "برنامج الرحلة", en: "Itinerary" },
  tripIncludes: { ar: "يشمل السعر", en: "What's Included" },
  bookThisTrip: { ar: "احجز هذه الرحلة", en: "Book This Trip" },
  otherTrips: { ar: "رحلات أخرى", en: "Other Trips" },
  otherHotels: { ar: "فنادق ومقترحات أخرى", en: "Other Handpicked Hotels" },
  askAbout: { ar: "استفسر عن هذه الرحلة", en: "Ask About This Trip" },
  roomTypes: { ar: "أنواع الغرف والأسعار", en: "Room Types & Rates" },
  hotelAmenities: { ar: "خدمات ومرافق الفندق", en: "Hotel Amenities & Services" },
  hotelLocationMap: { ar: "الموقع والخريطة", en: "Location & Interactive Map" },
  nearbyAttractions: { ar: "أبرز المعالم القريبة", en: "Nearby Landmarks" },
  bookThisHotel: { ar: "حجز الفندق عبر واتساب", en: "Reserve via WhatsApp" },
  askAboutHotel: { ar: "استفسر عن توافر الغرف", en: "Inquire Room Availability" },
  photoGallery: { ar: "معرض الصور", en: "Photo Gallery" },
  interactiveMap: { ar: "خريطة الموقع والمسار", en: "Interactive Map & Itinerary" },
  searchPlaceholder: { ar: "ابحث بالاسم أو المدينة...", en: "Search by name or destination..." },
  aboutPageHeader: { ar: "حكايتنا مع مصر", en: "Our Story with Egypt" },
  aboutPageTitle: { ar: "نحن هنا لنشاركك سحر مصر وأسرارها", en: "We are here to share Egypt's magic and secrets with you" },
  aboutPageIntro: { ar: "بدأت رحلتنا من شغف عميق بالتاريخ المصري العريق ورغبة حقيقية في تقديم تجربة سفر استثنائية. نحن لسنا مجرد وكالة سياحية، بل نحن سفراء لثقافة وحضارة تمتد لآلاف السنين. نصمم برامجنا بعناية لتناسب كل الأذواق، ونضمن لكل مسافر ذكريات لا تُنسى في كل خطوة على أرض مصر.", en: "Our journey began with a deep passion for ancient Egyptian history and a genuine desire to provide an exceptional travel experience. We are not just a travel agency; we are ambassadors of a culture and civilization that spans thousands of years. We carefully design our programs to suit all tastes, ensuring every traveler leaves with unforgettable memories of Egypt." },
  aboutPageVisionTitle: { ar: "رؤيتنا", en: "Our Vision" },
  aboutPageVisionDesc: { ar: "أن نكون الخيار الأول والوجهة الموثوقة لكل مسافر يبحث عن تجربة سياحية أصيلة، راقية، وآمنة في مصر، مع تقديم معايير عالمية في جودة الخدمة.", en: "To be the first choice and the trusted destination for every traveler seeking an authentic, elegant, and safe tourism experience in Egypt, while delivering global standards of service quality." },
  aboutPageMissionTitle: { ar: "مهمتنا", en: "Our Mission" },
  aboutPageMissionDesc: { ar: "الارتقاء بمفهوم السياحة من خلال تقديم خدمات متكاملة تبدأ من لحظة التخطيط للرحلة وتستمر حتى عودة المسافر إلى وطنه محملاً بأجمل الذكريات، مع التركيز على الاهتمام بالتفاصيل وراحة العملاء.", en: "Elevating the concept of tourism by providing comprehensive services that start from the moment of trip planning and continue until the traveler returns home with the most beautiful memories, focusing on attention to detail and customer comfort." },
  aboutPageValuesTitle: { ar: "قيمنا الأساسية", en: "Our Core Values" },
  aboutPageValue1Title: { ar: "الجودة والتميز", en: "Quality & Excellence" },
  aboutPageValue1Desc: { ar: "نلتزم بتقديم أعلى مستويات الخدمة في كل تفاصيل رحلتك.", en: "We are committed to providing the highest levels of service in every detail of your trip." },
  aboutPageValue2Title: { ar: "الشفافية والأمانة", en: "Transparency & Honesty" },
  aboutPageValue2Desc: { ar: "أسعارنا واضحة وخدماتنا مطابقة لما نعد به، بلا أي رسوم خفية.", en: "Our prices are clear and our services match what we promise, with no hidden fees." },
  aboutPageValue3Title: { ar: "الاهتمام بالعميل", en: "Customer Focus" },
  aboutPageValue3Desc: { ar: "أنت لست مجرد سائح، بل ضيف نكرمه ونعمل على راحته في بلده الثاني.", en: "You are not just a tourist; you are an honored guest whom we strive to comfort in your second home." },
} as const

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang: Lang = "en"

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr")
    document.documentElement.setAttribute("lang", "en")
    try {
      window.localStorage.setItem("lang", "en")
    } catch {}
  }, [])

  const setLang = useCallback((l: Lang) => {}, [])
  const toggle = useCallback(() => {}, [])
  const t = useCallback((key: keyof typeof dictionary) => dictionary[key]["en"], [])

  return (
    <LanguageContext.Provider value={{ lang: "en", setLang, toggle, dir: "ltr", t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
