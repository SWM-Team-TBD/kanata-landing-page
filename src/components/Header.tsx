import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.webp";
import { openKanataApp } from "@/lib/utils";
import { trackButtonClick } from "@/lib/analytics";

export const Header = () => {
  const handleClick = async () => {
    trackButtonClick("start_btn", "header");
    openKanataApp();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-5 py-4 md:px-6">
        <div className="flex items-center justify-between">
          <img
            src={logoImg}
            alt="Kanata"
            className="h-7 md:h-7 w-auto hover:opacity-80 transition-opacity"
          />
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              onClick={handleClick}
              className="text-sm font-bold px-5 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
            >
              시작하기
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
