export type Lang = 'ar' | 'en';

export interface Localized {
  ar: string;
  en: string;
}

export interface ItineraryItem {
  day: Localized;
  title: Localized;
  detail: Localized;
}

export interface MapMarker {
  name: Localized;
  lat: number;
  lng: number;
  description?: Localized;
}

export interface Trip {
  slug: string;
  image: string;
  gallery: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  mapMarkers: MapMarker[];
  category: Localized;
  title: Localized;
  location: Localized;
  duration: Localized;
  priceFrom: number;
  tagline: Localized;
  overview: Localized;
  highlights: Localized[];
  itinerary: ItineraryItem[];
  includes: Localized[];
}

export const WHATSAPP_NUMBER = '201286372641';
export const WHATSAPP_DISPLAY = '01286372641';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const trips: Trip[] = [
  {
    slug: 'luxor-aswan-pharaonic',
    image: '/images/luxor-temple.png',
    gallery: [
      '/images/luxor-temple.png',
      '/images/nile-cruise.png',
      '/images/luxor-nile-resort.png'
    ],
    coordinates: {
      lat: 25.698,
      lng: 32.638
    },
    mapMarkers: [
      {
        name: { ar: 'معبد الكرنك والأقصر', en: 'Karnak & Luxor Temples' },
        lat: 25.698,
        lng: 32.638
      },
      {
        name: { ar: 'وادي الملوك وحتشبسوت', en: 'Valley of the Kings & Hatshepsut' },
        lat: 25.74,
        lng: 32.6
      },
      {
        name: { ar: 'معبد فيلة والسد العالي بأسوان', en: 'Philae Temple & High Dam Aswan' },
        lat: 24.02,
        lng: 32.88
      }
    ],
    category: {
      ar: 'آثار فرعونية وتاريخية',
      en: 'Pharaonic Wonders'
    },
    title: {
      ar: 'الأقصر وأسوان — كنوز الفراعنة والرحلة الخالدة',
      en: 'Luxor & Aswan — Treasures of the Pharaohs'
    },
    location: {
      ar: 'الأقصر · أسوان · إدفو · كوم أمبو',
      en: 'Luxor · Aswan · Edfu · Kom Ombo'
    },
    duration: {
      ar: '5 أيام · 4 ليالٍ',
      en: '5 Days · 4 Nights'
    },
    priceFrom: 780,
    tagline: {
      ar: 'برنامج متكامل يعبر بك من أسرار وادي الملوك إلى قدس أقداس معبد فيلة وسط النيل.',
      en: 'Walk among eternal temples, royal tombs, and scenic Nile shores.'
    },
    overview: {
      ar: 'رحلة سياحية وثقافية مدروسة بدقة تبدأ من مدينة الأقصر (طيبة القديمة) التي تضم ثلث آثار العالم، ثم الانتقال عبر النيل إلى أسوان ساحرة الجنوب. يشمل البرنامج إقامة فاخرة، ومرشداً سياحياً معتمداً متخصصاً في علم المصريات، ومواصلات خاصة حديثة ومكيفة، وتذاكر دخول المزارات.',
      en: 'A carefully curated cultural expedition beginning in Luxor, home to a third of the world ancient monuments, continuing south to picturesque Aswan. Includes premium accommodation, certified Egyptologist guides, private air-conditioned transport, and all monument admission fees.'
    },
    highlights: [
      {
        ar: 'جولة تفصيلية في مجمع معابد الكرنك وطريق الكباش ومعبد الأقصر المضاء ليلاً',
        en: 'Detailed tour of Karnak Complex, Avenue of Sphinxes & illuminated Luxor Temple'
      },
      {
        ar: 'استكشاف مقابر وادي الملوك ومعبد الملكة حتشبسوت وتمثالي ممنون الضخمين',
        en: 'Exploration of Valley of the Kings tombs, Hatshepsut Temple & Colossi of Memnon'
      },
      {
        ar: 'زيارة جزيرة أجيليكا ومعبد إيزيس في فيلة وجولة بانورامية على السد العالي',
        en: 'Agilkia Island, Temple of Isis at Philae, and the Aswan High Dam'
      },
      {
        ar: 'إبحار خاص بمركب الفلوكة الشراعي حول جزيرة النباتات ومحمية سالوجا وغزال',
        en: 'Private sunset felucca sail around Kitchener Island and Nilotic reserves'
      }
    ],
    itinerary: [
      {
        day: { ar: 'اليوم الأول', en: 'Day 1' },
        title: { ar: 'الاستقبال في الأقصر — معبد الأقصر وكورنيش النيل', en: 'Arrival in Luxor — Luxor Temple & Nile Corniche' },
        detail: {
          ar: 'الاستقبال والتوديع الفاخر في مطار أو محطة قطار الأقصر بسيارة خاصة حديثة، ثم التوجه إلى فندق الإقامة واستلام الغرف للاستراحة. في العصر، ننطلق لزيارة معبد الأقصر العريق ومشاهدة أعمدته الشاهقة وطريق الكباش المضاء بأجواء ساحرة ليلاً، يلي ذلك جولة حرة وممتعة في أسواق الأقصر السياحية وعشاء ترحيبي.',
          en: 'VIP meet and greet at Luxor Airport or station, followed by private transfer to check in at the hotel. In the late afternoon, explore the magnificent Luxor Temple illuminated at night with the Avenue of Sphinxes, followed by a welcome dinner.'
        }
      },
      {
        day: { ar: 'اليوم الثاني', en: 'Day 2' },
        title: { ar: 'سحر البر الشرقي — أساطير معابد الكرنك وطريق الكباش', en: 'East Bank Wonders — Karnak Temple Complex' },
        detail: {
          ar: 'بعد الإفطار، تبدأ الجولة الصباحية المبكرة في مجمع معابد الكرنك، أضخم دور عبادة دينية في التاريخ القديم، والتجول في بهو الأعمدة الـ 134 العظيمة ورؤية مسلتي حتشبسوت وتحتمس، والبحيرة المقدسة والجعران الملكي. استراحة غداء في مطعم فاخر مطل على النيل، ومساء حر للاسترخاء أو خوض تجربة منطاد الهواء الساخن (اختياري).',
          en: 'Morning visit to the monumental Karnak Temple Complex, marveling at the 134 gigantic columns of the Hypostyle Hall, royal obelisks, and the Sacred Lake. Lunch overlooking the Nile, followed by free evening or optional sunrise hot air balloon.'
        }
      },
      {
        day: { ar: 'اليوم الثالث', en: 'Day 3' },
        title: { ar: 'عظمة البر الغربي — وادي الملوك ومعبد حتشبسوت والعمالقة', en: 'West Bank Treasures — Valley of the Kings & Hatshepsut' },
        detail: {
          ar: 'الانتقال صباحاً إلى البر الغربي للأقصر؛ استكشاف 3 مقابر ملكية سرية في وادي الملوك تحتفظ بنقوشها وألوانها النابضة بالحياة منذ آلاف السنين، تليها زيارة المعبد الجنائزي الفريد للملكة حتشبسوت المنحوت في قلب جبل الدير البحري، والتوقف عند تمثالي ممنون الأسطوريين. العودة للفندق والاستعداد لرحلة أسوان.',
          en: 'Cross to the West Bank to explore 3 masterfully decorated royal tombs in the Valley of the Kings, the terraced mortuary temple of Queen Hatshepsut carved into limestone cliffs, and the Colossi of Memnon.'
        }
      },
      {
        day: { ar: 'اليوم الرابع', en: 'Day 4' },
        title: { ar: 'طريق أسوان — معبد فيلة والسد العالي ورحلة الفلوكة', en: 'Journey to Aswan — Philae Temple & High Dam' },
        detail: {
          ar: 'التحرك صباحاً باتجاه أسوان في طريق بانورامي بمحاذاة النيل. عند الوصول، نستقل قارباً بمحرك للوصول إلى جزيرة فيلة وزيارة معبد الإلهة إيزيس الذي أُنقذ بأعجوبة من الغرق. بعد ذلك نتفقد إنجاز السد العالي وبحيرة ناصر، يتبعها تجربة إبحار هادئة بمركب الفلوكة الشراعي وقت الغروب بين جزر الجرانيت والشلال الأول.',
          en: 'Scenic morning drive south to Aswan. Board a boat to Agilkia Island to visit the enchanting Temple of Isis at Philae, rescued by UNESCO. Continue to the modern engineering feat of the High Dam, ending with a serene sunset felucca sail around Elephantine Island.'
        }
      },
      {
        day: { ar: 'اليوم الخامس', en: 'Day 5' },
        title: { ar: 'قرية النوبة الساحرة والمغادرة النهائية', en: 'Nubian Cultural Village & Departure' },
        detail: {
          ar: 'إفطار صباحي لذيذ في الفندق، ثم جولة اختيارية إلى القرية النوبية غرب أسوان للتعرف على تراثهم الفريد، والبيوت الملونة، وشرب الشاي النوبي الأصيل. بعد ذلك جولة تسوق ختامية في بازار أسوان لشراء البهارات والكركديه، ثم التوصيل بسيارة خاصة لمطار أسوان للمغادرة النهائية.',
          en: 'Savor breakfast followed by an enriching excursion to the colorful Nubian Village on the West Bank, experiencing traditional hospitality, spices, and culture. Private VIP transfer to Aswan Airport for flight home.'
        }
      }
    ],
    includes: [
      { ar: 'إقامة فندقية 5 نجوم فاخرة مع وجبة الإفطار يومياً', en: '5-star luxury hotel accommodation with daily breakfast' },
      { ar: 'مرشد سياحي مصري مرخص وخبير طوال أيام الزيارات', en: 'Expert licensed Egyptologist guide throughout all tours' },
      { ar: 'جميع الانتقالات بسيارات سياحية حديثة ومكيفة خاصة', en: 'All private transportation in modern AC vehicles' },
      { ar: 'تذاكر ورسوم الدخول لجميع المعابد والمزارات المذكورة', en: 'All entrance tickets to temples & mentioned historical sites' },
      { ar: 'رحلة إبحار فلوكة خاصة على نيل أسوان', en: 'Private felucca sailing boat experience on the Nile' },
      { ar: 'خدمة استقبال وتوديع بمطاري الأقصر وأسوان', en: 'Meet and assist at Luxor and Aswan airports' }
    ]
  },
  {
    slug: 'historic-cairo',
    image: '/images/cairo-historic.png',
    gallery: [
      '/images/cairo-historic.png',
      '/images/hero-pyramids.png',
      '/images/cairo-pyramid-hotel.png'
    ],
    coordinates: {
      lat: 29.979,
      lng: 31.134
    },
    mapMarkers: [
      {
        name: { ar: 'أهرامات الجيزة وأبو الهول', en: 'Giza Pyramids & Sphinx' },
        lat: 29.979,
        lng: 31.134
      },
      {
        name: { ar: 'المتحف المصري الكبير (GEM)', en: 'Grand Egyptian Museum (GEM)' },
        lat: 29.995,
        lng: 31.119
      },
      {
        name: { ar: 'قلعة صلاح الدين وخان الخليلي', en: 'Saladin Citadel & Khan el-Khalili' },
        lat: 30.029,
        lng: 31.261
      }
    ],
    category: {
      ar: 'جولات المدن والتراث',
      en: 'Heritage & Metropolis'
    },
    title: {
      ar: 'القاهرة الكبرى — أهرامات الجيزة، متاحف العواصم وخان الخليلي',
      en: 'Historic Cairo — Pyramids to Khan el-Khalili'
    },
    location: {
      ar: 'القاهرة · الجيزة',
      en: 'Cairo · Giza'
    },
    duration: {
      ar: '3 أيام · 2 ليلة',
      en: '3 Days · 2 Nights'
    },
    priceFrom: 420,
    tagline: {
      ar: 'رحلة مكثفة تجمع بين عجائب الدنيا السبع وروح القاهرة التاريخية بأزقتها وأسواقها الألفية.',
      en: 'From the Great Pyramid to the lantern-lit alleys of Islamic Cairo.'
    },
    overview: {
      ar: 'برنامج مصمم بعناية لاستكشاف قلب مصر النابض؛ يبدأ من هضبة أهرامات الجيزة التاريخية وصرح أبو الهول الشامخ، ثم المتحف المصري والمتحف القومي للحضارة، وينتهي بجولة غامرة بين مساجد وأسبلة القاهرة الفاطمية وأسواق خان الخليلي التراثية مع تجربة طعام مصرية راقية.',
      en: 'A premier city experience covering Cairo wonders: the Giza Pyramids and Sphinx, world-class museums including the Grand Egyptian Museum and NMEC royal mummies, and the atmospheric medieval heart of Islamic Cairo and Khan el-Khalili bazaar.'
    },
    highlights: [
      {
        ar: 'جولة خاصة على هضبة الأهرامات (خوفو، خفرع، منقرع) وأبو الهول ومعبد الوادي',
        en: 'Private tour of Giza Plateau pyramids (Khufu, Khafre, Menkaure) & the Great Sphinx'
      },
      {
        ar: 'زيارة مقتنيات الملك الشاب توت عنخ آمون وقاعة المومياوات الملكية',
        en: 'Discover Tutankhamun treasures and the Royal Mummies Hall'
      },
      {
        ar: 'قلعة صلاح الدين الأيوبي وجامع محمد علي باشا المرمر ذو الإطلالة البانورامية',
        en: 'Citadel of Saladin & the Alabaster Mosque of Muhammad Ali with panoramic views'
      },
      {
        ar: 'عشاء شرقي أصيل في خان الخليلي أو مطعم مطل على نيل القاهرة',
        en: 'Authentic dining in historic Khan el-Khalili or overlooking the Cairo Nile'
      }
    ],
    itinerary: [
      {
        day: { ar: 'اليوم الأول', en: 'Day 1' },
        title: { ar: 'عظمة الفراعنة — هضبة الأهرامات وأبو الهول وسقارة', en: 'The Pharaonic Marvels — Giza Plateau & Saqqara' },
        detail: {
          ar: 'استقبال في مطار القاهرة الدولي وتوصيل خاص إلى الفندق. بعد الاستراحة، الانطلاق برفقة المرشد إلى هضبة الجيزة؛ مشاهدة الهرم الأكبر (خوفو) إحدى عجائب الدنيا السبع القديمة، والتقاط صور بانورامية من هضبة البانوراما، واستكشاف تمثال أبو الهول الأسطوري ومعبد الوادي الجرانيتي. تليها زيارة أقدم بناء حجري في التاريخ بهرم زوسر المدرج بسقارة، ثم عشاء مصري تقليدي راقٍ.',
          en: 'VIP arrival transfer from Cairo Airport to your hotel. Head to the Giza Plateau for an in-depth visit to the Great Pyramid of Khufu, Khafre, and Menkaure, followed by the enigmatic Great Sphinx. Optional extension to Saqqara Step Pyramid before a traditional dinner.'
        }
      },
      {
        day: { ar: 'اليوم الثاني', en: 'Day 2' },
        title: { ar: 'كنوز المتاحف والقاهرة الفاطمية — شارع المعز وخان الخليلي', en: 'World Museums & Medieval Cairo — Al-Muizz Street & Bazaar' },
        detail: {
          ar: 'صباح مخصص لزيارة المتحف القومي للحضارة المصرية (NMEC) واستعراض موكب المومياوات الملكية الـ 22 المحفوظة بأحدث التقنيات العالمية. بعد الظهر، التوجه إلى القاهرة التاريخية والمشي على الأقدام في شارع المعز لدين الله الفاطمي بين أكبر تجمع للآثار الإسلامية المعمارية في العالم، واختتام اليوم في مقاهي وبازارات خان الخليلي العريقة لتناول القهوة الشرقية والتسوق.',
          en: 'Morning visit to the National Museum of Egyptian Civilization (NMEC) to view the Royal Mummies Hall. Afternoon walking tour through medieval Cairo along Al-Muizz Street, exploring historic madrasas and gates, culminating in the lively alleys of Khan el-Khalili.'
        }
      },
      {
        day: { ar: 'اليوم الثالث', en: 'Day 3' },
        title: { ar: 'قلعة الجبل ومصر القديمة — المغادرة والتوديع', en: 'Citadel of Saladin, Coptic Enclave & Departure' },
        detail: {
          ar: 'إفطار شهي، ثم التوجه إلى قلعة صلاح الدين الأيوبي وزيارة جامع محمد علي باشا الرخامي بمآذنه العثمانية الرشيقة والتمتع ببانوراما تكشف معالم القاهرة كاملة. استكمال الجولة في مجمع الأديان بمصر القديمة وزيارة الكنيسة المعلقة ومغارة العائلة المقدسة بمعبد بن عزرا، ثم التوصيل لمطار القاهرة الدولي لرحلة العودة.',
          en: 'Tour the Saladin Citadel and Muhammad Ali Mosque with breathtaking city skyline vistas. Continue to Old Coptic Cairo to visit the Hanging Church and Abu Serga crypt. Private transfer to Cairo International Airport for final departure.'
        }
      }
    ],
    includes: [
      { ar: 'إقامة ليلتين في فندق 5 نجوم راقٍ بالقاهرة مع الإفطار', en: '2 nights 5-star hotel stay in Cairo with daily breakfast' },
      { ar: 'سيارة سياحية خاصة مكيفة وسائق محترف طوال الجولات', en: 'Private modern AC transport with dedicated professional driver' },
      { ar: 'مرشد سياحي مصريات معتمد مرافق في كل الجولات', en: 'Certified Egyptologist guide accompanying all excursions' },
      { ar: 'تذاكر دخول منطقة الأهرامات والمتاحف والقلعة المذكورة', en: 'Entrance tickets to Pyramids plateau, Citadel & museums' },
      { ar: 'مياه معدنية ومشروبات خفيفة خلال التنقلات اليومية', en: 'Bottled water and refreshments during daily touring' }
    ]
  },
  {
    slug: 'red-sea-diving',
    image: '/images/red-sea-diving.png',
    gallery: [
      '/images/red-sea-diving.png',
      '/images/hurghada-sea-resort.png',
      '/images/desert-safari.png'
    ],
    coordinates: {
      lat: 27.257,
      lng: 33.812
    },
    mapMarkers: [
      {
        name: { ar: 'مارينا الغردقة والمنتجعات', en: 'Hurghada Marina & Coast' },
        lat: 27.257,
        lng: 33.812
      },
      {
        name: { ar: 'جزيرة الجفتون ومحمية المجاويش', en: 'Giftun Island Marine Reserve' },
        lat: 27.23,
        lng: 33.95
      },
      {
        name: { ar: 'مواقع غطس الشعاب ومضيق جوبال', en: 'Gubal Strait Coral Reefs' },
        lat: 27.4,
        lng: 33.88
      }
    ],
    category: {
      ar: 'استجمام وبحار وغوص',
      en: 'Coastal & Marine'
    },
    title: {
      ar: 'الغردقة والبحر الأحمر — عوالم المرجان والجزر البكر',
      en: 'Red Sea Diving & Giftun Island Escapes'
    },
    location: {
      ar: 'الغردقة · البحر الأحمر',
      en: 'Hurghada · Red Sea'
    },
    duration: {
      ar: '4 أيام · 3 ليالٍ',
      en: '4 Days · 3 Nights'
    },
    priceFrom: 550,
    tagline: {
      ar: 'استرخِ في أفخم منتجعات شاطئية واكتشف أنقى مياه بحرية وشعاب مرجانية في العالم.',
      en: 'World-renowned coral reefs, crystalline waters, and premier beach resorts.'
    },
    overview: {
      ar: 'برنامج سياحي شاطئي متكامل يجمع بين الاستجمام الفاخر في أرقى منتجعات الغردقة، والإبحار على يخت سياحي حديث إلى جزر الجفتون الخلابة، وممارسة السباحة والسنوركلينج والغوص وسط أسماك وشعاب نادرة، مع عشاء سفاري بدوي ساحر بين الجبال الصحراوية.',
      en: 'The ultimate marine escape featuring luxury resort relaxation along the Hurghada coast, private or VIP yacht charters to Giftun Island, world-class diving and snorkeling over vibrant coral ecosystems, and an atmospheric Bedouin desert safari evening.'
    },
    highlights: [
      {
        ar: 'رحلة يخت ليوم كامل إلى جزيرة الجفتون مع بوفيه غداء بحري طازج على المتن',
        en: 'Full-day luxury yacht cruise to Giftun Island with freshly prepared seafood lunch'
      },
      {
        ar: 'وقفتان سنوركلينج في أشهر وأغنى حدائق المرجان برفقة غواصين محترفين',
        en: 'Two guided snorkeling and diving stops at premier protected coral reef sites'
      },
      {
        ar: 'سفاري سيارات الدفع الرباعي (بيتش باجي) وحفل شواء بدوي أصيل تحت النجوم',
        en: 'Sunset quad bike desert safari with authentic Bedouin BBQ and stargazing'
      },
      {
        ar: 'إقامة كاملة شاملة الوجبات في منتجع شاطئي 5 نجوم ذو شاطئ رملي خاص',
        en: 'All-inclusive 5-star beachfront resort stay with private sandy lagoon'
      }
    ],
    itinerary: [
      {
        day: { ar: 'اليوم الأول', en: 'Day 1' },
        title: { ar: 'الوصول إلى الغردقة — الاسترخاء على الشاطئ وممشى المارينا', en: 'Arrival in Hurghada — Beachfront Bliss & Marina Stroll' },
        detail: {
          ar: 'الاستقبال في مطار الغردقة الدولي بسيارة مريحة والتوصيل إلى المنتجع الشاطئي الفاخر لاستلام الغرف. قضاء بقية اليوم بالاسترخاء على شاطئ البحر الأحمر والسباحة في حمامات السباحة واللاجون الخاصة. مساءً جولة ممتعة في مارينا الغردقة الجديدة وتناول العشاء وسط اليخوت الفارهة.',
          en: 'Warm airport welcome and private transfer to your 5-star beachfront resort. Spend the afternoon unwinding by private turquoise waters or infinity pools. In the evening, enjoy a sunset stroll and seaside dinner along Hurghada Marina Boulevard.'
        }
      },
      {
        day: { ar: 'اليوم الثاني', en: 'Day 2' },
        title: { ar: 'رحلة اليخت البحري — جزيرة الجفتون ومحميات المرجان', en: 'VIP Yacht Cruise — Giftun Island & Coral Reef Snorkeling' },
        detail: {
          ar: 'بعد الإفطار، الانطلاق إلى مرسى اليخوت للصعود على متن يخت سياحي حديث. الإبحار نحو جزيرة الجفتون (شاطئ أورانج باي أو المحمية)، وقضاء ساعتين على الرمال البيضاء الناعمة. بعد ذلك يواصل اليخت الإبحار لوقفتي سنوركلينج في أعماق نقية لرؤية أسراب الدلافين والشعاب الملونة، مع تقديم بوفيه غداء بحري شهي وفواكه موسمية.',
          en: 'Morning departure aboard a VIP cruise boat towards Giftun Island. Relax on the powdery white sand beaches of Orange Bay or Mahmya. Cruise to two secluded offshore reef locations for snorkeling and diving among marine life, accompanied by a chef-prepared onboard lunch.'
        }
      },
      {
        day: { ar: 'اليوم الثالث', en: 'Day 3' },
        title: { ar: 'مغامرة الصحراء وسفاري غروب الشمس وعشاء البدو', en: 'Desert Safari Adventure — Quad Biking & Bedouin Night' },
        detail: {
          ar: 'صباح حر للاستمتاع برياضات الشاطئ المائية أو الاسترخاء في السبا. في تمام الساعة الثالثة عصراً، تبدأ مغامرة السفاري بسيارات الدفع الرباعي والبيتش باجي عبر الكثبان الرملية وسلاسل جبال البحر الأحمر، وزيارة قرية بدوية تقليدية، وركوب الجمال، والتمتع بمأدبة عشاء مشويات بدوية أصيلة وعرض فلكلوري تحت قبة السماء الصافية.',
          en: 'Leisurely morning enjoying water sports or resort spa amenities. In the afternoon, embark on an exhilarating quad bike and 4x4 desert safari across the Red Sea mountains. Visit a nomadic Bedouin camp, ride camels, and enjoy a grilled feast with authentic music beneath star-filled skies.'
        }
      },
      {
        day: { ar: 'اليوم الرابع', en: 'Day 4' },
        title: { ar: 'سباحة صباحية والتسوق ثم التوديع والمغادرة', en: 'Morning Dip, Souvenirs & Final Farewell' },
        detail: {
          ar: 'إفطار أخير مع إطلالة بانورامية على مياه البحر الصافية، والتقاط آخر الصور التذكارية. جولة قصيرة لشراء الهدايا التذكارية وزيوت الأعشاب الطبيعية، ثم التوصيل بسيارة خاصة مكيفة إلى مطار الغردقة الدولي لرحلة العودة.',
          en: 'Enjoy a leisurely breakfast and a final swim in the azure waters. Check-out and brief shopping stop in town for local oils and handicrafts before private airport transfer for your departure flight.'
        }
      }
    ],
    includes: [
      { ar: 'إقامة 3 ليالٍ في منتجع 5 نجوم (شامل الوجبات والمشروبات All Inclusive)', en: '3 nights in a 5-star beachfront resort (All-Inclusive food & beverage)' },
      { ar: 'رحلة يخت سياحي يوم كامل مع معدات السنوركلينج وغداء بحري مفتوح', en: 'Full-day VIP yacht cruise with snorkeling gear & open buffet lunch' },
      { ar: 'رحلة سفاري بدوي كاملة بسيارات 4x4 والبيتش باجي وعشاء مشويات', en: 'Complete desert safari with quad bikes, 4x4, camel ride & Bedouin BBQ' },
      { ar: 'خدمة استقبال وتوديع خاصة من وإلى مطار الغردقة الدولي', en: 'Private round-trip VIP airport transfers at Hurghada' },
      { ar: 'رسوم بيئية وتصاريح المحميات الطبيعية البحرية', en: 'All marine reserve conservation fees and permits' }
    ]
  },
  {
    slug: 'desert-safari',
    image: '/images/desert-safari.png',
    gallery: [
      '/images/desert-safari.png',
      '/images/hero-pyramids.png',
      '/images/cairo-historic.png'
    ],
    coordinates: {
      lat: 28.353,
      lng: 28.868
    },
    mapMarkers: [
      {
        name: { ar: 'الواحات البحرية وقرية الباويطي', en: 'Bahariya Oasis & Bawiti' },
        lat: 28.353,
        lng: 28.868
      },
      {
        name: { ar: 'الصحراء السوداء وجبل المرصوص', en: 'Black Desert & Volcanic Cones' },
        lat: 28.18,
        lng: 28.75
      },
      {
        name: { ar: 'الصحراء البيضاء وجبل الكريستال', en: 'White Desert & Crystal Mountain' },
        lat: 27.38,
        lng: 28.18
      }
    ],
    category: {
      ar: 'مغامرات وسفاري وصحراء',
      en: 'Desert Safari'
    },
    title: {
      ar: 'الصحراء البيضاء والسوداء — ليلة أسطورية تحت النجوم والواحات',
      en: 'White Desert & Bahariya Oasis Expedition'
    },
    location: {
      ar: 'الواحات البحرية · الصحراء الغربية',
      en: 'Bahariya Oasis · Western Desert'
    },
    duration: {
      ar: '3 أيام · 2 ليلة',
      en: '3 Days · 2 Nights'
    },
    priceFrom: 390,
    tagline: {
      ar: 'تكوينات طباشيرية بيضاء نحتتها الرياح وكهوف كريستالية وتخييم ملكي تحت مجرة درب التبانة.',
      en: 'Chalk monoliths, crystal formations, and an unforgettable night under galactic skies.'
    },
    overview: {
      ar: 'مغامرة فريدة إلى أعماق الصحراء الغربية المصرية المصنفة كإحدى أغرب وأجمل بقاع العالم الطبيعية. تبدأ الرحلة من الواحات البحرية وعيونها الكبريتية الحارة، ثم اختراق الصحراء السوداء البركانية وجبل الكريستال، والمبيت في محمية الصحراء البيضاء بتكويناتها الصخرية الطباشيرية الشبيهة بسطح القمر.',
      en: 'An otherworldly eco-adventure deep into Egypt Western Desert. Travel from Cairo to the lush palm groves of Bahariya Oasis, cross the volcanic peaks of the Black Desert, marvel at Crystal Mountain, and camp in luxury beneath the surreal chalk sculptures of the White Desert National Park.'
    },
    highlights: [
      {
        ar: 'مبيت وتخييم بيئي فاخر في قلب الصحراء البيضاء مع خيام مجهزة ونار المخيم',
        en: 'Eco-glamping overnight in the heart of White Desert with campfire and stargazing'
      },
      {
        ar: 'مشاهدة أشهر الصخور المنحوتة طبيعياً: صخرة المشروم (الفطر)، الدجاجة، والخيام',
        en: 'Witness iconic wind-carved limestone sculptures: Mushroom rock, Chicken rock & Tents'
      },
      {
        ar: 'زيارة جبل الكريستال النادر والسباحة في ينابيع المياه الكبريتية الحارة بالواحات',
        en: 'Explore rare Crystal Mountain and soak in natural thermal hot springs at the oasis'
      },
      {
        ar: 'مغامرة التزلج على الرمال (ساند بوردنج) على كثبان وادي العقبات الرملية',
        en: 'Thrilling sandboarding over the dramatic golden dunes of Agabat Valley'
      }
    ],
    itinerary: [
      {
        day: { ar: 'اليوم الأول', en: 'Day 1' },
        title: { ar: 'من صخب العاصمة إلى الواحات البحرية وعيون المياه الحارة', en: 'From Cairo to Bahariya Oasis & Warm Thermal Springs' },
        detail: {
          ar: 'الانطلاق صباحاً بسيارة لاند كروزر 4x4 حديثة من القاهرة باتجاه الواحات البحرية (360 كم). عند الوصول إلى واحة الباويطي، نتناول وجبة غداء واحاتية طازجة في نزل بيئي تقليدي. بعد ذلك، نقوم بجولة وسط غابات النخيل وبساتين الزيتون، وزيارة جبل الإنجليز ذي الإطلالة البانورامية، والسباحة في عين بئر سيجام الكبريتية الساخنة الطبيعية، والمبيت في الفندق الواحاتي.',
          en: 'Morning private 4x4 departure from Cairo traversing the desert highway to Bahariya Oasis (approx. 4 hours). Arrive at Bawiti village for a home-cooked oasis lunch among palm orchards. Visit the English Mountain for sunset views, bathe in natural thermal hot springs, and settle into a desert lodge.'
        }
      },
      {
        day: { ar: 'اليوم الثاني', en: 'Day 2' },
        title: { ar: 'الصحراء السوداء، جبل الكريستال ووادي العقبات إلى الصحراء البيضاء', en: 'Black Desert, Crystal Mountain & White Desert Glamping' },
        detail: {
          ar: 'بعد الإفطار، ننطلق في عمق الصحراء بسيارات الدفع الرباعي؛ أولى المحطات هي الصحراء السوداء بتلالها البركانية المغطاة بالبازلت الأسود وصعود جبل المرصوص. ثم التوجه إلى جبل الكريستال المكون بالكامل من بلورات الكوارتز الكريستالية النادرة. نواصل المسير إلى وادي العقبات الأخاذ للتزلج على الرمال، والوصول قبل الغروب لمحمية الصحراء البيضاء حيث ننصب المخيم، ونتناول عشاء الدجاج المندي البدوي المطهو في حفرة الرمل مع جلسة سمر حول النار.',
          en: 'Board rugged 4x4s into the Black Desert with its dramatic dark volcanic cones. Continue to the shimmering quartz veins of Crystal Mountain and the sandstone spires of Agabat Valley for sandboarding. Arrive at the surreal White Desert at golden hour. Enjoy a traditional Bedouin campfire meal under brilliant constellations.'
        }
      },
      {
        day: { ar: 'اليوم الثالث', en: 'Day 3' },
        title: { ar: 'شروق ساحر بين الصخور الطباشيرية والعودة للقاهرة', en: 'Sunrise Among Chalk Castles & Return to Cairo' },
        detail: {
          ar: 'الاستيقاظ على مشهد شروق الشمس الذهبي الذي يحوّل الصخور الطباشيرية البيضاء إلى درجات الوردي والأصفر في لوحة طبيعية آسرة. تناول فطور بدوي شامي ساخن وقهوة عربية بالهيل. جولة استكشافية حول صخور الفطر والجمال المنحوتة، ثم العودة عبر الواحة إلى القاهرة، مع توصيل مريح إلى فندقك أو المطار.',
          en: 'Awake to a breathtaking desert sunrise bathing the chalk formations in rose-gold hues. Enjoy hot Bedouin breakfast and cardamom coffee. Tour the new White Desert sculptures before journeying back through Bahariya to Cairo, arriving by late afternoon.'
        }
      }
    ],
    includes: [
      { ar: 'سيارات جيب لاند كروزر 4x4 مجهزة خصيصاً للصحراء مع سائقين بدو محترفين', en: 'Dedicated 4x4 Land Cruisers equipped for desert terrain with Bedouin drivers' },
      { ar: 'إقامة ليلة في نزل بيئي بالواحات + ليلة تخييم ملكي كامل بالصحراء البيضاء', en: '1 night oasis eco-lodge + 1 night full luxury camping gear in the White Desert' },
      { ar: 'جميع الوجبات (إفطار، غداء، عشاء بدوي مشوي) والمياه المعدنية والمشروبات', en: 'All meals (breakfast, lunch, Bedouin BBQ dinners), mineral water & tea' },
      { ar: 'رسوم وتصاريح دخول محمية الصحراء البيضاء ومعدات التزلج على الرمال', en: 'White Desert National Park permits and sandboarding equipment' },
      { ar: 'الانتقال ذهاباً وإياباً من وإلى أي مكان في القاهرة أو الجيزة', en: 'Round-trip private transfers from any hotel or airport in Cairo' }
    ]
  },
  {
    slug: 'religious-holy-family',
    image: '/images/religious-tour.png',
    gallery: [
      '/images/religious-tour.png',
      '/images/cairo-historic.png',
      '/images/luxor-temple.png'
    ],
    coordinates: {
      lat: 28.539,
      lng: 33.975
    },
    mapMarkers: [
      {
        name: { ar: 'مصر القديمة والكنيسة المعلقة', en: 'Old Cairo & Hanging Church' },
        lat: 30.005,
        lng: 31.23
      },
      {
        name: { ar: 'أديرة وادي النطرون الأربعة', en: 'Wadi El Natrun Monasteries' },
        lat: 30.4,
        lng: 30.33
      },
      {
        name: { ar: 'دير سانت كاترين وجبل موسى', en: 'Saint Catherine & Mount Sinai' },
        lat: 28.556,
        lng: 33.976
      }
    ],
    category: {
      ar: 'سياحة دينية وتاريخية',
      en: 'Spiritual & Heritage'
    },
    title: {
      ar: 'مسار العائلة المقدسة وجبل موسى وسانت كاترين',
      en: 'Holy Family Trail & Mount Sinai Pilgrimage'
    },
    location: {
      ar: 'القاهرة · وادي النطرون · سيناء · سانت كاترين',
      en: 'Cairo · Wadi El Natrun · Sinai · Saint Catherine'
    },
    duration: {
      ar: '6 أيام · 5 ليالٍ',
      en: '6 Days · 5 Nights'
    },
    priceFrom: 890,
    tagline: {
      ar: 'رحلة إيمانية وروحية عبر أقدم كنائس وأديرة العالم وصعود جبل الوصايا العشر بسيناء.',
      en: 'Retrace sacred paths, ancient monastic sanctuaries, and the historic ascent of Mount Sinai.'
    },
    overview: {
      ar: 'برنامج روحي وتاريخي فريد يقتفي خطى العائلة المقدسة أثناء لجوئها إلى مصر؛ يمر بمجمع أديان مصر القديمة، وأديرة وادي النطرون التي تأسست في القرن الرابع الميلادي وتضم أندر المخطوطات، ثم التوجه إلى شبه جزيرة سيناء المباركة لزيارة دير سانت كاترين المدرج على قائمة اليونسكو وخوض تجربة صعود جبل موسى.',
      en: 'An uplifting spiritual journey following the Flight of the Holy Family in Egypt. Encompasses historic Old Cairo shrines, the UNESCO-recognized 4th-century desert monasteries of Wadi El Natrun, and the sacred peaks of Sinai to visit Saint Catherine Monastery and summit Mount Sinai.'
    },
    highlights: [
      {
        ar: 'زيارة كنيسة أبي سرجة (الكهف الذي لجأت إليه العائلة المقدسة) والكنيسة المعلقة',
        en: 'The Crypt of Holy Family at Abu Serga Church and the 3rd-century Hanging Church'
      },
      {
        ar: 'جولة روحية وتاريخية في أديرة وادي النطرون (السريان، الباراموس، الأنبا بيشوي)',
        en: 'Spiritual visit to Wadi El Natrun desert monasteries with ancient icons and relics'
      },
      {
        ar: 'زيارة دير سانت كاترين وشجرة العليقة الملتهبة والمكتبة العريقة ومتحف الأيقونات',
        en: 'Explore Saint Catherine Monastery, the Burning Bush and iconic ancient relics'
      },
      {
        ar: 'صعود جبل موسى (حوريب) وقت الفجر لمشاهدة أروع شروق شمس مهيب من قمة الجبل',
        en: 'Ascent of Mount Sinai to experience a sacred, unforgettable sunrise from the summit'
      }
    ],
    itinerary: [
      {
        day: { ar: 'اليوم الأول', en: 'Day 1' },
        title: { ar: 'مصر القديمة وكنائس مسار العائلة المقدسة بالقاهرة', en: 'Old Cairo Enclave & The Holy Family Crypt' },
        detail: {
          ar: 'استقبال كبار الزوار في مطار القاهرة الدولي والتوصيل إلى الفندق. ننطلق بعد الظهر إلى مصر القديمة لزيارة كنيسة القديس سرجيوس (أبو سرجة) التي تضم المغارة التي استقرت فيها العائلة المقدسة لعدة أشهر، ثم زيارة الكنيسة المعلقة المعلقة على برجين رومانيين، وكنيسة الشهيد ماري جرجس، والمتحف القبطي الذي يضم روائع الفن القبطي.',
          en: 'VIP arrival in Cairo and private transfer to hotel. Explore Coptic Cairo: Saints Sergius and Bacchus Church housing the Holy Family crypt, the architectural marvel of the Hanging Church, Church of Saint George, and the rich Coptic Museum.'
        }
      },
      {
        day: { ar: 'اليوم الثاني', en: 'Day 2' },
        title: { ar: 'مهد الرهبنة العالمية — أديرة وادي النطرون العامرة', en: 'Cradle of Monasticism — Wadi El Natrun Monasteries' },
        detail: {
          ar: 'التحرك صباحاً غرب الدلتا إلى صحراء وادي النطرون؛ زيارة دير السريان التاريخي وكنيسة العذراء مريم ذات الفريسكات السريانية النادرة، ثم دير القديس الأنبا بيشوي مع رؤية جسده المقدس ومكتبة المخطوطات، ثم دير الباراموس أقدم أديرة الوادي، مع لقاء مع أحد رهبان الأديرة للحديث عن الحياة الروحية وتاريخ المكان. العودة للقاهرة مساءً.',
          en: 'Day trip to Wadi El Natrun, cradle of Christian monasticism since the 4th century. Tour Deir al-Surian with unique ancient frescoes, Monastery of Saint Bishoy, and Monastery of the Romans (Al-Baramus), interacting with monks on daily monastic life.'
        }
      },
      {
        day: { ar: 'اليوم الثالث', en: 'Day 3' },
        title: { ar: 'كنيسة العذراء بالمعادي والانطلاق نحو شبه جزيرة سيناء', en: 'Virgin Mary at Maadi & Scenic Drive to South Sinai' },
        detail: {
          ar: 'زيارة كنيسة السيدة العذراء مريم بالمعادي المطلة مباشرة على النيل، حيث عُثر على الكتاب المقدس عائماً على سطح الماء ومفتوحاً على سفر إشعياء "مبارك شعبي مصر". بعد ذلك ننطلق شرقاً عبر نفق الشهيد أحمد حمدي عابرين قناة السويس إلى جنوب شبه جزيرة سيناء ومدينة سانت كاترين الساحرة، واستلام الغرف بالفندق للاستراحة المبكرة.',
          en: 'Visit the Church of the Virgin Mary at Maadi on the Nile embankment where the Holy Family boarded a boat to Upper Egypt. Cross beneath the Suez Canal into the dramatic red granite mountains of Sinai. Check in at your Saint Catherine hotel for an early evening rest.'
        }
      },
      {
        day: { ar: 'اليوم الرابع', en: 'Day 4' },
        title: { ar: 'صعود جبل موسى عند الفجر وزيارة دير سانت كاترين', en: 'Dawn Ascent of Mount Sinai & Saint Catherine Monastery' },
        detail: {
          ar: 'في تمام الساعة الواحدة بعد منتصف الليل، يبدأ صعود جبل موسى برفقة دليل بدوي معتمد (سيراً على الأقدام أو بالجمال اختياري). الوصول للقمة قبيل الفجر لمشاهدة واحدة من أروع وأقدس لحظات شروق الشمس في العالم. النزول صباحاً لزيارة دير سانت كاترين المحصن، ومشاهدة شجرة العليقة الملتهبة الحية، وبئر موسى، والمتحف المحتوي على أقدم المخطوطات بعد الفاتيكان، والراحة بعد الظهر.',
          en: 'Midnight ascent of Mount Sinai (by foot or camel) guided by local Bedouin experts. Reach the summit to witness an unforgettable sunrise where Moses received the Ten Commandments. Descend to tour Saint Catherine Monastery, the Burning Bush, and the world-famous icon gallery.'
        }
      },
      {
        day: { ar: 'اليوم الخامس', en: 'Day 5' },
        title: { ar: 'وادي الراحة ودير البنات ثم الانتقال إلى شاطئ دهب للاستجمام', en: 'Valley of Rest & Coastal Respite in Dahab' },
        detail: {
          ar: 'إفطار هادئ، ثم زيارة وادي الراحة ومقام النبي هارون، وزيارة دير الراهبات الصغير. بعد ذلك نتحرك بالسيارة في طريق ساحلي خلاب نحو مدينة دهب على خليج العقبة لقضاء يوم استجمام وتأمل على شاطئ البحر الأحمر وتناول الغداء البحري الشهي، والمبيت في منتجع دهب.',
          en: 'Visit the Valley of Rest and Mount Aaron shrine. Take a picturesque coastal drive to the bohemian seaside town of Dahab on the Gulf of Aqaba. Enjoy an afternoon of gentle relaxation by the turquoise sea, seafood dinner, and overnight resort stay.'
        }
      },
      {
        day: { ar: 'اليوم السادس', en: 'Day 6' },
        title: { ar: 'العودة إلى القاهرة أو مطار شرم الشيخ والمغادرة النهائية', en: 'Return Journey & International Departure' },
        detail: {
          ar: 'إفطار صباحي لذيذ على نسيم البحر. بعد ذلك يتم التوصيل إلى مطار شرم الشيخ الدولي أو العودة براً إلى القاهرة بحسب جدول رحلة الطيران للعميل، مع توديع كبار الزوار ومتابعة كافة إجراءات السفر حتى صعود الطائرة.',
          en: 'Enjoy breakfast with sea views. Private VIP transfer to Sharm El Sheikh Airport for direct international departure, or road transfer back to Cairo International Airport.'
        }
      }
    ],
    includes: [
      { ar: 'إقامة 5 ليالٍ في فنادق 4 و 5 نجوم (القاهرة، سانت كاترين، دهب) مع الإفطار', en: '5 nights in premium hotels (Cairo, St. Catherine, Dahab) with breakfast' },
      { ar: 'مرشد سياحي ديني وتاريخي متخصص مرافق طوال البرنامج', en: 'Specialist heritage and spiritual guide throughout the journey' },
      { ar: 'سيارة سياحية خاصة مكيفة حديثة وسائق محترف لكافة التنقلات', en: 'Private modern AC bus/van with professional driver for all transfers' },
      { ar: 'دليل بدوي مرخص معتمد لصعود جبل موسى والمشاعل الليلية', en: 'Licensed local Bedouin mountain guide for Mount Sinai ascent' },
      { ar: 'جميع تذاكر المتاحف والأديرة ورسوم المحميات الطبيعية بسيناء', en: 'All entrance tickets to Coptic Museum, monasteries, and Sinai parks' }
    ]
  },
  {
    slug: 'nile-cruise',
    image: '/images/nile-cruise.png',
    gallery: [
      '/images/nile-cruise.png',
      '/images/luxor-temple.png',
      '/images/luxor-nile-resort.png'
    ],
    coordinates: {
      lat: 25.698,
      lng: 32.638
    },
    mapMarkers: [
      {
        name: { ar: 'الأقصر والبرين الشرقي والغربي', en: 'Luxor East & West Banks' },
        lat: 25.698,
        lng: 32.638
      },
      {
        name: { ar: 'معبد حورس بإدفو ومعبد كوم أمبو', en: 'Edfu & Kom Ombo Temples' },
        lat: 24.978,
        lng: 32.873
      },
      {
        name: { ar: 'أسوان ومعبد فيلة والسد العالي', en: 'Aswan, Philae & High Dam' },
        lat: 24.088,
        lng: 32.899
      }
    ],
    category: {
      ar: 'كروز وبواخر نيلية فاخرة',
      en: 'Nile Cruise & Luxury'
    },
    title: {
      ar: 'كروز النيل الفاخر — 5 نجوم ديلاكس بين الأقصر وأسوان',
      en: '5-Star Luxury Nile River Cruise'
    },
    location: {
      ar: 'الأقصر · إسنا · إدفو · كوم أمبو · أسوان',
      en: 'Luxor · Esna · Edfu · Kom Ombo · Aswan'
    },
    duration: {
      ar: '5 أيام · 4 ليالٍ',
      en: '5 Days · 4 Nights'
    },
    priceFrom: 920,
    tagline: {
      ar: 'أفخم بواخر النيل العائمة؛ إقامة فندقية شاملة وبوفيهات ملكية وتوقف يومي عند أهم معابد مصر.',
      en: 'Sail timeless waters in 5-star elegance with fine dining, sundecks, and daily temple stops.'
    },
    overview: {
      ar: 'رحلة الأحلام على نهر النيل الخالد على متن باخرة سياحية 5 نجوم ديلوكس (Full Board). استيقظ كل صباح على منظر ضفاف النيل البانورامية المتغيرة وأشجار النخيل والقرى المصرية العريقة، واستمتع بحمام السباحة على السطح، وبوفيهات المأكولات العالمية، وحفلات الجلابية والفلكلور المسائية، مع زيارات شاملة لكافة معابد مسار الإبحار.',
      en: 'The quintessential Egyptian experience aboard a 5-star deluxe Nile cruise vessel on full board. Awaken each morning to ever-changing riverbanks, fertile date groves, and ancient temples. Features rooftop sun deck pools, gourmet dining, nightly folklore galas, and comprehensive excursions.'
    },
    highlights: [
      {
        ar: 'إقامة 4 ليالٍ شاملة كامل الوجبات (إفطار، غداء، عشاء بوفيه مفتوح) على فندق عائم 5 نجوم',
        en: '4 nights full board accommodation (breakfast, lunch, dinner) on 5-star deluxe floating hotel'
      },
      {
        ar: 'مشاهدة عبور الباخرة لهويس إسنا النهري الفريد من على سطح الباخرة',
        en: 'Experience the unique passage through the Esna Lock from the open panoramic sun deck'
      },
      {
        ar: 'زيارة معبد حورس بإدفو بعربات الحنطور ومعبد كوم أمبو المشترك للإلهين سوبك وحورس',
        en: 'Carriage ride to Temple of Horus at Edfu and the dual riverside Temple of Kom Ombo'
      },
      {
        ar: 'حفلة جلابية مصرية وعروض الرقص الشرقي والتنورة التراثية المسائية',
        en: 'Onboard Egyptian Galabeya party, belly dancing, and mystical Tanoura folk shows'
      }
    ],
    itinerary: [
      {
        day: { ar: 'اليوم الأول', en: 'Day 1' },
        title: { ar: 'الصعود على الباخرة بالأقصر — معابد الكرنك والأقصر', en: 'Embarkation in Luxor — Karnak & Luxor Temples' },
        detail: {
          ar: 'الاستقبال من مطار أو محطة الأقصر والانتقال للصعود إلى الكروز واستلام الكابينة المطلة على النيل. تناول وجبة الغداء بوفيه مفتوح على متن الباخرة. بعد الظهر، التوجه لزيارة مجمع معابد الكرنك العظيم ومعبد الأقصر. مساءً، عشاء ترحيبي فاخر مع عرض موسيقي هادئ والمبيت بالأقصر.',
          en: 'Meet and assist upon arrival in Luxor; transfer to board your deluxe Nile cruise ship and settle into your Nile-view cabin. Enjoy lunch on board. Afternoon visits to Karnak and Luxor temples. Welcome cocktail and dinner onboard; overnight in Luxor.'
        }
      },
      {
        day: { ar: 'اليوم الثاني', en: 'Day 2' },
        title: { ar: 'وادي الملوك وحتشبسوت — الإبحار وعبور هويس إسنا', en: 'West Bank Treasures — Sail to Edfu via Esna Lock' },
        detail: {
          ar: 'بعد الإفطار، زيارة البر الغربي: وادي الملوك ومعبد الملكة حتشبسوت وتمثالي ممنون. العودة للباخرة لتناول الغداء والبدء بالإبحار الرائع جنوباً باتجاه مدينة إسنا. الاستمتاع بشاي العصر على السطح مع مشاهدة عملية عبور هويس إسنا المائية المثيرة، ثم متابعة الإبحار نحو إدفو والمبيت على المتن.',
          en: 'Morning tour of West Bank highlights: Valley of the Kings, Temple of Queen Hatshepsut, and Colossi of Memnon. Return for lunch as the ship sets sail toward Esna. Savor afternoon tea on the sundeck while watching the crossing of Esna Lock. Overnight in Edfu.'
        }
      },
      {
        day: { ar: 'اليوم الثالث', en: 'Day 3' },
        title: { ar: 'معبد حورس بإدفو وعربات الحنطور — الإبحار إلى كوم أمبو', en: 'Horus Temple at Edfu by Carriage — Sail to Kom Ombo' },
        detail: {
          ar: 'صباحاً نستقل عربات الحنطور التقليدية لزيارة معبد حورس بإدفو، أكمل وأروع المعابد المصرية القديمة حفظاً لعمارته. العودة للباخرة والإبحار وقت الغداء نحو كوم أمبو. عصراً، زيارة معبد كوم أمبو المشترك لعبادة الإله سوبك التمساح وحورس الكبير، وزيارة متحف التماسيح المحنطة الفريد، ثم متابعة الإبحار لأسوان والمبيت.',
          en: 'Take a horse-drawn carriage to visit the astonishingly well-preserved Temple of Horus in Edfu. Return to the ship for lunch and scenic river cruising to Kom Ombo. Tour the unique double temple dedicated to Sobek the crocodile god and Horus the falcon. Overnight in Aswan.'
        }
      },
      {
        day: { ar: 'اليوم الرابع', en: 'Day 4' },
        title: { ar: 'معالم أسوان العظيمة — معبد فيلة والسد العالي والفلوكة', en: 'Wonders of Aswan — High Dam, Philae Temple & Felucca' },
        detail: {
          ar: 'بعد الإفطار، جولة شاملة في أسوان تبدأ بزيارة السد العالي، ثم ركوب لنش سريع لزيارة معبد إيزيس بجزيرة فيلة. العودة لتناول الغداء على الباخرة. بعد الظهر، جولة إبحار بالمركب الشراعي (الفلوكة) حول جزيرة الفنتين. مساءً، الاستمتاع بحفلة الفلكلور النوبي وعشاء الوداع الفاخر على متن الكروز.',
          en: 'Morning guided tour of the High Dam and a boat ride to the picturesque island temple of Philae. Lunch onboard followed by a tranquil afternoon felucca sail around Elephantine Island and the botanical gardens. Evening Nubian folkloric show and farewell gala dinner.'
        }
      },
      {
        day: { ar: 'اليوم الخامس', en: 'Day 5' },
        title: { ar: 'المغادرة في أسوان أو زيارة أبو سمبل (اختياري)', en: 'Disembarkation in Aswan & Optional Abu Simbel' },
        detail: {
          ar: 'تناول وجبة الإفطار على متن الباخرة ثم مغادرة الكابينة وتسجيل الخروج. إمكانية القيام برحلة اختيارية مبكرة لزيارة معبدي رمسيس الثاني ونفرتاري في أبو سمبل، ثم التوصيل بسيارة خاصة مكيفة إلى مطار أو محطة قطار أسوان للمغادرة النهائية.',
          en: 'Breakfast onboard followed by disembarkation. Opportunity for an optional early morning tour to the colossal temples of Abu Simbel. Private VIP transfer to Aswan Airport or railway station for onward departure.'
        }
      }
    ],
    includes: [
      { ar: 'إقامة 4 ليالٍ على باخرة نيلية 5 نجوم ديلاكس بكابينة خارجية تطل على النيل', en: '4 nights aboard 5-star deluxe Nile cruise with exterior river-view cabin' },
      { ar: 'نظام إقامة كامل (إفطار، غداء، عشاء بوفيه مفتوح يومياً على الباخرة)', en: 'Full board meals (daily open buffet breakfast, lunch, and dinner onboard)' },
      { ar: 'مرشد سياحي مصريات معتمد يرافق جميع المزارات المذكورة في البرنامج', en: 'Certified Egyptologist guide for all guided excursions throughout the cruise' },
      { ar: 'تذاكر الدخول لجميع المعابد: الكرنك، الأقصر، وادي الملوك، حتشبسوت، إدفو، كوم أمبو، فيلة', en: 'All entrance fees to Karnak, Luxor, Valley of Kings, Hatshepsut, Edfu, Kom Ombo & Philae' },
      { ar: 'عربات الحنطور في إدفو وتجربة الفلوكة الشراعية في أسوان', en: 'Horse carriage at Edfu and traditional sailing felucca experience in Aswan' },
      { ar: 'استقبال وتوديع خاص في مطار أو محطة الأقصر وأسوان', en: 'Private VIP meet and transfers at Luxor and Aswan airports/stations' }
    ]
  }
];

export function getTrip(slug: string): Trip | undefined {
  return trips.find((t) => t.slug === slug);
}
