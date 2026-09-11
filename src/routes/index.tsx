import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Ruler,
  TreePalm,
  Wifi,
  MapPin,
  Home,
  Droplets,
  Leaf,
  Clock3,
  Briefcase,
  Navigation,
  Phone,
  HelpCircle,
  Star,
  Dog,
  ShieldCheck,
  Quote,
  Sparkles,
  CheckCircle2,
  Globe,
  UserCheck,
  Coins,
  Languages,
  DollarSign,
  Wallet,
  BedDouble,
  Bath,
  Utensils,
  Car,
  WashingMachine,
  Sun,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/hero-finca.jpg";
import house5 from "@/assets/hero-finca.jpg";
import habitacionReal from "@/assets/habitacion-real.jpg";
import porticoDeck from "@/assets/portico-deck.jpg";
import exteriorIsabelita from "@/assets/exterior-isabelita.jpg";
import banoReal from "@/assets/bano-real.jpg";
import vistaPorticoJardin from "@/assets/vista-portico-jardin.jpg";
import cocinaReal from "@/assets/cocina-real.jpg";
import habitacionGemelas from "@/assets/habitacion-gemelas.jpg";
import costadoFincaPrados from "@/assets/costado-finca-prados.jpg";
import aboutImg from "@/assets/portico-deck.jpg";
import cieloHero from "@/assets/cielo-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Finca La Isabelita | Alquiler Casa Campestre Amoblada en La Ceja, Antioquia" },
      {
        name: "description",
        content:
          "Arriendo de Finca La Isabelita en Las Lomitas, La Ceja (Oriente Antioqueño). Casa campestre amoblada de 3 habitaciones, 4 camas, pórtico, lote privado de 500 m², 100% Pet Friendly y parqueadero. Trato directo con el propietario por $2.900.000 COP/mes.",
      },
      {
        name: "keywords",
        content:
          "Finca La Isabelita, alquiler finca La Ceja, casa campestre La Ceja, arriendo Las Lomitas La Ceja, casa finca amoblada Oriente Antioqueño, alquiler directo propietario La Ceja, finca pet friendly La Ceja, casa de descanso Antioquia, arriendo amoblado La Ceja",
      },
      { name: "author", content: "Finca La Isabelita" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "geo.region", content: "CO-ANT" },
      { name: "geo.placename", content: "La Ceja, Antioquia, Colombia" },
      { name: "geo.position", content: "6.0270;-75.4260" },
      { name: "ICBM", content: "6.0270, -75.4260" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Finca La Isabelita" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: "Finca La Isabelita | Casa Campestre Amoblada en La Ceja (Las Lomitas)" },
      {
        property: "og:description",
        content:
          "Casa campestre amoblada en arriendo directo en Las Lomitas, La Ceja. 3 habitaciones, 4 camas, pórtico con vista a montañas, 500 m² de prado, 100% Pet Friendly y anfitrión bilingüe. $2.9M COP/mes.",
      },
      { property: "og:image", content: "https://kmilo1978.github.io/Garces/hero-finca.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Finca La Isabelita | Casa Campestre en La Ceja" },
      {
        name: "twitter:description",
        content:
          "Finca amoblada en Las Lomitas, La Ceja: 3 habitaciones, 4 camas, pórtico, lote de 500 m², pet friendly y trato directo. $2.9M COP.",
      },
      { name: "twitter:image", content: "https://kmilo1978.github.io/Garces/hero-finca.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://kmilo1978.github.io/Garces/" },
    ],
  }),
  component: Index,
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#243A2C] px-6 py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#FAF8F5] shadow-sm transition-all hover:bg-[#1C2E23]">
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2.5 w-2.5 rounded-full bg-[#3D5E49]" />
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3D5E49]">
        {children}
      </span>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.26-1.92 1.34-.49.07-1.12.1-3.23-.78-2.69-1.11-4.43-3.84-4.56-4.02-.13-.18-1.09-1.45-1.09-2.76 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.61.57.24.59.82 2.01.89 2.16.07.15.12.33.02.53-.1.19-.15.31-.3.49-.15.18-.31.4-.44.53-.15.15-.31.31-.13.62.18.31.78 1.29 1.68 2.09 1.15 1.03 2.12 1.34 2.43 1.49.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.77.83 2.07.98.3.15.5.23.57.36.08.13.08.74-.16 1.42z" />
    </svg>
  );
}

type Lang = "es" | "en";

