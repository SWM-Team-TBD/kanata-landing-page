import { useEffect, useState } from "react";
import { detectPlatform, type Platform } from "@/lib/utils";
import { trackButtonClick, trackWebTrialClick } from "@/lib/analytics";

interface StartButtonProps {
  onStart?: () => void;
}

export const StartButton = ({ onStart }: StartButtonProps) => {
  const [platform, setPlatform] = useState<Platform>("web");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const handleClick = () => {
    // switch (platform) {
    //   case "ios":
    //     trackButtonClick("start_ios", "cta_section");
    //     // iOS App Store URL (준비중)
    //     // window.open("https://apps.apple.com/...", "_blank");
    //     break;
    //   case "android":
    //     trackButtonClick("start_android", "cta_section");
    //     // Google Play Store URL (준비중)
    //     // window.open("https://play.google.com/store/apps/...", "_blank");
    //     break;
    //   case "web":
    //     trackButtonClick("start_web", "cta_section");
    //     if (onStart) {
    //       onStart();
    //     } else {
    //       window.open("https://kanata.live", "_blank");
    //     }
    //     break;
    // }
    trackButtonClick("start_web", "cta_section");
    if (onStart) {
      onStart();
    } else {
      window.open("https://kanata.live", "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-8 py-3 md:px-12 md:py-4 bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-lg rounded-lg transition-all hover:scale-105 shadow-lg"
    >
      시작하기
    </button>
  );
};
