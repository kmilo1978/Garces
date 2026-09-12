import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  const waPhone = "573146276298";
  const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(
    "Hola, estaba navegando en la web de Casa Campestre La Isabela en La Ceja y busco información de disponibilidad"
  )}`;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-[#FAF8F5] text-[#1C261F] font-sans antialiased selection:bg-[#D5E3D8] selection:text-[#18281E]">
      {/* Header sobrio */}
      <header className="w-full border-b border-[#E2DDD0] bg-[#FAF8F5]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/colibri-logo.png"
              width={48}
              height={48}
              alt="Logotipo oficial de Casa Campestre La Isabela con cabeza de colibrí"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-xl sm:text-2xl font-light tracking-tight text-[#1C261F]">
                La Isabela
              </span>
              <span className="text-[9px] sm:text-[10px] font-normal uppercase tracking-[0.28em] text-[#243A2C]/80">
                Casa Campestre
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#243A2C]/30 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1C261F] transition-all hover:bg-[#243A2C] hover:text-[#FAF8F5]"
          >
            <span>Ir al inicio</span>
          </Link>
        </div>
      </header>

      {/* Contenedor central 404 */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#E5EDE5] border border-[#C8D9CB] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#243A2C] mb-6 shadow-sm">
          Página No Encontrada · Error 404
        </div>

        <h1 className="text-7xl sm:text-8xl md:text-9xl font-light tracking-tighter text-[#243A2C]/20 select-none">
          404
        </h1>

        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#1C261F]">
          ¿Buscabas tranquilidad? Este camino no tiene salida
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#1C261F]/75 leading-relaxed max-w-lg">
          La página que intentas abrir no existe, cambió de dirección o el enlace es incorrecto. Pero no te preocupes:{" "}
          <strong>Casa Campestre La Isabela</strong> en Las Lomitas, La Ceja sigue disponible esperándote.
        </p>

        {/* Botones de acción */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#243A2C] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FAF8F5] shadow-md transition-all hover:bg-[#1C2E23] hover:scale-105"
          >
            <span>Volver a la Página Principal</span>
          </Link>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#20ba5a] hover:scale-105"
          >
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

        {/* Atajos a secciones */}
        <div className="mt-12 pt-8 border-t border-[#E2DDD0] w-full">
          <p className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-4">
            Explora las secciones principales:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-[#2D5039]">
            <a href="/#ofrecemos" className="hover:underline underline-offset-4">
              Lo que ofrecemos
            </a>
            <span>·</span>
            <a href="/#caracteristicas" className="hover:underline underline-offset-4">
              Características
            </a>
            <span>·</span>
            <a href="/#galeria" className="hover:underline underline-offset-4">
              Galería
            </a>
            <span>·</span>
            <a href="/#ubicacion" className="hover:underline underline-offset-4">
              Ubicación
            </a>
            <span>·</span>
            <a href="/#faq" className="hover:underline underline-offset-4">
              Preguntas Frecuentes
            </a>
          </div>
        </div>
      </main>

      {/* Footer mínimo */}
      <footer className="w-full border-t border-[#E2DDD0] bg-[#FAF8F5] py-6 text-center text-xs text-stone-500">
        <p>© 2026 Casa Campestre La Isabela · Las Lomitas, La Ceja (Antioquia)</p>
      </footer>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("Error capturado:", error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Casa Campestre La Isabela | Arriendo en La Ceja, Antioquia" },
      {
        name: "description",
        content:
          "Casa campestre en arriendo en La Ceja, amoblada y rodeada de naturaleza. 2 habitaciones, 3 camas y lote de 1.500 m². ¡Agenda tu visita!",
      },
      { name: "author", content: "Casa Campestre La Isabela" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#18281E" },
      { property: "og:site_name", content: "Casa Campestre La Isabela" },
      { property: "og:title", content: "Casa Campestre La Isabela | Arriendo en La Ceja, Antioquia" },
      {
        property: "og:description",
        content:
          "Casa campestre en arriendo en La Ceja, amoblada y rodeada de naturaleza. 2 habitaciones, 3 camas y lote de 1.500 m². ¡Agenda tu visita!",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kmilo1978.github.io/Garces/" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:image", content: "https://kmilo1978.github.io/Garces/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://kmilo1978.github.io/Garces/og-image.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://kmilo1978.github.io/Garces/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://kmilo1978.github.io/Garces/" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg?v=4", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico?v=4", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png?v=4", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=4" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