const translations = {
  es: {
    topBar: {
      availability: "Disponibilidad Inmediata",
      noBroker: "Finca La Isabelita · Trato directo sin intermediarios",
      bilingual: "Anfitrión 100% bilingüe (Español & English)",
      payments: "Pagos: Pesos (COP) · Dólares (USD) · Cripto (USDT/BTC)",
    },
    nav: {
      offer: "Lo que ofrecemos",
      details: "Detalles",
      gallery: "Galería",
      testimonials: "Testimonios",
      location: "Ubicación",
      faq: "Preguntas",
      bookVisit: "Agendar visita",
    },
    hero: {
      locationBadge: "Finca La Isabelita · Las Lomitas, La Ceja",
      title: "Finca La Isabelita en La Ceja",
      subtitle:
        "Disfruta del encanto campestre en una propiedad amoblada de 3 habitaciones, 4 camas, 1 baño, cocina, comedor, pórtico exterior, zona de lavandería y parqueadero privado en un lote de 500 m². Trato directo con el propietario, agua lista, internet prepago y a 5 minutos del pueblo.",
      btnPrimary: "Agendar Mi Visita Directa",
      btnSecondary: "Ver lo que ofrecemos",
      stats: [
        { num: "3", unit: "hab", label: "Habitaciones" },
        { num: "4", unit: "camas", label: "Camas" },
        { num: "1", unit: "baño", label: "Baño Completo" },
        { num: "500", unit: "m²", label: "Lote Privado" },
        { num: "$2.9", unit: "M", label: "COP / Mes" },
      ],
      cornerBadgeTitle: "Finca La Isabelita",
      cornerBadgeSub: "Trato directo sin intermediarios",
    },
    trust: {
      tag: "Trato Directo & Ventajas",
      title: "Beneficios de Alquilar en Finca La Isabelita",
      cards: [
        {
          title: "Sin Intermediarios",
          subtitle: "Trato directo con el propietario",
          desc: "Negocia y habla directamente con el dueño. Cero comisiones de agencia, sin trámites burocráticos y respuesta inmediata.",
        },
        {
          title: "Anfitrión 100% Bilingüe",
          subtitle: "English & Spanish Spoken",
          desc: "Hablamos español e inglés con fluidez nativa. Atención cálida y clara para residentes locales, extranjeros y nómadas digitales.",
        },
        {
          title: "Pagos Flexibles",
          subtitle: "COP · USD · Criptomonedas",
          desc: "Aceptamos pagos en Pesos Colombianos (COP), Dólares Americanos (USD vía Zelle o transferencia) y Criptomonedas (USDT, BTC, ETH).",
        },
      ],
    },
    offer: {
      tag: "What We Offer · Lo Que Ofrecemos",
      title: "Comodidades de Finca La Isabelita",
      subtitle:
        "Diseñada con 3 habitaciones, 4 camas, cocina equipada, comedor, pórtico campestre, lavandería y parqueadero de vehículos, rodeada de 500 m² de prados verdes en Las Lomitas.",
      whyTitle: "¿Por qué elegir Finca La Isabelita?",
      whySubtitle: "Todo lo que necesitas para una estadía cómoda, independiente y en total contacto con la naturaleza.",
    },
    features: {
      tag: "Características principales",
      title: "Equipamiento y Distribución",
      investmentPill: "Inversión: $2.900.000 COP / mes",
    },
    whyLove: {
      tag: "Por qué te encantará",
      title: "La vida campestre sin alejarte de nada",
    },
    gallery: {
      tag: "Recorrido Visual",
      title: "Galería de Finca La Isabelita",
      subtitle: "9 perspectivas seleccionadas de las habitaciones, pórtico, áreas sociales y lote verde.",
      pill: "9 Fotografías Exclusivas",
    },
    testimonials: {
      tag: "What Our Clients Say · Testimonios",
      title: "Historias Reales en La Isabelita",
      subtitle: "Huéspedes, familias y profesionales que han disfrutado de la paz rural, el pórtico y la comodidad de esta finca.",
    },
    location: {
      tag: "Ubicación privilegiada",
      title: "Cómo llegar a Finca La Isabelita",
      openMaps: "Abrir en Google Maps",
      refTitle: "Dirección de referencia",
      refDesc: "Sector Las Lomitas, La Ceja, Antioquia. En las inmediaciones de la Casa de Oración La Providencia.",
      timeTitle: "Distancia y tiempo",
      timeDesc: "A solo 5 minutos del casco urbano y parque principal de La Ceja, con vía de acceso fácil y directa para cualquier vehículo.",
      quietTitle: "Tranquilidad & Entorno",
      quietDesc: "Zona campestre segura, con aire puro, hermosas vistas verdes y alta valorización en el Oriente Antioqueño.",
      visitPrompt: "¿Planeas tu visita a La Isabelita?",
      visitSub: "Te enviamos el punto exacto por WhatsApp o coordinamos para esperarte en la entrada.",
      requestWa: "Solicitar ubicación en WhatsApp",
    },
    faq: {
      tag: "Resolvemos tus dudas",
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre las instalaciones, camas, servicios y condiciones en Finca La Isabelita.",
    },
    cta: {
      title: "Asegura tu estadía en Finca La Isabelita",
      desc: "Contáctanos hoy mismo para agendar tu visita directa a esta finca amoblada de 3 habitaciones, 4 camas, pórtico y parqueadero a 5 minutos de La Ceja.",
      price: "$2.900.000",
      currency: "COP / mes",
      paymentBadge: "Aceptamos Pesos (COP), Dólares (USD) y Cripto (USDT/BTC) · Trato directo con dueño",
      btn: "Agendar mi visita directa",
    },
    footer: {
      brandDesc: "Finca La Isabelita: Casa campestre en Las Lomitas, La Ceja (Oriente Antioqueño). 3 habitaciones, 4 camas, 1 baño, cocina, comedor, pórtico, lavandería y parqueadero. Trato directo con el propietario.",
      bilingualNotice: "We speak English & Spanish fluently.",
      navTitle: "Navegación",
      techTitle: "Ficha Técnica",
      contactTitle: "Atención y Visitas",
      hours: "Lunes a Domingo (con cita previa)",
      directService: "Atención directa sin intermediarios",
      paymentsAccepted: "Pagos: COP, USD, USDT/Cripto",
      rights: "Finca La Isabelita · Todos los derechos reservados.",
      designedBy: "Diseñado por",
    },
  },
  en: {
    topBar: {
      availability: "Immediate Availability",
      noBroker: "Finca La Isabelita · Direct deal with owner (Zero broker fees)",
      bilingual: "100% Bilingual host (English & Spanish spoken)",
      payments: "Payments: Pesos (COP) · US Dollars (USD) · Crypto (USDT/BTC)",
    },
    nav: {
      offer: "What We Offer",
      details: "Features",
      gallery: "Gallery",
      testimonials: "Testimonials",
      location: "Location",
      faq: "FAQ",
      bookVisit: "Book a visit",
    },
    hero: {
      locationBadge: "Finca La Isabelita · Las Lomitas, La Ceja",
      title: "Finca La Isabelita in La Ceja",
      subtitle:
        "Experience rural charm in a fully furnished countryside home featuring 3 bedrooms, 4 beds, 1 full bathroom, kitchen, dining area, front porch, laundry area, and vehicle parking on a private 500 m² green lot. Direct deal with owner, water ready, prepaid internet, and only 5 minutes from town.",
      btnPrimary: "Book My Direct Tour",
      btnSecondary: "What We Offer",
      stats: [
        { num: "3", unit: "beds", label: "Bedrooms" },
        { num: "4", unit: "sleeps", label: "Beds" },
        { num: "1", unit: "bath", label: "Full Bathroom" },
        { num: "500", unit: "m²", label: "Private Lot" },
        { num: "$2.9", unit: "M", label: "COP / Month" },
      ],
      cornerBadgeTitle: "Finca La Isabelita",
      cornerBadgeSub: "Direct deal · Zero broker fees",
    },
    trust: {
      tag: "Direct Deal & Advantages",
      title: "Benefits of Renting Finca La Isabelita",
      cards: [
        {
          title: "Zero Intermediaries",
          subtitle: "Direct deal with property owner",
          desc: "Negotiate and coordinate directly with the owner. Zero broker fees, no administrative red tape, and fast direct answers.",
        },
        {
          title: "100% Bilingual Host",
          subtitle: "English & Spanish Spoken",
          desc: "We speak fluent English and Spanish. Clear, warm, and transparent communication for local guests, expats, and digital nomads.",
        },
        {
          title: "Flexible Payments",
          subtitle: "COP · USD · Cryptocurrencies",
          desc: "We accept payments in Colombian Pesos (COP), US Dollars (USD via wire or Zelle), and Cryptocurrencies (USDT, BTC, ETH).",
        },
      ],
    },
    offer: {
      tag: "What We Offer · Amenities",
      title: "Amenities at Finca La Isabelita",
      subtitle:
        "Equipped with 3 bedrooms, 4 beds, full kitchen, dining area, outdoor porch, laundry zone, and vehicle parking, all nestled within 500 m² of green lawns in Las Lomitas.",
      whyTitle: "Why Choose Finca La Isabelita?",
      whySubtitle: "Everything you need for an independent, comfortable stay in close touch with nature.",
    },
    features: {
      tag: "Key Specifications",
      title: "Layout & Amenities",
      investmentPill: "Rent: $2,900,000 COP / month (~$750 USD)",
    },
    whyLove: {
      tag: "Why You Will Love It",
      title: "Countryside Peace Close to Everything",
    },
    gallery: {
      tag: "Visual Tour",
      title: "Finca La Isabelita Gallery",
      subtitle: "9 selected perspectives of bedrooms, porch, social areas, and surrounding green lot.",
      pill: "9 Exclusive Photos",
    },
    testimonials: {
      tag: "What Our Clients Say · Reviews",
      title: "Real Stories at Finca La Isabelita",
      subtitle: "Guests, families, and remote workers who have enjoyed the peaceful countryside and porch living at La Isabelita.",
    },
    location: {
      tag: "Prime Location",
      title: "How to Get to Finca La Isabelita",
      openMaps: "Open in Google Maps",
      refTitle: "Reference Address",
      refDesc: "Las Lomitas sector, La Ceja, Antioquia. Near Casa de Oración La Providencia.",
      timeTitle: "Distance & Travel Time",
      timeDesc: "Only 5 minutes away from downtown La Ceja and main square via paved, easy-access road for any vehicle.",
      quietTitle: "Peaceful & Safe Setting",
      quietDesc: "Safe residential countryside neighborhood with crisp fresh air, mountain views, and high appreciation in Eastern Antioquia.",
      visitPrompt: "Planning your tour to La Isabelita?",
      visitSub: "We can send you the exact GPS pin on WhatsApp or coordinate to welcome you at the gate.",
      requestWa: "Request location on WhatsApp",
    },
    faq: {
      tag: "Got Questions?",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know regarding amenities, beds, utilities, payment methods, and your stay at Finca La Isabelita.",
    },
    cta: {
      title: "Secure Your Country Retreat at Finca La Isabelita",
      desc: "Contact us directly today to schedule your private tour to this furnished home with 3 bedrooms, 4 beds, porch, and parking just 5 minutes from town.",
      price: "$2,900,000",
      currency: "COP / month (~$750 USD)",
      paymentBadge: "We accept Pesos (COP), US Dollars (USD), and Crypto (USDT/BTC) · Direct deal with owner",
      btn: "Schedule My Direct Tour",
    },
    footer: {
      brandDesc: "Finca La Isabelita: Furnished country home in Las Lomitas, La Ceja (Eastern Antioquia). 3 bedrooms, 4 beds, 1 bathroom, kitchen, dining area, porch, laundry, and parking. Direct deal with owner.",
      bilingualNotice: "Hablamos inglés y español con fluidez.",
      navTitle: "Navigation",
      techTitle: "Property Specs",
      contactTitle: "Contact & Visits",
      hours: "Monday to Sunday (by appointment)",
      directService: "Direct deal with owner (No broker fees)",
      paymentsAccepted: "Payments: COP, USD, USDT/Crypto",
      rights: "Finca La Isabelita · All rights reserved.",
      designedBy: "Designed by",
    },
  },
};

const caracteristicasData = [
  {
    icon: BedDouble,
    titleEs: "3 Habitaciones & 4 Camas",
    titleEn: "3 Bedrooms & 4 Beds",
    textEs: "Equipada con 4 camas confortables, perfecta para descanso en familia o con invitados.",
    textEn: "Equipped with 4 comfortable beds, ideal for family retreats or visiting guests.",
  },
  {
    icon: Bath,
    titleEs: "1 Baño Completo",
    titleEn: "1 Full Bathroom",
    textEs: "Baño privado completo, cómodo y funcional para todos los residentes de la finca.",
    textEn: "Complete private bathroom, clean and functional for all guests and residents.",
  },
  {
    icon: Utensils,
    titleEs: "Cocina & Comedor",
    titleEn: "Kitchen & Dining Area",
    textEs: "Cocina dotada y espacio de comedor integrado para preparar y compartir tus comidas.",
    textEn: "Equipped kitchen and integrated dining space to prepare and enjoy home-cooked meals.",
  },
  {
    icon: Sun,
    titleEs: "Pórtico Campestre",
    titleEn: "Country Front Porch",
    textEs: "Acogedor pórtico exterior para tomar café, leer y contemplar la naturaleza.",
    textEn: "Cozy covered front porch to sip morning coffee, read, and enjoy mountain views.",
  },
  {
    icon: Dog,
    titleEs: "100% Pet Friendly",
    titleEn: "100% Pet Friendly",
    textEs: "Tus peludos son bienvenidos. El lote cerrado de 500 m² y los prados verdes son el paraíso para su libertad y juego.",
    textEn: "Pets are warmly welcome. The 500 m² enclosed yard and lush lawns are paradise for your furry family members.",
  },
  {
    icon: WashingMachine,
    titleEs: "Zona de Lavandería",
    titleEn: "Laundry Area",
    textEs: "Área de ropas y lavandería independiente para estadías prolongadas con total comodidad.",
    textEn: "Dedicated laundry area for long-term stays with complete comfort and autonomy.",
  },
  {
    icon: Car,
    titleEs: "Parqueadero de Carros",
    titleEn: "Vehicle Parking",
    textEs: "Espacio amplio y seguro para estacionar tus vehículos dentro de la propiedad privada.",
    textEn: "Spacious and secure on-site parking area for multiple vehicles inside the property.",
  },
  {
    icon: Ruler,
    titleEs: "Lote Privado de 500 m²",
    titleEn: "500 m² Private Green Lot",
    textEs: "Gran terreno cerrado y seguro con prados verdes, ideal para mascotas y actividades al aire libre.",
    textEn: "Fenced private lot with lush green lawns, perfect for pets and outdoor living.",
  },
  {
    icon: Wifi,
    titleEs: "Internet Módem & Agua",
    titleEn: "Water & Prepaid Wi-Fi",
    textEs: "Servicio de agua continuo y módem prepago recargable para teletrabajo y entretenimiento.",
    textEn: "Continuous water supply and rechargeable prepaid modem for remote work and streaming.",
  },
];

