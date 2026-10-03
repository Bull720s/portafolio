import PickCarousel from "@/components/PickCarousel";
import { DESTACADO, SELECCION, HERRAMIENTAS, DISENO, STACK, type Proyecto } from "@/lib/proyectos";

const GITHUB = "https://github.com/Bull720s";

const NAV = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Herramientas", href: "#herramientas" },
  { label: "Diseño", href: "#diseno" },
  { label: "Sobre mí", href: "#sobre-mi" },
];

function Meta({ p }: { p: Proyecto }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.04em] text-muted">
      <span>{p.categoria}</span>
      <span>—</span>
      <span>{p.stack.slice(0, 2).join(" · ")}</span>
      <span>—</span>
      <span>{p.anio}</span>
    </div>
  );
}

function CodeCover({ p }: { p: Proyecto }) {
  // Portada tipográfica para proyectos sin interfaz web publicada.
  return (
    <div className="aspect-[3/2] bg-gradient-to-br from-[#101833] via-[#0B1124] to-[#050816] p-6 flex flex-col justify-between">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
      </div>
      <div className="font-mono text-[13px] leading-relaxed text-white/70">
        <div className="text-white/40">$ {p.id}</div>
        {p.stack.map((s) => (
          <div key={s}>
            <span className="text-[#7AA2FF]">import</span> {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur border-b border-line">
        <div className="max-w-[1232px] mx-auto px-5 md:px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-[22px] font-bold tracking-tight">
            luis hernández
          </a>
          <nav className="hidden md:flex gap-12 text-[14px] font-medium uppercase">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-muted transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 border border-line flex items-center justify-center hover:bg-white hover:text-bg transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
              </svg>
            </a>
            <a
              href="#sobre-mi"
              aria-label="Sobre mí"
              className="w-9 h-9 border border-line flex items-center justify-center hover:bg-white hover:text-bg transition-colors md:hidden"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Destacado */}
      <section className="max-w-[1232px] mx-auto px-5 md:px-6 pt-12 md:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <a href={DESTACADO.url} target="_blank" rel="noopener noreferrer" className="block rounded-md overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={DESTACADO.imagen}
            alt={DESTACADO.titulo}
            className="w-full aspect-[4/3] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </a>
        <div>
          <h1 className="text-[32px] md:text-[40px] font-bold leading-[1.15] mb-5">
            {DESTACADO.titulo} — {DESTACADO.subtitulo.toLowerCase()}
          </h1>
          <div className="mb-6">
            <Meta p={DESTACADO} />
          </div>
          <p className="text-[17px] text-muted leading-relaxed mb-6">{DESTACADO.resumen}</p>
          <ul className="space-y-2 mb-8">
            {DESTACADO.logros?.map((l) => (
              <li key={l} className="flex gap-3 text-[15px] text-ink/85">
                <span className="text-muted">→</span>
                {l}
              </li>
            ))}
          </ul>
          <a
            href={DESTACADO.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-line px-4 py-3 text-[14px] font-bold uppercase hover:bg-white hover:text-bg transition-colors"
          >
            Ver proyecto <span>→</span>
          </a>
        </div>
      </section>

      <PickCarousel items={SELECCION} />

      {/* Herramientas */}
      <section id="herramientas" className="max-w-[1280px] mx-auto mt-24 scroll-mt-20">
        <div className="bg-panel px-5 md:px-6 py-16">
          <div className="max-w-[1232px] mx-auto">
            <h2 className="text-[24px] md:text-[26px] font-bold mb-3">Herramientas y automatización</h2>
            <p className="text-muted text-[15px] mb-10 max-w-2xl">
              Proyectos donde el código resuelve un problema propio: analizar mercados, trabajar desde el celular o
              producir video en serie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HERRAMIENTAS.map((p) => (
                <article key={p.id} className="bg-bg border border-line overflow-hidden">
                  {p.imagen ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.imagen} alt={p.titulo} className="w-full aspect-[3/2] object-cover object-center" />
                  ) : (
                    <CodeCover p={p} />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.04em] text-muted mb-3">
                      <span>{p.categoria}</span>
                      <span>—</span>
                      <span>{p.anio}</span>
                    </div>
                    <h3 className="text-[18px] font-bold leading-snug mb-3">{p.titulo}</h3>
                    <p className="text-[14px] text-muted leading-relaxed mb-4">{p.resumen}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="text-[11px] uppercase border border-line px-2 py-1 text-muted">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diseño */}
      <section id="diseno" className="max-w-[1232px] mx-auto px-5 md:px-6 pt-24 scroll-mt-20">
        <h2 className="text-[24px] md:text-[26px] font-bold mb-3">Diseño y contenido</h2>
        <p className="text-muted text-[15px] mb-10 max-w-2xl">
          Carruseles y pósters para Instagram (1080 × 1350) que acompañan a las marcas: producto, educación y
          comunidad.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {DISENO.map((p) => (
            <figure key={p.id} className="group">
              <div className="overflow-hidden rounded-md border border-line mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.imagen}
                  alt={p.titulo}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-white/90 text-bg text-[11px] uppercase px-2 py-0.5 rounded-full">{p.categoria}</span>
                  <span className="text-[11px] uppercase text-muted">{p.subtitulo}</span>
                </div>
                <div className="text-[15px] font-bold leading-snug">{p.titulo}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="max-w-[1232px] mx-auto px-5 md:px-6 pt-24 pb-24 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 border-t border-line pt-16">
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold leading-tight mb-6">
              Finanzas, negocio y código en el mismo proyecto.
            </h2>
            <p className="text-muted text-[16px] leading-relaxed mb-4">
              Soy Luis Antonio Hernández Cotero, estudiante de Administración y Finanzas en la Universidad
              Panamericana, Aguascalientes. Construyo los proyectos de punta a punta: la idea de negocio, los números,
              el sitio y el contenido que lo mueve.
            </p>
            <p className="text-muted text-[16px] leading-relaxed">
              Trabajo con IA como herramienta diaria para diseñar, programar y automatizar, y publico todo en
              producción para que se pueda usar, no solo ver.
            </p>
          </div>
          <div>
            <div className="text-[12px] uppercase tracking-[0.04em] text-muted mb-4">Con qué trabajo</div>
            <div className="flex flex-wrap gap-2 mb-10">
              {STACK.map((s) => (
                <span key={s} className="border border-line px-3 py-2 text-[13px]">
                  {s}
                </span>
              ))}
            </div>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-line px-4 py-3 text-[14px] font-bold uppercase hover:bg-white hover:text-bg transition-colors"
            >
              Ver GitHub <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="max-w-[1232px] mx-auto px-5 md:px-6 py-8 flex flex-col md:flex-row justify-between gap-2 text-[13px] text-muted">
          <span className="font-bold text-ink">luis hernández</span>
          <span>Aguascalientes, México · 2026</span>
        </div>
      </footer>
    </main>
  );
}
