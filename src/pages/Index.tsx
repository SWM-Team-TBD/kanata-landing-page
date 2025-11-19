import { MessageCircle, CheckCircle2, Star, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import callResultImg from "@/assets/call-result.webp";
import callScreenImg from "@/assets/call-screen.webp";
import homeImg from "@/assets/home.webp";
import questImg from "@/assets/quest.webp";
import {
  initPostHog,
  initScrollTracking,
  trackPageView,
  trackExternalLinkClick,
} from "@/lib/analytics";
import { StartButton } from "@/components/StartButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsSection } from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";
import { YoutubeIcon } from "@/components/icons/YoutubeIcon";
import { XIcon } from "@/components/icons/XIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

const Index = () => {
  useEffect(() => {
    initPostHog();
    trackPageView("landing_page");
    const cleanupScrollTracking = initScrollTracking();
    return () => {
      if (cleanupScrollTracking) cleanupScrollTracking();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/10 selection:text-primary">
      <Header />

      {/* Hero Section */}
      <section className="w-full min-h-[100dvh] overflow-hidden relative flex items-center pt-20 md:pt-0 bg-white">
        {/* Background gradient - subtle and natural */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] bg-blue-50/50 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[80vw] h-[80vw] bg-purple-50/50 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="flex flex-col space-y-8 md:space-y-10 animate-fade-up order-2 md:order-1">
                <h1 className="font-bold text-left leading-[1.1] tracking-tight text-gray-900">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 font-display">
                    <span className="text-primary">카나타</span>와 함께
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
                    일본어 자신감
                    <br className="block md:hidden" /> 기르기
                  </div>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  오타쿠를 위한 일본어 회화 교육 서비스!
                  <br />
                  카나타와 함께 자연스럽게 일본어 회화 학습을 시작하세요
                </p>

                <div className="w-full md:w-auto flex justify-center md:justify-start">
                  <StartButton
                    location="hero"
                    className="text-lg rounded-full shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 mb-12"
                  />
                </div>
              </div>

              {/* Phone mockup - Optimized for mobile view */}
              <div className="order-1 md:order-2 w-full flex justify-center md:justify-end animate-fade-in delay-300">
                <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]">
                  {/* Soft shadow behind phone */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-purple-100/50 blur-[60px] rounded-full transform scale-90"></div>

                  <div className="relative z-10 animate-floating">
                    <img
                      src={homeImg}
                      alt="Kanata app interface"
                      className="w-full h-auto drop-shadow-2xl shadow-2xl shadow-gray-200"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Product Details with iPhone Mockups */}
      <section
        id="features"
        className="py-20 md:py-32 lg:py-40 bg-gray-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-5 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24 lg:mb-32 animate-fade-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight text-gray-900">
                <span className="text-primary">실제 사용 모습</span>을
                확인하세요
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                카나타와 재미있는 대화부터
                <br className="block sm:hidden" /> 일본어 회화 학습까지
              </p>
            </div>

            {/* Feature 1: Real-time Conversation */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center mb-24 md:mb-32 lg:mb-40">
              <div
                className="text-left order-2 md:order-1 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="glass-card p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 md:mb-8">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary tracking-wide">
                      실시간 대화
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900 leading-tight">
                    <span className="text-primary">카나타</span>와 함께
                    <br />
                    <span className="">음성으로 대화해봐요</span>
                  </h3>
                  <p className="text-lg md:text-xl text-gray-500 mb-8 md:mb-10 leading-relaxed">
                    카나타와 실시간으로 대화를 나눌 수 있어요. 카나타의 귀여운
                    목소리와 다양한 표정 변화을 통해 몰입감 있는 대화를 할 수
                    있어요.
                  </p>
                  <ul className="space-y-4 md:space-y-5">
                    {[
                      "실시간 음성 인식 및 응답",
                      "자연스러운 립싱크와 표정 연출",
                      "감정이 담긴 목소리",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-base md:text-lg text-gray-700 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="order-1 md:order-2 animate-fade-in flex justify-center"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative group w-full max-w-[320px] md:max-w-[400px]">
                  <div className="absolute inset-0 bg-blue-100/50 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={callScreenImg}
                      alt="Live2D Character Conversation"
                      className="w-full h-auto drop-shadow-2xl shadow-2xl shadow-gray-200"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Daily Progress */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center mb-24 md:mb-32 lg:mb-40">
              <div
                className="order-1 animate-fade-in flex justify-center"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="relative group w-full max-w-[320px] md:max-w-[400px]">
                  <div className="absolute inset-0 bg-purple-100/50 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={questImg}
                      alt="Daily Learning Progress"
                      className="w-full h-auto drop-shadow-2xl shadow-2xl shadow-gray-200"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div
                className="text-left order-2 animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="glass-card p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6 md:mb-8">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary tracking-wide">
                      퀘스트
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900 leading-tight">
                    <span className="text-primary">퀘스트</span>를 완료하고
                    <br />
                    <span className="">보상을 받으세요</span>
                  </h3>
                  <p className="text-lg md:text-xl text-gray-500 mb-8 md:mb-10 leading-relaxed">
                    메인, 주간, 일일 퀘스트를 완료하고 보상을 받으세요. 꾸준한
                    학습으로 더 많은 보상을 획득할 수 있어요!
                  </p>
                  <ul className="space-y-4 md:space-y-5">
                    {[
                      "매일 새로운 일일 퀘스트 제공",
                      "메인 퀘스트로 장기 목표 달성",
                      "퀘스트 완료 시 보상 제공",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-base md:text-lg text-gray-700 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 3: Conversation Feedback */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
              <div
                className="text-left order-2 md:order-1 animate-fade-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="glass-card p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 md:mb-8">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary tracking-wide">
                      대화 피드백
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900 leading-tight">
                    <span className="text-primary">대화 후</span>에는
                    <br />
                    <span className="">상세한 피드백을 받으세요</span>
                  </h3>
                  <p className="text-lg md:text-xl text-gray-500 mb-8 md:mb-10 leading-relaxed">
                    대화가 끝나면 어떤 표현을 잘했는지, 어떤 부분을 개선하면
                    좋을지 카나타가 친절하게 알려줍니다.
                  </p>
                  <ul className="space-y-4 md:space-y-5">
                    {[
                      "단어, 표현력, 문장 완성도를 평가하고 피드백 제공",
                      "회화 표현 개선 제안",
                      "번역 및 다시 듣기로 복습 가능",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-base md:text-lg text-gray-700 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="order-1 md:order-2 animate-fade-in flex justify-center"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="relative group w-full max-w-[320px] md:max-w-[400px]">
                  <div className="absolute inset-0 bg-blue-100/50 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={callResultImg}
                      alt="Conversation Feedback"
                      className="w-full h-auto drop-shadow-2xl shadow-2xl shadow-gray-200"
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
      <section
        id="download"
        className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-gray-900"
      >
        <div className="container mx-auto px-5 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-8 md:mb-10">
              <span className="text-sm md:text-base font-medium text-gray-300">
                지금 가입하면 매일 15분 무료 체험
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 md:mb-10 px-4 tracking-tight leading-[1.1] text-white">
              <span className="text-primary">카나타</span>
              <span className="text-white">와 함께</span>
              <br />
              <span className="text-white">일본어 자신감을 길러봐요!</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto px-4 leading-relaxed">
              오래 덕질한 당신, 이제 일본어로 말할 차례입니다
            </p>

            <div className="flex justify-center pt-4">
              <StartButton
                location="final_cta"
                className="text-lg rounded-full shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
              />
            </div>

            <div className="mt-16 md:mt-24 flex flex-col items-center gap-8">
              <p className="text-lg md:text-xl text-gray-500 font-medium">
                카나타의 최신 소식을 팔로우하세요
              </p>
              <div className="flex items-center gap-6 md:gap-8">
                <a
                  href="https://www.youtube.com/@kanata_edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackExternalLinkClick(
                      "youtube",
                      "https://www.youtube.com/@kanata_edu",
                      "final_cta"
                    )
                  }
                  className="group p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="h-6 w-6 md:h-8 md:w-8 text-gray-500 group-hover:text-[#FF0000] transition-colors" />
                </a>
                <a
                  href="https://x.com/kanata_edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackExternalLinkClick(
                      "x",
                      "https://x.com/kanata_edu",
                      "final_cta"
                    )
                  }
                  className="group p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="h-6 w-6 md:h-8 md:w-8 text-gray-500 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/kanata_edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackExternalLinkClick(
                      "instagram",
                      "https://www.instagram.com/kanata_edu/",
                      "final_cta"
                    )
                  }
                  className="group p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-6 w-6 md:h-8 md:w-8 text-gray-500 group-hover:text-[#E4405F] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Index;
