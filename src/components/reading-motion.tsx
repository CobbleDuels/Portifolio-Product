"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const readingBlocks = ".hero-profile, .hero-copy, .home-evidence, .project-card, .about-section, .contact-section, .case-hero, .website-hero, .case-reading-nav, .case-product-capture, .case-brief, .case-main article > section, .case-ending, .site-footer, .result-chart";

export function ReadingMotion() {
  const pathname = usePathname();
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>(".case-main article");
    if (!pathname.includes("/projects/") || !article || !progress.current) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = article.getBoundingClientRect();
      const distance = rect.height - innerHeight;
      const value = distance <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / distance));
      if (progress.current) progress.current.style.transform = `scaleX(${value})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
    resize?.observe(article);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      resize?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

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
          entry.target.classList.add(entry.target.matches(".result-chart") ? "chart-enter" : "motion-enter");
        }
        observer.unobserve(entry.target);
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

    const settleAnchor = () => {
      const anchor = currentAnchor();
      if (!anchor) return;
      blocks.forEach(block => {
        if (block.contains(anchor)) {
          block.classList.remove("motion-enter", "chart-enter");
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
      blocks.forEach(block => block.classList.remove("motion-enter", "chart-enter"));
    };
  }, [pathname]);

  return pathname.includes("/projects/") ? <div className="reading-progress" aria-hidden="true"><span ref={progress} /></div> : null;
}
