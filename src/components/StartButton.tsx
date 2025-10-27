import { openKanataApp } from "@/lib/utils";
import { trackButtonClick } from "@/lib/analytics";

export const StartButton = () => {
  const handleClick = () => {
    trackButtonClick("start_btn", "cta_section");
    openKanataApp();
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