const razonesData = [
  {
    icon: CheckCircle2,
    titleEs: "Disponibilidad Inmediata",
    titleEn: "Immediate Availability",
    textEs: "Propiedad amoblada y lista para entrega inmediata. Trato directo con el propietario, sin intermediarios ni demoras de agencia.",
    textEn: "Fully furnished property ready for immediate move-in. Direct deal with owner, zero broker fees, and no agency delays.",
  },
  {
    icon: Leaf,
    titleEs: "Conexión natural",
    titleEn: "Natural Connection",
    textEs: "Amplio lote de 500 m² con prados verdes y pórtico exterior para disfrutar el aire puro.",
    textEn: "Spacious 500 m² lot with lush green lawns and a country porch to breathe fresh mountain air.",
  },
  {
    icon: Clock3,
    titleEs: "Ubicación estratégica",
    titleEn: "Strategic Location",
    textEs: "En Las Lomitas, a tan solo 5 minutos del parque principal de La Ceja, supermercados y restaurantes.",
    textEn: "Located in Las Lomitas, just 5 minutes from La Ceja main town square, shops, and dining.",
  },
  {
    icon: Briefcase,
    titleEs: "Flexibilidad y Confort",
    titleEn: "Flexibility & Comfort",
    textEs: "3 habitaciones con 4 camas, cocina, comedor, lavandería y parqueadero con trato directo con el dueño.",
    textEn: "3 bedrooms with 4 beds, kitchen, dining, laundry, and parking with direct owner communication.",
  },
];

const ofertasPrincipales = [
  {
    number: "01",
    titleEs: "3 Habitaciones & 4 Camas",
    titleEn: "3 Bedrooms & 4 Beds",
    descEs: "Espacios acogedores con techo de madera, ventanas con vista a la naturaleza y 4 camas confortables listas para habitar.",
    descEn: "Cozy rooms featuring rustic wood ceilings, nature-view windows, and 4 comfortable beds ready from day one.",
    img: habitacionReal,
    altEs: "Habitación principal amoblada con cama doble vestida, techo rústico de madera y ventana campestre en Finca La Isabelita La Ceja",
    altEn: "Furnished master bedroom with comfortable double bed, rustic wood ceiling, and scenic window at Finca La Isabelita in La Ceja",
  },
  {
    number: "02",
    titleEs: "Pórtico Campestre & Terraza Deck",
    titleEn: "Covered Porch & Wood Deck",
    descEs: "Hermoso pórtico de madera cubierto con sillas campestres, mesa de centro y vista abierta a los árboles y prados verdes.",
    descEn: "Stunning covered wood deck with Adirondack chairs, coffee table, and direct views over lush greenery.",
    img: porticoDeck,
    altEs: "Pórtico campestre cubierto en madera con sillas de descanso Adirondack y flores veraneras con vista a la arboleda en La Ceja",
    altEn: "Covered rustic wooden porch with outdoor Adirondack lounge chairs and bougainvillea flowers overlooking greenery in La Ceja",
  },
  {
    number: "03",
    titleEs: "Lote de 500 m² & Entrada La Isabelita",
    titleEn: "500 m² Yard & La Isabelita Entrance",
    descEs: "Terreno privado cerrado, fachada rústica con letrero La Isabela, jardines nativos, lavandería y parqueadero de vehículos.",
    descEn: "Private gated 500 m² lot, rustic entrance with signature sign, native gardens, laundry, and vehicle parking.",
    img: exteriorIsabelita,
    altEs: "Entrada campestre privada con letrero tradicional en madera La Isabela y lote cerrado de 500 m² en Las Lomitas La Ceja",
    altEn: "Private gated countryside entrance with signature wood sign and 500 m² private fenced lot in Las Lomitas, La Ceja",
  },
];

const beneficiosOfrecidos = [
  {
    titleEs: "3 Habitaciones & 4 Camas",
    titleEn: "3 Bedrooms & 4 Beds",
    descEs: "Capacidad ideal con 4 camas confortables, amoblada y lista para ti y tu familia.",
    descEn: "Generous capacity with 4 comfortable beds, fully furnished and move-in ready.",
    icon: BedDouble,
  },
  {
    titleEs: "Cocina, Comedor & Baño",
    titleEn: "Kitchen, Dining & Bath",
    descEs: "Cocina dotada, comedor integrado y 1 baño completo para máxima comodidad diaria.",
    descEn: "Equipped kitchen, dining space, and 1 full bathroom for daily comfort.",
    icon: Utensils,
  },
  {
    titleEs: "Pórtico & Parqueadero",
    titleEn: "Country Porch & Parking",
    descEs: "Pórtico para relajarte al aire libre y parqueadero privado para varios carros.",
    descEn: "Scenic covered porch to relax outdoors and private vehicle parking on site.",
    icon: Car,
  },
  {
    titleEs: "Zona de Lavandería",
    titleEn: "Dedicated Laundry Area",
    descEs: "Área de ropas y lavado independiente para estancias medias y largas.",
    descEn: "Independent laundry space ideal for comfortable medium and long-term stays.",
    icon: WashingMachine,
  },
  {
    titleEs: "Trato Directo con Propietario",
    titleEn: "Direct Deal (No Brokers)",
    descEs: "Sin agencias ni intermediarios. Ahorra comisiones y resuelve cualquier duda de inmediato.",
    descEn: "No real estate agency fees. Save commissions and enjoy immediate direct assistance.",
    icon: UserCheck,
  },
  {
    titleEs: "Pagos: COP, USD & Cripto",
    titleEn: "COP, USD & Crypto Accepted",
    descEs: "Recibimos transferencias en pesos, dólares (Zelle/wire) y criptomonedas (USDT/BTC).",
    descEn: "We accept payments in Colombian Pesos, US Dollars (Zelle/wire), and Crypto (USDT/BTC).",
    icon: Coins,
  },
];

