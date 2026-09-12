import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, CheckCircle2, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones de Uso | Casa Campestre La Isabela" },
      {
        name: "description",
        content:
          "Términos y condiciones de uso del sitio web informativo de Casa Campestre La Isabela en Las Lomitas, La Ceja, Antioquia. Condiciones de consulta, arrendamiento formal y derechos.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Términos y Condiciones de Uso | Casa Campestre La Isabela" },
      {
        property: "og:description",
        content:
          "Condiciones del arrendamiento formal con inmobiliaria, normas de visita y uso del portal oficial de Casa Campestre La Isabela.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://kmilo1978.github.io/Garces/terminos-y-condiciones" },
      { property: "og:image", content: "https://kmilo1978.github.io/Garces/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://kmilo1978.github.io/Garces/terminos-y-condiciones" },
    ],
  }),
  component: TerminosCondicionesPage,
});

function TerminosCondicionesPage() {
  const waPhone = "573146276298";
  const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(
    "Hola, tengo una pregunta sobre los términos y condiciones de arriendo de Casa Campestre La Isabela en La Ceja"
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C261F] font-sans antialiased selection:bg-[#D5E3D8] selection:text-[#18281E]">
      {/* Barra superior de navegación */}
      <header className="sticky top-0 z-30 border-b border-[#E2DDD0] bg-[#FAF8F5]/90 backdrop-blur-md">
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
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {/* Encabezado del documento */}
        <div className="mb-10 text-center sm:text-left border-b border-[#E2DDD0] pb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E5EDE5] border border-[#C8D9CB] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#243A2C] mb-4">
            <FileText className="h-4 w-4 text-[#243A2C]" />
            Condiciones de Uso y Arriendo
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C261F]">
            Términos y Condiciones de Uso
          </h1>
          <p className="mt-3 text-sm text-[#1C261F]/70">
            Casa Campestre La Isabela · Las Lomitas, La Ceja (Antioquia, Colombia)
          </p>
          <p className="mt-1 text-xs text-stone-500">
            Última actualización: 11 de septiembre de 2026
          </p>
        </div>

        {/* Secciones legales */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[#1C261F]/85">
          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">1.</span> Objeto y Naturaleza del Sitio Web
            </h2>
            <p>
              El portal web oficial <strong>https://kmilo1978.github.io/Garces/</strong> tiene como finalidad exclusiva
              brindar información veraz, descriptiva y comercial sobre las características, equipamiento y condiciones
              de arrendamiento de <strong>Casa Campestre La Isabela</strong>, inmueble residencial campestre ubicado en el
              sector rural Las Lomitas, Municipio de La Ceja, Antioquia.
            </p>
            <p>
              El acceso, navegación y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena y
              sin reservas de todas las disposiciones incluidas en estos Términos y Condiciones.
            </p>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">2.</span> Condiciones Generales del Arrendamiento
            </h2>
            <p>
              La información publicada en este sitio web respecto al canon y disponibilidad del inmueble se rige por las siguientes condiciones esenciales:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Formalización mediante inmobiliaria:</strong> Todo contrato de arrendamiento sobre Casa Campestre La Isabela se celebra formalmente a través de una inmobiliaria legalmente constituida en Colombia, garantizando total seguridad jurídica y soporte legal para ambas partes.</li>
              <li><strong>Plazo contractual mínimo:</strong> El periodo mínimo de arrendamiento es de seis (6) meses continuos. No se admiten alquileres por días, fines de semana ni eventos masivos.</li>
              <li><strong>Canon de arrendamiento:</strong> El canon publicado es de $2.900.000 COP mensuales (~$750 USD).</li>
              <li><strong>Servicios públicos:</strong> Los servicios públicos domiciliarios (energía eléctrica, acueducto) no están incluidos en el canon y deben ser cancelados mensualmente por el arrendatario según el consumo real registrado en las facturas oficiales.</li>
              <li><strong>Conectividad a Internet:</strong> La propiedad dispone de conexión mediante módem prepago recargable a cargo y necesidad del arrendatario.</li>
              <li><strong>Mascotas (Pet Friendly):</strong> Se permite el ingreso y estadía de mascotas en el lote privado de 1.500 m², bajo la total responsabilidad del arrendatario por su cuidado, convivencia y cualquier eventual daño ocasionado a las instalaciones.</li>
            </ul>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">3.</span> Coordinación y Agendamiento de Visitas
            </h2>
            <p>
              Por tratarse de una propiedad privada campestre y cerrada, el acceso para visitas presenciales se realiza
              exclusivamente mediante previa coordinación a través de nuestra línea oficial de atención telefónica o
              WhatsApp (+57 314 627 6298). Las citas están sujetas a disponibilidad horaria y verificación previa de requisitos.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">4.</span> Exactitud de la Información y Fotografías
            </h2>
            <p>
              Las fotografías, perspectivas y descripciones visuales exhibidas en este sitio web corresponden a tomas reales de
              Casa Campestre La Isabela (fachada, 2 habitaciones, 3 camas, baño completo, pórtico de madera y prados de 1.500 m²).
              Nos esforzamos por mantener toda la información permanentemente actualizada, sin perjuicio de eventuales variaciones
              menores en el mobiliario o adecuaciones decorativas.
            </p>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">5.</span> Propiedad Intelectual
            </h2>
            <p>
              Todos los contenidos de este sitio web, incluyendo fotografías, logotipos (isotipo del colibrí y tipografía oficial),
              textos descriptivos, código fuente y diseño gráfico son de propiedad exclusiva de Casa Campestre La Isabela o cuentan
              con las debidas autorizaciones de uso. Queda expresamente prohibida su reproducción total o parcial sin autorización previa y por escrito.
            </p>
          </section>

          {/* Sección 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">6.</span> Medios de Pago Aceptados
            </h2>
            <p>
              Para mayor comodidad de arrendatarios locales, internacionales y nómadas digitales, se admiten pagos mediante:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Transferencia bancaria en Pesos Colombianos (COP).</li>
              <li>Dólares Americanos (USD) mediante transferencia bancaria o Zelle.</li>
              <li>Criptomonedas estables (USDT) o Bitcoin (BTC/ETH) conforme a los términos acordados con la administración.</li>
            </ul>
          </section>

          {/* Sección 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">7.</span> Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Los presentes Términos y Condiciones, así como cualquier relación contractual derivada del arrendamiento del inmueble,
              se rigen por la legislación vigente de la <strong>República de Colombia</strong> (Ley 820 de 2003 de Arrendamiento de Vivienda Urbana
              y Código de Comercio según aplique). Para la resolución de cualquier controversia, las partes se someten a la jurisdicción
              de los jueces y tribunales competentes del Departamento de Antioquia.
            </p>
          </section>
        </div>

        {/* Tarjeta de contacto */}
        <div className="mt-14 rounded-3xl border border-[#2D4535] bg-[#1A2C20] p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold uppercase tracking-tight text-[#FAF8F5]">
            ¿Tienes preguntas sobre las condiciones de arriendo?
          </h3>
          <p className="mt-2 text-sm text-stone-300 max-w-xl mx-auto">
            Estamos disponibles para brindarte toda la asesoría formal a través de WhatsApp o llamada directa.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#20ba5a] hover:scale-105"
            >
              <span>Contactar por WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-white/20"
            >
              <span>Volver a Casa Campestre La Isabela</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="border-t border-[#E2DDD0] bg-[#FAF8F5] py-8 text-center text-xs text-stone-500">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Casa Campestre La Isabela · La Ceja, Antioquia</p>
          <div className="flex items-center gap-4">
            <Link to="/politica-de-privacidad" className="hover:text-[#243A2C] underline underline-offset-4">
              Política de Privacidad
            </Link>
            <span>·</span>
            <Link to="/" className="hover:text-[#243A2C] underline underline-offset-4">
              Página Principal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
