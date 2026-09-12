import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
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
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
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
import ardillaCampo from "@/assets/ardilla-campo.png";
import bosqueNiebla from "@/assets/bosque-niebla.jpg";
import heroCostado from "@/assets/hero-costado.jpg";
import heroPorticoFlores from "@/assets/hero-portico-flores.jpg";
import aveHero from "@/assets/ave-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Campestre La Isabela | Alquiler Casa Campestre Amoblada en La Ceja, Antioquia" },
      {
        name: "description",
        content:
          "Casa campestre en arriendo en La Ceja, amoblada y rodeada de naturaleza. 2 habitaciones, 3 camas y lote de 1.500 m². ¡Agenda tu visita!",
      },
      {
        name: "keywords",
        content:
          "Casa Campestre La Isabela, alquiler casa campestre La Ceja, arriendo casa campestre La Ceja, arriendo Las Lomitas La Ceja, casa campestre amoblada Oriente Antioqueño, arriendo inmobiliaria La Ceja, casa campestre pet friendly La Ceja, arriendo amoblado La Ceja Antioquia, casa de descanso La Ceja, arriendo casa campestre 2 habitaciones La Ceja, alquiler amoblado Las Lomitas, alquiler finca La Ceja",
      },
      { name: "author", content: "Casa Campestre La Isabela" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "geo.region", content: "CO-ANT" },
      { name: "geo.placename", content: "La Ceja, Antioquia, Colombia" },
      { name: "geo.position", content: "6.0270;-75.4260" },
      { name: "ICBM", content: "6.0270, -75.4260" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kmilo1978.github.io/Garces/" },
      { property: "og:site_name", content: "Casa Campestre La Isabela" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: "Casa Campestre La Isabela | Casa Campestre Amoblada en La Ceja (Las Lomitas)" },
      {
        property: "og:description",
        content:
          "Casa campestre en arriendo en La Ceja, amoblada y rodeada de naturaleza. 2 habitaciones, 3 camas y lote de 1.500 m². ¡Agenda tu visita!",
      },
      { property: "og:image", content: "https://kmilo1978.github.io/Garces/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://kmilo1978.github.io/Garces/og-image.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Casa Campestre La Isabela - Casa Campestre Amoblada en Las Lomitas, La Ceja, Antioquia" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://kmilo1978.github.io/Garces/" },
      { name: "twitter:title", content: "Casa Campestre La Isabela | Casa Campestre en La Ceja" },
      {
        name: "twitter:description",
        content:
          "Casa campestre en arriendo en La Ceja, amoblada y rodeada de naturaleza. 2 habitaciones, 3 camas y lote de 1.500 m². ¡Agenda tu visita!",
      },
      { name: "twitter:image", content: "https://kmilo1978.github.io/Garces/og-image.jpg" },
      { name: "twitter:image:alt", content: "Casa Campestre La Isabela en La Ceja, Antioquia" },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" },
      { rel: "canonical", href: "https://kmilo1978.github.io/Garces/" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
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
      noBroker: "Casa Campestre La Isabela · Contrato formal con inmobiliaria (Mínimo 6 meses)",
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
      locationBadge: "Casa Campestre La Isabela · Las Lomitas, La Ceja",
      title: "Casa Campestre La Isabela en La Ceja",
      subtitle:
        "Disfruta del encanto campestre en una propiedad amoblada de 2 habitaciones, 3 camas, 1 baño, cocina, comedor, pórtico exterior, zona de lavandería y parqueadero privado en un lote de 1.500 m². Contrato con inmobiliaria (mínimo 6 meses), agua lista, internet prepago y a aproximadamente 10–12 minutos de Viva La Ceja y Éxito.",
      btnPrimary: "Agendar Mi Visita",
      btnSecondary: "Ver lo que ofrecemos",
      stats: [
        { num: "2", unit: "hab", label: "Habitaciones" },
        { num: "3", unit: "", label: "Camas" },
        { num: "1", unit: "baño", label: "Baño Completo" },
        { num: "1.500", unit: "m²", label: "Lote Privado" },
        { num: "$2.9", unit: "M", label: "COP / Mes" },
      ],
      cornerBadgeTitle: "Casa Campestre La Isabela",
      cornerBadgeSub: "Contrato con inmobiliaria · Mín. 6 meses",
    },
    trust: {
      tag: "Contrato Seguro & Ventajas",
      title: "Beneficios de Alquilar en Casa Campestre La Isabela",
      cards: [
        {
          title: "Contrato con Inmobiliaria",
          subtitle: "Respaldo y Seguridad Jurídica",
          desc: "Arriendo formalizado a través de inmobiliaria (mínimo 6 meses). Cuentas con total claridad contractual, soporte legal y acompañamiento profesional durante toda tu estancia.",
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
      title: "Comodidades de Casa Campestre La Isabela",
      subtitle:
        "Diseñada con 2 habitaciones, 3 camas, cocina equipada, comedor, pórtico campestre, lavandería y parqueadero de vehículos, rodeada de 1.500 m² de prados verdes en Las Lomitas.",
      whyTitle: "¿Por qué elegir Casa Campestre La Isabela?",
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
      title: "Galería de Casa Campestre La Isabela",
      subtitle: "9 perspectivas seleccionadas de las 2 habitaciones, 3 camas, pórtico, áreas sociales y lote verde de 1.500 m².",
      pill: "9 Fotografías Exclusivas",
    },
    testimonials: {
      tag: "What Our Clients Say · Testimonios",
      title: "Historias Reales en La Isabela",
      subtitle: "Huéspedes, familias y profesionales que han disfrutado de la paz rural, el pórtico y la comodidad de esta casa campestre.",
    },
    ctaFeatures: {
      tag: "Ubicación estratégica",
      title: "Cerca de todo, en plena tranquilidad",
      time1: "10–12 min",
      card1Title: "CC Viva La Ceja y Éxito",
      card1Desc: "Aproximadamente a 10–12 minutos de Viva La Ceja y Éxito. Compras, bancos, restaurantes y entretenimiento.",
      time2: "15 min",
      card2Title: "Hospital y Casco Urbano",
      card2Desc: "A 15 minutos del Hospital de La Ceja, droguerías, supermercados y todos los servicios esenciales.",
      ctaTitle: "¿Te gustaría visitar Casa Campestre La Isabela?",
      ctaDesc: "Agenda tu visita con la inmobiliaria y conoce esta casa campestre en Las Lomitas.",
      btnWhatsapp: "Agendar por WhatsApp",
      btnCall: "Llamar",
      phone: "+57 314 627 6298",
    },
    location: {
      tag: "Ubicación estratégica",
      title: "Cómo llegar a Casa Campestre La Isabela",
      openMaps: "Abrir en Google Maps",
      refTitle: "Dirección de referencia",
      refDesc: "Sector Las Lomitas, La Ceja, Antioquia. En las inmediaciones de la Casa de Oración La Providencia.",
      timeTitle: "Ubicación estratégica",
      timeDesc: "A aproximadamente 10–12 minutos del Centro Comercial Viva La Ceja y Éxito, y a 15 minutos del Hospital de La Ceja, supermercados, droguerías y demás servicios del casco urbano (y a 5 minutos del parque principal de La Ceja).",
      quietTitle: "Tranquilidad & Entorno",
      quietDesc: "Zona campestre segura, con aire puro, hermosas vistas verdes y alta valorización en el Oriente Antioqueño.",
      visitPrompt: "¿Planeas tu visita a La Isabela?",
      visitSub: "Te enviamos el punto exacto por WhatsApp o coordinamos para esperarte en la entrada.",
      requestWa: "Solicitar ubicación en WhatsApp",
    },
    faq: {
      tag: "Resolvemos tus dudas",
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre las instalaciones, habitaciones, camas, servicios y condiciones en Casa Campestre La Isabela.",
    },
    cta: {
      title: "Asegura tu estadía en Casa Campestre La Isabela",
      desc: "Contáctanos hoy mismo para agendar tu visita a esta casa campestre amoblada de 2 habitaciones, 3 camas, pórtico y parqueadero en un lote privado de 1.500 m² en La Ceja. Contrato formal con inmobiliaria (mínimo 6 meses).",
      price: "$2.900.000",
      currency: "COP / mes",
      paymentBadge: "Aceptamos Pesos (COP), Dólares (USD) y Cripto (USDT/BTC) · Contrato con inmobiliaria (mínimo 6 meses)",
      btn: "Agendar mi visita",
    },
    footer: {
      brandDesc: "Casa Campestre La Isabela: Casa campestre en Las Lomitas, La Ceja (Oriente Antioqueño). 2 habitaciones, 3 camas, 1 baño, cocina, comedor, pórtico, lavandería y parqueadero en lote privado de 1.500 m². Contrato con inmobiliaria (mínimo 6 meses).",
      bilingualNotice: "We speak English & Spanish fluently.",
      navTitle: "Navegación",
      techTitle: "Ficha Técnica",
      contactTitle: "Atención y Visitas",
      hours: "Lunes a Domingo (con cita previa)",
      directService: "Contrato formal con inmobiliaria (Mín. 6 meses)",
      paymentsAccepted: "Pagos: COP, USD, USDT/Cripto",
      rights: "Casa Campestre La Isabela · Todos los derechos reservados.",
      designedBy: "Diseñado por",
    },
  },
  en: {
    topBar: {
      availability: "Immediate Availability",
      noBroker: "Casa Campestre La Isabela · Real estate agency lease (Min. 6 months)",
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
      locationBadge: "Casa Campestre La Isabela · Las Lomitas, La Ceja",
      title: "Casa Campestre La Isabela in La Ceja",
      subtitle:
        "Experience rural charm in a fully furnished countryside home featuring 2 bedrooms, 3 beds, 1 full bathroom, kitchen, dining area, front porch, laundry area, and vehicle parking on a private 1,500 m² green lot. Verified lease via real estate agency (minimum 6 months), water ready, prepaid internet, and approx. 10–12 minutes from Viva La Ceja Mall & Éxito.",
      btnPrimary: "Schedule My Tour",
      btnSecondary: "What We Offer",
      stats: [
        { num: "2", unit: "beds", label: "Bedrooms" },
        { num: "3", unit: "", label: "Beds" },
        { num: "1", unit: "bath", label: "Full Bathroom" },
        { num: "1,500", unit: "m²", label: "Private Lot" },
        { num: "$2.9", unit: "M", label: "COP / Month" },
      ],
      cornerBadgeTitle: "Casa Campestre La Isabela",
      cornerBadgeSub: "Agency lease · Min 6 months",
    },
    trust: {
      tag: "Agency Lease & Advantages",
      title: "Benefits of Renting Casa Campestre La Isabela",
      cards: [
        {
          title: "Real Estate Agency Lease",
          subtitle: "Legal security & peace of mind",
          desc: "Formal lease managed through a real estate agency with a 6-month minimum term, guaranteeing full legal peace of mind, clear contractual terms, and ongoing support.",
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
      title: "Amenities at Casa Campestre La Isabela",
      subtitle:
        "Equipped with 2 bedrooms, 3 beds, full kitchen, dining area, outdoor porch, laundry zone, and vehicle parking, all nestled within 1,500 m² of green lawns in Las Lomitas.",
      whyTitle: "Why Choose Casa Campestre La Isabela?",
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
      title: "Casa Campestre La Isabela Gallery",
      subtitle: "9 selected perspectives of the 2 bedrooms, 3 beds, porch, social areas, and surrounding 1,500 m² green lot.",
      pill: "9 Exclusive Photos",
    },
    testimonials: {
      tag: "What Our Clients Say · Reviews",
      title: "Real Stories at Casa Campestre La Isabela",
      subtitle: "Guests, families, and remote workers who have enjoyed the peaceful countryside and porch living at La Isabela.",
    },
    ctaFeatures: {
      tag: "Strategic Location",
      title: "Close to Everything, Surrounded by Peace",
      time1: "10–12 min",
      card1Title: "Viva La Ceja Mall & Éxito",
      card1Desc: "Approx. 10–12 minutes from Viva La Ceja Shopping Mall and Éxito supermarket, restaurants, and banking.",
      time2: "15 min",
      card2Title: "Hospital & Urban Services",
      card2Desc: "15 minutes from La Ceja Hospital, pharmacies, supermarkets, and essential municipal services.",
      ctaTitle: "Would you like to tour Casa Campestre La Isabela?",
      ctaDesc: "Schedule your tour with the real estate agency and visit the property in Las Lomitas.",
      btnWhatsapp: "Schedule via WhatsApp",
      btnCall: "Call",
      phone: "+57 314 627 6298",
    },
    location: {
      tag: "Prime Location",
      title: "How to Get to Casa Campestre La Isabela",
      openMaps: "Open in Google Maps",
      refTitle: "Reference Address",
      refDesc: "Las Lomitas sector, La Ceja, Antioquia. Near Casa de Oración La Providencia.",
      timeTitle: "Strategic Location",
      timeDesc: "Strategic Location: approximately 10–12 minutes from Viva La Ceja Shopping Mall & Éxito, and 15 minutes from La Ceja Hospital, supermarkets, pharmacies, and all urban amenities (just 5 minutes from downtown La Ceja).",
      quietTitle: "Peaceful & Safe Setting",
      quietDesc: "Safe residential countryside neighborhood with crisp fresh air, mountain views, and high appreciation in Eastern Antioquia.",
      visitPrompt: "Planning your tour to La Isabela?",
      visitSub: "We can send you the exact GPS pin on WhatsApp or coordinate to welcome you at the gate.",
      requestWa: "Request location on WhatsApp",
    },
    faq: {
      tag: "Got Questions?",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know regarding amenities, bedrooms, beds, utilities, payment methods, and your stay at Casa Campestre La Isabela.",
    },
    cta: {
      title: "Secure Your Country Retreat at Casa Campestre La Isabela",
      desc: "Contact us today to schedule your private tour to this furnished home with 2 bedrooms, 3 beds, porch, and parking on a 1,500 m² lot just 10–12 minutes from town. Real estate agency lease (minimum 6 months).",
      price: "$2,900,000",
      currency: "COP / month (~$750 USD)",
      paymentBadge: "We accept Pesos (COP), US Dollars (USD), and Crypto (USDT/BTC) · Real estate agency lease (minimum 6 months)",
      btn: "Schedule My Tour",
    },
    footer: {
      brandDesc: "Casa Campestre La Isabela: Furnished country home in Las Lomitas, La Ceja (Eastern Antioquia). 2 bedrooms, 3 beds, 1 bathroom, kitchen, dining area, porch, laundry, and parking on a 1,500 m² private lot. Real estate agency lease (minimum 6 months).",
      bilingualNotice: "Hablamos inglés y español con fluidez.",
      navTitle: "Navigation",
      techTitle: "Property Specs",
      contactTitle: "Contact & Visits",
      hours: "Monday to Sunday (by appointment)",
      directService: "Real estate agency lease (Min. 6 months)",
      paymentsAccepted: "Payments: COP, USD, USDT/Crypto",
      rights: "Casa Campestre La Isabela · All rights reserved.",
      designedBy: "Designed by",
    },
  },
};

const caracteristicasData = [
  {
    icon: BedDouble,
    titleEs: "2 Habitaciones & 3 Camas",
    titleEn: "2 Bedrooms & 3 Beds",
    textEs: "Equipada con 3 camas confortables, perfecta para descanso en familia o con invitados.",
    textEn: "Equipped with 3 comfortable beds, ideal for family retreats or visiting guests.",
  },
  {
    icon: Bath,
    titleEs: "1 Baño Completo",
    titleEn: "1 Full Bathroom",
    textEs: "Baño privado completo, cómodo y funcional para todos los residentes de la propiedad.",
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
    textEs: "Tus peludos son bienvenidos. El lote cerrado de 1.500 m² y los prados verdes son el paraíso para su libertad y juego.",
    textEn: "Pets are warmly welcome. The 1,500 m² enclosed yard and lush lawns are paradise for your furry family members.",
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
    titleEs: "Lote Privado de 1.500 m²",
    titleEn: "1,500 m² Private Green Lot",
    textEs: "Gran terreno cerrado y seguro de 1.500 m² con prados verdes, ideal para mascotas y actividades al aire libre.",
    textEn: "Fenced private lot of 1,500 m² with lush green lawns, perfect for pets and outdoor living.",
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
    textEs: "Propiedad amoblada y lista para entrega inmediata. Contrato formal con inmobiliaria (mínimo 6 meses) con total respaldo legal.",
    textEn: "Fully furnished property ready for immediate move-in. Formal real estate agency lease (minimum 6 months) with full legal backing.",
  },
  {
    icon: Leaf,
    titleEs: "Conexión natural",
    titleEn: "Natural Connection",
    textEs: "Amplio lote de 1.500 m² con prados verdes y pórtico exterior para disfrutar el aire puro.",
    textEn: "Spacious 1,500 m² lot with lush green lawns and a country porch to breathe fresh mountain air.",
  },
  {
    icon: Clock3,
    titleEs: "Ubicación estratégica",
    titleEn: "Strategic Location",
    textEs: "En Las Lomitas, a aproximadamente 10–12 minutos del Centro Comercial Viva La Ceja y Éxito, a 15 minutos del Hospital de La Ceja, supermercados, droguerías y demás servicios del casco urbano, y a tan solo 5 minutos del parque principal.",
    textEn: "In Las Lomitas, approx. 10–12 minutes from Viva La Ceja Shopping Mall & Éxito, 15 minutes from La Ceja Hospital, supermarkets and pharmacies, and just 5 minutes from town square.",
  },
  {
    icon: Briefcase,
    titleEs: "Flexibilidad y Confort",
    titleEn: "Flexibility & Comfort",
    textEs: "2 habitaciones con 3 camas, cocina, comedor, lavandería y parqueadero con contrato con inmobiliaria.",
    textEn: "2 bedrooms with 3 beds, kitchen, dining, laundry, and parking with a real estate agency lease.",
  },
];

const ofertasPrincipales = [
  {
    number: "01",
    titleEs: "2 Habitaciones & 3 Camas",
    titleEn: "2 Bedrooms & 3 Beds",
    descEs: "Espacios acogedores con techo de madera, ventanas con vista a la naturaleza y 3 camas confortables listas para habitar.",
    descEn: "Cozy rooms featuring rustic wood ceilings, nature-view windows, and 3 comfortable beds ready from day one.",
    img: habitacionReal,
    width: 768,
    height: 1024,
    altEs: "Habitación principal amoblada con cama vestida, techo rústico de madera y ventana campestre en Casa Campestre La Isabela La Ceja",
    altEn: "Furnished master bedroom with comfortable bed, rustic wood ceiling, and scenic window at Casa Campestre La Isabela in La Ceja",
  },
  {
    number: "02",
    titleEs: "Pórtico Campestre & Terraza Deck",
    titleEn: "Covered Porch & Wood Deck",
    descEs: "Hermoso pórtico de madera cubierto con sillas campestres, mesa de centro y vista abierta a los árboles y prados verdes.",
    descEn: "Stunning covered wood deck with Adirondack chairs, coffee table, and direct views over lush greenery.",
    img: porticoDeck,
    width: 768,
    height: 1024,
    altEs: "Pórtico campestre cubierto en madera con sillas de descanso Adirondack y flores veraneras con vista a la arboleda en Casa Campestre La Isabela La Ceja",
    altEn: "Covered rustic wooden porch with outdoor Adirondack lounge chairs and bougainvillea flowers overlooking greenery at Casa Campestre La Isabela La Ceja",
  },
  {
    number: "03",
    titleEs: "Lote de 1.500 m² & Entrada La Isabela",
    titleEn: "1,500 m² Yard & La Isabela Entrance",
    descEs: "Terreno privado cerrado de 1.500 m², fachada rústica con letrero tradicional La Isabela, jardines nativos, lavandería y parqueadero de vehículos.",
    descEn: "Private gated 1,500 m² lot, rustic entrance with signature La Isabela sign, native gardens, laundry, and vehicle parking.",
    img: exteriorIsabelita,
    width: 1024,
    height: 768,
    altEs: "Entrada campestre privada con letrero tradicional en madera La Isabela y lote cerrado de 1.500 m² en Las Lomitas La Ceja",
    altEn: "Private gated countryside entrance with signature wood sign and 1,500 m² private fenced lot in Las Lomitas, La Ceja",
  },
];

const beneficiosOfrecidos = [
  {
    titleEs: "2 Habitaciones & 3 Camas",
    titleEn: "2 Bedrooms & 3 Beds",
    descEs: "Capacidad ideal con 3 camas confortables, amoblada y lista para ti y tu familia.",
    descEn: "Generous capacity with 3 comfortable beds, fully furnished and move-in ready.",
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
    titleEs: "Contrato con Inmobiliaria",
    titleEn: "Lease Through Agency",
    descEs: "Arriendo formalizado a través de inmobiliaria (mínimo 6 meses), garantizando total transparencia y seguridad jurídica.",
    descEn: "Formalized lease managed through a real estate agency (minimum 6 months), ensuring total transparency and legal security.",
    icon: ShieldCheck,
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
    width: 1024,
    height: 768,
    titleEs: "Fachada Principal & Pórtico",
    titleEn: "Main Facade & Front Porch",
    tagEs: "Exterior",
    tagEn: "Exterior",
    altEs: "Fotografía real de la fachada principal de Casa Campestre La Isabela con pórtico de madera, flores y prados en Las Lomitas, La Ceja",
    altEn: "Real photo of main facade at Casa Campestre La Isabela with wooden porch, flowers, and green lawns in Las Lomitas, La Ceja",
  },
  {
    src: habitacionReal,
    width: 768,
    height: 1024,
    titleEs: "Habitación Principal & Cama Confortable",
    titleEn: "Master Bedroom & Comfortable Bed",
    tagEs: "Habitación",
    tagEn: "Bedroom",
    altEs: "Dormitorio principal amoblado con cama vestida, techo rústico de madera y ventanal campestre en Casa Campestre La Isabela",
    altEn: "Furnished master bedroom with comfortable bed, rustic wood ceiling, and scenic window at Casa Campestre La Isabela",
  },
  {
    src: porticoDeck,
    width: 768,
    height: 1024,
    titleEs: "Pórtico Cubierto & Terraza Deck",
    titleEn: "Covered Porch & Wood Deck",
    tagEs: "Pórtico",
    tagEn: "Porch Deck",
    altEs: "Pórtico campestre cubierto en madera con sillas de descanso Adirondack y vista a los árboles nativos en La Ceja, Antioquia",
    altEn: "Covered rustic wooden porch with outdoor Adirondack chairs and tree canopy view in La Ceja, Antioquia",
  },
  {
    src: vistaPorticoJardin,
    width: 1024,
    height: 768,
    titleEs: "Vista al Jardín & Lote de 1.500 m²",
    titleEn: "Lawn & 1,500 m² Lot View",
    tagEs: "Lote 1.500 m²",
    tagEn: "1,500 m² Lot",
    altEs: "Panorámica de los prados verdes privados de 1.500 m² y jardines floridos desde la terraza de Casa Campestre La Isabela en Las Lomitas",
    altEn: "Scenic view of 1,500 m² private green lawns and flowering gardens from the deck of Casa Campestre La Isabela in Las Lomitas",
  },
  {
    src: cocinaReal,
    width: 768,
    height: 1024,
    titleEs: "Cocina Integral & Techo en Madera",
    titleEn: "Equipped Kitchen & Wood Ceiling",
    tagEs: "Cocina",
    tagEn: "Kitchen",
    altEs: "Cocina integral campestre amoblada y equipada con estufa de gas, mesón y estanterías en Casa Campestre La Isabela",
    altEn: "Fully equipped rustic country kitchen with gas stove, countertops, and wood ceiling at Casa Campestre La Isabela",
  },
  {
    src: habitacionGemelas,
    width: 768,
    height: 1024,
    titleEs: "Habitación Camas & Ventana Verde",
    titleEn: "Bedroom with Beds & Mountain View",
    tagEs: "Habitación 2",
    tagEn: "Bedroom 2",
    altEs: "Segunda habitación amoblada con 2 camas confortables y ventana con vista a las montañas en Casa Campestre La Isabela, La Ceja",
    altEn: "Second furnished bedroom with 2 comfortable beds and mountain view window at Casa Campestre La Isabela, La Ceja",
  },
  {
    src: banoReal,
    width: 768,
    height: 1024,
    titleEs: "Baño Completo & Cabina de Vidrio",
    titleEn: "Full Bathroom & Glass Shower",
    tagEs: "Baño",
    tagEn: "Bathroom",
    altEs: "Baño completo moderno con ducha en cabina de vidrio templado, lavamanos y espejo en Casa Campestre La Isabela",
    altEn: "Modern full bathroom with glass shower enclosure, vanity sink, and mirror at Casa Campestre La Isabela",
  },
  {
    src: exteriorIsabelita,
    width: 1024,
    height: 768,
    titleEs: "Fachada & Entrada La Isabela",
    titleEn: "Facade & Entrance Sign",
    tagEs: "Entrada",
    tagEn: "Entrance",
    altEs: "Entrada campestre privada con letrero tradicional en madera La Isabela y vegetación nativa en Las Lomitas La Ceja",
    altEn: "Private gated countryside entrance with signature wood sign and lush greenery in Las Lomitas, La Ceja",
  },
  {
    src: costadoFincaPrados,
    width: 1024,
    height: 768,
    titleEs: "Costado de la Casa & Lote de 1.500 m²",
    titleEn: "Side View & 1,500 m² Green Yard",
    tagEs: "Lote 1.500 m²",
    tagEn: "1,500 m² Lot",
    altEs: "Costado de la casa campestre con arquitectura tradicional, techo de teja de barro y lote privado cerrado de 1.500 m² pet friendly en Casa Campestre La Isabela, La Ceja",
    altEn: "Side view of traditional countryside home with clay tile roof and 1,500 m² private fenced pet friendly yard at Casa Campestre La Isabela, La Ceja",
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
      "La casa campestre está perfectamente amoblada y lista para habitar. El lote de 1.500 m² fue el paraíso para mis perros, el trámite con la inmobiliaria fue muy seguro y la experiencia ha sido impecable.",
    quoteEn:
      "The country home is fully furnished and truly move-in ready. The 1,500 m² yard was paradise for my dogs, the real estate agency lease gave us total security, and the stay has been wonderful.",
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
      "Buscaba salir del ruido de Medellín sin quedar aislado. La tranquilidad de Las Lomitas, la formalidad del contrato con inmobiliaria y la cercanía a Viva La Ceja superaron todas mis expectativas.",
    quoteEn:
      "I was looking to escape Medellín's noise without being isolated. The peace of Las Lomitas, the formal real estate agency lease, and quick access to town exceeded all my expectations.",
  },
  {
    nameEs: "Sofía Salazar",
    nameEn: "Sophie Turner",
    roleEs: "Estadía Familiar & Mascotas",
    roleEn: "Family & Pet Stay",
    avatar: "https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784c7160b1fd1a669fc2501_reviewer-3.jpg",
    quoteEs:
      "El contrato de 6 meses con inmobiliaria nos brindó total seriedad y tranquilidad. La casa es acogedora, amoblada con buen gusto y el anfitrión bilingüe resolvió todas nuestras dudas de inmediato.",
    quoteEn:
      "The 6-month lease through the real estate agency gave us complete peace of mind. The home is cozy, tastefully furnished, and the bilingual host answered all our questions immediately.",
  },
  {
    nameEs: "Alejandro Silva",
    nameEn: "Alex Morgan",
    roleEs: "Desarrollador Remoto",
    roleEn: "Remote Developer",
    avatar: "https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789052eb36498c29a93edf7_reviewer-4.jpg",
    quoteEs:
      "Excelente relación calidad-precio por $2.900.000 COP al mes. Un lote independiente de 1.500 m² donde se respira paz, con contrato formal con inmobiliaria y pagos en dólares sin complicaciones.",
    quoteEn:
      "Outstanding value for $2,900,000 COP per month. An independent 1,500 m² lot where you breathe clean air, backed by a real estate agency lease, and paying easily in US Dollars.",
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
    qEs: "¿Cómo está distribuida y equipada Casa Campestre La Isabela?",
    qEn: "What is the layout and equipment at Casa Campestre La Isabela?",
    aEs: "Casa Campestre La Isabela se entrega totalmente amoblada. Cuenta con 2 habitaciones, 3 camas, 1 baño completo, cocina dotada, comedor, un acogedor pórtico exterior, zona de lavandería independiente y parqueadero privado para carros dentro del lote cerrado de 1.500 m².",
    aEn: "Casa Campestre La Isabela is delivered fully furnished. It features 2 bedrooms, 3 beds, 1 full bathroom, equipped kitchen, dining area, a cozy front country porch, dedicated laundry area, and on-site private vehicle parking on a 1,500 m² green lot.",
  },
  {
    qEs: "¿Cuál es el tiempo mínimo de arrendamiento y cómo se formaliza el contrato?",
    qEn: "What is the minimum lease term and how is the contract formalized?",
    aEs: "El tiempo mínimo de arrendamiento es de 6 meses. El contrato se celebra formalmente a través de inmobiliaria, lo que garantiza respaldo legal, transparencia y seguridad jurídica para ambas partes.",
    aEn: "The minimum lease term is 6 months. The lease is formalized through a recognized real estate agency, guaranteeing legal backing, transparency, and peace of mind for both parties.",
  },
  {
    qEs: "¿Se permiten mascotas?",
    qEn: "Are pets allowed?",
    aEs: "Sí, es 100% Pet Friendly. Se permiten mascotas en sus 1.500 m² de prado verde privado, siempre que el arrendatario se haga responsable de su cuidado y de cualquier daño que puedan ocasionar.",
    aEn: "Yes, it is 100% Pet Friendly. Pets are warmly welcome across its 1,500 m² private lawn, provided the tenant is responsible for their care and any damage they may cause.",
  },
  {
    qEs: "¿Los servicios están incluidos?",
    qEn: "Are utilities included in the rent?",
    aEs: "No. Los servicios públicos se pagan por separado, según el consumo real.",
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
    aEs: "La cancelación anticipada estará sujeta a las condiciones estipuladas en el contrato formal de arrendamiento con la inmobiliaria y al preaviso correspondiente.",
    aEn: "Early cancellation is governed by the terms specified in the formal real estate agency lease agreement and the agreed notice period.",
  },
  {
    qEs: "¿Cómo es el contrato con inmobiliaria y qué métodos de pago aceptan?",
    qEn: "How is the agency lease handled and what payment methods do you accept?",
    aEs: "El contrato se gestiona con inmobiliaria con un plazo mínimo de 6 meses, brindando máxima seguridad. El anfitrión habla español e inglés con fluidez (100% bilingüe). Se aceptan pagos en Pesos Colombianos (COP), Dólares Americanos (USD vía Zelle o transferencia) y Criptomonedas (USDT, Bitcoin, etc.).",
    aEn: "The contract is handled through a real estate agency with a 6-month minimum lease, providing complete security. The host speaks fluent English and Spanish. Payments are accepted in Colombian Pesos (COP), US Dollars (USD via Zelle or wire), and Cryptocurrencies (USDT, Bitcoin, etc.).",
  },
];

function Index() {
  const [lang, setLang] = useState<Lang>("es");
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const t = translations[lang];

  const heroSlides = [
    {
      src: heroImg,
      width: 1024,
      height: 768,
      alt:
        lang === "es"
          ? "Fotografía real de la fachada principal de Casa Campestre La Isabela con pórtico de madera, flores y prados en Las Lomitas, La Ceja"
          : "Real photograph of the main facade of Casa Campestre La Isabela with wooden porch, flowers, and open lawn in Las Lomitas, La Ceja",
      titleEs: "Fachada & Pórtico",
      titleEn: "Facade & Porch",
    },
    {
      src: heroCostado,
      width: 1024,
      height: 768,
      alt:
        lang === "es"
          ? "Costado de la casa campestre con tejado tradicional en teja de barro y prados verdes de 1.500 m² en Casa Campestre La Isabela, La Ceja"
          : "Side view of the countryside house with traditional clay-tiled roof and 1,500 m² green lawns at Casa Campestre La Isabela, La Ceja",
      titleEs: "Costado & Prados",
      titleEn: "Side & Lawns",
    },
    {
      src: heroPorticoFlores,
      width: 1024,
      height: 768,
      alt:
        lang === "es"
          ? "Vista panorámica al jardín, flores veraneras y montañas desde el pórtico de madera en Casa Campestre La Isabela La Ceja"
          : "Panoramic view of the garden, bougainvillea flowers, and mountains from the wooden deck at Casa Campestre La Isabela La Ceja",
      titleEs: "Pórtico & Jardín",
      titleEn: "Porch & Garden",
    },
  ];

  // Desplazamiento en paralelo automático cada 5.5 segundos (se pausa si el usuario posa el cursor)
  useEffect(() => {
    if (heroPaused) return;
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [heroPaused, heroSlides.length]);

  useEffect(() => {
    // Permite que la imagen de la casa campestre se aprecie primero y luego entra suavemente el texto
    const timer = setTimeout(() => {
      setHeroTextVisible(true);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  const waPhone = "573146276298";
  const waCustomMessage =
    lang === "es"
      ? "Hola, estoy interesado en el arriendo de Casa Campestre La Isabela en La Ceja. ¿Me podrían brindar más información sobre los requisitos y agendar una visita con la inmobiliaria?"
      : "Hello, I am interested in leasing Casa Campestre La Isabela in La Ceja. Could you please provide more information regarding requirements and schedule a visit with the real estate agency?";

  const waCustomLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(waCustomMessage)}`;

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] font-sans text-[#1C261F] selection:bg-[#D5E3D8] selection:text-[#18281E] overflow-x-hidden">
      {/* Fondo de cielo atmosférico detrás del Hero que se va difuminando suavemente hasta volverse blanco */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[920px] sm:h-[1040px] md:h-[1140px] lg:h-[1250px] overflow-hidden z-0"
        aria-hidden="true"
      >
        <img
          src={cieloHero}
          width={1024}
          height={613}
          alt={
            lang === "es"
              ? "Cielo azul luminoso y despejado sobre el paisaje campestre de La Ceja, Antioquia"
              : "Bright clear blue sky over the countryside landscape of La Ceja, Antioquia"
          }
          className="h-full w-full object-cover object-top [filter:brightness(1.55)_saturate(0.38)_contrast(0.92)_hue-rotate(12deg)] opacity-70"
        />
        {/* Capa de difusión gradual para que el cielo celeste muy claro y luminoso se desvanezca suavemente a blanco */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 via-20% to-white/95" />
        <div className="absolute inset-x-0 bottom-0 h-64 sm:h-80 md:h-96 bg-gradient-to-b from-transparent via-white/85 to-[#FAF8F5]" />
      </div>

      {/* Schema.org Structured Data: Multi-Entity @graph con VacationRental, SingleFamilyResidence, FAQPage y BreadcrumbList para Google Rich Snippets y LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["VacationRental", "SingleFamilyResidence"],
                "@id": "https://kmilo1978.github.io/Garces/#property",
                name: "Casa Campestre La Isabela",
                description:
                  "Casa campestre amoblada en alquiler formal con inmobiliaria en Las Lomitas, La Ceja, Oriente Antioqueño. Cuenta con 2 habitaciones, 3 camas, 1 baño completo, cocina dotada, comedor, pórtico exterior, zona de lavandería independiente, parqueadero y lote privado cerrado de 1.500 m². Contrato mínimo de 6 meses. 100% Pet Friendly. Canon mensual: $2.900.000 COP.",
                url: "https://kmilo1978.github.io/Garces/",
                telephone: "+57 314 627 6298",
                image: [
                  "https://kmilo1978.github.io/Garces/og-image.jpg",
                  "https://kmilo1978.github.io/Garces/hero-finca.jpg",
                  "https://kmilo1978.github.io/Garces/portico-deck.jpg",
                  "https://kmilo1978.github.io/Garces/vista-portico-jardin.jpg",
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Sector Las Lomitas, cerca a Casa de Oración La Providencia",
                  addressLocality: "La Ceja",
                  addressRegion: "Antioquia",
                  postalCode: "055010",
                  addressCountry: "CO",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 6.027,
                  longitude: -75.426,
                },
                priceRange: "$2.900.000 COP / mes",
                currenciesAccepted: "COP, USD",
                paymentAccepted: "COP, USD, Criptomonedas (USDT, BTC)",
                numberOfBedrooms: 2,
                numberOfBeds: 3,
                numberOfBathroomsTotal: 1,
                occupancy: {
                  "@type": "QuantitativeValue",
                  value: 4,
                },
                floorSize: {
                  "@type": "QuantitativeValue",
                  value: 1500,
                  unitCode: "MTK",
                },
                petsAllowed: true,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5.0",
                  reviewCount: "3",
                  bestRating: "5",
                  worstRating: "1",
                },
                amenityFeature: [
                  { "@type": "LocationFeatureSpecification", name: "2 Habitaciones", value: true },
                  { "@type": "LocationFeatureSpecification", name: "3 Camas", value: true },
                  { "@type": "LocationFeatureSpecification", name: "1 Baño Completo", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Pórtico Campestre", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Lote privado de 1.500 m²", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Parqueadero privado de vehículos", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Zona de lavandería independiente", value: true },
                  { "@type": "LocationFeatureSpecification", name: "100% Pet Friendly", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Cocina y comedor equipados", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Contrato formal con inmobiliaria (mínimo 6 meses)", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Internet con módem prepago", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Servicio de agua continuo", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Anfitrión 100% bilingüe (Español & English)", value: true },
                  { "@type": "LocationFeatureSpecification", name: "A 10–12 min de CC Viva La Ceja y Éxito", value: true },
                  { "@type": "LocationFeatureSpecification", name: "A 15 min de Hospital de La Ceja y casco urbano", value: true },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://kmilo1978.github.io/Garces/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿Cómo está distribuida y equipada Casa Campestre La Isabela?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Casa Campestre La Isabela se entrega totalmente amoblada. Cuenta con 2 habitaciones, 3 camas, 1 baño completo, cocina dotada, comedor, un acogedor pórtico exterior, zona de lavandería independiente y parqueadero privado para carros dentro del lote cerrado de 1.500 m².",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Cuál es el tiempo mínimo de arrendamiento y cómo se formaliza el contrato?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "El tiempo mínimo de arrendamiento es de 6 meses. El contrato se celebra formalmente a través de inmobiliaria, lo que garantiza respaldo legal, transparencia y seguridad jurídica para ambas partes.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Se permiten mascotas?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sí, es 100% Pet Friendly. Se permiten mascotas en sus 1.500 m² de prado verde privado, siempre que el arrendatario se haga responsable de su cuidado y de cualquier daño que puedan ocasionar.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Los servicios están incluidos?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Los servicios públicos se pagan por separado, según el consumo real.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿La casa cuenta con internet?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sí. Cuenta con internet mediante módem prepago o recargable, para que puedas conectarte según tus necesidades.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Qué pasa si necesito cancelar antes de terminar el tiempo acordado?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "La cancelación anticipada estará sujeta a las condiciones estipuladas en el contrato formal de arrendamiento con la inmobiliaria y al preaviso correspondiente.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Cómo es el contrato con inmobiliaria y qué métodos de pago aceptan?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "El contrato se gestiona con inmobiliaria con un plazo mínimo de 6 meses, brindando máxima seguridad. El anfitrión habla español e inglés con fluidez (100% bilingüe). Se aceptan pagos en Pesos Colombianos (COP), Dólares Americanos (USD vía Zelle o transferencia) y Criptomonedas (USDT, Bitcoin, etc.).",
                    },
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://kmilo1978.github.io/Garces/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Inicio",
                    item: "https://kmilo1978.github.io/Garces/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Casa Campestre La Isabela",
                    item: "https://kmilo1978.github.io/Garces/#property",
                  },
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://kmilo1978.github.io/Garces/#website",
                name: "Casa Campestre La Isabela",
                url: "https://kmilo1978.github.io/Garces/",
                inLanguage: ["es-CO", "en-US"],
                description:
                  "Sitio oficial de Casa Campestre La Isabela. Arriendo de casa campestre amoblada en Las Lomitas, La Ceja, Antioquia.",
              },
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

      {/* Ave volando sobre el cielo campestre del Hero (Barranquero / Quetzal) */}
      <div
        className="pointer-events-none absolute top-28 2xl:top-24 right-3 xl:right-10 2xl:right-24 z-20 hidden min-[1320px]:block"
        aria-hidden="true"
      >
        <img
          src={aveHero}
          width={500}
          height={500}
          alt={
            lang === "es"
              ? "Barranquero andino en pleno vuelo sobre el cielo campestre de Casa Campestre La Isabela"
              : "Andean motmot bird flying gracefully over the countryside sky at Casa Campestre La Isabela"
          }
          className="w-36 xl:w-44 2xl:w-52 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)] select-none animate-float-bird"
        />
      </div>

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6">
        <a href="/" aria-label="Casa Campestre La Isabela - Ir al inicio" className="flex items-center gap-3.5 group flex-shrink-0">
          <img
            src="/colibri-logo.png"
            width={56}
            height={56}
            alt={
              lang === "es"
                ? "Logotipo oficial de Casa Campestre La Isabela con cabeza de colibrí"
                : "Official Casa Campestre La Isabela logo with hummingbird head"
            }
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center leading-tight">
            <span className="text-2xl sm:text-[1.75rem] font-light tracking-tight text-[#1C261F] transition-colors duration-200 group-hover:text-emerald-950">
              La Isabela
            </span>
            <span className="text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.28em] text-[#243A2C]/80">
              Casa Campestre
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-3.5 xl:gap-6 text-xs xl:text-sm font-semibold uppercase tracking-wide text-[#1C261F] whitespace-nowrap lg:flex">
          <a
            href="#ofrecemos"
            className="whitespace-nowrap transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.offer}
          </a>
          <a
            href="#caracteristicas"
            className="whitespace-nowrap transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.details}
          </a>
          <a
            href="#galeria"
            className="whitespace-nowrap transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.gallery}
          </a>
          <a
            href="#testimonios"
            className="whitespace-nowrap transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.testimonials}
          </a>
          <a
            href="#ubicacion"
            className="whitespace-nowrap transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.location}
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap transition-all duration-200 hover:text-white hover:drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t.nav.faq}
          </a>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          {/* Botón Switcher Idioma en Header */}
          <div className="inline-flex items-center rounded-full border border-[#DCD5C5] bg-[#EFEAE0] p-1 shadow-inner">
            <button
              onClick={() => setLang("es")}
              className={cn(
                "rounded-full px-2.5 sm:px-3 py-1 text-xs font-bold uppercase transition-all",
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
                "rounded-full px-2.5 sm:px-3 py-1 text-xs font-bold uppercase transition-all",
                lang === "en"
                  ? "bg-[#243A2C] text-[#FAF8F5] shadow-sm"
                  : "text-[#3D5E49] hover:text-[#18281E]"
              )}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Botón CTA visible en pantallas medianas y grandes */}
          <a
            href={waCustomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex group items-center gap-2 rounded-full bg-[#243A2C] px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-semibold uppercase tracking-widest text-[#FAF8F5] transition-all hover:bg-[#1C2E23] shadow-sm"
          >
            <span>{t.nav.bookVisit}</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FAF8F5] text-[#243A2C] transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-3 w-3" />
            </div>
          </a>

          {/* Botón Hamburguesa Móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1C261F]/20 bg-white/85 text-[#1C261F] shadow-sm backdrop-blur-md transition-all hover:bg-white hover:text-black lg:hidden"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Menú Desplegable Móvil tipo Hamburguesa */}
      {mobileMenuOpen && (
        <div className="relative z-30 mx-4 mb-4 overflow-hidden rounded-3xl border border-[#2D4535] bg-[#121E16]/95 p-6 text-[#FAF8F5] shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-3.5 text-sm font-semibold uppercase tracking-wider">
            <a
              href="#ofrecemos"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 pb-2.5 text-stone-200 transition-colors hover:text-emerald-300"
            >
              {t.nav.offer}
            </a>
            <a
              href="#caracteristicas"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 pb-2.5 text-stone-200 transition-colors hover:text-emerald-300"
            >
              {t.nav.details}
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 pb-2.5 text-stone-200 transition-colors hover:text-emerald-300"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 pb-2.5 text-stone-200 transition-colors hover:text-emerald-300"
            >
              {t.nav.testimonials}
            </a>
            <a
              href="#ubicacion"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 pb-2.5 text-stone-200 transition-colors hover:text-emerald-300"
            >
              {t.nav.location}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/10 pb-2.5 text-stone-200 transition-colors hover:text-emerald-300"
            >
              {t.nav.faq}
            </a>
          </nav>

          <div className="mt-5">
            <a
              href={waCustomLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FAF8F5] py-3 text-xs font-bold uppercase tracking-widest text-[#18281E] shadow-lg transition-all hover:bg-white"
            >
              <span>{t.nav.bookVisit}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}

      {/* Contenido Principal (Landmark Semántico para SEO y Accesibilidad) */}
      <main id="main-content">
        {/* Hero: Casa 100% despejada en el centro, título en el cielo izquierdo, y métricas/botones en los árboles oscuros de la derecha */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-2 pb-12">
        <div
          className="group/hero relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] w-full overflow-hidden rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-start justify-between gap-8 shadow-2xl select-none"
          onMouseEnter={() => setHeroPaused(true)}
          onMouseLeave={() => setHeroPaused(false)}
        >
          {/* Pista de deslizamiento en paralelo para las 3 imágenes reales con su aspecto 4:3 natural */}
          <div
            className="absolute inset-0 flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${heroSlide * 100}%)` }}
          >
            {heroSlides.map((slide, idx) => (
              <div key={idx} className="relative h-full w-full shrink-0 overflow-hidden">
                <img
                  src={slide.src}
                  width={slide.width}
                  height={slide.height}
                  alt={slide.alt}
                  className="h-full w-full object-cover object-[center_35%] lg:object-center transition-transform duration-1000"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                {/* Degradados translúcidos sutiles para asegurar legibilidad a la izquierda y contraste de tarjeta a la derecha */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#101A13]/25 via-transparent via-40% to-[#101A13]/70" />
              </div>
            ))}
          </div>

          {/* Flechas de desplazamiento en paralelo para navegar entre las fotos */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 transition-all shadow-xl hover:scale-110 active:scale-95"
            aria-label="Ver fotografía anterior de la casa campestre"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setHeroSlide((prev) => (prev + 1) % heroSlides.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 transition-all shadow-xl hover:scale-110 active:scale-95"
            aria-label="Ver siguiente fotografía de la casa campestre"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Indicador inferior con selector de diapositivas en paralelo y nombre de foto */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 rounded-full bg-[#121E16]/80 px-4 py-2 backdrop-blur-md border border-white/20 shadow-lg">
            <span className="text-[11px] font-medium text-stone-200 tracking-wider uppercase">
              {heroSlide + 1} / {heroSlides.length} · {lang === "es" ? heroSlides[heroSlide].titleEs : heroSlides[heroSlide].titleEn}
            </span>
            <div className="flex items-center gap-1.5 ml-1">
              {heroSlides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHeroSlide(dotIdx);
                  }}
                  aria-label={`Ir a fotografía ${dotIdx + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    heroSlide === dotIdx
                      ? "w-6 bg-emerald-400 shadow-sm"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  )}
                />
              ))}
            </div>
          </div>
          {/* Título semántico oculto para SEO y lectores de pantalla sin recargar visualmente la fotografía */}
          <h1 className="sr-only">
            {lang === "es"
              ? "Casa Campestre La Isabela | Casa Campestre Amoblada en La Ceja, Antioquia"
              : "Casa Campestre La Isabela | Furnished Country Home in La Ceja, Antioquia"}
          </h1>

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
                {lang === "es" ? "Con inmobiliaria (Mín. 6 meses)" : "Agency lease (Min. 6 mos)"}
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

      {/* Sección Especial: Contrato con Inmobiliaria, Anfitrión Bilingüe & Cripto/USD */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h2 className="sr-only">
          {lang === "es"
            ? "Garantías y Condiciones Principales del Arriendo"
            : "Rental Guarantees and Key Lease Terms"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Contrato con Inmobiliaria */}
          <div className="relative overflow-hidden rounded-3xl border border-[#2D4535] bg-[#1A2C20] p-8 text-[#FAF8F5] shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FAF8F5] text-[#1A2C20] mb-6 shadow-sm">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="inline-block rounded-full bg-[#2D4D38] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-200 mb-3">
              {lang === "es" ? "100% Formal" : "100% Verified"}
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
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#2D4535]">
              {t.trust.cards[1].subtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#1C261F]/85">
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
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#2D4535]">
              {t.trust.cards[2].subtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#1C261F]/85">
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
                  width={o.width}
                  height={o.height}
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

      {/* Intro con Ardilla Campestre */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="max-w-3xl xl:max-w-4xl flex-1">
            <SectionLabel>
              {lang === "es" ? "La propiedad" : "The Property"}
            </SectionLabel>
            <p className="mt-6 text-2xl font-medium leading-snug md:text-4xl text-[#1C261F]">
              {lang === "es" ? (
                <>
                  Disfruta de la{" "}
                  <span className="text-[#2D6A4F] font-semibold">
                    tranquilidad del Oriente antioqueño
                  </span>{" "}
                  en{" "}
                  <span className="text-[#2D6A4F] font-semibold">
                    Casa Campestre La Isabela
                  </span>
                  , una propiedad que combina el{" "}
                  <span className="text-[#2D6A4F] font-semibold">encanto rural</span>{" "}
                  con la comodidad de estar cerca de todo. En el sector Las Lomitas, te
                  ofrece{" "}
                  <span className="text-[#2D6A4F] font-semibold">
                    2 habitaciones, 3 camas, pórtico y lote de 1.500 m²
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
                    Casa Campestre La Isabela
                  </span>
                  , combining{" "}
                  <span className="text-[#2D6A4F] font-semibold">
                    pure rural charm
                  </span>{" "}
                  with close town proximity. Located in Las Lomitas, it offers{" "}
                  <span className="text-[#2D6A4F] font-semibold">
                    2 bedrooms, 3 beds, porch, and 1,500 m² lot
                  </span>{" "}
                  to relax, work remotely, or{" "}
                  <span className="text-[#2D6A4F] font-semibold">
                    reconnect with nature
                  </span>
                  .
                </>
              )}
            </p>
          </div>
          <div className="relative shrink-0 flex items-center justify-center self-center lg:self-end">
            <img
              src={ardillaCampo}
              width={417}
              height={350}
              alt={
                lang === "es"
                  ? "Ardilla campestre nativa observando el entorno natural en Casa Campestre La Isabela, Las Lomitas, La Ceja"
                  : "Native countryside squirrel enjoying the peaceful natural environment at Casa Campestre La Isabela in Las Lomitas, La Ceja"
              }
              className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
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

      {/* 1. Sección de Ubicación Estratégica (ligera, clara y campestre) */}
      <section className="mx-auto max-w-7xl px-6 pt-2 pb-6">
        <div className="mb-6">
          <SectionLabel>{t.ctaFeatures.tag}</SectionLabel>
          <h3 className="mt-3 text-2xl font-bold uppercase text-[#1C261F] md:text-3xl">
            {t.ctaFeatures.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-[#F4F0E6] p-6 border border-[#E2DDD0]/60 transition-colors hover:bg-[#EAE4D6]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D5039]/10 text-[#2D5039]">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-[#2D5039] px-3 py-1 text-xs font-bold text-[#FAF8F5]">
                {t.ctaFeatures.time1}
              </span>
            </div>
            <h4 className="mt-4 text-lg font-bold uppercase text-[#1C261F]">
              {t.ctaFeatures.card1Title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#1C261F]/70">
              {t.ctaFeatures.card1Desc}
            </p>
          </div>

          <div className="rounded-2xl bg-[#F4F0E6] p-6 border border-[#E2DDD0]/60 transition-colors hover:bg-[#EAE4D6]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D5039]/10 text-[#2D5039]">
                <Clock3 className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-[#2D5039] px-3 py-1 text-xs font-bold text-[#FAF8F5]">
                {t.ctaFeatures.time2}
              </span>
            </div>
            <h4 className="mt-4 text-lg font-bold uppercase text-[#1C261F]">
              {t.ctaFeatures.card2Title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#1C261F]/70">
              {t.ctaFeatures.card2Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Sección CTA de Agendamiento (delgada, sin exceso de texto) */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-2xl border border-[#2D5039]/20 bg-[#EBF1EB]/70 px-6 py-5 sm:px-8 sm:py-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-[#1C261F]">
                {t.ctaFeatures.ctaTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#1C261F]/70">
                {t.ctaFeatures.ctaDesc}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <a
                href={
                  lang === "es"
                    ? `https://wa.me/${waPhone}?text=${encodeURIComponent(
                        "Hola, quisiera agendar una visita para conocer Casa Campestre La Isabela en Las Lomitas, La Ceja con la inmobiliaria"
                      )}`
                    : `https://wa.me/${waPhone}?text=${encodeURIComponent(
                        "Hello, I would like to schedule a visit to see Casa Campestre La Isabela in Las Lomitas, La Ceja with the real estate agency"
                      )}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#20ba5a] hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>{t.ctaFeatures.btnWhatsapp}</span>
              </a>

              <a
                href={`tel:+${waPhone}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#243A2C]/30 bg-white/70 px-4 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1C261F] transition-all duration-300 hover:bg-[#243A2C] hover:text-[#FAF8F5]"
              >
                <Phone className="h-3.5 w-3.5 text-[#2D5039]" />
                <span>{t.ctaFeatures.btnCall}</span>
              </a>
            </div>
          </div>
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
                  width={g.width}
                  height={g.height}
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

      {/* Por qué te encantará con fondo difuminado de bosque en niebla */}
      <section id="por-que" className="relative w-full overflow-hidden py-16 lg:py-24">
        {/* Fondo atmosférico de bosque con niebla difuminado */}
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={bosqueNiebla}
            width={1024}
            height={401}
            alt={
              lang === "es"
                ? "Atmósfera campestre de bosque andino con niebla matutina en el Oriente Antioqueño"
                : "Atmospheric Andean mountain forest with morning mist in Eastern Antioquia"
            }
            className="h-full w-full object-cover object-right-bottom lg:object-center opacity-75"
          />
          {/* Capas de difuminado suave superior, inferior y lateral para fundirse armónicamente con el fondo marfil #FAF8F5 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/60 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-b from-transparent via-[#FAF8F5]/70 to-[#FAF8F5]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>{t.whyLove.tag}</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold uppercase leading-tight md:text-5xl text-[#1C261F]">
                {t.whyLove.title}
              </h2>
              <div className="mt-8 space-y-6 sm:space-y-7">
                {razonesData.map((r, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#243A2C] text-[#FAF8F5] shadow-sm">
                      <r.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold uppercase text-[#1C261F]">
                        {lang === "es" ? r.titleEs : r.titleEn}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#1C261F]/75">
                        {lang === "es" ? r.textEs : r.textEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contenedor de la imagen con halo difuminado elegante */}
            <div className="relative group">
              {/* Resplandor difuminado suave de niebla detrás de la tarjeta */}
              <div
                className="absolute -inset-4 rounded-3xl bg-emerald-900/10 blur-2xl transition-all duration-500 group-hover:bg-emerald-900/15"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/40 shadow-2xl backdrop-blur-[2px]">
                <img
                  src={aboutImg}
                  width={768}
                  height={1024}
                  alt={
                    lang === "es"
                      ? "Pórtico de madera y entorno natural de Casa Campestre La Isabela en Las Lomitas, La Ceja, Oriente Antioqueño"
                      : "Rustic wooden porch and peaceful countryside surroundings at Casa Campestre La Isabela in Las Lomitas, La Ceja"
                  }
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
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
                  width={56}
                  height={56}
                  alt={
                    lang === "es"
                      ? `Fotografía de ${item.nameEs}, ${item.roleEs} en Casa Campestre La Isabela`
                      : `Photo of ${item.nameEn}, ${item.roleEn} at Casa Campestre La Isabela`
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
            rel="noopener noreferrer"
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
                    ? `https://wa.me/${waPhone}?text=${encodeURIComponent(
                        "Hola, quisiera recibir la ubicación exacta y coordinar visita a Casa Campestre La Isabela en Las Lomitas, La Ceja con la inmobiliaria"
                      )}`
                    : `https://wa.me/${waPhone}?text=${encodeURIComponent(
                        "Hello, I would like to get the exact location and schedule a visit to Casa Campestre La Isabela in Las Lomitas, La Ceja with the real estate agency"
                      )}`
                }
                target="_blank"
                rel="noopener noreferrer"
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
              title="Ubicación Casa Campestre La Isabela Las Lomitas - Casa de Oración La Providencia"
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
                    La Isabela
                  </span>
                  ?
                </>
              ) : (
                <>
                  Ready to experience the peace of{" "}
                  <span className="font-normal text-emerald-300">
                    La Isabela
                  </span>
                  ?
                </>
              )}
            </h2>

            {/* Subtítulo personalizado */}
            <p className="mt-4 max-w-2xl text-sm sm:text-base font-light leading-relaxed text-stone-200">
              {lang === "es"
                ? "Disfruta de una casa campestre amoblada con 2 habitaciones, 3 camas, pórtico con vista a las montañas, 1.500 m² de prado privado y parqueadero a solo 10–12 minutos de Viva La Ceja y Éxito. Contrato formal con inmobiliaria (mínimo 6 meses) y disponibilidad inmediata."
                : "Enjoy a furnished country home with 2 bedrooms, 3 beds, mountain-view porch, 1,500 m² private lot, and parking just 10–12 minutes from Viva La Ceja Mall & Éxito. Real estate agency lease (minimum 6 months) and immediate availability."}
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
                {lang === "es" ? "Contrato con Inmobiliaria (Mín. 6 meses)" : "Real Estate Agency Lease (Min. 6 mos)"}
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
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#FAF8F5] px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#18281E] transition-all hover:bg-white hover:shadow-2xl hover:scale-105"
              >
                <span>
                  {lang === "es"
                    ? "Consultar Arriendo por WhatsApp"
                    : "Inquire Lease on WhatsApp"}
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
        aria-label={lang === "es" ? "Paisaje y entorno natural de Casa Campestre La Isabela" : "Natural landscape and scenery of Casa Campestre La Isabela"}
      >
        <div className="relative min-h-[540px] sm:min-h-[620px] md:min-h-[700px] lg:min-h-[780px] w-full overflow-hidden flex flex-col justify-between">
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
            className="absolute inset-0 h-full w-full object-cover object-[center_60%] brightness-[0.98] contrast-[1.02] transition-all duration-700 pointer-events-none"
          />

          {/* Transición superior suave desde el fondo marfil */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent" />

          {/* Desvanecimiento inferior suave que desciende al color del footer (#121E16) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 sm:h-52 md:h-64 bg-gradient-to-b from-transparent via-[#121E16]/65 to-[#121E16]" />

          {/* Contenido centrado vertical y horizontalmente en el espacio blanco del cielo */}
          <div className="relative z-10 mx-auto w-full max-w-4xl px-6 h-[220px] sm:h-[260px] md:h-[300px] lg:h-[330px] flex items-center justify-center text-center">
            {/* Frase de paz: Tamaño refinado, fluido y perfectamente centrado */}
            <h2 className="font-peace-heading text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-normal tracking-wide text-[#1C261F] leading-[1.35] sm:leading-[1.3] max-w-3xl drop-shadow-sm">
              {lang === "es" ? (
                <>
                  Desconéctate del ruido y vive la{" "}
                  <span className="italic font-medium text-[#2D6A4F]">
                    verdadera paz
                  </span>{" "}
                  en tu propio{" "}
                  <span className="italic font-medium text-[#2D6A4F]">
                    refugio campestre
                  </span>
                </>
              ) : (
                <>
                  Disconnect from the noise and live{" "}
                  <span className="italic font-medium text-[#2D6A4F]">
                    true peace
                  </span>{" "}
                  in your own{" "}
                  <span className="italic font-medium text-[#2D6A4F]">
                    countryside sanctuary
                  </span>
                </>
              )}
            </h2>
          </div>
        </div>
      </section>
      </main>

      {/* Footer integrado fluidamente con el mismo fondo #121E16 */}
      <footer className="bg-[#121E16] text-[#E5EAE5]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Columna 1: Marca e info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/colibri-logo.png"
                  width={48}
                  height={48}
                  alt={
                    lang === "es"
                      ? "Logotipo oficial de Casa Campestre La Isabela con cabeza de colibrí"
                      : "Official Casa Campestre La Isabela logo with hummingbird head"
                  }
                  className="h-11 w-11 sm:h-12 sm:w-12 object-contain drop-shadow-md flex-shrink-0"
                />
                <div className="flex flex-col justify-center leading-tight">
                  <span className="text-2xl sm:text-[1.75rem] font-light tracking-tight text-[#FAF8F5]">
                    La Isabela
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.28em] text-stone-300/85">
                    Casa Campestre
                  </span>
                </div>
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
                  rel="noopener noreferrer"
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
                  2 {lang === "es" ? "habitaciones" : "bedrooms"} (3 {lang === "es" ? "camas" : "beds"})
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
                  1.500 m²
                </li>
                <li>
                  <span className="text-stone-400">
                    {lang === "es" ? "Contrato:" : "Lease:"}
                  </span>{" "}
                  {lang === "es" ? "Con inmobiliaria (mín. 6 meses)" : "Agency lease (min. 6 mos)"}
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
                  <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{t.footer.directService}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Coins className="h-4 w-4 shrink-0 text-amber-400" />
                  <span>{t.footer.paymentsAccepted}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                  <a href={`tel:+${waPhone}`} className="hover:text-emerald-300 transition-colors">
                    +57 314 627 6298
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Enlaces legales (Habeas Data y Términos) */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-[#1C2B20]/60 pt-6 text-xs text-stone-400">
            <Link
              to="/politica-de-privacidad"
              className="transition-colors hover:text-emerald-300 underline-offset-4 hover:underline"
            >
              {lang === "es" ? "Política de Privacidad y Datos (Habeas Data)" : "Privacy Policy & Data"}
            </Link>
            <span className="text-white/20">·</span>
            <Link
              to="/terminos-y-condiciones"
              className="transition-colors hover:text-emerald-300 underline-offset-4 hover:underline"
            >
              {lang === "es" ? "Términos y Condiciones de Uso" : "Terms & Conditions"}
            </Link>
          </div>

          {/* Barra inferior */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[#1C2B20] pt-6 text-xs text-stone-400 sm:flex-row">
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

      {/* Burbujita flotante de WhatsApp con mensaje personalizado de interés en Casa Campestre La Isabela */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Cartelito flotante descriptivo */}
        <a
          href={waCustomLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2.5 rounded-full bg-[#18281E]/95 hover:bg-[#18281E] text-[#FAF8F5] px-4 py-2.5 text-xs font-medium shadow-2xl border border-[#2D4D38] backdrop-blur-md transition-all group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-stone-200 group-hover:text-white transition-colors">
            {lang === "es"
              ? "¿Interesado en La Isabela? ¡Escríbenos!"
              : "Interested in La Isabela? Chat with us!"}
          </span>
        </a>

        {/* Botón Circular Flotante de WhatsApp */}
        <a
          href={waCustomLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={
            lang === "es"
              ? "Contactar por WhatsApp sobre Casa Campestre La Isabela"
              : "Contact on WhatsApp about Casa Campestre La Isabela"
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
