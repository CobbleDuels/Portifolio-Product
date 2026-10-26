import { Fragment } from "react";

// Editorial emphasis only: keep the original wording and avoid highlighting whole paragraphs.
const phrases = [
  "3 anos em Produto", "do problema à publicação", "escuta de clientes", "decisões de produto",
  "3 years in Product", "from the problem through launch", "product decisions",
  "3 años en Producto", "desde el problema hasta el lanzamiento", "decisiones de producto",
  "R$ 40 milhões de GMV em um dia", "50 para 20–30 minutos", "20% para 70%", "500 mil acessos",
  "R$ 40 million in GMV in one day", "20% to 70%", "500,000 accesses",
  "20% al 70%", "500 mil accesos",
  "congelamento de roadmap definido pela liderança", "conhecer o funcionamento do legado",
  "viabilizar o cadastro de eventos esportivos", "nova experiência no ambiente Ingresse",
  "entrevistas com o cliente, atletas e responsáveis por grupos", "10 mil grupos",
  "operação online e offline", "primeira versão entregue em 12 semanas",
  "continuar operando quando a internet caísse", "mantinha o primeiro registro e descartava duplicados",
  "acessos individuais", "Traduzi a demanda em iniciativa e user stories",
  "jornada web de compra", "validei o design com UX",
  "Solicitei a contratação de um especialista", "evento purchase de ponta a ponta",
  "anteciparia a investigação dos primeiros relatos", "30% em relação a 2025", "10% na retenção",
  "online and offline", "12 weeks", "individual access", "unified purchase journey",
  "web purchase journey within the app", "client interviews", "30% compared with 2025",
  "online y offline", "12 semanas", "accesos individuales", "jornada de compra web",
  "entrevistas con el cliente", "30% en comparación con 2025",
  "50,000 kits", "50 mil kits", "50.000 kits", "50 to 20–30 minutes", "50 a 20–30 minutos",
  "R$ 40 millones de GMV en un día", "500.000 accesos",
  "jornada web dentro do aplicativo", "menor esforço de implementação e maior alcance para a compra",
  "4,5 nas duas lojas", "4.5 in both stores", "4,5 en ambas tiendas",
  "conversão chegou a 70%", "conversion reached 70%", "conversión llegó al 70%",
  "defini a unificação da jornada de compra", "defined the unified purchase journey",
  "less implementation effort and broader purchase coverage", "experiencia web dentro de la app",
  "menor esfuerzo de implementación y mayor alcance para la compra",
  "conectando o conhecimento do legado às necessidades do cliente",
  "connecting legacy knowledge with client needs", "conectando el conocimiento del sistema anterior con las necesidades del cliente",
  "familiarity with how the legacy platform worked", "enable sports-event setup",
  "a new experience within Ingresse", "10,000 groups",
  "conocer el funcionamiento de la plataforma anterior", "permitir la creación de eventos deportivos",
  "nueva experiencia dentro de Ingresse", "10.000 grupos",
] as const;

export function ReadingText({ children: text }: { children: string }) {
  const matches = phrases.flatMap(phrase => {
    const start = text.indexOf(phrase);
    return start < 0 ? [] : [{ start, end: start + phrase.length }];
  }).sort((a, b) => a.start - b.start || b.end - a.end);
  const selected: typeof matches = [];
  for (const match of matches) {
    if (selected.length === 2) break;
    if (!selected.length || match.start >= selected[selected.length - 1].end) selected.push(match);
  }
  let cursor = 0;
  return <>{selected.map(match => {
    const before = text.slice(cursor, match.start);
    cursor = match.end;
    return <Fragment key={match.start}>{before}<strong>{text.slice(match.start, match.end)}</strong></Fragment>;
  })}{text.slice(cursor)}</>;
}
