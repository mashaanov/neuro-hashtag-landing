import React from "react";
import {
  Clock,
  Users,
  Send,
  CheckCircle,
  ArrowRight,
  Heart,
  TrendingUp,
  TrendingDown,
  Zap,
} from "lucide-react";

const ProblemSolution = ({ scrollToForm, onOrderClick }) => {
  const handleScrollToForm = () => {
    // Если передан onOrderClick (например, для модального окна)
    if (onOrderClick) {
      onOrderClick();
      return;
    }

    // Если передан scrollToForm как пропс
    if (scrollToForm) {
      scrollToForm();
      return;
    }

    // Fallback: ищем элемент по id
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
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
              От боли → к результату
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Посмотрите, как AI-агенты меняют бизнес-процессы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Проблема */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-[#2A2847]/80 to-[#1A1932]/8 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-purple-300">
                    Проблема
                  </h3>
                  <p className="text-white/40 text-sm">Что происходит сейчас</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <Clock className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">
                      Клиенты ждут ответа часами
                    </p>
                    <p className="text-white/40 text-sm">
                      Потерянные продажи и негатив
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <Send className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">
                      Заявки теряются в чатах
                    </p>
                    <p className="text-white/40 text-sm">
                      Деньги утекают сквозь пальцы
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <Users className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">
                      Перегруз сотрудников
                    </p>
                    <p className="text-white/40 text-sm">
                      Выгорание и текучка кадров
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                <p className="text-white/80 text-sm">
                  ⚡ Потеря до{" "}
                  <span className="text-purple-300 font-bold text-lg">
                    30% клиентов
                  </span>{" "}
                  из-за долгих ответов
                </p>
              </div>
            </div>
          </div>

          {/* Решение */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-[#2A2847]/80 to-[#1A1932]/8 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">
                    Решение
                  </h3>
                  <p className="text-white/40 text-sm">Как мы это меняем</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
                  <CheckCircle className="w-5 h-5 text-violet-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">
                      ИИ-агент отвечает 24/7
                    </p>
                    <p className="text-white/40 text-sm">
                      Клиенты всегда в приоритете
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
                  <CheckCircle className="w-5 h-5 text-violet-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">
                      Автоматический сбор заявок
                    </p>
                    <p className="text-white/40 text-sm">
                      Ни один лид не теряется
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
                  <CheckCircle className="w-5 h-5 text-violet-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">
                      Снижение нагрузки на 70%
                    </p>
                    <p className="text-white/40 text-sm">
                      Команда сфокусирована на главном
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleScrollToForm}
                className="mt-6 w-full group/btn relative overflow-hidden rounded-xl py-3.5 font-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#4D4B91]" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-[1px] bg-black/40 rounded-xl group-hover/btn:bg-black/30 transition-all duration-500" />
                <span className="relative text-white text-sm flex items-center justify-center gap-2">
                  Внедрить AI-агента
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            {
              value: "до 24/7",
              label: "Доступность",
              icon: Clock,
              color: "purple",
            },
            {
              value: "−70%",
              label: "Нагрузки",
              icon: TrendingDown,
              color: "violet",
            },
            {
              value: "+40%",
              label: "Конверсии",
              icon: TrendingUp,
              color: "fuchsia",
            },
            {
              value: "3 сек",
              label: "Средний ответ",
              icon: Zap,
              color: "indigo",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <item.icon className={`w-4 h-4 text-${item.color}-300`} />
              <span className="text-white/70 text-sm font-medium">
                {item.value}
              </span>
              <span className="text-white/40 text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;