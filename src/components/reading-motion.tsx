"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const readingBlocks = ".hero-profile, .hero-copy, .home-evidence, .project-card, .about-section, .contact-section, .case-hero, .website-hero, .case-reading-nav, .case-product-capture, .case-brief, .case-main article > section, .case-ending, .site-footer";

export function ReadingMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const blocks = document.querySelectorAll<HTMLElement>(readingBlocks);
    const currentAnchor = () => {
      let anchor: HTMLElement | null = null;
      try { anchor = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { /* Invalid fragments need no special handling. */ }
      return anchor;
    };
    const observer = new IntersectionObserver(entries => {
      const anchor = currentAnchor();
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        // Reveal once. Anchor destinations and focused content stay immediately steady.
        if (!entry.target.contains(anchor) && !entry.target.contains(document.activeElement)) {
          entry.target.classList.add("motion-enter");
        }
        observer.unobserve(entry.target);
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

    const settleAnchor = () => {
      const anchor = currentAnchor();
      if (!anchor) return;
      blocks.forEach(block => {
        if (block.contains(anchor)) {
          block.classList.remove("motion-enter");
          observer.unobserve(block);
        }
      });
    };
    blocks.forEach(block => observer.observe(block));
    settleAnchor();
    window.addEventListener("hashchange", settleAnchor);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", settleAnchor);
      blocks.forEach(block => block.classList.remove("motion-enter"));
    };
  }, [pathname]);

  return null;
}
