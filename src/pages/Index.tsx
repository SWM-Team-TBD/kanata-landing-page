import { MessageCircle, CheckCircle2, Star, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import callResultImg from "@/assets/call-result.png";
import callScreenImg from "@/assets/call-screen.png";
import todayCallImg from "@/assets/today-call.png";
import homeImg from "@/assets/home.png";
import questImg from "@/assets/quest.png";
import {
  initPostHog,
  initScrollTracking,
  trackPageView,
} from "@/lib/analytics";
import { StartButton } from "@/components/StartButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    initPostHog();
    trackPageView("landing_page");
    const cleanupScrollTracking = initScrollTracking();
    return () => {
      if (cleanupScrollTracking) cleanupScrollTracking();
    };
  }, []);

  const handleWebTrial = () => {
    window.open("https://kanata.live", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header onWebTrial={handleWebTrial} />

      {/* Hero Section */}
      <section className="w-full min-h-screen overflow-hidden relative flex items-center pt-20 md:pt-0">
        {/* Background gradient - matching the reference image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1000px] max-h-[1000px] bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center pb-8 md:pb-0">
              {/* Left Content */}
              <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 text-white">
                <h1 className="font-bold text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="text-gradient">카나타</span>와 함께
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    일본어 자신감 기르기
                  </div>
                </h1>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm md:text-base lg:text-lg text-white">
                      언제 어디서나 대화 가능
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm md:text-base lg:text-lg text-white">
                      대화 후 표현 피드백
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm md:text-base lg:text-lg text-white">
                      문장 다시 듣기
                    </span>
                  </div>
                </div>

                <div className="flex flex-row gap-2 md:gap-3 items-center justify-start pt-2 max-w-xl">
                  <StartButton onStart={handleWebTrial} />
                </div>
              </div>

              {/* Phone mockup */}
              <div>
                <div className="flex justify-center">
                  <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[350px]">
                    <img
                      src={homeImg}
                      alt="Kanata app interface"
                      className="w-full h-auto"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details with iPhone Mockups */}
      <section
        id="features"
        className="py-16 md:py-32 lg:py-40 border-y border-border/50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="text-gradient">실제 사용 모습</span>을
                확인하세요
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                카나타와 재미있는 대화부터 일본어 회화 학습까지
              </p>
            </div>

            {/* Feature 1: Real-time Conversation */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-32">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 md:mb-4">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">실시간 대화</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  카나타와 함께
                  <br />
                  음성으로 대화해봐요
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  카나타와 실시간으로 대화를 나눌 수 있어요. 카나타의 귀여운
                  목소리와 다양한 표정 변화을 통해 몰입감 있는 대화를 할 수
                  있어요.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "실시간 음성 인식 및 응답",
                    "자연스러운 립싱크와 표정 연출",
                    "감정이 담긴 목소리",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm md:text-base text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex justify-center">
                  <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[350px]">
                    <img
                      src={callScreenImg}
                      alt="Live2D Character Conversation"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Daily Progress */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-32">
              <div className="order-2 md:order-1">
                <div className="flex justify-center">
                  <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[350px]">
                    <img
                      src={questImg}
                      alt="Daily Learning Progress"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 md:mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">퀘스트</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  퀘스트를 완료하고
                  <br />
                  보상을 받으세요
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  메인, 주간, 일일 퀘스트를 완료하고 보상을 받으세요. 꾸준한
                  학습으로 더 많은 보상을 획득할 수 있어요!
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "매일 새로운 일일 퀘스트 제공",
                    "메인 퀘스트로 장기 목표 달성",
                    "퀘스트 완료 시 보상 제공",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm md:text-base text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3: Conversation Feedback */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 md:mb-4">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">대화 피드백</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  대화 후에는
                  <br />
                  상세한 피드백을 받으세요
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  대화가 끝나면 어떤 표현을 잘했는지, 어떤 부분을 개선하면
                  좋을지 카나타가 친절하게 알려줍니다.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "단어, 표현력, 문장 완성도를 평가하고 피드백 제공",
                    "회화 표현 개선 제안",
                    "번역 및 다시 듣기로 복습 가능",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm md:text-base text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex justify-center">
                  <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[350px]">
                    <img
                      src={callResultImg}
                      alt="Conversation Feedback"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="py-20 md:py-32 lg:py-40 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1000px] max-h-[1000px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 md:mb-8">
              <span className="text-xs md:text-sm font-medium">
                지금 가입하면 매일 15분 무료 체험
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 px-4">
              <span className="text-gradient">카나타</span>
              <span className="text-white">와 함께</span>
              <br />
              <span className="text-white">일본어 자신감을 길러봐요!</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              오래 덕질한 당신, 이제 일본어로 말할 차례입니다
            </p>

            <div className="flex flex-row gap-2 md:gap-3 items-center justify-center pt-2 max-w-xl mx-auto">
              <StartButton onStart={handleWebTrial} />
            </div>

            <div className="mt-12 md:mt-20 relative max-w-3xl mx-auto">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Index;
