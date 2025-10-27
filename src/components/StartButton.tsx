import { openKanataApp, Platform } from "@/lib/utils";
import { trackButtonClick } from "@/lib/analytics";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface StartButtonProps {
  location: string;
}

export const StartButton = ({ location }: StartButtonProps) => {
  const handleClick = (platform?: Platform) => {
    trackButtonClick("start_btn", location);
    openKanataApp(platform);
  };

  return (
    <div className="inline-flex shadow-lg rounded-lg">
      <button
        onClick={() => handleClick()}
        className="px-8 py-3 md:px-12 md:py-4 bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-lg rounded-l-lg transition-all"
      >
        시작하기
      </button>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            className="px-3 py-3 md:px-4 md:py-4 bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-lg rounded-r-lg transition-all border-l border-white/20"
            aria-label="플랫폼 선택"
          >
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem
            onClick={() => handleClick("android")}
            className="cursor-pointer"
          >
            안드로이드
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleClick("ios")}
            className="cursor-pointer"
          >
            iOS
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleClick("web")}
            className="cursor-pointer"
          >
            웹
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
