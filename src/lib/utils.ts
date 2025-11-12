import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { trackAppOpen } from "./analytics";
import { toast } from "@/components/ui/use-toast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Platform = "android" | "ios" | "web";

export type DeviceType = "android" | "ios" | "desktop";

const IOS_LINK =
  "https://apps.apple.com/kr/app/%EC%B9%B4%EB%82%98%ED%83%80-%EC%9D%BC%EB%B3%B8%EC%96%B4-ai-%ED%94%84%EB%A6%AC%ED%86%A0%ED%82%B9/id6754448960";
const ANDROID_LINK =
  "https://play.google.com/store/apps/details?id=tbd.team.swm.kanataapp";
const WEB_LINK = "https://kanata.live";

export function getUrlFromPlatform(platform: Platform): string {
  switch (platform) {
    case "ios":
      return IOS_LINK;
    case "android":
      return ANDROID_LINK;
    case "web":
      return WEB_LINK;
  }
}

export function getUrlFromDeviceType(deviceType: DeviceType): string {
  switch (deviceType) {
    case "ios":
      return IOS_LINK;
    case "android":
      return ANDROID_LINK;
    case "desktop":
      return WEB_LINK;
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
    url = getUrlFromPlatform(platform);
  } else {
    url = getUrlFromDeviceType(deviceType);
  }

  trackAppOpen(deviceType, platform);

  window.open(url, "_blank");
}
