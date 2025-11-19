const stats = [
  {
    value: "1,600+",
    label: "가입자",
  },
  {
    value: "3,400+",
    label: "통화량",
  },
  {
    value: "20,000+",
    label: "메시지 피드백",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-gray-900">
              많은 분들이 이미
              <br className="hidden sm:block" />{" "}
              <span className="text-primary">카나타</span>와 함께하고 있어요
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 mb-12 md:mb-16 max-w-3xl mx-auto px-4 leading-relaxed">
              2025년 11월 19일 기준
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-1 md:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Value */}
                <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-3 md:mb-4 text-primary">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-md md:text-lg font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
