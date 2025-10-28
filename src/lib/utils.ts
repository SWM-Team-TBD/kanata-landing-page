import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { trackAppOpen } from "./analytics";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Platform = "android" | "ios" | "web" | "auto";

export type DeviceType = "android" | "ios" | "desktop";

// TODO: 안드로이드 출시 후 ONE_LINK 연결
const ONE_LINK = "https://kanata.onelink.me/dYmZ/vukegfoa";

export function getPlatformUrl(platform: Platform): string {
  switch (platform) {
    case "ios":
      return ONE_LINK;
    default:
      return "https://kanata.live";
  }
}

function getDeviceType(): DeviceType {
  const userAgent = navigator.userAgent || navigator.vendor || "";

  if (/android/i.test(userAgent)) {
    return "android";
  }

  if (/iPad|iPhone|iPod/i.test(userAgent)) {
    return "ios";
  }

  return "desktop";
}

export function openKanataApp(platform?: Platform) {
  const deviceType = getDeviceType();
  let url: string;

  if (platform) {
    url = getPlatformUrl(platform);
  } else {
    url = deviceType === "ios" ? ONE_LINK : "https://kanata.live";
  }

  trackAppOpen(deviceType, platform);

  window.open(url, "_blank");
}
