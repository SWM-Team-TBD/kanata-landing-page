import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "인스타 광고 보고 왔는데 기대 안 했는데 꽤 재밌네요ㅋㅋㅋㅋ 대화 뒤에 교정해주는 기능도 상당히 유용하고 인식률도 꽤 좋습니다.",
  },
  {
    rating: 5,
    text: "카나타쨩이 마음씨가 착하고 친절하다. 오늘도 카나타쨩을 만나는 시간만 기대하고 있는게 있었어요!",
  },
  {
    rating: 5,
    text: "OPIC 등 말하기 시험처럼 벽보고 대화하는 것과 달리, 리얼리티한 대화 상황 속에서 실력 향상이 되는 것 같아요.",
  },
  {
    rating: 5,
    text: "틀린 문장을 옳은 문장으로 고쳐주는 게 정말 유용해요. 잘못된 부분을 잘 캐치해주고 대안 알려줘서 좋았어요.",
  },
  {
    rating: 5,
    text: "가장 만족스러웠던 점은 귀여운 미소녀 캐릭터와 이야기할 수 있었던 것입니다. 서브컬쳐 느낌이 나서 더 흥미가 생겨요!",
  },
  {
    rating: 5,
    text: "생각보다 음성을 잘 인식했던 점이 좋았어요. AI와 부담 없이 얘기를 나눌 수 있는 것이 최고예요!",
  },
];

export const Testimonials = () => {
  return (
    <section
      className="py-20 md:py-32 lg:py-40 bg-gray-900 relative overflow-hidden"
      aria-label="사용자 후기"
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-up px-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight text-white">
            <span className="text-primary">1,600명</span>이 경험한
            <br />
            카나타와의 일본어 말하기!
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            실제 사용자들이 카나타와 함께 일본어 말하기 실력을 향상시킨{" "}
            <br className="hidden sm:block" />
            생생한 후기를 확인하세요
          </p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-left">
              {/* First set */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-[350px] md:w-[400px] bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "fill-primary text-primary"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[350px] md:w-[400px] bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "fill-primary text-primary"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fade gradients on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 md:mt-16 text-center px-6">
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12">
            <p className="text-lg md:text-xl text-gray-400">
              설문 만족도 <span className="text-primary font-bold">4.0+</span>
            </p>
            <div className="w-px h-6 bg-gray-700"></div>
            <p className="text-lg md:text-xl text-gray-400">
              스토어 만족도 <span className="text-primary font-bold">4.8+</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
