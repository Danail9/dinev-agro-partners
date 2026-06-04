export const locales = ["en", "bg"] as const;
export type Locale = (typeof locales)[number];

const common = {
  nav: [
    { key: "home", label: { en: "Home", bg: "Начало" }, href: "/" },
    {
      key: "grain",
      label: { en: "Grain Trading", bg: "Зърнена търговия" },
      href: "/grain-trading",
    },
    {
      key: "fertilizers",
      label: { en: "Fertilizers", bg: "Торове" },
      href: "/fertilizers",
    },
    {
      key: "market",
      label: { en: "Market Insights", bg: "Пазарни анализи" },
      href: "/market-insights",
    },
    { key: "about", label: { en: "About Us", bg: "За нас" }, href: "/about" },
    {
      key: "contact",
      label: { en: "Contact", bg: "Контакт" },
      href: "/contact",
    },
  ],
};

export const siteData = {
  brandName: "Dinev Agro Partners",
  tagline: {
    en: "Your Trusted Partner in Grain and Fertilizer Trading",
    bg: "Вашият доверен партньор в търговията със зърно и торове",
  },
  alternateTagline: {
    en: "Connecting Farmers, Markets, and Opportunities Across Southern Bulgaria",
    bg: "Свързваме фермерите, пазарите и възможностите в Южна България",
  },
  nav: common.nav,
  hero: {
    headline: {
      en: "Reliable Grain & Fertilizer Trading Across Southern Bulgaria",
      bg: "Надеждна зърнена и торова търговия в Южна България",
    },
    subheadline: {
      en: "Dinev Agro Partners helps farmers and agricultural businesses secure competitive grain markets and quality fertilizer solutions through trusted partnerships and efficient logistics.",
      bg: "Dinev Agro Partners помага на фермерите и агробизнеса да осигурят конкурентни зърнени пазари и качествени торни решения чрез доверени партньорства и ефективна логистика.",
    },
  },
  about: {
    title: {
      en: "Agricultural Trading Built on Trust",
      bg: "Агробизнес търговия, основана на доверие",
    },
    content: {
      en: [
        "Dinev Agro Partners is a trusted agricultural trading company serving farmers and agribusinesses throughout Southern Bulgaria.",
        "We specialize in the purchase and sale of grains, fertilizer distribution, and agricultural commodity trading. Through strong market relationships and reliable logistics, we help our partners maximize value and build sustainable long-term business success.",
      ],
      bg: [
        "Dinev Agro Partners е доверена търговска компания, обслужваща фермери и агробизнеса в цяла Южна България.",
        "Специализираме се в покупката и продажбата на зърно, разпределението на торове и търговията със селскостопански стоки. Чрез силни пазарни взаимоотношения и надеждна логистика помагаме на партньорите си да увеличат стойността и да изградят устойчив дългосрочен бизнес.",
      ],
    },
  },
  services: {
    grain: {
      title: { en: "Grain Trading", bg: "Зърнена търговия" },
      items: [
        {
          name: { en: "Wheat", bg: "Пшеница" },
          description: {
            en: "High-quality wheat trading and procurement.",
            bg: "Търговия и доставка на висококачествена пшеница.",
          },
        },
        {
          name: { en: "Corn", bg: "Царевица" },
          description: {
            en: "Reliable sourcing and distribution.",
            bg: "Надеждно снабдяване и дистрибуция.",
          },
        },
        {
          name: { en: "Barley", bg: "Ечемик" },
          description: {
            en: "Commercial and feed-grade barley solutions.",
            bg: "Решения за търговски и фуражен ечемик.",
          },
        },
        {
          name: { en: "Sunflower", bg: "Слънчоглед" },
          description: {
            en: "Trading for processors and exporters.",
            bg: "Търговия за преработватели и износители.",
          },
        },
        {
          name: { en: "Rapeseed", bg: "Рапица" },
          description: {
            en: "Market access and procurement support.",
            bg: "Пазарен достъп и подкрепа при снабдяване.",
          },
        },
        {
          name: { en: "Oats", bg: "Овес" },
          description: {
            en: "Quality oat sourcing for feed and food processing.",
            bg: "Качествено снабдяване с овес за фураж и хранителна преработка.",
          },
        },
      ],
      services: {
        en: [
          "Market price consultation",
          "Contract negotiations",
          "Logistics coordination",
          "Grain procurement",
          "Grain sales",
          "Quality inspection",
          "Storage solutions",
          "Export facilitation",
          "Seasonal planning",
        ],
        bg: [
          "Консултации за пазарни цени",
          "Преговори по договори",
          "Координация на логистиката",
          "Закупуване на зърно",
          "Продажба на зърно",
          "Проверка на качеството",
          "Складови решения",
          "Съдействие при износ",
          "Сезонно планиране",
        ],
      },
    },
    fertilizers: {
      title: { en: "Fertilizer Distribution", bg: "Разпределение на торове" },
      categories: [
        {
          title: { en: "Nitrogen Fertilizers", bg: "Азотни торове" },
          description: {
            en: "Reliable nitrogen products for healthy crop growth.",
            bg: "Надеждни азотни продукти за здравословен растеж на културите.",
          },
        },
        {
          title: { en: "NPK Fertilizers", bg: "NPK торове" },
          description: {
            en: "Balanced nutrition tailored for local soil needs.",
            bg: "Балсирано хранене, съобразено с нуждите на местните почви.",
          },
        },
        {
          title: { en: "Phosphate Fertilizers", bg: "Фосфатни торове" },
          description: {
            en: "Quality phosphate supply for stronger root systems.",
            bg: "Качествено фосфатно снабдяване за по-силна коренова система.",
          },
        },
        {
          title: { en: "Potassium Fertilizers", bg: "Калиеви торове" },
          description: {
            en: "Potassium solutions for better crop resilience.",
            bg: "Калиеви решения за по-добра устойчивост на културите.",
          },
        },
      ],
      benefits: {
        en: [
          "Reliable sourcing",
          "Competitive pricing",
          "Seasonal supply planning",
          "Timely deliveries",
        ],
        bg: [
          "Надеждно снабдяване",
          "Конкурентни цени",
          "Сезонно планиране на доставките",
          "Навременни доставки",
        ],
      },
    },
  },
  features: [
    {
      title: { en: "Market Expertise", bg: "Пазарни експертни знания" },
      description: {
        en: "Deep knowledge of agricultural markets in Southern Bulgaria.",
        bg: "Задълбочени знания за селскостопанските пазари в Южна България.",
      },
    },
    {
      title: { en: "Trusted Partnerships", bg: "Доверени партньорства" },
      description: {
        en: "Long-term relationships with farmers and suppliers.",
        bg: "Дългосрочни отношения с фермери и доставчици.",
      },
    },
    {
      title: { en: "Efficient Logistics", bg: "Ефективна логистика" },
      description: {
        en: "Reliable transportation and delivery coordination.",
        bg: "Надеждна координация на транспорта и доставките.",
      },
    },
    {
      title: { en: "Transparent Trading", bg: "Прозрачна търговия" },
      description: {
        en: "Clear communication and competitive pricing.",
        bg: "Ясна комуникация и конкурентни цени.",
      },
    },
  ],
  process: [
    {
      step: "1",
      title: { en: "Initial Consultation", bg: "Първоначална консултация" },
    },
    { step: "2", title: { en: "Needs Assessment", bg: "Оценка на нуждите" } },
    {
      step: "3",
      title: {
        en: "Market Pricing & Offer",
        bg: "Пазарно ценообразуване и оферта",
      },
    },
    {
      step: "4",
      title: { en: "Contract Agreement", bg: "Договорно споразумение" },
    },
    {
      step: "5",
      title: { en: "Logistics Planning", bg: "Планиране на логистиката" },
    },
    {
      step: "6",
      title: { en: "Delivery or Collection", bg: "Доставка или събиране" },
    },
    {
      step: "7",
      title: { en: "Settlement & Payment", bg: "Разплащане и плащане" },
    },
    {
      step: "8",
      title: { en: "Long-Term Partnership", bg: "Дългосрочно партньорство" },
    },
  ],
  marketInsights: {
    headline: {
      en: "Agricultural Market Updates",
      bg: "Пазарни новини за селското стопанство",
    },
    description: {
      en: "Stay informed with grain price updates, market analysis, agricultural news, seasonal trends, and export market insights.",
      bg: "Бъдете информирани със обновления за цените на зърното, пазарни анализи, селскостопански новини, сезонни тенденции и износни пазари.",
    },
  },
  companyStory: {
    headline: { en: "About Dinev Agro Partners", bg: "За Dinev Agro Partners" },
    content: {
      en: [
        "Dinev Agro Partners was established with the vision of becoming a trusted bridge between agricultural producers and market opportunities.",
        "By combining local expertise, strong industry relationships, and a commitment to transparency, we help farmers and agricultural businesses achieve sustainable growth.",
      ],
      bg: [
        "Dinev Agro Partners е основана с визията да се превърне в доверен мост между земеделските производители и пазарните възможности.",
        "Комбинирайки местен опит, силни индустриални взаимоотношения и ангажимент към прозрачността, помагаме на фермерите и агробизнеса да постигнат устойчив растеж.",
      ],
    },
  },
  contact: {
    headline: { en: "Let's Grow Together", bg: "Нека растем заедно" },
    info: {
      phone: "+359 88 123 4567",
      email: "info@dinev-agro-partners.bg",
      address: {
        en: "13 Zhelyo Voyvoda St, Kabile, Jambol",
        bg: "ул. Жельо войвода 13, Кабиле, Ямбол",
      },
      hours: { en: "Mon - Fri: 8am - 6pm", bg: "Пон - Пет: 8:00 - 18:00" },
    },
  },
  seoKeywords: [
    "Grain Trading Bulgaria",
    "Fertilizer Supplier Bulgaria",
    "Wheat Buyer Bulgaria",
    "Agricultural Trading Southern Bulgaria",
    "Grain Broker Bulgaria",
    "Fertilizer Distributor Bulgaria",
    "Agricultural Commodities Bulgaria",
    "Wheat Trading Bulgaria",
    "Corn Trading Bulgaria",
  ],
};

export const blogPosts = [
  {
    slug: "southern-bulgaria-grain-update",
    title: {
      en: "Southern Bulgaria Grain Update",
      bg: "Обзор на зърнените пазари в Южна България",
    },
    excerpt: {
      en: "Latest pricing trends for wheat, corn, and sunflower in Southern Bulgaria.",
      bg: "Последни ценови тенденции за пшеница, царевица и слънчоглед в Южна България.",
    },
  },
  {
    slug: "fertilizer-availability-2026",
    title: {
      en: "Fertilizer Availability 2026",
      bg: "Наличности на торове през 2026 г.",
    },
    excerpt: {
      en: "Planning your seasonal fertilizer purchases for the year ahead.",
      bg: "Планиране на сезонните покупки на торове за следващата година.",
    },
  },
  {
    slug: "export-market-opportunities",
    title: {
      en: "Export Market Opportunities",
      bg: "Възможности за износни пазари",
    },
    excerpt: {
      en: "How Southern Bulgarian growers can access premium export channels.",
      bg: "Как земеделските производители от Южна България могат да достигнат до премиум износни канали.",
    },
  },
];

export function isValidLocale(lang: string): lang is Locale {
  return (locales as readonly string[]).includes(lang);
}
