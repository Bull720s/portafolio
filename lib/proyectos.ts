export type Proyecto = {
  id: string;
  titulo: string;
  subtitulo: string;
  categoria: string;
  anio: string;
  stack: string[];
  resumen: string;
  logros?: string[];
  imagen?: string;
  url?: string;
};

export const DESTACADO: Proyecto = {
  id: "aetherium",
  titulo: "Aetherium Nutrición",
  subtitulo: "Tienda en línea de suplementos para una comunidad fitness",
  categoria: "E-commerce",
  anio: "2026",
  stack: ["Next.js 14", "Tailwind", "Framer Motion", "API de Notion"],
  resumen:
    "Diseñé y desarrollé la tienda de la marca Aetherium en Aguascalientes: catálogo de 24 productos con filtros por categoría, carrito persistente y pedidos que llegan directo a Notion para cerrarse por WhatsApp. Sin pasarela ni marketplace de por medio.",
  logros: [
    "Catálogo con filtros, conteo por categoría y transiciones animadas",
    "Carrito persistente y checkout que escribe cada pedido en una base de Notion",
    "Rediseño completo a estilo brutalista monoespaciado, publicado en Vercel",
  ],
  imagen: "/proyectos/aetherium.jpg",
  url: "https://aetherium-nutricion.vercel.app",
};

export const SELECCION: Proyecto[] = [
  {
    id: "cronista",
    titulo: "El Cronista — guía de relojería",
    subtitulo: "Sitio de afiliados de Amazon México",
    categoria: "Afiliados",
    anio: "2026",
    stack: ["Next.js", "TypeScript", "SVG"],
    resumen:
      "20 fichas técnicas con análisis editorial propio, radar de valoración por aspecto y guías de compra para elegir reloj.",
    imagen: "/proyectos/cronista.jpg",
    url: "https://relojes-amazon-afiliados.vercel.app",
  },
  {
    id: "cronista-comparador",
    titulo: "Comparador de relojes",
    subtitulo: "Hasta tres modelos lado a lado",
    categoria: "Herramienta",
    anio: "2026",
    stack: ["React", "Gráficas SVG"],
    resumen:
      "Specs completas en tabla y el radar de valoración superpuesto para decidir entre dos o tres relojes.",
    imagen: "/proyectos/cronista-comparador.jpg",
    url: "https://relojes-amazon-afiliados.vercel.app/comparador",
  },
  {
    id: "meridiano",
    titulo: "Meridiano — perfumería",
    subtitulo: "Tienda de fragancias originales verificadas",
    categoria: "E-commerce",
    anio: "2026",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    resumen:
      "Catálogo de 23 fragancias para hombre, mujer y unisex, con carrito y pedidos directos sin pasar por marketplaces.",
    imagen: "/proyectos/meridiano.jpg",
    url: "https://tienda-meridiano-perfumes.vercel.app",
  },
  {
    id: "aetherium-ficha",
    titulo: "Ficha de producto en 3 columnas",
    subtitulo: "Aetherium Nutrición",
    categoria: "UI",
    anio: "2026",
    stack: ["Next.js", "Framer Motion"],
    resumen:
      "Información y acordeones a la izquierda, foto al centro y compra a la derecha, con productos relacionados por categoría.",
    imagen: "/proyectos/aetherium-producto.jpg",
    url: "https://aetherium-nutricion.vercel.app/productos/on-gold-standard-chocolate",
  },
  {
    id: "cronista-ficha",
    titulo: "Ficha técnica editorial",
    subtitulo: "El Cronista",
    categoria: "UI",
    anio: "2026",
    stack: ["Next.js", "Tailwind"],
    resumen:
      "Análisis, especificaciones y valoración en acordeones, con botón de compra directo a Amazon México.",
    imagen: "/proyectos/cronista-ficha.jpg",
    url: "https://relojes-amazon-afiliados.vercel.app/relojes/orient-bambino-v4",
  },
];

export const HERRAMIENTAS: Proyecto[] = [
  {
    id: "terminal",
    titulo: "Terminal financiera",
    subtitulo: "Análisis técnico estilo Bloomberg",
    categoria: "Finanzas",
    anio: "2026",
    stack: ["Python", "Streamlit", "pandas", "Plotly"],
    resumen:
      "Datos en vivo de Yahoo Finance, indicadores programados a mano (RSI, MACD, Bollinger, estocástico, ATR, VWAP) y un motor de puntuación que da señales de compra o venta, con screener y comparador.",
  },
  {
    id: "bot-telegram",
    titulo: "Bot de Telegram → Claude Code",
    subtitulo: "Automatización desde el celular",
    categoria: "Automatización",
    anio: "2026",
    stack: ["Python", "API de Telegram", "Claude Code"],
    resumen:
      "Un bot que recibe instrucciones por Telegram, las ejecuta con Claude Code en mi PC dentro del proyecto elegido y responde en el chat. Cambio de proyecto con /proyecto.",
  },
  {
    id: "remotion",
    titulo: "Reels programables",
    subtitulo: "Motion graphics con código",
    categoria: "Video",
    anio: "2026",
    stack: ["React", "Remotion", "TypeScript"],
    resumen:
      "Plantilla que recibe un video y un título y genera un MP4 con subtítulos, marca de agua y barra de progreso en 9:16, 1:1 y 16:9.",
    imagen: "/proyectos/reel.jpg",
  },
];

export const DISENO: (Proyecto & { alto: "alto" | "medio" | "bajo" })[] = [
  {
    id: "ig-aetherium-1",
    titulo: "Pósters de producto",
    subtitulo: "Aetherium",
    categoria: "Instagram",
    anio: "2026",
    stack: [],
    resumen: "",
    imagen: "/proyectos/ig-aetherium-1.jpg",
    alto: "alto",
  },
  {
    id: "ig-eth-1",
    titulo: "Nadie viene a salvarte",
    subtitulo: "Filosofía Ethereum",
    categoria: "Carrusel",
    anio: "2026",
    stack: [],
    resumen: "",
    imagen: "/proyectos/ig-eth-1.jpg",
    alto: "medio",
  },
  {
    id: "ig-aetherium-2",
    titulo: "Suplementos que sí suman",
    subtitulo: "Aetherium",
    categoria: "Carrusel",
    anio: "2026",
    stack: [],
    resumen: "",
    imagen: "/proyectos/ig-aetherium-2.jpg",
    alto: "medio",
  },
  {
    id: "ig-eth-2",
    titulo: "Lo que Ethereum me enseñó",
    subtitulo: "Filosofía Ethereum",
    categoria: "Carrusel",
    anio: "2026",
    stack: [],
    resumen: "",
    imagen: "/proyectos/ig-eth-2.jpg",
    alto: "alto",
  },
];

export const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Python",
  "pandas",
  "Streamlit",
  "Remotion",
  "Notion API",
  "Vercel",
  "Excel financiero",
];
