import React from "react";
import text from "../img/text.png";

const HeroCard = () => {
  const scrollToForm = () => {
    const element = document.getElementById("order-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const advantages = [
    { text: "Безопасность данных", color: "text-fuchsia-400" },
    { text: "Рост конверсии", color: "text-cyan-400" },
    { text: "Топ поддержка", color: "text-purple-400" },
  ];
  return (
    <div className="flex-1 flex items-center justify-center ">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Изображение/логотип */}
        <div className="max-w-3xl mx-auto mb-8 border-2 border-[#696896] rounded-2xl shadow-sm p-8 max-w-4xl mx-auto ">
          <img
            src={text}
            alt="НейроХештег"
            className="w-full object-contain max-h-[200px] md:max-h-[280px]"
          />
          <p className="text-[E2E3F0] text-base md:text-lg max-w-2xl mx-auto mb-2 leading-relaxed">
            Автоматизируйте рутину: мгновенные ответы клиентам и свобода для
            вас.
          </p>
          {/* Кнопка */}
          <div className="text-center max-w-3xl mx-auto">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer mb-2 bg-[#4D4B91] w-full justify-center"
            >
              <span className="text-white font-semibold text-sm md:text-base">
                СВЯЗАТЬСЯ С НАМИ
              </span>
            </button>
            <div className="text-center max-w-3xl mx-auto">
              {/* Преимущества */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {advantages.map((adv, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white/40 text-xs md:text-sm"
                  >
                    <span>{adv.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
