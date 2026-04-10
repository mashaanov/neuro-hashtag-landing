import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Zap,
  Rocket,
  Send,
  CheckCircle,
  Clock,
  Users,
  MessageCircle,
  Send as Telegram,
  Music,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import hashtag from "../img/hashtag-logo.png";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: Music,
      name: "TikTok AI",
      desc: "Автоответы на комментарии и DM",
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: Telegram,
      name: "Telegram AI",
      desc: "Обработка заявок 24/7",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      name: "VK AI",
      desc: "Сбор лидов из сообщений",
      color: "from-blue-600 to-purple-600",
    },
    {
      icon: Video,
      name: "YouTube AI",
      desc: "Ответы на комментарии",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Zap,
      name: "WhatsApp AI",
      desc: "Быстрые ответы клиентам",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero секция */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        id="hero"
      >
        {/* Градиентный фон */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* ИИ-агентство */}
            <p className="text-white/50 text-sm md:text-base uppercase tracking-wider mb-4">
              ИИ-агентство
            </p>

            {/* Название */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-fuchsia-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
                NeuralHashtag
              </span>
            </h1>

            {/* УТП */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8">
              Автоматизация без рисков
            </p>

            {/* Кнопка */}
            <Link
              to="/order"
              className="group relative inline-flex overflow-hidden rounded-xl font-semibold transform transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-[1px] bg-black/60 rounded-xl group-hover:bg-black/20 transition-all duration-500" />
              <div className="relative px-8 py-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-fuchsia-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300" />
                <span className="text-white font-bold text-lg tracking-wide">
                  Оставить заявку
                </span>
                <span className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Сетка сервисов (вместо карусели) */}
      <section className="py-20 relative" id="services-and-team">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Наши сервисы
            </h2>
            <p className="text-white/60 mt-4">
              Автоматизируйте свои соцсети с помощью ИИ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Holo свечение */}
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-2.5 mb-4`}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-white/60 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Статистика */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold text-fuchsia-400">24/7</div>
              <div className="text-white/60 text-sm">Работа без выходных</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">-70%</div>
              <div className="text-white/60 text-sm">
                Нагрузка на сотрудников
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">5+</div>
              <div className="text-white/60 text-sm">
                Платформ для автоматизации
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Проблема vs Решение */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Проблема */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-400">Проблема</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-400 mt-0.5" />
                    <span className="text-white/80">
                      Клиенты ждут ответа часами
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Send className="w-5 h-5 text-red-400 mt-0.5" />
                    <span className="text-white/80">
                      Заявки теряются в чатах
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-red-400 mt-0.5" />
                    <span className="text-white/80">Перегруз сотрудников</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Решение */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-fuchsia-500/30 hover:border-fuchsia-500/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                    Решение
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400 mt-0.5" />
                    <span className="text-white/80">
                      ИИ-агент отвечает 24/7
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400 mt-0.5" />
                    <span className="text-white/80">
                      Автоматический сбор заявок
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400 mt-0.5" />
                    <span className="text-white/80">
                      Снижение нагрузки на 70%
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма захвата */}
      <section className="py-20 relative" id="order-form">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Holo эффект */}
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  Оставьте заявку
                </h2>
                <p className="text-white/60 text-center mb-8">
                  Мы свяжемся с вами в ближайшее время
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-fuchsia-500 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Номер телефона"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-fuchsia-500 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Сообщение (необязательно)"
                      rows="3"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-fuchsia-500 transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full group relative overflow-hidden rounded-xl font-semibold transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    <div className="absolute inset-[1px] bg-black/60 rounded-xl group-hover:bg-black/20 transition-all duration-500" />
                    <div className="relative px-6 py-3 flex items-center justify-center gap-2">
                      <Send className="w-4 h-4 text-fuchsia-400 group-hover:text-cyan-400 transition-all duration-300" />
                      <span className="text-white font-bold">
                        Отправить заявку
                      </span>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes holo-shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background-size: 200% auto;
        }

        .animate-holo-shine {
          animation: holo-shine 3s linear infinite;
          background-size: 200% auto;
        }
      `}</style>
    </div>
  );
};

export default Home;
