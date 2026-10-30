import type { Localized } from "./trips"
export { whatsappLink, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "./trips"

export interface RoomType {
  id: string
  name: Localized
  price: number
  capacity: Localized
  description: Localized
  image: string
}

export interface HotelAmenity {
  id: string
  name: Localized
  icon: string
}

export interface NearbyAttraction {
  name: Localized
  distance: Localized
}

export interface Hotel {
  slug: string
  name: Localized
  tagline: Localized
  city: Localized
  cityCode: "cairo" | "luxor" | "aswan" | "hurghada" | "sharm" | "dahab"
  stars: number
  rating: number
  reviewsCount: number
  pricePerNight: number
  address: Localized
  coordinates: {
    lat: number
    lng: number
  }
  image: string
  gallery: string[]
  overview: Localized
  amenities: HotelAmenity[]
  roomTypes: RoomType[]
  nearbyAttractions: NearbyAttraction[]
}

export const hotels: Hotel[] = [
  {
    slug: "marriott-mena-house-cairo",
    name: {
      ar: "فندق مينـا هاوس الجيزة",
      en: "Mena House Pyramid Resort",
    },
    tagline: {
      ar: "إقامة ملكية تطل مباشرة على أهرامات الجيزة الخالدة.",
      en: "A royal stay overlooking the timeless Pyramids of Giza.",
    },
    city: { ar: "القاهرة والجيزة", en: "Cairo & Giza" },
    cityCode: "cairo",
    stars: 5,
    rating: 4.9,
    reviewsCount: 320,
    pricePerNight: 280,
    address: {
      ar: "طريق الأهرامات، الجيزة، القاهرة الكبرى",
      en: "Pyramids Road, Giza, Greater Cairo",
    },
    coordinates: { lat: 29.985, lng: 31.134 },
    image: "/images/cairo-pyramid-hotel.png",
    gallery: [
      "/images/cairo-pyramid-hotel.png",
      "/images/hero-pyramids.png",
      "/images/cairo-historic.png",
    ],
    overview: {
      ar: "يتميز فندق مينا هاوس بموقعه الأسطوري عند أقدام أهرامات الجيزة، محاطًا بحدائق غناء مساحتها 40 فدانًا. يقدم الفندق غرفًا فاخرة ذات أثاث كلاسيكي، مع إطلالات لا تُضاهى على الأهرامات ومطاعم عالمية ومسابح ساحرة.",
      en: "Nestled at the foot of the Giza Pyramids, Mena House is set amidst 40 acres of lush gardens. The resort offers opulent classic rooms with unparalleled pyramid views, fine dining, and exquisite swimming pools.",
    },
    amenities: [
      { id: "wifi", name: { ar: "إنترنت مجاني فائق السرعة", en: "Free High-Speed Wi-Fi" }, icon: "Wifi" },
      { id: "pool", name: { ar: "مسبح خارجي دافئ", en: "Heated Outdoor Pool" }, icon: "Pool" },
      { id: "pyramid-view", name: { ar: "إطلالة مباشرة على الأهرامات", en: "Direct Pyramid Views" }, icon: "Eye" },
      { id: "spa", name: { ar: "سبا ونادي صحي متكامل", en: "Full-service Spa & Wellness" }, icon: "Sparkles" },
      { id: "shuttle", name: { ar: "توصيل للمطار VIP", en: "VIP Airport Transfer" }, icon: "Car" },
      { id: "dining", name: { ar: "4 مطاعم عالمية", en: "4 Fine Dining Restaurants" }, icon: "Utensils" },
    ],
    roomTypes: [
      {
        id: "deluxe-pyramid",
        name: { ar: "غرفة ديلوكس مطلة على الأهرامات", en: "Deluxe Pyramid View Room" },
        price: 280,
        capacity: { ar: "شخصين بالغين", en: "2 Adults" },
        description: {
          ar: "غرفة أنيقة مع شرفة خاصة تطل مباشرة على الهرم الأكبر.",
          en: "Elegant room featuring a private balcony with direct view of the Great Pyramid.",
        },
        image: "/images/cairo-pyramid-hotel.png",
      },
      {
        id: "royal-suite",
        name: { ar: "جناح ملكي مع تراس خاص", en: "Royal Suite with Private Terrace" },
        price: 520,
        capacity: { ar: "شخصين + طفل", en: "2 Adults + 1 Child" },
        description: {
          ar: "جناح فسيح بتصميم فرعوني ملكي، صالة استقبال، وجاكوزي بانورامي.",
          en: "Spacious suite with royal Pharaonic design, living room, and panoramic jacuzzi.",
        },
        image: "/images/hero-pyramids.png",
      },
    ],
    nearbyAttractions: [
      { name: { ar: "أهرامات الجيزة وأبو الهول", en: "Giza Pyramids & Sphinx" }, distance: { ar: "500 متر", en: "500m" } },
      { name: { ar: "المتحف المصري الكبير (GEM)", en: "Grand Egyptian Museum" }, distance: { ar: "2 كم", en: "2 km" } },
      { name: { ar: "وسط البلد وخان الخليلي", en: "Downtown & Khan el-Khalili" }, distance: { ar: "18 كم", en: "18 km" } },
    ],
  },
  {
    slug: "winter-palace-luxor",
    name: {
      ar: "منتجع النيل الفاخر بالأقصر",
      en: "Luxor Nile Royal Resort",
    },
    tagline: {
      ar: "سحر التاريخ وضفاف النيل الهادئة في قلب الأقصر.",
      en: "Historic charm on the tranquil banks of the Nile in Luxor.",
    },
    city: { ar: "الأقصر", en: "Luxor" },
    cityCode: "luxor",
    stars: 5,
    rating: 4.8,
    reviewsCount: 245,
    pricePerNight: 220,
    address: {
      ar: "شارع كورنيش النيل، الأقصر",
      en: "Corniche El Nile Street, Luxor",
    },
    coordinates: { lat: 25.698, lng: 32.638 },
    image: "/images/luxor-nile-resort.png",
    gallery: [
      "/images/luxor-nile-resort.png",
      "/images/luxor-temple.png",
      "/images/nile-cruise.png",
    ],
    overview: {
      ar: "يقع هذا المنتجع التاريخي على كورنيش النيل مباشرة، ويوفر تجربة إقامة فاخرة مستوحاة من العصر الفيكتوري والملكي. تحيط به حدائق نباتية نادرة، ويطل على الضفة الغربية للنيل ومعابد الأقصر.",
      en: "Situated right on the Nile corniche, this historic resort delivers a Victorian royal hospitality experience surrounded by rare botanical gardens, looking over the West Bank and Luxor's temples.",
    },
    amenities: [
      { id: "nile-view", name: { ar: "إطلالة بانورامية على النيل", en: "Panoramic Nile View" }, icon: "Waves" },
      { id: "pool", name: { ar: "مسبح حراري بين الحدائق", en: "Garden Thermal Pool" }, icon: "Pool" },
      { id: "wifi", name: { ar: "واي فاي مجاني", en: "Free Wi-Fi" }, icon: "Wifi" },
      { id: "felucca", name: { ar: "مرسى فلوكة خاص", en: "Private Felucca Dock" }, icon: "Anchor" },
      { id: "breakfast", name: { ar: "إفطار ملكي شامل", en: "Royal Breakfast Included" }, icon: "Coffee" },
    ],
    roomTypes: [
      {
        id: "nile-classic",
        name: { ar: "غرفة كلاسيك مطلة على النيل", en: "Classic Nile View Room" },
        price: 220,
        capacity: { ar: "شخصين بالغين", en: "2 Adults" },
        description: {
          ar: "غرفة راقية بأسقف عالية وأثاث خشبي كلاسيكي مع شرفة مطلة على النيل.",
          en: "Refined room with high ceilings, vintage wooden decor, and a Nile balcony.",
        },
        image: "/images/luxor-nile-resort.png",
      },
      {
        id: "pharaoh-suite",
        name: { ar: "جناح الفراعنة", en: "Pharaoh Suite" },
        price: 410,
        capacity: { ar: "شخصين بالغين", en: "2 Adults" },
        description: {
          ar: "جناح ملكي مع إطلالة مفتوحة على شروق وغروب الشمس فوق النيل.",
          en: "Royal suite offering uninterrupted sunrise & sunset vistas over the Nile.",
        },
        image: "/images/luxor-temple.png",
      },
    ],
    nearbyAttractions: [
      { name: { ar: "معبد الأقصر", en: "Luxor Temple" }, distance: { ar: "300 متر", en: "300m" } },
      { name: { ar: "معبد الكرنك", en: "Karnak Temple" }, distance: { ar: "3 كم", en: "3 km" } },
      { name: { ar: "وادي الملوك", en: "Valley of the Kings" }, distance: { ar: "12 كم", en: "12 km" } },
    ],
  },
  {
    slug: "hurghada-red-sea-palace",
    name: {
      ar: "منتجع شاطئ الغردقة والسبا",
      en: "Hurghada Red Sea Palace & Spa",
    },
    tagline: {
      ar: "شواطئ فيروزية، شعاب مرجانية، ورفاهية لا تنتهي على البحر الأحمر.",
      en: "Turquoise waters, coral reefs, and endless luxury on the Red Sea.",
    },
    city: { ar: "الغردقة · البحر الأحمر", en: "Hurghada · Red Sea" },
    cityCode: "hurghada",
    stars: 5,
    rating: 4.9,
    reviewsCount: 410,
    pricePerNight: 240,
    address: {
      ar: "منطقة الممشى السياحي، الغردقة",
      en: "Tourist Promenade Area, Hurghada",
    },
    coordinates: { lat: 27.183, lng: 33.829 },
    image: "/images/hurghada-sea-resort.png",
    gallery: [
      "/images/hurghada-sea-resort.png",
      "/images/red-sea-diving.png",
      "/images/desert-safari.png",
    ],
    overview: {
      ar: "منتجع فاخر متكامل يقع على شاطئ خاص من الرمال البيضاء الناعمة. يوفر الفندق مركز غطس معتمد، منتزه مائي، 6 مسابح، مطاعم إيطالية وبحرية، وأجنحة تطل مباشرة على المياه الفيروزية.",
      en: "An all-inclusive luxury resort situated on a private soft white-sand beach. Features a certified diving center, aqua park, 6 pools, Italian & seafood dining, and beachfront suites.",
    },
    amenities: [
      { id: "beach", name: { ar: "شاطئ رملي خاص", en: "Private Sandy Beach" }, icon: "Sun" },
      { id: "diving", name: { ar: "مركز غطس وسنوركلينج", en: "Diving & Snorkeling Center" }, icon: "Compass" },
      { id: "all-inclusive", name: { ar: "نظام إقامة شامل الوجبات والمشروبات", en: "All-Inclusive Package" }, icon: "Utensils" },
      { id: "aquapark", name: { ar: "ألعاب مائية ومسابح للأطفال", en: "Aqua Park & Kid Pools" }, icon: "Waves" },
      { id: "spa", name: { ar: "سبا وجاكوزي على البحر", en: "Oceanfront Spa & Jacuzzi" }, icon: "Sparkles" },
    ],
    roomTypes: [
      {
        id: "sea-view-room",
        name: { ar: "غرفة ديلوكس مطلة على البحر", en: "Deluxe Sea View Room" },
        price: 240,
        capacity: { ar: "شخصين + طفل", en: "2 Adults + 1 Child" },
        description: {
          ar: "غرفة عصرية مع إطلالة مباشرة على مياه البحر الأحمر والغروب.",
          en: "Modern room with direct balcony views over the Red Sea turquoise waters.",
        },
        image: "/images/hurghada-sea-resort.png",
      },
      {
        id: "beachfront-suite",
        name: { ar: "جناح شاطئي مع مسبح خاص", en: "Beachfront Suite with Private Pool" },
        price: 490,
        capacity: { ar: "4 أشخاص", en: "4 Persons" },
        description: {
          ar: "جناح فاخر مع وصول مباشر للشاطئ ومسبح غطس خاص.",
          en: "Luxury suite featuring direct beach access and a private plunge pool.",
        },
        image: "/images/red-sea-diving.png",
      },
    ],
    nearbyAttractions: [
      { name: { ar: "جزيرة الجفتون", en: "Giftun Island" }, distance: { ar: "رحلة بحرية 20 دقيقة", en: "20 min boat trip" } },
      { name: { ar: "مارينا الغردقة", en: "Hurghada Marina" }, distance: { ar: "5 كم", en: "5 km" } },
      { name: { ar: "مطار الغردقة الدولي", en: "Hurghada Airport" }, distance: { ar: "8 كم", en: "8 km" } },
    ],
  },
  {
    slug: "old-cataract-aswan",
    name: {
      ar: "جراند أوتيل أسـوان والنيل",
      en: "Aswan Nile Grand Palace",
    },
    tagline: {
      ar: "إقامة أسطورية على صخور الجرانيت المطلة على جزر أسوان.",
      en: "Legendary stay atop granite rocks overlooking Aswan's islands.",
    },
    city: { ar: "أسوان", en: "Aswan" },
    cityCode: "aswan",
    stars: 5,
    rating: 4.95,
    reviewsCount: 198,
    pricePerNight: 310,
    address: {
      ar: "شارع إبطال التحرير، أسوان",
      en: "Abtal El Tahrir Street, Aswan",
    },
    coordinates: { lat: 24.083, lng: 32.888 },
    image: "/images/nile-cruise.png",
    gallery: [
      "/images/nile-cruise.png",
      "/images/luxor-temple.png",
      "/images/cairo-pyramid-hotel.png",
    ],
    overview: {
      ar: "فندق أسطوري يعود للقرن التاسع عشر، استضاف ملوك وشخصيات تاريخية عالمية. يرتفع فوق هضبة نيلية ساحرة، ويمنحك أجمل منظر لغروب الشمس في مصر خلف جزيرة النباتات ومعبد فيلة.",
      en: "A legendary 19th-century hotel that hosted royalty and historic figures. Built atop a cliff with panoramic views of Elephantine Island, offering Egypt's most celebrated sunsets.",
    },
    amenities: [
      { id: "infinity-pool", name: { ar: "مسبح إنفينيتي يطل على النيل", en: "Nile Infinity Pool" }, icon: "Waves" },
      { id: "high-tea", name: { ar: "شاي العصر الكلاسيكي على التراس", en: "Classic Afternoon Tea Terrace" }, icon: "Coffee" },
      { id: "spa", name: { ar: "حمام شرقي وسبا ملكي", en: "Royal Hammam & Spa" }, icon: "Sparkles" },
      { id: "wifi", name: { ar: "واي فاي مجاني", en: "Free Wi-Fi" }, icon: "Wifi" },
    ],
    roomTypes: [
      {
        id: "cataract-suite",
        name: { ar: "جناح الكتراكت التاريخي", en: "Historic Cataract Suite" },
        price: 310,
        capacity: { ar: "شخصين", en: "2 Adults" },
        description: {
          ar: "تصميم أندلسي نوبي فريد مع شرفة واسعة مطلة على فلوكات النيل.",
          en: "Unique Andalusian-Nubian aesthetic with expansive balcony over Nile feluccas.",
        },
        image: "/images/nile-cruise.png",
      },
    ],
    nearbyAttractions: [
      { name: { ar: "جزيرة الفنتين والقرية النوبية", en: "Elephantine & Nubian Village" }, distance: { ar: "1 كم", en: "1 km" } },
      { name: { ar: "معبد فيلة", en: "Philae Temple" }, distance: { ar: "7 كم", en: "7 km" } },
      { name: { ar: "السد العالي", en: "High Dam" }, distance: { ar: "14 كم", en: "14 km" } },
    ],
  },
  {
    slug: "sharm-el-sheikh-cliff-resort",
    name: {
      ar: "منتجع وخليج نبيـق شرم الشيخ",
      en: "Sharm El Sheikh Oasis Bay Resort",
    },
    tagline: {
      ar: "منتجع فاخر على خليج أقرام مع إطلالات ساحرة على جزيرة تيران.",
      en: "Luxury cliffside resort with stunning views of Tiran Island.",
    },
    city: { ar: "شرم الشيخ · سيناء", en: "Sharm El Sheikh · Sinai" },
    cityCode: "sharm",
    stars: 5,
    rating: 4.85,
    reviewsCount: 280,
    pricePerNight: 260,
    address: {
      ar: "خليج القرش، شرم الشيخ، جنوب سيناء",
      en: "Shark's Bay, Sharm El Sheikh, South Sinai",
    },
    coordinates: { lat: 27.962, lng: 34.392 },
    image: "/images/religious-tour.png",
    gallery: [
      "/images/religious-tour.png",
      "/images/hurghada-sea-resort.png",
      "/images/red-sea-diving.png",
    ],
    overview: {
      ar: "يتميز المنتجع بتصميمه المنحوت في الهضبة المطلة على البحر مباشرة، مع إمكانية الوصول إلى المحمية البحرية الوطنية وشعاب رأس محمد المرجانية، ومرافق عافية عالمية المستوى.",
      en: "Carved into the cliffside with panoramic sea views, providing access to Ras Mohammed national marine park, coral house reefs, and world-class spa facilities.",
    },
    amenities: [
      { id: "reef", name: { ar: "شعاب مرجانية خاصة للسنوركل", en: "House Coral Reef" }, icon: "Compass" },
      { id: "pool", name: { ar: "3 مسابح بانورامية", en: "3 Panoramic Pools" }, icon: "Pool" },
      { id: "wifi", name: { ar: "واي فاي سريع", en: "Fast Wi-Fi" }, icon: "Wifi" },
      { id: "dining", name: { ar: "5 مطاعم متخصصة", en: "5 Specialty Restaurants" }, icon: "Utensils" },
    ],
    roomTypes: [
      {
        id: "cliff-sea-room",
        name: { ar: "غرفة الهضبة المطلة على البحر", en: "Cliffside Sea View Room" },
        price: 260,
        capacity: { ar: "شخصين", en: "2 Adults" },
        description: {
          ar: "غرفة راقية توفر إطلالة مرتفعة على البحر وجزيرة تيران.",
          en: "Elevated room offering sweeping sea and Tiran Island views.",
        },
        image: "/images/religious-tour.png",
      },
    ],
    nearbyAttractions: [
      { name: { ar: "سوهو سكوير", en: "SOHO Square" }, distance: { ar: "2 كم", en: "2 km" } },
      { name: { ar: "محمية رأس محمد", en: "Ras Mohammed National Park" }, distance: { ar: "25 كم", en: "25 km" } },
      { name: { ar: "مطار شرم الشيخ", en: "Sharm Airport" }, distance: { ar: "6 كم", en: "6 km" } },
    ],
  },
]

export function getHotel(slug: string) {
  return hotels.find((h) => h.slug === slug)
}
