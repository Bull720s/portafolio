"use client";

import { useRef } from "react";
import type { Proyecto } from "@/lib/proyectos";

export default function PickCarousel({ items }: { items: Proyecto[] }) {
  const track = useRef<HTMLDivElement>(null);

  const mover = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="proyectos" className="max-w-[1232px] mx-auto px-5 md:px-6 pt-20 scroll-mt-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[24px] md:text-[26px] font-bold">Proyectos seleccionados</h2>
        <div className="flex gap-2">
          {[-1, 1].map((d) => (
            <button
              key={d}
              type="button"
              aria-label={d === -1 ? "Anterior" : "Siguiente"}
              onClick={() => mover(d as 1 | -1)}
              className="w-9 h-9 border border-line flex items-center justify-center hover:bg-white hover:text-bg transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d={d === -1 ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div ref={track} className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2">
        {items.map((p) => (
          <article key={p.id} className="snap-start shrink-0 w-[82%] sm:w-[46%] lg:w-[26%] bg-card">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.imagen}
                alt={p.titulo}
                className="w-full aspect-[4/3] object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </a>
            <div className="p-6">
              <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.04em] text-muted mb-3">
                <span>{p.categoria}</span>
                <span>—</span>
                <span>{p.anio}</span>
              </div>
              <h3 className="text-[18px] font-bold leading-snug mb-3">{p.titulo}</h3>
              <p className="text-[14px] text-muted leading-relaxed mb-5">{p.resumen}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-line px-3 py-2 text-[12px] font-bold uppercase hover:bg-white hover:text-bg transition-colors"
              >
                Ver en vivo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
