import React from "react";
import {
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Rocket,
  Bot,
  Calculator,
  MessageCircle,
  Zap,
} from "lucide-react";

const ServicesSection = ({ onOrderClick }) => {
  const services = [
    {
      icon: Bot,
      name: "AI Секретарь",
      desc: "Отвечает в комментариях и личных сообщениях 24/7",
      color: "from-pink-500 to-orange-500",
      stats: "Ответ за 5 секунд",
    },
    {
      icon: Calculator,
      name: "AI Бухгалтер",
      desc: "Учет расходов, отчеты и финансовые расчеты",
      color: "from-blue-500 to-cyan-500",
      stats: "Точность 99.9%",
    },
  ];
  const scrollToForm = () => {
    if (onOrderClick) {
      onOrderClick();
      return;
    }

    const element = document.getElementById("order-form");

    if (!element) {
      console.error('Не найден элемент с id="order-form"');
      return;
    }

    const headerOffset = 120;

    const top =
      element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 relative z-10" id="services-and-team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">ВАРИАНТЫ ФОРМАТОВ ДЛЯ ПРОДУКТОВ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <button
              key={index}
              type="button"
              onClick={scrollToForm}
              className="group relative text-left cursor-pointer"
            >
              <div className="relative bg-[#4D4B91] rounded-2xl overflow-hidden border-2 border-[#4D4B91] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fuchsia-500/40 h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-3.5 shadow-lg transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 ring-2 ring-fuchsia-400/50 flex-shrink-0`}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </div>

                    <div className="text-right ml-4">
                      <div className="text-xs text-cyan-400 font-mono px-2 py-0.5 rounded-full bg-cyan-400/10 inline-block">
                        ⚡ от 2 дней
                      </div>

                      <div className="text-2xl font-bold text-white mt-2">
                        от 4 990 ₽
                        <span className="text-xs text-white/40 font-normal">
                          /мес
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.name}
                  </h3>

                  <p className="text-white/60 text-base mb-4 leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {[
                      "Автоматический сбор лидов",
                      "Мгновенные ответы 24/7",
                      "Интеграция с CRM",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-fuchsia-400" />
                        </div>

                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-white/15 mt-auto">
                    <div className="flex items-center gap-2 bg-fuchsia-500/10 px-3 py-1 rounded-full">
                      <TrendingUp className="w-4 h-4 text-cyan-400" />

                      <span className="text-white/80 text-sm font-medium">
                        {service.stats}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-white">
                      <span>Заказать</span>

                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div
              onClick={scrollToForm}
              className="relative opacity-75 backdrop-blur-sm borde  from-[#2A2847]/80 to-[#1A1932]/80 rounded-3xl p-8 md:p-12 border border-white/10 cursor-pointer group"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Не нашли подходящий вариант?
              </h3>

              <p className="text-white/50 mb-6 max-w-lg mx-auto">
                Создадим индивидуального AI-агента под ваши задачи. Работаем с
                любыми платформами.
              </p>

              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-[#4D4B91]">
                <span className="text-white text-lg">Обсудить проект</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
