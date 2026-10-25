import Image from "next/image";
import { Arrow } from "@/components/arrow";

export type ProductGalleryCopy = {
  label: string;
  sourceLabel: string;
  sourceUrl: string;
  openLabel: string;
  note: string;
  images: readonly { src: string; alt: string; caption: string }[];
};

export function ProductGallery({ copy }: { copy: ProductGalleryCopy }) {
  return <aside className="product-gallery" aria-label={copy.label}>
    <p className="eyebrow">{copy.label}</p>
    <div className={`product-gallery-images${copy.images.length === 1 ? " product-gallery-single" : ""}`}>
      {copy.images.map((item) => <figure key={item.src}>
        <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`${copy.openLabel}: ${item.caption}`}>
          <Image src={item.src} alt={item.alt} width={900} height={1600} unoptimized />
        </a>
        <figcaption>{item.caption}</figcaption>
      </figure>)}
    </div>
    <p className="product-gallery-note">{copy.note}</p>
    <a href={copy.sourceUrl} className="text-link">{copy.sourceLabel}<Arrow diagonal /></a>
  </aside>;
}
