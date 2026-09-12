import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Lock, FileText, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad y Tratamiento de Datos | Casa Campestre La Isabela" },
      {
        name: "description",
        content:
          "Política de tratamiento de datos personales y Habeas Data de Casa Campestre La Isabela en La Ceja, Antioquia, conforme a la Ley Estatutaria 1581 de 2012 de Colombia.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Política de Privacidad y Tratamiento de Datos | Casa Campestre La Isabela" },
      {
        property: "og:description",
        content:
          "Política de tratamiento de datos personales y Habeas Data conforme a la Ley 1581 de 2012 para el arriendo de Casa Campestre La Isabela.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://kmilo1978.github.io/Garces/politica-de-privacidad" },
      { property: "og:image", content: "https://kmilo1978.github.io/Garces/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://kmilo1978.github.io/Garces/politica-de-privacidad" },
    ],
  }),
  component: PoliticaPrivacidadPage,
});

function PoliticaPrivacidadPage() {
  const waPhone = "573146276298";
  const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(
    "Hola, tengo una consulta sobre el tratamiento de datos y arriendo de Casa Campestre La Isabela en La Ceja"
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
            <ShieldCheck className="h-4 w-4 text-[#243A2C]" />
            Habeas Data · Ley 1581 de 2012
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1C261F]">
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="mt-3 text-sm text-[#1C261F]/70">
            Casa Campestre La Isabela · Las Lomitas, La Ceja (Antioquia, Colombia)
          </p>
          <p className="mt-1 text-xs text-stone-500">
            Última actualización: 11 de septiembre de 2026
          </p>
        </div>

        {/* Artículos y secciones legales */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[#1C261F]/85">
          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">1.</span> Identificación del Responsable del Tratamiento
            </h2>
            <p>
              El presente documento establece las políticas de tratamiento de datos personales de{" "}
              <strong>Casa Campestre La Isabela</strong>, propiedad campestre ubicada en el sector rural Las Lomitas,
              jurisdicción del Municipio de La Ceja, Departamento de Antioquia, República de Colombia, gestionada en
              arrendamiento formal con inmobiliaria legalmente constituida.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Inmueble:</strong> Casa Campestre La Isabela</li>
              <li><strong>Ubicación:</strong> Sector Las Lomitas, cerca a Casa de Oración La Providencia, La Ceja, Antioquia</li>
              <li><strong>Canal de atención telefónica y WhatsApp:</strong> +57 314 627 6298</li>
              <li><strong>Sitio Web Oficial:</strong> https://kmilo1978.github.io/Garces/</li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">2.</span> Marco Normativo Aplicable
            </h2>
            <p>
              Esta política se rige en su integridad por las disposiciones de la Constitución Política de Colombia (Artículo 15),
              la <strong>Ley Estatutaria 1581 de 2012</strong>, el <strong>Decreto Reglamentario 1377 de 2013</strong> (compilado en el
              Decreto Único 1074 de 2015) y demás normas concordantes que regulan la protección de datos personales (Habeas Data).
            </p>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">3.</span> Datos Personales Objeto de Tratamiento
            </h2>
            <p>
              Casa Campestre La Isabela solo recolecta y trata los datos personales que el usuario proporciona de manera voluntaria
              a través de los canales de contacto (enlaces a WhatsApp, llamadas telefónicas o formularios de consulta). Dichos datos
              incluyen exclusivamente:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Nombres y apellidos.</li>
              <li>Número de teléfono celular / WhatsApp.</li>
              <li>Correo electrónico (en caso de ser suministrado voluntariamente).</li>
              <li>Información relacionada con la consulta de arrendamiento (número de ocupantes, fechas estimadas, tenencia de mascotas).</li>
            </ul>
            <p className="text-xs text-stone-600 bg-[#F4F0E6] p-3 rounded-xl border border-[#E2DDD0]">
              <strong>Aviso sobre datos sensibles:</strong> Casa Campestre La Isabela <em>nunca</em> solicita datos sensibles
              (origen racial, convicciones religiosas, orientación política o datos biométricos) ni datos financieros confidenciales
              a través del sitio web.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">4.</span> Finalidades del Tratamiento de Datos
            </h2>
            <p>
              Los datos personales recolectados son utilizados con los siguientes propósitos específicos y legítimos:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm">
              <li>Atender y dar respuesta oportuna a las solicitudes de información sobre el canon de arrendamiento ($2.900.000 COP/mes), especificaciones (2 habitaciones, 3 camas, 1 baño, 1.500 m²) y servicios de la casa campestre.</li>
              <li>Coordinar y agendar citas y visitas presenciales a la propiedad en Las Lomitas junto con la inmobiliaria administradora.</li>
              <li>Remitir la ubicación geográfica por GPS o instrucciones de acceso para la realización del recorrido.</li>
              <li>Adelantar el trámite de formalización contractual con la inmobiliaria en caso de que el interesado decida tomar el arrendamiento (contrato mínimo de 6 meses).</li>
            </ol>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">5.</span> Derechos del Titular de los Datos (Habeas Data)
            </h2>
            <p>
              De conformidad con el Artículo 8 de la Ley 1581 de 2012, usted, como titular de los datos personales, tiene derecho a:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales en cualquier momento frente a datos parciales, inexactos o incompletos.</li>
              <li><strong>Solicitar prueba de la autorización</strong> otorgada para el tratamiento.</li>
              <li><strong>Ser informado</strong> sobre el uso que se le ha dado a sus datos personales.</li>
              <li><strong>Revocar la autorización o solicitar la supresión</strong> de sus datos cuando considere que no se respetan los principios constitucionales y legales.</li>
              <li><strong>Acceder en forma gratuita</strong> a sus datos personales que hayan sido objeto de tratamiento.</li>
            </ul>
          </section>

          {/* Sección 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">6.</span> Procedimiento para Ejercer sus Derechos
            </h2>
            <p>
              Para ejercer cualquiera de sus derechos de consulta, actualización, rectificación o supresión de datos personales,
              el titular podrá comunicarse directamente a través de:
            </p>
            <div className="rounded-2xl border border-[#2D5039]/30 bg-[#EBF1EB]/70 p-5 space-y-2">
              <p className="flex items-center gap-2 text-sm font-semibold text-[#1C261F]">
                <Phone className="h-4 w-4 text-[#2D5039]" />
                Línea oficial de atención y WhatsApp:{" "}
                <a href={`tel:+${waPhone}`} className="text-[#2D6A4F] underline underline-offset-4">
                  +57 314 627 6298
                </a>
              </p>
              <p className="flex items-start gap-2 text-sm text-[#1C261F]/80">
                <MapPin className="h-4 w-4 shrink-0 text-[#2D5039] mt-0.5" />
                <span>Sector rural Las Lomitas, La Ceja (Antioquia, Colombia)</span>
              </p>
              <p className="text-xs text-stone-600 pt-2">
                Su solicitud será atendida en un plazo máximo de diez (10) días hábiles contados a partir de la fecha de recibo.
              </p>
            </div>
          </section>

          {/* Sección 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">7.</span> Seguridad y Confidencialidad
            </h2>
            <p>
              Casa Campestre La Isabela implementa medidas técnicas, humanas y administrativas de seguridad para proteger los datos
              personales frente a accesos no autorizados, pérdida, alteración o uso fraudulento. Los datos no son vendidos, cedidos ni
              comercializados a terceros para fines publicitarios ajenos a la gestión directa del arrendamiento.
            </p>
          </section>

          {/* Sección 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#1C261F] flex items-center gap-2">
              <span className="text-[#3D5E49]">8.</span> Vigencia de la Política
            </h2>
            <p>
              La presente Política de Privacidad rige a partir de su publicación en este sitio web y se mantendrá vigente mientras
              sea necesario para el cumplimiento de las finalidades legítimas aquí informadas. Cualquier modificación sustancial
              será comunicada oportunamente a través de este mismo medio.
            </p>
          </section>
        </div>

        {/* Tarjeta de contacto al pie del documento */}
        <div className="mt-14 rounded-3xl border border-[#2D4535] bg-[#1A2C20] p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold uppercase tracking-tight text-[#FAF8F5]">
            ¿Tienes dudas sobre tus datos o deseas agendar una visita?
          </h3>
          <p className="mt-2 text-sm text-stone-300 max-w-xl mx-auto">
            Comunícate con la administración y la inmobiliaria a través de nuestra línea de atención directa en WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#20ba5a] hover:scale-105"
            >
              <span>Escribir por WhatsApp</span>
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

      {/* Pie de página sobrio */}
      <footer className="border-t border-[#E2DDD0] bg-[#FAF8F5] py-8 text-center text-xs text-stone-500">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Casa Campestre La Isabela · La Ceja, Antioquia</p>
          <div className="flex items-center gap-4">
            <Link to="/terminos-y-condiciones" className="hover:text-[#243A2C] underline underline-offset-4">
              Términos y Condiciones
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
