import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Platform = "ios" | "android" | "web";

export function detectPlatform(): Platform {
  if (typeof window === "undefined") {
    return "web";
  }

  const userAgent = window.navigator.userAgent.toLowerCase();

  // iOS 감지
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return "ios";
  }

  // Android 감지
  if (/android/.test(userAgent)) {
    return "android";
  }

  // 그 외는 웹(데스크탑)으로 처리
  return "web";
}
