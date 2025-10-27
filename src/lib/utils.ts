import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { trackAppOpen } from "./analytics";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Platform = "android" | "ios" | "web" | "auto";

export type DeviceType = "mobile" | "desktop";

const ONE_LINK = "https://kanata.onelink.me/dYmZ/vukegfoa";

export function getPlatformUrl(platform: Platform): string {
  switch (platform) {
    case "android":
      return ONE_LINK;
    case "ios":
      return ONE_LINK;
    case "web":
      return "https://kanata.live";
  }
}

function getDeviceType() {
  const userAgent = navigator.userAgent || navigator.vendor || "";
  const isMobile = /android|iPad|iPhone|iPod/i.test(userAgent);
  return isMobile ? "mobile" : "desktop";
}

export function openKanataApp(platform?: Platform) {
  const deviceType = getDeviceType();
  let url: string;

  if (platform) {
    url = getPlatformUrl(platform);
  } else {
    url = deviceType === "mobile" ? ONE_LINK : "https://kanata.live";
  }

  trackAppOpen(deviceType, platform);

  window.open(url, "_blank");
}