const galeria = [
  {
    src: house5,
    titleEs: "Fachada Principal & Pórtico",
    titleEn: "Main Facade & Front Porch",
    tagEs: "Exterior",
    tagEn: "Exterior",
    altEs: "Fotografía real de la fachada principal de Finca La Isabelita con pórtico de madera, flores y prados en Las Lomitas, La Ceja",
    altEn: "Real photo of main facade at Finca La Isabelita with wooden porch, flowers, and green lawns in Las Lomitas, La Ceja",
  },
  {
    src: habitacionReal,
    titleEs: "Habitación Principal & Cama Doble",
    titleEn: "Master Bedroom & Double Bed",
    tagEs: "Habitación",
    tagEn: "Bedroom",
    altEs: "Dormitorio principal amoblado con cama doble vestida, techo rústico de madera y ventanal campestre en Finca La Isabelita",
    altEn: "Furnished master bedroom with comfortable double bed, rustic wood ceiling, and scenic window at Finca La Isabelita",
  },
  {
    src: porticoDeck,
    titleEs: "Pórtico Cubierto & Terraza Deck",
    titleEn: "Covered Porch & Wood Deck",
    tagEs: "Pórtico",
    tagEn: "Porch Deck",
    altEs: "Pórtico campestre cubierto en madera con sillas de descanso Adirondack y vista a los árboles nativos en La Ceja, Antioquia",
    altEn: "Covered rustic wooden porch with outdoor Adirondack chairs and tree canopy view in La Ceja, Antioquia",
  },
  {
    src: vistaPorticoJardin,
    titleEs: "Vista al Jardín desde el Pórtico",
    titleEn: "Lawn & Garden View from Deck",
    tagEs: "Vistas & Jardín",
    tagEn: "Lawn & View",
    altEs: "Panorámica de los prados verdes privados de 500 m² y jardines floridos desde la terraza de Finca La Isabelita en Las Lomitas",
    altEn: "Scenic view of 500 m² private green lawns and flowering gardens from the deck of Finca La Isabelita in Las Lomitas",
  },
  {
    src: cocinaReal,
    titleEs: "Cocina Integral & Techo en Madera",
    titleEn: "Equipped Kitchen & Wood Ceiling",
    tagEs: "Cocina",
    tagEn: "Kitchen",
    altEs: "Cocina integral campestre amoblada y equipada con estufa de gas, mesón y estanterías en Finca La Isabelita",
    altEn: "Fully equipped rustic country kitchen with gas stove, countertops, and wood ceiling at Finca La Isabelita",
  },
  {
    src: habitacionGemelas,
    titleEs: "Habitación 2 Camas & Ventana Verde",
    titleEn: "Bedroom with 2 Twin Beds",
    tagEs: "Habitación 2",
    tagEn: "Bedroom 2",
    altEs: "Segunda habitación amoblada con dos camas confortables y ventana con vista a las montañas en La Ceja",
    altEn: "Second furnished bedroom with two comfortable twin beds and mountain view window in La Ceja",
  },
  {
    src: banoReal,
    titleEs: "Baño Completo & Cabina de Vidrio",
    titleEn: "Full Bathroom & Glass Shower",
    tagEs: "Baño",
    tagEn: "Bathroom",
    altEs: "Baño completo moderno con ducha en cabina de vidrio templado, lavamanos y espejo en Finca La Isabelita",
    altEn: "Modern full bathroom with glass shower enclosure, vanity sink, and mirror at Finca La Isabelita",
  },
  {
    src: exteriorIsabelita,
    titleEs: "Fachada & Entrada La Isabelita",
    titleEn: "Facade & Entrance Sign",
    tagEs: "Entrada",
    tagEn: "Entrance",
    altEs: "Entrada campestre privada con letrero tradicional en madera La Isabela y vegetación nativa en Las Lomitas La Ceja",
    altEn: "Private gated countryside entrance with signature wood sign and lush greenery in Las Lomitas, La Ceja",
  },
  {
    src: costadoFincaPrados,
    titleEs: "Costado de la Finca & Lote de 500 m²",
    titleEn: "Side View & 500 m² Green Yard",
    tagEs: "Lote 500 m²",
    tagEn: "500 m² Lot",
    altEs: "Costado de la casa finca con arquitectura tradicional, techo de teja de barro y lote privado de 500 m² pet friendly",
    altEn: "Side view of traditional countryside home with clay tile roof and 500 m² private pet friendly yard in La Ceja",
  },
];

const testimonios = [
  {
    nameEs: "Carlos Mendoza",
    nameEn: "Charles Miller",
    roleEs: "Arrendatario 6 meses",
    roleEn: "Long-Term Tenant",
    avatar: "https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784c71887e2ed9af8f9a10e_reviewer-10.jpg",
    quoteEs:
      "La casa finca está perfectamente amoblada y lista para habitar. El lote de 500 m² fue el paraíso para mis perros, el trato con el anfitrión fue directo sin intermediarios y pude pagar cómodamente.",
    quoteEn:
      "The country home is fully furnished and truly move-in ready. The 500 m² yard was paradise for my dogs, communication with the owner was direct with zero broker fees, and payment was completely seamless.",
  },
  {
    nameEs: "Valentina Gómez",
    nameEn: "Valerie Brooks",
    roleEs: "Nómada Digital",
    roleEn: "Digital Nomad",
    avatar: "https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784c716eb844945c9030759_reviewer-16.jpg",
    quoteEs:
      "Teletrabajar con vista a las montañas y en silencio total fue increíble. Que el anfitrión hable inglés y español con tanta fluidez facilitó todo. Además pude pagar mi estadía con criptomonedas (USDT).",
    quoteEn:
      "Remote working with mountain views and total peace was incredible. Having a 100% bilingual host made everything effortless. Plus, being able to pay with crypto (USDT) was super convenient!",
  },
  {
    nameEs: "Mateo Restrepo",
    nameEn: "Matthew Higgins",
    roleEs: "Amante de la Naturaleza",
    roleEn: "Nature Enthusiast",
    avatar: "https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784cf95c71e1da0073c2240_team-4.jpg",
    quoteEs:
      "Buscaba salir del ruido de Medellín sin quedar aislado. La tranquilidad de Las Lomitas, el trato directo sin papeleos innecesarios y la cercanía a La Ceja superaron todas mis expectativas.",
    quoteEn:
      "I was looking to escape Medellín's noise without being isolated. The peace of Las Lomitas, direct deal with no bureaucratic paperwork, and quick access to town exceeded all my expectations.",
  },
  {
    nameEs: "Sofía Salazar",
    nameEn: "Sophie Turner",
    roleEs: "Estadía Familiar & Mascotas",
    roleEn: "Family & Pet Stay",
    avatar: "https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784c7160b1fd1a669fc2501_reviewer-3.jpg",
    quoteEs:
      "El contrato mínimo de 3 meses fue justo lo que necesitábamos. La casa es acogedora, amoblada con buen gusto y el anfitrión bilingüe resolvió todas nuestras dudas de inmediato.",
    quoteEn:
      "The 3-month lease was exactly what we needed. The home is cozy, tastefully furnished, and the bilingual host answered all our questions immediately.",
  },
  {
    nameEs: "Alejandro Silva",
    nameEn: "Alex Morgan",
    roleEs: "Desarrollador Remoto",
    roleEn: "Remote Developer",
    avatar: "https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052eb36498c29a93edf7_reviewer-4.jpg",
    quoteEs:
      "Excelente relación calidad-precio por $2.900.000 COP al mes. Un lote independiente donde se respira paz, trato directo con el dueño y pagos en dólares sin complicaciones.",
    quoteEn:
      "Outstanding value for $2,900,000 COP per month. An independent lot where you breathe clean air, dealing directly with the owner, and paying easily in US Dollars.",
  },
  {
    nameEs: "Mariana Ortiz",
    nameEn: "Mary Edwards",
    roleEs: "Retiro y Descanso",
    roleEn: "Weekend & Seasonal Retreat",
    avatar: "https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052db36498c29a93edf1_reviewer-2.jpg",
    quoteEs:
      "Tomarse un café en el prado por las mañanas escuchando las aves no tiene comparación. La atención del anfitrión fue impecable en todo momento.",
    quoteEn:
      "Sipping morning coffee in the lawn listening to birds is priceless. The host was exceptionally helpful and welcoming at all times.",
  },
];

const faqsData = [
  {
    qEs: "¿Cómo está distribuida y equipada Finca La Isabelita?",
    qEn: "What is the layout and equipment at Finca La Isabelita?",
    aEs: "Finca La Isabelita se entrega totalmente amoblada. Cuenta con 3 habitaciones, 4 camas, 1 baño completo, cocina dotada, comedor, un acogedor pórtico exterior, zona de lavandería independiente y parqueadero privado para carros dentro del lote cerrado de 500 m².",
    aEn: "Finca La Isabelita is delivered fully furnished. It features 3 bedrooms, 4 beds, 1 full bathroom, equipped kitchen, dining area, a cozy front country porch, dedicated laundry area, and on-site private vehicle parking on a 500 m² green lot.",
  },
  {
    qEs: "¿Cuál es el tiempo mínimo de arrendamiento?",
    qEn: "What is the minimum lease term?",
    aEs: "El tiempo mínimo de arrendamiento es de 3 meses.",
    aEn: "The minimum lease term is 3 months.",
  },
  {
    qEs: "¿Se permiten mascotas?",
    qEn: "Are pets allowed?",
    aEs: "Sí, se permiten mascotas, siempre que el arrendatario se haga responsable de su cuidado y de cualquier daño que puedan ocasionar.",
    aEn: "Yes, pets are warmly allowed, provided the tenant is responsible for their care and any damage they may cause.",
  },
  {
    qEs: "¿Los servicios están incluidos?",
    qEn: "Are utilities included in the rent?",
    aEs: "No. Los servicios públicos se pagan por separado, según el consumo.",
    aEn: "No. Public utilities are billed separately based on actual consumption.",
  },
  {
    qEs: "¿La casa cuenta con internet?",
    qEn: "Does the house have internet access?",
    aEs: "Sí. Cuenta con internet mediante módem prepago o recargable, para que puedas conectarte según tus necesidades.",
    aEn: "Yes. It has internet via a prepaid rechargeable modem, allowing you to connect according to your specific needs.",
  },
  {
    qEs: "¿Qué pasa si necesito cancelar antes de terminar el tiempo acordado?",
    qEn: "What happens if I need to cancel before the agreed term ends?",
    aEs: "La cancelación anticipada estará sujeta a las condiciones establecidas en el contrato de arrendamiento y al aviso previo acordado.",
    aEn: "Early cancellation is subject to the conditions established in the lease agreement and the agreed prior notice.",
  },
  {
    qEs: "¿Hay intermediarios y qué métodos de pago aceptan?",
    qEn: "Are there brokers involved and what payment methods do you accept?",
    aEs: "No hay intermediarios; el trato es directo con el propietario sin comisiones de agencia. El anfitrión habla español e inglés con fluidez. Aceptamos pagos en Pesos Colombianos (COP), Dólares Americanos (USD vía Zelle o transferencia) y Criptomonedas (USDT, Bitcoin, etc.).",
    aEn: "There are zero brokers or intermediaries; you deal directly with the owner with no agency fees. The host speaks fluent English and Spanish. We accept Colombian Pesos (COP), US Dollars (USD via Zelle or wire), and Cryptocurrencies (USDT, Bitcoin, etc.).",
  },
];

