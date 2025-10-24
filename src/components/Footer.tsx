import logoImg from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <img src={logoImg} alt="Kanata" className="h-5 md:h-6" />
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
            <a
              href="https://swm-team-tbd.github.io/kanata-privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors py-2 px-1 min-h-[44px] flex items-center"
            >
              개인정보처리방침
            </a>
            <a
              href="https://swm-team-tbd.github.io/kanata-term-of-service/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors py-2 px-1 min-h-[44px] flex items-center"
            >
              이용약관
            </a>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            2025 Kanata. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
