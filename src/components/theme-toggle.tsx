"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import type { Language } from "@/content/home";

const storageKey = "yago-portfolio-theme";

export function ThemeToggle({ lang }: { lang: Language }) {
  const [theme, setTheme] = useState("dark");
  useLayoutEffect(() => {
    let selected = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    try { selected = localStorage.getItem(storageKey) === "light" ? "light" : "dark"; } catch { /* Keep the current theme when storage is unavailable. */ }
    document.documentElement.dataset.theme = selected;
    setTheme(selected);
  }, [lang]);
  useEffect(() => {
    function synchronize(event: StorageEvent) {
      if (event.key !== storageKey) return;
      const next = event.newValue === "light" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      setTheme(next);
    }
    window.addEventListener("storage", synchronize);
    return () => window.removeEventListener("storage", synchronize);
  }, []);
  const label = lang === "pt"
    ? (theme === "dark" ? "Ativar modo claro" : "Ativar modo noturno")
    : (theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem(storageKey, next); } catch { /* Switching still works without storage. */ }
  }
  return <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <g className="sun-icon"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></g>
      <path className="moon-icon" d="M20.8 13.1A9 9 0 0 1 10.9 3.2a9 9 0 1 0 9.9 9.9Z" />
    </svg>
  </button>;
}
