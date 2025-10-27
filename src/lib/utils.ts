import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openKanataApp() {
  const userAgent = navigator.userAgent || navigator.vendor || "";
  const isMobile = /android|iPad|iPhone|iPod/i.test(userAgent);

  const url = isMobile
    ? "https://kanata.onelink.me/dYmZ/vukegfoa"
    : "https://kanata.live";

  window.open(url, "_blank");
}
