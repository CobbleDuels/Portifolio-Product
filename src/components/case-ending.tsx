import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { home, type Language } from "@/content/home";

const copy = {
  pt: { eyebrow: "CONTINUE A CONVERSA", title: "Que desafio de Produto você tem em mente?", text: "Vamos conversar sobre as decisões deste projeto ou sobre o que podemos construir juntos.", cta: "Conversar com o Yago", next: "Explorar outros projetos" },
  en: { eyebrow: "LET’S KEEP TALKING", title: "What Product challenge is on your mind?", text: "Let’s discuss the decisions in this project or what we could build together.", cta: "Talk to Yago", next: "Explore other projects" },
  es: { eyebrow: "SIGAMOS CONVERSANDO", title: "¿Qué desafío de Producto tienes en mente?", text: "Conversemos sobre las decisiones de este proyecto o sobre lo que podemos construir juntos.", cta: "Hablar con Yago", next: "Explorar otros proyectos" },
};

export function CaseEnding({ lang }: { lang: Language }) {
  const text = copy[lang];
  return <><section className="case-ending page-width" aria-labelledby="ending-heading"><div><p className="eyebrow">{text.eyebrow}</p><h2 id="ending-heading">{text.title}</h2><p>{text.text}</p></div><div className="ending-actions"><Link className="primary-button" href={`/${lang}#contact`}>{text.cta}<Arrow /></Link><Link className="text-link" href={`/${lang}#projects`}>{text.next}<Arrow diagonal /></Link></div></section><footer className="site-footer page-width"><p className="footer-name">Yago Jesus.</p><a href="#top" className="text-link footer-back">{home[lang].backToTop}<span className="-rotate-90"><Arrow /></span></a></footer></>;
}
