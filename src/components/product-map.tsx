import { home, type Language } from "@/content/home";

export function ProductMap({ lang }: { lang: Language }) {
  const copy = home[lang];
  return <aside className="product-map" aria-label={copy.perspective}>
    <div className="map-heading"><span className="eyebrow">{copy.perspective}</span><span aria-hidden="true">↗</span></div>
    <svg viewBox="0 0 400 310" fill="none" role="img" aria-labelledby="product-map-title">
      <title id="product-map-title">{copy.mapDescription}</title>
      <g className="map-lines" stroke="currentColor" strokeWidth="1">
        <path d="M60 85H150L200 155L250 85H340M60 225H150L200 155L250 225H340" />
        <path d="M60 85V225M340 85V225M150 85V225M250 85V225" strokeDasharray="3 6" opacity=".4" />
        <circle cx="200" cy="155" r="91" opacity=".35" /><circle cx="200" cy="155" r="63" opacity=".2" />
      </g>
      <g className="map-label" textAnchor="middle" fill="currentColor" fontSize="13">
        <text x="105" y="54">{copy.dimensions[0].name}</text><text x="295" y="54">{copy.dimensions[1].name}</text>
        <text x="105" y="263">{copy.dimensions[2].name}</text><text x="295" y="263">{copy.dimensions[3].name}</text>
      </g>
      <g className="map-points" fill="currentColor"><circle cx="150" cy="85" r="3" /><circle cx="250" cy="85" r="3" /><circle cx="150" cy="225" r="3" /><circle cx="250" cy="225" r="3" /></g>
      <circle className="map-center" cx="200" cy="155" r="39" /><text className="map-center-label" x="200" y="160" textAnchor="middle" fontSize="13">{copy.productWord}</text>
    </svg>
    <p className="map-signature">{copy.signature}</p>
  </aside>;
}