function Index() {
  const [lang, setLang] = useState<Lang>("es");
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    // Permite que la imagen de la finca se aprecie primero y luego entra suavemente el texto
    const timer = setTimeout(() => {
      setHeroTextVisible(true);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  const waCustomMessage =
    lang === "es"
      ? "Hola, estoy interesado en la Casa Finca La Isabelita en La Ceja. ¿Me podrías brindar más información y disponibilidad?"
      : "Hello, I am interested in Casa Finca La Isabelita in La Ceja. Could you please provide more information and availability?";

  const waCustomLink = `https://wa.me/?text=${encodeURIComponent(waCustomMessage)}`;

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] font-sans text-[#1C261F] selection:bg-[#D5E3D8] selection:text-[#18281E] overflow-x-hidden">
      {/* Fondo de cielo atmosférico detrás del Hero que se va difuminando suavemente hasta volverse blanco */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[920px] sm:h-[1040px] md:h-[1140px] lg:h-[1250px] overflow-hidden z-0"
        aria-hidden="true"
      >
        <img
          src={cieloHero}
          alt=""
          className="h-full w-full object-cover object-top brightness-[1.01] contrast-[1.02]"
        />
        {/* Capa de difusión gradual para que parezca un cielo que se desvanece suavemente a blanco */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 via-40% to-white/95" />
        <div className="absolute inset-x-0 bottom-0 h-64 sm:h-80 md:h-96 bg-gradient-to-b from-transparent via-white/85 to-[#FAF8F5]" />
      </div>

      {/* Schema.org Structured Data: VacationRental / SingleFamilyResidence para SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VacationRental",
            name: "Finca La Isabelita",
            description:
              "Casa campestre amoblada en alquiler directo con el propietario en Las Lomitas, La Ceja, Oriente Antioqueño. Cuenta con 3 habitaciones, 4 camas, 1 baño completo, cocina, comedor, pórtico exterior, zona de lavandería, parqueadero y lote privado de 500 m². 100% Pet Friendly.",
            url: "https://kmilo1978.github.io/Garces/",
            image: [
              "https://kmilo1978.github.io/Garces/hero-finca.jpg",
              "https://kmilo1978.github.io/Garces/portico-deck.jpg",
              "https://kmilo1978.github.io/Garces/vista-portico-jardin.jpg",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Sector Las Lomitas, cerca a Casa de Oración La Providencia",
              addressLocality: "La Ceja",
              addressRegion: "Antioquia",
              addressCountry: "CO",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 6.027,
              longitude: -75.426,
            },
            priceRange: "$2.900.000 COP / mes",
            numberOfBedrooms: 3,
            numberOfBathroomsTotal: 1,
            occupancy: {
              "@type": "QuantitativeValue",
              value: 5,
            },
            petsAllowed: true,
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "3 Habitaciones", value: true },
              { "@type": "LocationFeatureSpecification", name: "4 Camas", value: true },
              { "@type": "LocationFeatureSpecification", name: "Pórtico Campestre", value: true },
              { "@type": "LocationFeatureSpecification", name: "Lote privado de 500 m²", value: true },
              { "@type": "LocationFeatureSpecification", name: "Parqueadero privado de vehículos", value: true },
              { "@type": "LocationFeatureSpecification", name: "Zona de lavandería", value: true },
              { "@type": "LocationFeatureSpecification", name: "100% Pet Friendly", value: true },
              { "@type": "LocationFeatureSpecification", name: "Cocina y comedor equipados", value: true },
              { "@type": "LocationFeatureSpecification", name: "Trato directo sin comisiones", value: true },
            ],
          }),
        }}
      />
      {/* Top Announcement Bar: Sobrio, elegante y sin emoticones ni selector redundante de idioma */}
      <div className="relative z-20 bg-[#18281E] text-stone-200 text-xs py-2 px-4 border-b border-[#253D2F]">
        <div className="mx-auto max-w-7xl flex items-center justify-center text-center">
          <div className="flex flex-wrap items-center justify-center text-center gap-x-4 gap-y-1 text-stone-300 font-light tracking-wide text-xs">
            <span>{t.topBar.noBroker}</span>
            <span className="text-white/20 hidden md:inline">·</span>
            <span className="hidden md:inline">{t.topBar.bilingual}</span>
            <span className="text-white/20 hidden lg:inline">·</span>
            <span className="hidden lg:inline">{t.topBar.payments}</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/favicon.svg"
            alt="Logotipo de Finca La Isabelita"
            className="h-10 w-10 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-2xl font-black uppercase tracking-tight text-[#1C261F] transition-colors duration-200 group-hover:text-white group-hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
            La Isabelita
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-wide text-[#1C261F] lg:flex">
          <a
            href="#ofrecemos"
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.offer}
          </a>
          <a
            href="#caracteristicas"
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.details}
          </a>
          <a
            href="#galeria"
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.gallery}
          </a>
          <a
            href="#testimonios"
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.testimonials}
          </a>
          <a
            href="#ubicacion"
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.location}
          </a>
          <a
            href="#faq"
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.faq}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Botón Switcher Idioma en Header */}
          <div className="inline-flex items-center rounded-full border border-[#DCD5C5] bg-[#EFEAE0] p-1 shadow-inner">
            <button
              onClick={() => setLang("es")}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-bold uppercase transition-all",
                lang === "es"
                  ? "bg-[#243A2C] text-[#FAF8F5] shadow-sm"
                  : "text-[#3D5E49] hover:text-[#18281E]"
              )}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-bold uppercase transition-all",
                lang === "en"
                  ? "bg-[#243A2C] text-[#FAF8F5] shadow-sm"
                  : "text-[#3D5E49] hover:text-[#18281E]"
              )}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-[#243A2C] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#FAF8F5] transition-all hover:bg-[#1C2E23] shadow-sm"
          >
            <span>{t.nav.bookVisit}</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FAF8F5] text-[#243A2C] transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-3 w-3" />
            </div>
          </a>
        </div>
      </header>

      {/* Hero: Casa 100% despejada en el centro, título en el cielo izquierdo, y métricas/botones en los árboles oscuros de la derecha */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-2 pb-12">
        <div
          className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] w-full overflow-hidden rounded-[2.5rem] bg-cover bg-[position:75%_center] lg:bg-center p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-start justify-between gap-8 shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(16, 26, 19, 0.72) 0%, rgba(16, 26, 19, 0.25) 28%, rgba(0, 0, 0, 0) 38%, rgba(0, 0, 0, 0) 62%, rgba(16, 26, 19, 0.40) 72%, rgba(16, 26, 19, 0.82) 100%), url(${heroImg})`,
          }}
        >
          {/* Costado Izquierdo: Título y descripción elevados sobre el cielo abierto y despejado */}
          <div className="relative z-10 flex w-full max-w-md flex-col items-start gap-3 sm:gap-3.5 lg:self-start lg:pt-1">
            {/* Badges superiores: ubicación y trato directo */}
            <div
              className={cn(
                "flex flex-wrap items-center gap-2.5 transition-all duration-700 ease-out",
                heroTextVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              )}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#142319]/70 px-3.5 py-1.5 text-xs font-light tracking-wide text-white backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-emerald-300" />
                <span>{t.hero.locationBadge}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#142319]/65 px-3.5 py-1.5 text-xs font-light text-white/90 backdrop-blur-md">
                <span className="text-emerald-300 font-normal">5.0</span>
                <span className="text-white/30">·</span>
                <span>{t.hero.cornerBadgeSub}</span>
              </div>
            </div>

            {/* Título con tipografía ligera y elegante */}
            <h1
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.14] drop-shadow-md transition-all duration-700 ease-out delay-150",
                heroTextVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              )}
            >
              <span className="font-light">Finca </span>
              <span className="font-normal text-white">{lang === "es" ? "La Isabelita" : "La Isabelita"}</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-light text-white/90 mt-1">
                {lang === "es" ? "en La Ceja, Antioquia" : "in La Ceja, Antioquia"}
              </span>
            </h1>

            {/* Subtítulo más grueso, nítido y con sombra para máxima legibilidad sobre el fondo */}
            <p
              className={cn(
                "text-sm sm:text-base font-normal sm:font-medium leading-relaxed text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] [text-shadow:_0_1px_2px_rgba(0,0,0,0.9),_0_2px_6px_rgba(0,0,0,0.7)] transition-all duration-700 ease-out delay-300",
                heroTextVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              )}
            >
              {t.hero.subtitle}
            </p>
          </div>

          {/* Costado Derecho: Información de características y botones distribuida sobre los árboles oscuros para dejar la casa 100% despejada */}
          <div
            className={cn(
              "relative z-10 w-full max-w-md lg:max-w-sm lg:ml-auto lg:self-center flex flex-col gap-4 sm:gap-5 rounded-3xl border border-white/20 bg-[#121E16]/80 p-6 sm:p-7 backdrop-blur-md shadow-2xl transition-all duration-700 ease-out delay-500",
              heroTextVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            )}
          >
            {/* Encabezado sutil de ficha */}
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                {lang === "es" ? "Características Clave" : "Key Highlights"}
              </span>
              <span className="text-[11px] font-light text-stone-300">
                {lang === "es" ? "Sin intermediarios" : "Direct with owner"}
              </span>
            </div>

            {/* Métricas / Stats en cuadrícula de 2 columnas */}
            <div className="grid grid-cols-2 gap-3 text-white">
              {t.hero.stats.slice(0, 4).map((st, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-3 border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl font-light tracking-tight text-[#FAF8F5]">
                    {st.num}
                    <span className="text-sm font-light text-white/80 ml-0.5">{st.unit}</span>
                  </div>
                  <p className="mt-0.5 text-[10px] font-normal uppercase tracking-wider text-stone-300">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quinta métrica: Precio / Inversión destacada */}
            <div className="flex items-baseline justify-between rounded-2xl bg-white/10 border border-white/15 px-4 py-3">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-300">
                {lang === "es" ? "Canon de Arrendamiento" : "Monthly Rent"}
              </span>
              <div className="text-xl sm:text-2xl font-normal text-[#FAF8F5]">
                {t.hero.stats[4].num} <span className="text-sm font-light text-emerald-300">{t.hero.stats[4].unit} {t.hero.stats[4].label}</span>
              </div>
            </div>

            {/* Botones de acción organizados ordenadamente en la parte inferior sobre los árboles oscuros */}
            <div className="flex flex-col gap-2.5 pt-1">
              <a
                href="#contacto"
                className="group flex items-center justify-center gap-2.5 rounded-full bg-[#FAF8F5] hover:bg-white text-[#18281E] px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider shadow-2xl transition-all hover:scale-[1.02] border border-white/30"
              >
                <span>{t.hero.btnPrimary}</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#18281E] text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </a>

              <a
                href="#ofrecemos"
                className="flex items-center justify-center gap-2 rounded-full border border-white/35 bg-[#142319]/60 hover:bg-[#142319]/85 text-white px-5 py-3 text-xs sm:text-sm font-light uppercase tracking-wider backdrop-blur-md transition-all text-center"
              >
                {t.hero.btnSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Especial: Trato Directo, Anfitrión Bilingüe & Cripto/USD con estética campestre */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Sin intermediarios */}
          <div className="relative overflow-hidden rounded-3xl border border-[#2D4535] bg-[#1A2C20] p-8 text-[#FAF8F5] shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FAF8F5] text-[#1A2C20] mb-6 shadow-sm">
              <UserCheck className="h-6 w-6" />
            </div>
            <div className="inline-block rounded-full bg-[#2D4D38] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-200 mb-3">
              100% Directo
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#FAF8F5]">
              {t.trust.cards[0].title}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-400">
              {t.trust.cards[0].subtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-300">
              {t.trust.cards[0].desc}
            </p>
          </div>

          {/* Card 2: Anfitrión bilingüe */}
          <div className="relative overflow-hidden rounded-3xl border border-[#E0D9C8] bg-[#F5F1E8] p-8 shadow-sm transition-all hover:border-[#2D4D38]/40 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#243A2C] text-[#FAF8F5] mb-6">
              <Globe className="h-6 w-6" />
            </div>
            <div className="inline-block rounded-full bg-[#E3ECE4] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#243A2C] mb-3">
              English & Español
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#1C261F]">
              {t.trust.cards[1].title}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-500">
              {t.trust.cards[1].subtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {t.trust.cards[1].desc}
            </p>
          </div>

          {/* Card 3: Pagos en COP, USD y Cripto */}
          <div className="relative overflow-hidden rounded-3xl border border-[#E0D9C8] bg-[#F5F1E8] p-8 shadow-sm transition-all hover:border-[#2D4D38]/40 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#243A2C] text-[#FAF8F5] mb-6">
              <Coins className="h-6 w-6" />
            </div>
            <div className="inline-block rounded-full bg-[#F5EEDC] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#825721] mb-3">
              COP · USD · Crypto
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#1C261F]">
              {t.trust.cards[2].title}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-500">
              {t.trust.cards[2].subtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {t.trust.cards[2].desc}
            </p>
          </div>
        </div>
      </section>

      {/* Sección: What We Offer (Lo Que Ofrecemos) con tonos campestres y relajantes */}
      <section id="ofrecemos" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 max-w-3xl">
          <div className="inline-block rounded-full bg-[#E5EDE5] border border-[#C8D9CB] px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#243A2C]">
            {t.offer.tag}
          </div>
          <h2 className="mt-4 text-3xl font-bold uppercase leading-tight md:text-5xl text-[#1C261F]">
            {t.offer.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1C261F]/75">
            {t.offer.subtitle}
          </p>
        </div>

        {/* 3 Tarjetas destacadas principales */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {ofertasPrincipales.map((o) => (
            <div
              key={o.number}
              className="group overflow-hidden rounded-3xl border border-[#E2DDD0] bg-[#FDFBF7] shadow-sm transition-all hover:shadow-xl hover:border-[#3D5E49]/30"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={o.img}
                  alt={lang === "es" ? o.altEs : o.altEn}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 rounded-full bg-[#18281E]/85 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-[#FAF8F5]">
                  {o.number}
                </div>
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#3D5E49]">
                  {lang === "es" ? o.titleEn : o.titleEs}
                </div>
                <h3 className="mt-1 text-2xl font-bold uppercase tracking-tight text-[#1C261F]">
                  {lang === "es" ? o.titleEs : o.titleEn}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1C261F]/70">
                  {lang === "es" ? o.descEs : o.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cuadrícula de 6 beneficios (Why Choose Us) */}
        <div className="mt-16">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold uppercase md:text-3xl text-[#1C261F]">
              {t.offer.whyTitle}
            </h3>
            <p className="mt-2 text-sm text-[#1C261F]/65">
              {t.offer.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficiosOfrecidos.map((b) => (
              <div
                key={b.titleEs}
                className="rounded-3xl border border-[#E2DDD0] bg-[#FDFBF7] p-7 shadow-sm transition-all hover:border-[#3D5E49]/40 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#243A2C] text-[#FAF8F5]">
                  <b.icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#3D5E49]">
                  {lang === "es" ? b.titleEn : b.titleEs}
                </div>
                <h4 className="mt-1 text-xl font-bold uppercase text-[#1C261F]">
                  {lang === "es" ? b.titleEs : b.titleEn}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#1C261F]/70">
                  {lang === "es" ? b.descEs : b.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionLabel>
          {lang === "es" ? "La propiedad" : "The Property"}
        </SectionLabel>
        <p className="mt-6 max-w-4xl text-2xl font-medium leading-snug md:text-4xl text-[#1C261F]">
          {lang === "es" ? (
            <>
              Disfruta de la{" "}
              <span className="text-[#2D6A4F] font-semibold">
                tranquilidad del Oriente antioqueño
              </span>{" "}
              en{" "}
              <span className="text-[#2D6A4F] font-semibold">
                Finca La Isabelita
              </span>
              , una propiedad que combina el{" "}
              <span className="text-[#2D6A4F] font-semibold">encanto rural</span>{" "}
              con la comodidad de estar cerca de todo. En el sector Las Lomitas, te
              ofrece{" "}
              <span className="text-[#2D6A4F] font-semibold">
                3 habitaciones, 4 camas, pórtico y parqueadero
              </span>{" "}
              para descansar, teletrabajar o{" "}
              <span className="text-[#2D6A4F] font-semibold">
                conectar con la naturaleza
              </span>
              .
            </>
          ) : (
            <>
              Experience the{" "}
              <span className="text-[#2D6A4F] font-semibold">
                pristine countryside of Eastern Antioquia
              </span>{" "}
              at{" "}
              <span className="text-[#2D6A4F] font-semibold">
                Finca La Isabelita
              </span>
              , combining{" "}
              <span className="text-[#2D6A4F] font-semibold">
                pure rural charm
              </span>{" "}
              with close town proximity. Located in Las Lomitas, it offers{" "}
              <span className="text-[#2D6A4F] font-semibold">
                3 bedrooms, 4 beds, porch, and parking
              </span>{" "}
              to relax, work remotely, or{" "}
              <span className="text-[#2D6A4F] font-semibold">
                reconnect with nature
              </span>
              .
            </>
          )}
        </p>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>{t.features.tag}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold uppercase md:text-5xl text-[#1C261F]">
              {t.features.title}
            </h2>
          </div>
          <Pill>{t.features.investmentPill}</Pill>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caracteristicasData.map((c, i) => (
            <div key={i} className="rounded-2xl bg-[#F4F0E6] p-8 transition-colors hover:bg-[#EAE4D6]">
              <c.icon className="h-8 w-8 text-[#2D5039]" />
              <h3 className="mt-6 text-xl font-bold uppercase text-[#1C261F]">
                {lang === "es" ? c.titleEs : c.titleEn}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1C261F]/70">
                {lang === "es" ? c.textEs : c.textEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Galería (9 imágenes seleccionadas) */}
      <section id="galeria" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>{t.gallery.tag}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold uppercase md:text-5xl text-[#1C261F]">
              {t.gallery.title}
            </h2>
            <p className="mt-2 text-sm text-[#1C261F]/65">
              {t.gallery.subtitle}
            </p>
          </div>
          <Pill>{t.gallery.pill}</Pill>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galeria.map((g, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-[#E2DDD0] bg-[#F4F0E6] shadow-sm transition-all hover:shadow-xl"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={g.src}
                  alt={lang === "es" ? g.altEs : g.altEn}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142319]/80 via-[#142319]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute top-4 left-4 rounded-full bg-[#18281E]/75 backdrop-blur-sm px-3.5 py-1 text-xs font-semibold text-[#FAF8F5]">
                  {lang === "es" ? g.tagEs : g.tagEn}
                </div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-bold text-white uppercase tracking-wide">
                    {lang === "es" ? g.titleEs : g.titleEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Por qué te encantará */}
      <section id="por-que" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>{t.whyLove.tag}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight md:text-5xl text-[#1C261F]">
              {t.whyLove.title}
            </h2>
            <div className="mt-8 space-y-6 sm:space-y-7">
              {razonesData.map((r, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#243A2C] text-[#FAF8F5]">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase text-[#1C261F]">
                      {lang === "es" ? r.titleEs : r.titleEn}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#1C261F]/70">
                      {lang === "es" ? r.textEs : r.textEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#E2DDD0] shadow-md">
            <img
              src={aboutImg}
              alt={
                lang === "es"
                  ? "Pórtico de madera y entorno natural de Finca La Isabelita en Las Lomitas, La Ceja, Oriente Antioqueño"
                  : "Rustic wooden porch and peaceful countryside surroundings at Finca La Isabelita in Las Lomitas, La Ceja"
              }
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sección: What Our Clients Say (Lo Que Dicen Nuestros Clientes) con paleta campestre */}
      <section id="testimonios" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 max-w-3xl">
          <div className="inline-block rounded-full bg-[#E5EDE5] border border-[#C8D9CB] px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#243A2C]">
            {t.testimonials.tag}
          </div>
          <h2 className="mt-4 text-3xl font-bold uppercase leading-tight md:text-5xl text-[#1C261F]">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1C261F]/70">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-[#E2DDD0] bg-[#FDFBF7] p-8 shadow-sm transition-all hover:border-[#3D5E49]/40 hover:bg-white hover:shadow-lg"
            >
              <div>
                {/* 5 Estrellas Doradas */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comentario bilingüe */}
                <p className="mt-4 text-sm leading-relaxed text-[#1C261F]/80 font-normal italic">
                  "{lang === "es" ? item.quoteEs : item.quoteEn}"
                </p>
              </div>

              {/* Info del Cliente con Nombres en Español e Inglés */}
              <div className="mt-6 flex items-center gap-4 border-t border-[#E8E2D5] pt-5">
                <img
                  src={item.avatar}
                  alt={
                    lang === "es"
                      ? `Fotografía de ${item.nameEs}, ${item.roleEs} en Finca La Isabelita`
                      : `Photo of ${item.nameEn}, ${item.roleEn} at Finca La Isabelita`
                  }
                  className="h-14 w-14 rounded-full border-2 border-[#FAF8F5] object-cover shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col">
                  <div className="text-base font-bold text-[#1C261F] flex flex-wrap items-baseline gap-1.5">
                    <span>{lang === "es" ? item.nameEs : item.nameEn}</span>
                    <span className="text-xs font-medium text-[#1C261F]/40">
                      / {lang === "es" ? item.nameEn : item.nameEs}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-[#3D5E49]">
                    {lang === "es" ? item.roleEs : item.roleEn}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ubicación y Mapa */}
      <section id="ubicacion" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>{t.location.tag}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold uppercase md:text-5xl text-[#1C261F]">
              {t.location.title}
            </h2>
          </div>
          <a
            href="https://maps.google.com/?q=Casa+de+Oraci%C3%B3n+La+Providencia+La+Ceja"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#243A2C] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#243A2C] transition-colors hover:bg-[#243A2C] hover:text-[#FAF8F5]"
          >
            {t.location.openMaps}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Tarjetas informativas de ubicación */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-1">
            <div className="space-y-4">
              <div className="rounded-2xl bg-[#F4F0E6] p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-[#2D5039]" />
                  <h3 className="text-base font-bold uppercase text-[#1C261F]">
                    {t.location.refTitle}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#1C261F]/70">
                  {t.location.refDesc}
                </p>
              </div>

              <div className="rounded-2xl bg-[#F4F0E6] p-6">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-6 w-6 text-[#2D5039]" />
                  <h3 className="text-base font-bold uppercase text-[#1C261F]">
                    {t.location.timeTitle}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#1C261F]/70">
                  {t.location.timeDesc}
                </p>
              </div>

              <div className="rounded-2xl bg-[#F4F0E6] p-6">
                <div className="flex items-center gap-3">
                  <Navigation className="h-6 w-6 text-[#2D5039]" />
                  <h3 className="text-base font-bold uppercase text-[#1C261F]">
                    {t.location.quietTitle}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#1C261F]/70">
                  {t.location.quietDesc}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-[#2D5039] bg-[#EBF1EB]/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3D5E49]">
                {t.location.visitPrompt}
              </p>
              <p className="mt-1 text-sm font-medium text-[#1C261F]">
                {t.location.visitSub}
              </p>
              <a
                href={
                  lang === "es"
                    ? "https://wa.me/?text=Hola%2C%20quisiera%20recibir%20la%20ubicaci%C3%B3n%20exacta%20y%20coordinar%20visita%20en%20Las%20Lomitas%2C%20La%20Ceja"
                    : "https://wa.me/?text=Hello%2C%20I%20would%20like%20to%20get%20the%20exact%20location%20and%20schedule%20a%20visit%20at%20Las%20Lomitas%2C%20La%20Ceja"
                }
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#2D5039] underline underline-offset-4 hover:opacity-80"
              >
                {t.location.requestWa}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Iframe del mapa de Google */}
          <div className="relative h-[480px] w-full overflow-hidden rounded-3xl border border-[#E2DDD0] shadow-sm lg:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9589.815914169109!2d-75.41338151934917!3d6.016293509825594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46978a25fdef3b%3A0x31e040b6bd404208!2sCasa%20de%20Oraci%C3%B3n%20La%20Providencia!5e0!3m2!1ses-419!2sco!4v1789084249392!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ubicación Casa Finca Las Lomitas - Casa de Oración La Providencia"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* Preguntas y Respuestas */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>{t.faq.tag}</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold uppercase leading-tight md:text-5xl text-[#1C261F]">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-base text-[#1C261F]/70">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqsData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-[#E2DDD0] bg-[#FDFBF7] px-6 py-1 transition-colors data-[state=open]:border-[#3D5E49]/50 data-[state=open]:bg-white shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-bold uppercase tracking-tight hover:no-underline text-[#1C261F]">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 shrink-0 text-[#2D5039]" />
                    <span>{lang === "es" ? faq.qEs : faq.qEn}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-1 text-base leading-relaxed text-[#1C261F]/75">
                  {lang === "es" ? faq.aEs : faq.aEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Banner Pre-Footer: Ubicado apenotas arriba de la imagen */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 md:pt-16 pb-4 sm:pb-6">
        <div
          className="relative overflow-hidden rounded-[2.5rem] border border-[#2D4535] bg-cover bg-center p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(16, 26, 19, 0.84) 0%, rgba(16, 26, 19, 0.72) 50%, rgba(16, 26, 19, 0.92) 100%), url(${vistaPorticoJardin})`,
          }}
        >
          <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
            {/* Badge superior sobrio */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#142319]/80 px-4 py-1.5 text-xs font-light tracking-widest text-emerald-300 uppercase backdrop-blur-md mb-6">
              {lang === "es"
                ? "Tu Refugio Campestre en Las Lomitas"
                : "Your Country Retreat in Las Lomitas"}
            </div>

            {/* Título principal personalizado */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight leading-tight text-[#FAF8F5]">
              {lang === "es" ? (
                <>
                  ¿Listo para vivir la tranquilidad de{" "}
                  <span className="font-normal text-emerald-300">
                    La Isabelita
                  </span>
                  ?
                </>
              ) : (
                <>
                  Ready to experience the peace of{" "}
                  <span className="font-normal text-emerald-300">
                    La Isabelita
                  </span>
                  ?
                </>
              )}
            </h2>

            {/* Subtítulo personalizado */}
            <p className="mt-4 max-w-2xl text-sm sm:text-base font-light leading-relaxed text-stone-200">
              {lang === "es"
                ? "Disfruta de una casa amoblada con 3 habitaciones, 4 camas, pórtico con vista a las montañas, 500 m² de prado privado y parqueadero a solo 5 minutos del parque de La Ceja. Trato directo con el propietario, sin comisiones de agencia y con disponibilidad inmediata."
                : "Enjoy a furnished home with 3 bedrooms, 4 beds, mountain-view porch, 500 m² private lot, and parking just 5 minutes from town. Direct deal with owner, zero broker fees, and immediate availability."}
            </p>

            {/* Píldoras de beneficios destacados */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-light text-stone-200">
              <span className="rounded-full bg-white/10 px-3.5 py-1 backdrop-blur-sm border border-white/15">
                {lang === "es" ? "Disponibilidad Inmediata" : "Immediate Availability"}
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1 backdrop-blur-sm border border-white/15">
                {lang === "es" ? "100% Pet Friendly" : "100% Pet Friendly"}
              </span>
              <span className="rounded-full bg-white/10 px-3.5 py-1 backdrop-blur-sm border border-white/15">
                {lang === "es" ? "Pagos: COP · USD · Cripto" : "Payments: COP · USD · Crypto"}
              </span>
            </div>

            {/* Precio / Canon */}
            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-light tracking-tight text-[#FAF8F5]">
                $2.900.000
              </span>
              <span className="text-sm sm:text-base font-light text-emerald-300">
                {lang === "es" ? "COP / mes" : "COP / month (~$750 USD)"}
              </span>
            </div>

            {/* Botón CTA principal a WhatsApp sin emoticones */}
            <div className="mt-8 flex justify-center">
              <a
                href={waCustomLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#FAF8F5] px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#18281E] transition-all hover:bg-white hover:shadow-2xl hover:scale-105"
              >
                <span>
                  {lang === "es"
                    ? "Hablar con el Propietario por WhatsApp"
                    : "Chat with the Owner on WhatsApp"}
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Panorámica del Paisaje: Ubicada inmediatamente debajo del banner y descendiendo al footer */}
      <section
        className="relative w-full overflow-hidden bg-[#121E16]"
        aria-label={lang === "es" ? "Paisaje y entorno natural de Finca La Isabelita" : "Natural landscape and scenery of Finca La Isabelita"}
      >
        <div className="relative h-[480px] sm:h-[580px] md:h-[680px] lg:h-[780px] w-full overflow-hidden">
          {/* Video en loop continuo con total nitidez y protagonismo del paisaje */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_040604_c8ace780-37e9-4f61-bc5c-8b1712b4640b.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            ref={(el) => {
              if (el) {
                el.muted = true;
                el.loop = true;
                el.play().catch(() => {});
              }
            }}
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }}
            className="h-full w-full object-cover object-[center_60%] brightness-[0.98] contrast-[1.02] transition-all duration-700"
          />

          {/* Transición superior suave desde el fondo marfil */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/30 to-transparent" />

          {/* Desvanecimiento inferior suave que desciende al color del footer (#121E16) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 sm:h-52 md:h-64 bg-gradient-to-b from-transparent via-[#121E16]/65 to-[#121E16]" />
        </div>
      </section>

      {/* Footer integrado fluidamente con el mismo fondo #121E16 */}
      <footer className="bg-[#121E16] text-[#E5EAE5]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Columna 1: Marca e info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/favicon.svg"
                  alt="Emblema oficial de Finca La Isabelita"
                  className="h-10 w-10 rounded-full border border-white/20 shadow-sm"
                />
                <span className="text-2xl font-black uppercase tracking-wider text-[#FAF8F5]">
                  Finca La Isabelita
                </span>
              </div>
              <p className="text-sm leading-relaxed text-stone-300">
                {t.footer.brandDesc}
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1B2A20] border border-[#273E2E] px-3 py-1 text-xs text-stone-300">
                <Globe className="h-3.5 w-3.5 text-sky-400" />
                <span>{t.footer.bilingualNotice}</span>
              </div>
              <div className="pt-2">
                <a
                  href={waCustomLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#243A2C] border border-[#355440] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#FAF8F5] transition-colors hover:bg-[#2D4736]"
                >
                  Contactar por WhatsApp
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Columna 2: Navegación rápida */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#829987]">
                {t.footer.navTitle}
              </h4>
              <ul className="mt-4 space-y-3 text-sm font-medium">
                <li>
                  <a href="#ofrecemos" className="text-stone-300 transition-colors hover:text-emerald-300">
                    {t.nav.offer}
                  </a>
                </li>
                <li>
                  <a href="#caracteristicas" className="text-stone-300 transition-colors hover:text-emerald-300">
                    {t.nav.details}
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-stone-300 transition-colors hover:text-emerald-300">
                    {t.nav.gallery}
                  </a>
                </li>
                <li>
                  <a href="#testimonios" className="text-stone-300 transition-colors hover:text-emerald-300">
                    {t.nav.testimonials}
                  </a>
                </li>
                <li>
                  <a href="#ubicacion" className="text-stone-300 transition-colors hover:text-emerald-300">
                    {t.nav.location}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-stone-300 transition-colors hover:text-emerald-300">
                    {t.nav.faq}
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-stone-300 transition-colors hover:text-emerald-300">
                    {t.nav.bookVisit}
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Ficha Técnica */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#829987]">
                {t.footer.techTitle}
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-stone-300">
                <li>
                  <span className="text-stone-400">
                    {lang === "es" ? "Habitaciones:" : "Bedrooms:"}
                  </span>{" "}
                  3 {lang === "es" ? "habitaciones" : "bedrooms"} (4 {lang === "es" ? "camas" : "beds"})
                </li>
                <li>
                  <span className="text-stone-400">
                    {lang === "es" ? "Baño:" : "Bathroom:"}
                  </span>{" "}
                  1 {lang === "es" ? "baño completo" : "full bathroom"}
                </li>
                <li>
                  <span className="text-stone-400">
                    {lang === "es" ? "Áreas:" : "Living Areas:"}
                  </span>{" "}
                  {lang === "es" ? "Cocina, comedor & pórtico" : "Kitchen, dining & porch"}
                </li>
                <li>
                  <span className="text-stone-400">
                    {lang === "es" ? "Servicios anexos:" : "Amenities:"}
                  </span>{" "}
                  {lang === "es" ? "Lavandería & parqueadero" : "Laundry & car parking"}
                </li>
                <li>
                  <span className="text-stone-400">
                    {lang === "es" ? "Lote privado:" : "Private Lot:"}
                  </span>{" "}
                  500 m²
                </li>
                <li>
                  <span className="text-stone-400">
                    {lang === "es" ? "Mascotas:" : "Pets:"}
                  </span>{" "}
                  {lang === "es" ? "100% Pet Friendly (bienvenidas)" : "100% Pet Friendly (welcome)"}
                </li>
                <li>
                  <span className="text-stone-400">
                    {lang === "es" ? "Ubicación:" : "Location:"}
                  </span>{" "}
                  Las Lomitas, La Ceja
                </li>
                <li>
                  <span className="text-stone-400">
                    {lang === "es" ? "Precio:" : "Price:"}
                  </span>{" "}
                  $2.900.000 COP (~$750 USD)
                </li>
                <li>
                  <span className="text-stone-400">
                    {lang === "es" ? "Pagos:" : "Payments:"}
                  </span>{" "}
                  COP, USD, USDT/Crypto
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto y Atención */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#829987]">
                {t.footer.contactTitle}
              </h4>
              <div className="mt-4 space-y-3 text-sm text-stone-300">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    Sector Las Lomitas, cerca a Casa de Oración La Providencia, La Ceja (Antioquia).
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{t.footer.hours}</span>
                </p>
                <p className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{t.footer.directService}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Coins className="h-4 w-4 shrink-0 text-amber-400" />
                  <span>{t.footer.paymentsAccepted}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Barra inferior */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#1C2B20] pt-8 text-xs text-stone-400 sm:flex-row">
            <p>© 2026 {t.footer.rights}</p>
            <p className="flex items-center gap-1.5 text-stone-400">
              <span>{t.footer.designedBy}</span>
              <a
                href="https://web.localrank.com.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-400 underline decoration-emerald-500/40 underline-offset-4 transition-colors hover:text-emerald-300 hover:decoration-emerald-300"
              >
                LocalRank
              </a>
            </p>
            <p className="uppercase tracking-widest text-[#829987]">
              La Ceja, Oriente Antioqueño · Colombia
            </p>
          </div>
        </div>
      </footer>

      {/* Burbujita flotante de WhatsApp con mensaje personalizado de interés en Casa Finca La Isabelita */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Cartelito flotante descriptivo */}
        <a
          href={waCustomLink}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-2.5 rounded-full bg-[#18281E]/95 hover:bg-[#18281E] text-[#FAF8F5] px-4 py-2.5 text-xs font-medium shadow-2xl border border-[#2D4D38] backdrop-blur-md transition-all group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-stone-200 group-hover:text-white transition-colors">
            {lang === "es"
              ? "¿Interesado en La Isabelita? ¡Escríbenos!"
              : "Interested in La Isabelita? Chat with us!"}
          </span>
        </a>

        {/* Botón Circular Flotante de WhatsApp */}
        <a
          href={waCustomLink}
          target="_blank"
          rel="noreferrer"
          aria-label={
            lang === "es"
              ? "Contactar por WhatsApp sobre Casa Finca La Isabelita"
              : "Contact on WhatsApp about Casa Finca La Isabelita"
          }
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-[0_10px_25px_rgba(37,211,102,0.45)]"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
          <WhatsAppIcon className="h-7 w-7 fill-white" />
        </a>
      </div>
    </div>
  );
}
