import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { trackAppOpen } from "./analytics";
import { toast } from "@/components/ui/use-toast";

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

export async function openKanataApp(platform?: Platform) {
  const response = await fetch(
    "https://storage.kanata.live/kanata-app/status.json"
  );
  const data = await response.json();

  if (data.status === "DOWN") {
    toast({
      title: "점검 중",
      description:
        "서비스가 현재 점검 중입니다. 자세한 내용은 X를 확인해 주세요.",
    });
    return;
  }

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
