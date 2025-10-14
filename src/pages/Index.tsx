import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Heart, Zap, Users, Clock, CheckCircle2, Star, TrendingUp, Target, Trophy, Quote, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import callResultImg from "@/assets/call-result.png";
import callScreenImg from "@/assets/call-screen.png";
import todayCallImg from "@/assets/today-call.png";
import startScreenImg from "@/assets/start-screen.png";
import questCompleteImg from "@/assets/quest-complete.png";
import logoImg from "@/assets/logo.png";
import layer3Img from "@/assets/layer-3.png";
import { initPostHog, initScrollTracking, trackDownloadClick, trackWebTrialClick, trackPageView, trackButtonClick } from "@/lib/analytics";

const Index = () => {
  const {
    theme,
    setTheme
  } = useTheme();

  // Initialize PostHog and scroll tracking
  useEffect(() => {
    initPostHog();
    trackPageView('landing_page');
    const cleanupScrollTracking = initScrollTracking();
    return () => {
      if (cleanupScrollTracking) cleanupScrollTracking();
    };
  }, []);
  const scrollToDownload = () => {
    trackButtonClick("시작하기", "hero_section");
    document.getElementById("download")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToFeatures = () => {
    trackButtonClick("더_알아보기", "hero_section");
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const handleAppStore = () => {
    trackButtonClick("app_store_download", "cta_section");
    trackDownloadClick("cta_section", "app_store");
    window.open("https://apps.apple.com/", "_blank");
  };
  const handlePlayStore = () => {
    trackButtonClick("play_store_download", "cta_section");
    trackDownloadClick("cta_section", "play_store");
    window.open("https://play.google.com/", "_blank");
  };
  const handleWebTrial = () => {
    trackButtonClick("웹에서_체험하기", "cta_section");
    trackWebTrialClick();
    window.open("https://kanata.live", "_blank");
  };
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src={logoImg} alt="Kanata" className="h-6" />
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-accent transition-colors" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="w-5 h-5 text-muted-foreground" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
              </button>
              <Button onClick={handleWebTrial} className="text-sm">
                시작하기
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 to-white dark:from-sky-950/20 dark:to-background pointer-events-none"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            {/* Hero Image */}
            <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto order-first lg:order-last">
              <img
                src={layer3Img}
                alt="Kanata character"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  카나타쨩과 일본어 프리토킹 ❤️
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  AI 캐릭터와 함께 두근두근 일본어 대화를 연습해보세요.
                </p>
              </div>
              <div className="flex flex-row gap-3 flex-wrap items-center justify-center">
                <div className="relative inline-block h-14">
                  <button disabled className="cursor-not-allowed inline-block h-14">
                    <img
                      src="/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg"
                      alt="App Store에서 다운로드"
                      className="h-14 opacity-40"
                      style={{ width: 'auto' }}
                      onLoad={(e) => {
                        const appStoreWidth = e.currentTarget.offsetWidth;
                        const playStoreImg = document.querySelector('[alt="Google Play에서 다운로드"]') as HTMLImageElement;
                        const webTrialBtn = e.currentTarget.closest('.flex')?.querySelector('button:last-child') as HTMLButtonElement;
                        if (playStoreImg) {
                          playStoreImg.style.width = `${appStoreWidth}px`;
                        }
                        if (webTrialBtn) {
                          webTrialBtn.style.width = `${appStoreWidth}px`;
                        }
                      }}
                    />
                  </button>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-xs font-semibold bg-black/80 text-white px-3 py-1 rounded whitespace-nowrap">준비중입니다</span>
                  </div>
                </div>
                <div className="relative inline-block h-14">
                  <button disabled className="cursor-not-allowed inline-block h-14">
                    <img
                      src="/GetItOnGooglePlay_Badge_Web_color_Korean.png"
                      alt="Google Play에서 다운로드"
                      className="h-14 opacity-40"
                    />
                  </button>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-xs font-semibold bg-black/80 text-white px-3 py-1 rounded whitespace-nowrap">준비중입니다</span>
                  </div>
                </div>
                <button
                  onClick={handleWebTrial}
                  className="transition-opacity hover:opacity-80 h-14 rounded-[8px] bg-black dark:bg-white text-white dark:text-black border border-gray-300 dark:border-gray-700 font-semibold text-sm flex items-center justify-center whitespace-nowrap box-border"
                  style={{ width: 'auto' }}
                  ref={(el) => {
                    if (el) {
                      const appStoreImg = document.querySelector('[alt="App Store에서 다운로드"]') as HTMLImageElement;
                      if (appStoreImg && appStoreImg.offsetWidth > 0) {
                        el.style.width = `${appStoreImg.offsetWidth}px`;
                      }
                    }
                  }}
                >
                  웹에서 체험하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details with iPhone Mockups */}
      <section id="features" className="py-32 md:py-40 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-gradient">실제 사용 모습</span>을 확인하세요
              </h2>
              <p className="text-xl text-muted-foreground">
                서브컬쳐 캐릭터와의 자연스러운 대화부터 학습 결과까지
              </p>
            </div>

            {/* Feature 1: Real-time Conversation */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">실시간 대화</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  살아있는 캐릭터와
                  <br />
                  음성으로 대화하세요
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Live2D 기술로 구현된 서브컬쳐 캐릭터가 당신의 말에 실시간으로 반응합니다. 
                  다양한 표정 변화로 마치 진짜 사람과 대화하는 듯한 몰입감을 제공합니다.
                </p>
                <ul className="space-y-4">
                  {["실시간 음성 인식 및 응답", "자연스러운 립싱크와 표정 연출", "감정이 담긴 음성 합성", "대화 맥락을 이해하는 AI"].map((feature, index) => <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>)}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  {/* iPhone Mockup Frame */}
                  <div className="relative mx-auto" style={{
                  maxWidth: "320px"
                }}>
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[3rem]" />
                    <div className="relative bg-gray-400 rounded-[3rem] p-3 shadow-2xl">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-400 rounded-b-3xl z-10" />
                      {/* Screen */}
                      <div className="relative rounded-[2.2rem] overflow-hidden bg-background">
                        <img src={callScreenImg} alt="Live2D Character Conversation" className="w-full h-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Daily Progress */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div>
                <div className="relative">
                  {/* iPhone Mockup Frame */}
                  <div className="relative mx-auto" style={{
                  maxWidth: "320px"
                }}>
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[3rem]" />
                    <div className="relative bg-gray-400 rounded-[3rem] p-3 shadow-2xl">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-400 rounded-b-3xl z-10" />
                      {/* Screen */}
                      <div className="relative rounded-[2.2rem] overflow-hidden bg-background">
                        <img src={todayCallImg} alt="Daily Learning Progress" className="w-full h-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">학습 추적</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  매일의 성장을
                  <br/>
                  눈으로 확인하세요
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  오늘 얼마나 대화했는지, 어떤 표현을 배웠는지 한눈에 확인할 수 있습니다. 
                  꾸준한 학습으로 실력이 향상되는 모습을 실시간으로 추적하세요.
                </p>
                <ul className="space-y-4">
                  {["일일 대화 시간 및 횟수 기록", "학습한 표현 및 단어 목록", "주간/월간 학습 통계", "성취도 기반 레벨 시스템"].map((feature, index) => <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            {/* Feature 3: Conversation Feedback */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">즉시 피드백</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  대화 후에는
                  <br/>
                  상세한 피드백을 받으세요
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  대화가 끝나면 어떤 표현을 잘했는지, 어떤 부분을 개선하면 좋을지 AI가 친절하게 알려줍니다.
                </p>
                <ul className="space-y-4">
                  {["대화 내용 전체 텍스트 제공", "한국어 번역으로 복습 가능", "발음 및 문법 개선 제안", "다음 학습 방향 추천"].map((feature, index) => <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>)}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  {/* iPhone Mockup Frame */}
                  <div className="relative mx-auto" style={{
                  maxWidth: "320px"
                }}>
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[3rem]" />
                    <div className="relative bg-gray-400 rounded-[3rem] p-3 shadow-2xl">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-400 rounded-b-3xl z-10" />
                      {/* Screen */}
                      <div className="relative rounded-[2.2rem] overflow-hidden bg-background">
                        <img src={callResultImg} alt="Conversation Feedback" className="w-full h-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section id="download" className="py-32 md:py-40 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="text-sm font-medium">지금 가입하면 매일 15분 무료 체험</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-gradient">말 못하는 덕후에서 벗어나세요</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              오래 덕질한 당신, 이제 일본어로 말할 차례입니다
            </p>

            <div className="flex flex-row gap-3 flex-wrap justify-center items-center mb-12">
              <div className="relative inline-block h-14">
                <button disabled className="cursor-not-allowed inline-block h-14">
                  <img
                    src="/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg"
                    alt="App Store에서 다운로드 (CTA)"
                    className="h-14 opacity-40"
                    style={{ width: 'auto' }}
                    onLoad={(e) => {
                      const appStoreWidth = e.currentTarget.offsetWidth;
                      const playStoreImg = document.querySelector('[alt="Google Play에서 다운로드 (CTA)"]') as HTMLImageElement;
                      const webTrialBtn = e.currentTarget.closest('.flex')?.querySelector('button:last-child') as HTMLButtonElement;
                      if (playStoreImg) {
                        playStoreImg.style.width = `${appStoreWidth}px`;
                      }
                      if (webTrialBtn) {
                        webTrialBtn.style.width = `${appStoreWidth}px`;
                      }
                    }}
                  />
                </button>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-xs font-semibold bg-black/80 text-white px-3 py-1 rounded">준비중입니다</span>
                </div>
              </div>
              <div className="relative inline-block h-14">
                <button disabled className="cursor-not-allowed inline-block h-14">
                  <img
                    src="/GetItOnGooglePlay_Badge_Web_color_Korean.png"
                    alt="Google Play에서 다운로드 (CTA)"
                    className="h-14 opacity-40"
                  />
                </button>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-xs font-semibold bg-black/80 text-white px-3 py-1 rounded">준비중입니다</span>
                </div>
              </div>
              <button
                onClick={handleWebTrial}
                className="transition-opacity hover:opacity-80 h-14 rounded-[8px] bg-black dark:bg-white text-white dark:text-black border border-gray-300 dark:border-gray-700 font-semibold text-sm flex items-center justify-center whitespace-nowrap box-border"
              >
                웹에서 체험하기
              </button>
            </div>

            

            

            <div className="mt-20 relative max-w-3xl mx-auto">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-3xl" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={logoImg} alt="Kanata" className="h-6" />
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="https://swm-team-tbd.github.io/kanata-privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">개인정보처리방침</a>
              <a href="https://swm-team-tbd.github.io/kanata-term-of-service/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">이용약관</a>
              {/* <a href="#" className="hover:text-primary transition-colors">고객센터</a> */}
            </div>
            <p className="text-sm text-muted-foreground">2025 Kanata. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;