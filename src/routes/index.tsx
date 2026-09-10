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
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import house5 from "@/assets/house-5.jpg";
import house2 from "@/assets/house-2.jpg";
import house7 from "@/assets/house-7.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Finca en La Ceja | Las Lomitas, Oriente Antioqueño" },
      {
        name: "description",
        content:
          "Casa finca de 40 m² construidos en lote de 500 m², a solo 5 minutos del pueblo de La Ceja. Tranquilidad rural con todos los servicios. $2.900.000 COP.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Casa Finca en La Ceja | Las Lomitas" },
      {
        property: "og:description",
        content:
          "Escápate al campo: casa finca a 5 minutos del pueblo en La Ceja, sector Las Lomitas. 500 m² de lote, agua e internet.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Casa Finca en La Ceja | Las Lomitas" },
      {
        name: "twitter:description",
        content:
          "Tranquilidad campestre a 5 minutos del casco urbano de La Ceja. Lote de 500 m² con agua e internet.",
      },
    ],
  }),
  component: Index,
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white">
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-black" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/70">
        {children}
      </span>
    </div>
  );
}

const caracteristicas = [
  {
    icon: Home,
    title: "40 m² construidos",
    text: "Área diseñada de forma inteligente y acogedora para aprovechar cada rincón.",
  },
  {
    icon: Ruler,
    title: "500 m² de lote",
    text: "Terreno privado para disfrutar al aire libre, jardines y zonas verdes.",
  },
  {
    icon: Droplets,
    title: "Agua lista para usar",
    text: "Servicio de agua incluido y funcionando desde el primer día.",
  },
  {
    icon: Wifi,
    title: "Internet prepago",
    text: "Sistema con módem recargable para mantenerte conectado cuando lo necesites.",
  },
  {
    icon: MapPin,
    title: "5 min del pueblo",
    text: "A tan solo 5 minutos del casco urbano de La Ceja, sector Las Lomitas.",
  },
  {
    icon: TreePalm,
    title: "Entorno campestre",
    text: "Sector exclusivo y de alta valorización en el Oriente antioqueño.",
  },
];

const razones = [
  {
    icon: Leaf,
    title: "Conexión natural",
    text: "Amplio lote de 500 m² ideal para jardines, zonas verdes o espacios de esparcimiento familiar.",
  },
  {
    icon: Clock3,
    title: "Ubicación estratégica",
    text: "Olvídate de los largos desplazamientos: comercio, restaurantes y servicios a pocos minutos, sin perder la privacidad del campo.",
  },
  {
    icon: Briefcase,
    title: "Flexibilidad total",
    text: "El internet por recarga te permite controlar el consumo según tus días de estancia o necesidades de trabajo remoto.",
  },
];

const galeria = [
  { src: house5, alt: "Exterior de casa campestre moderna" },
  { src: house2, alt: "Casa rodeada de naturaleza" },
  { src: house7, alt: "Vista de propiedad rural" },
];

function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <span className="text-xl font-extrabold uppercase tracking-tight">
          Las Lomitas
        </span>
        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          <a href="#caracteristicas" className="hover:opacity-60">
            Características
          </a>
          <a href="#galeria" className="hover:opacity-60">
            Galería
          </a>
          <a href="#por-que" className="hover:opacity-60">
            Por qué aquí
          </a>
        </nav>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white"
        >
          Agendar visita
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-6">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={heroImg}
            alt="Casa finca en Las Lomitas, La Ceja"
            className="h-[520px] w-full object-cover md:h-[620px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              La Ceja · Oriente Antioqueño
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold uppercase leading-tight text-white md:text-6xl">
              Escápate al campo: tu nueva casa finca a 5 minutos del pueblo
            </h1>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-black"
              >
                Agendar visita
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#caracteristicas"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-white"
              >
                Ver detalles
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-3">
          {[
            ["40 m²", "Área construida acogedora"],
            ["500 m²", "Lote privado al aire libre"],
            ["5 min", "Del casco urbano de La Ceja"],
          ].map(([num, label]) => (
            <div key={label} className="border-t-2 border-black pt-4">
              <p className="text-5xl font-extrabold tracking-tight">{num}</p>
              <p className="mt-1 text-sm uppercase tracking-wide text-black/60">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionLabel>La propiedad</SectionLabel>
        <p className="mt-6 max-w-4xl text-2xl font-medium leading-snug md:text-4xl">
          Disfruta de la tranquilidad del Oriente antioqueño en una propiedad
          que combina la paz rural con la comodidad de estar cerca de todo. En
          el sector Las Lomitas, esta casa finca te ofrece el espacio perfecto
          para descansar, teletrabajar o conectar con la naturaleza.
        </p>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Características principales</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold uppercase md:text-5xl">
              Todo lo que necesitas
            </h2>
          </div>
          <Pill>Inversión: $2.900.000</Pill>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caracteristicas.map((c) => (
            <div key={c.title} className="rounded-2xl bg-neutral-100 p-8">
              <c.icon className="h-8 w-8" />
              <h3 className="mt-6 text-xl font-bold uppercase">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="mx-auto max-w-7xl px-6 py-16">
        <SectionLabel>Galería</SectionLabel>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {galeria.map((g) => (
            <div key={g.src} className="overflow-hidden rounded-2xl">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Por qué te encantará */}
      <section id="por-que" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Por qué te encantará</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight md:text-5xl">
              La vida campestre sin alejarte de nada
            </h2>
            <div className="mt-10 space-y-8">
              {razones.map((r) => (
                <div key={r.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-black/60">
                      {r.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={aboutImg}
              alt="Conexión con la naturaleza en Las Lomitas"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-black px-8 py-16 text-center text-white md:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold uppercase leading-tight md:text-5xl">
            Asegura tu espacio ideal en Las Lomitas
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70">
            Contáctanos hoy mismo para agendar tu visita y conocer esta casa
            finca a solo 5 minutos del pueblo en La Ceja.
          </p>
          <p className="mt-8 text-4xl font-extrabold tracking-tight">
            $2.900.000 <span className="text-base font-semibold">COP</span>
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/?text=Hola%2C%20me%20interesa%20la%20casa%20finca%20en%20Las%20Lomitas%2C%20La%20Ceja"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black"
            >
              Agendar mi visita
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-black/10 px-6 py-8 text-xs uppercase tracking-widest text-black/60">
        <span className="font-extrabold text-black">Las Lomitas · La Ceja</span>
        <span>Casa finca en venta · Oriente Antioqueño</span>
      </footer>
    </div>
  );
}
