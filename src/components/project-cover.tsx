import Image from "next/image";
import type { Language } from "@/content/home";

const descriptions = {
  pt: ["Página da São Silvestre 101 na plataforma Ingresse", "App de Check-in: seleção de eventos", "App de Check-in: busca de atletas e confirmação de retirada", "App do Atleta: catálogo de eventos esportivos", "Site da Ticket Sports com busca e descoberta de eventos"],
  en: ["São Silvestre 101 page on the Ingresse platform", "Check-in App: event selection", "Check-in App: athlete search and kit pickup confirmation", "Athlete App: sports event catalog", "Ticket Sports website with event search and discovery"],
  es: ["Página de la São Silvestre 101 en la plataforma Ingresse", "App de Check-in: selección de eventos", "App de Check-in: búsqueda de atletas y confirmación de entrega", "App del Atleta: catálogo de eventos deportivos", "Sitio de Ticket Sports con búsqueda y descubrimiento de eventos"],
};

export function ProjectCover({ index, lang }: { index: number; lang: Language }) {
  const alt = descriptions[lang];

  if (index === 4) return <div className="project-cover project-cover-web">
    <svg viewBox="0 0 600 320" role="img" aria-label={{ pt: "Indicadores de negócio com atualização D-1", en: "Business indicators updated through D-1", es: "Indicadores de negocio con actualización D-1" }[lang]} style={{ width: "100%", height: "100%", color: "var(--accent, #b6d477)" }}>
      <rect x="62" y="52" width="476" height="216" rx="12" fill="none" stroke="currentColor" opacity=".4" />
      <text x="92" y="105" fill="currentColor" fontSize="18" fontFamily="sans-serif">GOOGLE DATA STUDIO</text>
      <text x="90" y="199" fill="currentColor" fontSize="82" fontFamily="sans-serif" fontWeight="600">D−1</text>
      <text x="325" y="154" fill="currentColor" fontSize="22" fontFamily="sans-serif">GMV</text>
      <text x="325" y="190" fill="currentColor" fontSize="22" fontFamily="sans-serif">TIERS</text>
      <text x="325" y="226" fill="currentColor" fontSize="22" fontFamily="sans-serif">KITS</text>
    </svg>
  </div>;

  if (index === 1) return <div className="project-cover project-cover-checkin">
    <Image src="/images/checkin-eventos.webp" alt={alt[1]} width={900} height={1600} unoptimized />
    <Image src="/images/checkin-atletas.webp" alt={alt[2]} width={900} height={1600} unoptimized />
  </div>;

  if (index === 2) return <div className="project-cover project-cover-athlete">
    <div className="athlete-cover-art">
      <Image src="/images/app-atleta-catalogo.webp" alt={alt[3]} width={900} height={1600} unoptimized />
    </div>
  </div>;

  if (index === 3) return <div className="project-cover project-cover-web">
    <div className="website-cover-art">
      <Image src="/images/ticket-sports-site.jpg" alt={alt[4]} width={1425} height={891} unoptimized />
    </div>
  </div>;

  return <div className="project-cover project-cover-migration">
    <div className="migration-cover-art">
      <Image src="/images/sao-silvestre-ingresse.png" alt={alt[0]} width={1892} height={942} unoptimized />
    </div>
  </div>;
}

