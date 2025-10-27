import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";
import { openKanataApp } from "@/lib/utils";
import { trackButtonClick } from "@/lib/analytics";

export const Header = () => {
  const handleClick = () => {
    trackButtonClick("start_btn", "header");
    openKanataApp();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto px-4 py-1.5 md:px-6 md:py-2">
        <div className="flex items-center justify-between">
          <img src={logoImg} alt="Kanata" className="h-5 md:h-6" />
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              onClick={handleClick}
              className="text-xs md:text-sm px-3 md:px-4 h-8 md:h-10"
            >
              시작하기
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
