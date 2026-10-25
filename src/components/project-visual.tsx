import type { Language } from "@/content/home";

const labels = {
  pt: ["Ilustração conceitual da migração entre plataformas", "Ilustração conceitual do protocolo e leitura para retirada de kit", "Ilustração conceitual da migração entre tecnologias mobile"],
  en: ["Conceptual illustration of migration between platforms", "Conceptual illustration of a protocol and scanning for kit pickup", "Conceptual illustration of migration between mobile technologies"],
};

export function ProjectVisual({ index, lang }: { index: number; lang: Language }) {
  return <figure className="project-visual">
    <svg viewBox="0 0 360 180" fill="none" role="img" aria-label={labels[lang][index]}>
      <g stroke="currentColor" strokeWidth="1.2">
        {index === 0 ? <>
          <path className="visual-faint" d="M0 45H360M0 90H360M0 135H360M90 0V180M180 0V180M270 0V180" />
          <path d="M48 55h66c30 0 32 35 66 35h132M48 90h264M48 125h66c30 0 32-35 66-35" />
          <rect className="visual-node" x="37" y="44" width="22" height="22" rx="2" /><rect className="visual-node" x="37" y="79" width="22" height="22" rx="2" /><rect className="visual-node" x="37" y="114" width="22" height="22" rx="2" />
          <circle className="visual-node" cx="305" cy="90" r="21" /><path d="m298 90 5 5 9-11" />
        </> : index === 1 ? <>
          <circle className="visual-faint" cx="180" cy="90" r="99" /><circle className="visual-faint" cx="180" cy="90" r="77" />
          <path className="visual-node" d="M108 43h144v35a12 12 0 0 0 0 24v35H108v-35a12 12 0 0 0 0-24Z" />
          <path strokeDasharray="3 5" d="M211 50v80" /><path d="M132 67h22v22h-22zm7 7h8v8h-8zm25 23h22v22h-22zm7 7h8v8h-8zM164 67h22v22h-22m-32 30h22v-22h-22m51-9v7m-25 3v6" />
          <path d="M94 57V29h28m116 0h28v28M94 123v28h28m116 0h28v-28" /><path className="scan-line" d="M88 91h184" />
        </> : <>
          <path className="visual-faint" d="M0 90h360M180 0v180" strokeDasharray="3 6" />
          <rect className="visual-node" x="64" y="29" width="69" height="122" rx="10" transform="rotate(-8 98 90)" /><rect className="visual-node" x="227" y="29" width="69" height="122" rx="10" transform="rotate(8 262 90)" />
          <path d="M155 90h50m-8-8 8 8-8 8M87 45l15-2m159 0 15 2" />
          <g transform="translate(98 92)"><path d="m-11-9-9 9 9 9m22-18 9 9-9 9m-7-24-8 30" /></g>
          <g transform="translate(262 92)"><ellipse rx="21" ry="8" /><ellipse rx="21" ry="8" transform="rotate(60)" /><ellipse rx="21" ry="8" transform="rotate(120)" /><circle cx="0" cy="0" r="2" fill="currentColor" /></g>
        </>}
      </g>
    </svg>
    <figcaption>{lang === "pt" ? "ILUSTRAÇÃO CONCEITUAL" : "CONCEPTUAL ILLUSTRATION"}</figcaption>
  </figure>;
}
