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
  TrendingUp,
  Shield,
  Award,
  Star,
  ArrowRight,
  Briefcase,
  Heart,
  Globe,
  Mail,
  Bot,
  Calculator,
  TrendingDown,
} from "lucide-react";

import photo1 from "../img/1.jpg";
import photo2 from "../img/2.jpg";
import photo3 from "../img/3.jpg";
import photo4 from "../img/4.jpg";
import photo5 from "../img/5.jpg";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("✨ Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: Bot,
      name: "AI Секретарь",
      desc: "Отвечает в комментариях и личных сообщениях 24/7",
      color: "from-pink-500 to-orange-500",
      gradient: "from-pink-600/20 to-orange-600/20",
      stats: "Ответ за 5 секунд",
    },
    {
      icon: Calculator,
      name: "AI Бухгалтер",
      desc: "Учет расходов, отчеты и финансовые расчеты",
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-600/20 to-cyan-600/20",
      stats: "Точность 99.9%",
    },
  ];

  const advantages = [
    { icon: Shield, text: "Безопасность данных", color: "text-fuchsia-400" },
    { icon: TrendingUp, text: "Рост конверсии", color: "text-cyan-400" },
    { icon: Award, text: "Топ поддержка", color: "text-purple-400" },
    {
      icon: Globe,
      text: "(заглушки, заменить потом актуальными или убрать)",
      color: "text-pink-400",
    },
  ];

  const team = [
    {
      name: "Артём Кустов",
      role: "CEO & Founder",
      bio: "Эксперт в области ИИ",
      photo: photo1,
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      name: "Артём Столбов",
      role: "AI Engineer",
      bio: "Создает продукты",
      photo: photo3,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Анастасия Юдина",
      role: "Graphic Designer",
      bio: "Создает вовлекающий дизайн",
      photo: photo2,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Максим Войтенко",
      role: "Product Manager",
      bio: "Развивает продукт",
      photo: photo5,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Мария Новикова",
      role: "Software-developer",
      bio: "Сделала эту шнягу ахах",
      photo: photo4,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Анимированный фон с курсором */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 transition-all duration-300"
          style={{
            background:
              "radial-gradient(circle, rgba(192,132,252,0.4) 0%, rgba(6,182,212,0.4) 100%)",
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-transparent to-transparent" />
      </div>

      {/* Hero секция */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 z-10"
        id="hero"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-white/70 text-sm">
                ИИ-агентство нового поколения
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 leading-none">
              <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-fuchsia-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] inline-block hover:scale-105 transition-transform duration-500">
                НейроХештег
              </span>
            </h1>

            <p className="text-xl md:text-3xl lg:text-4xl text-white/80 mb-6 font-light">
              Автоматизация{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                без рисков
              </span>
            </p>

            <p className="text-white/40 text-lg max-w-2xl mx-auto mb-8">
              Автоматизируйте рутину: мгновенные ответы клиентам и свобода для
              вас.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("order-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative inline-flex overflow-hidden rounded-2xl font-bold transform transition-all duration-300 hover:scale-105 shadow-2xl shadow-fuchsia-500/25 hover:shadow-fuchsia-500/50 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 animate-gradient-xy" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-[2px] bg-black/80 rounded-2xl group-hover:bg-black/40 transition-all duration-500" />
              <div className="relative px-10 py-5 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-fuchsia-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300" />
                <span className="text-white font-bold text-xl tracking-wide">
                  Начать автоматизацию
                </span>
                <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {advantages.map((adv, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-white/40 text-sm"
                >
                  <adv.icon className={`w-4 h-4 ${adv.color}`} />
                  <span>{adv.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/40 rounded-full mt-2 animate-[scroll_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* Сетка сервисов - ПРОДАЮЩАЯ СЕКЦИЯ */}
      <section className="py-28 relative z-10" id="services-and-team">
        <div className="container mx-auto px-4 md:px-6">
          {/* Заголовок с социальным доказательством */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <span className="text-white/50 text-xs uppercase tracking-wider">
                Выберите свой инструмент
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-fuchsia-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
                Можно сделать продукты в таком формате
              </span>
            </h2>

            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-6">
              Можно и карусел прикрутить, просто не уверена что по количеству
              подойдёт. Надо будет обсудить
            </p>
          </div>

          {/* Карточки продуктов - с яркой обводкой */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            onClick={() =>
              document
                .getElementById("order-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative cursor-pointer"
              >
                {/* Основная карточка */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 hover:border-fuchsia-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fuchsia-500/40">
                  {/* Градиентный фон при ховере */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Уголки для акцента */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-fuchsia-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-fuchsia-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-fuchsia-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-fuchsia-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 p-8">
                    {/* Шапка карточки */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-3.5 shadow-lg transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 ring-2 ring-fuchsia-400/50`}
                      >
                        <service.icon className="w-full h-full text-white" />
                      </div>

                      {/* Цена/статус */}
                      <div className="text-right">
                        <div className="text-xs text-cyan-400 font-mono px-2 py-0.5 rounded-full">
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

                    {/* Название и описание */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-white/60 text-base mb-4 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Ключевые преимущества */}
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

                    {/* Статистика и кнопка */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/15">
                      <div className="flex items-center gap-2 bg-fuchsia-500/10 px-3 py-1 rounded-full">
                        <TrendingUp className="w-4 h-4 text-cyan-400" />
                        <span className="text-white/80 text-sm font-medium">
                          {service.stats}
                        </span>
                      </div>

                      <button
                        onClick={() =>
                          document
                            .getElementById("order-form")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="group/btn relative overflow-hidden rounded-xl px-5 py-2.5 font-medium transition-all duration-300 hover:scale-105"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                        <div className="absolute inset-[1px] bg-gray-900/90 rounded-xl group-hover/btn:bg-gray-800/70 transition-all duration-500" />
                        <span className="relative text-white text-sm flex items-center gap-2">
                          Заказать
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Блок с цифрами и CTA */}
          <div className="mt-20 text-center">
            <div className="relative max-w-4xl mx-auto">
              {/* Фоновое свечение */}
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-cyan-500/10 to-fuchsia-500/10 rounded-3xl blur-3xl" />

              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Не нашли подходящее решение?
                </h3>
                <p className="text-white/50 mb-6 max-w-lg mx-auto">
                  Создадим индивидуального AI-агента под ваши задачи. Работаем с
                  любыми платформами
                </p>

                <button
                  onClick={() =>
                    document
                      .getElementById("order-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 animate-gradient-xy bg-[length:200%_200%]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute inset-[2px] bg-black/80 rounded-xl group-hover:bg-black/40 transition-all duration-500" />
                  <span className="relative text-white text-lg">
                    Обсудить проект
                  </span>
                  <Rocket className="relative w-5 h-5 text-fuchsia-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* СЕКЦИЯ: Команда проекта - ИСПРАВЛЕНА */}
      <section className="py-28 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <Users className="w-3 h-3 text-fuchsia-400" />
              <span className="text-white/50 text-xs uppercase tracking-wider">
                Кто мы
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Команда проекта
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Профессионалы, которые создают будущее автоматизации уже сегодня
            </p>
          </div>

          {/* Сетка 2-3-5 - адаптивная для 5 человек */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                className="group relative cursor-pointer"
              >
                {/* Карточка - убрана излишняя подсветка */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-fuchsia-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-fuchsia-500/10">
                  {/* Фото с эффектом - убрана яркая заливка */}
                  <div className="relative overflow-hidden h-56">
                    {/* Легкий градиент только снизу для читаемости имени */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Информация - без всплывающих элементов */}
                  <div className="relative z-10 p-5 text-center">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-fuchsia-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs text-cyan-400 mb-2 font-medium">
                      {member.role}
                    </p>
                    <p className="text-white/40 text-xs leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Простая декоративная линия */}
                    <div className="w-10 h-0.5 bg-gradient-to-r from-fuchsia-500/50 to-transparent mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Подпись */}
          <div className="text-center mt-12">
            <p className="text-white/30 text-sm">
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                #НейроХештег
              </span>{" "}
              — автоматизация без рисков
            </p>
          </div>
        </div>
      </section>

      {/* Проблема vs Решение - ПРОДАЮЩАЯ СЕКЦИЯ */}
      <section className="py-28 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <Heart className="w-3 h-3 text-red-400" />
              <span className="text-white/50 text-xs uppercase tracking-wider">
                Почему бизнес выбирает нас
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-fuchsia-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
                От боли → к результату
              </span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Посмотрите, как AI-агенты меняют бизнес-процессы
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Соединительная линия между блоками */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ПРОБЛЕМА - с эффектом размытия */}
              <div className="relative group">
                {/* Фоновый эффект */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-gradient-to-br from-red-500/10 to-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Бейдж */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-2xl opacity-30" />

                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center shadow-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-3xl">⚠️</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-400">
                        Проблема
                      </h3>
                      <p className="text-white/40 text-sm">
                        Что происходит сейчас
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-5">
                    {[
                      {
                        icon: Clock,
                        text: "Клиенты ждут ответа часами",
                        desc: "Потерянные продажи и негатив",
                      },
                      {
                        icon: Send,
                        text: "Заявки теряются в чатах",
                        desc: "Деньги утекают сквозь пальцы",
                      },
                      {
                        icon: Users,
                        text: "Перегруз сотрудников",
                        desc: "Выгорание и текучка кадров",
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 group/item p-3 rounded-xl hover:bg-red-500/5 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <item.icon className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{item.text}</p>
                          <p className="text-white/40 text-sm">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Статистика проблемы */}
                  <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <p className="text-white/50 text-xs text-center">
                      ⚡ Потеря до{" "}
                      <span className="text-red-400 font-bold text-sm">
                        30% клиентов
                      </span>{" "}
                      из-за долгих ответов
                    </p>
                  </div>
                </div>
              </div>

              {/* РЕШЕНИЕ - с эффектом свечения */}
              <div className="relative group">
                {/* Фоновое свечение */}
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-gradient-to-br from-fuchsia-500/10 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-8 border border-fuchsia-500/30 hover:border-fuchsia-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Бейдж с решением */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-cyan-500 rounded-full blur-2xl opacity-30" />

                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-lg transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300">
                      <span className="text-3xl">💡</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                        Решение
                      </h3>
                      <p className="text-white/40 text-sm">Как мы это меняем</p>
                    </div>
                  </div>

                  <ul className="space-y-5">
                    {[
                      {
                        icon: CheckCircle,
                        text: "ИИ-агент отвечает 24/7",
                        desc: "Клиенты всегда в приоритете",
                        highlight: true,
                      },
                      {
                        icon: CheckCircle,
                        text: "Автоматический сбор заявок",
                        desc: "Ни один лид не теряется",
                        highlight: false,
                      },
                      {
                        icon: CheckCircle,
                        text: "Снижение нагрузки на 70%",
                        desc: "Команда сфокусирована на главном",
                        highlight: false,
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-4 group/item p-3 rounded-xl hover:bg-fuchsia-500/5 transition-all duration-300 ${item.highlight ? "bg-fuchsia-500/5 border border-fuchsia-500/20" : ""}`}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform ${item.highlight ? "bg-fuchsia-500/30" : ""}`}
                        >
                          <item.icon className="w-5 h-5 text-fuchsia-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{item.text}</p>
                          <p className="text-white/40 text-sm">{item.desc}</p>
                        </div>
                        {item.highlight && (
                          <div className="ml-auto">
                            <span className="text-xs bg-fuchsia-500/20 text-fuchsia-400 px-2 py-0.5 rounded-full">
                              Ключевое
                            </span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* CTA внутри блока */}
                  <button
                    onClick={() =>
                      document
                        .getElementById("order-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="mt-6 w-full group/btn relative overflow-hidden rounded-xl py-3 font-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    <div className="absolute inset-[1px] bg-black/60 rounded-xl group-hover/btn:bg-black/40 transition-all duration-500" />
                    <span className="relative text-white text-sm flex items-center justify-center gap-2">
                      Внедрить AI-агента
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительный блок с результатами */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {[
              {
                value: "до 24/7",
                label: "Доступность",
                icon: Clock,
                color: "fuchsia",
              },
              {
                value: "−70%",
                label: "Нагрузки",
                icon: TrendingDown,
                color: "cyan",
              },
              {
                value: "+40%",
                label: "Конверсии",
                icon: TrendingUp,
                color: "purple",
              },
              {
                value: "3 сек",
                label: "Средний ответ",
                icon: Zap,
                color: "pink",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300"
              >
                <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                <span className="text-white/70 text-sm font-medium">
                  {item.value}
                </span>
                <span className="text-white/40 text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма захвата - в стиле карточек продуктов (ЯРКАЯ ВЕРСИЯ) */}
      <section className="py-28 relative z-10" id="order-form">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Заголовок как в секции сервисов */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-fuchsia-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-fuchsia-500/30">
                <span className="text-fuchsia-300 text-xs uppercase tracking-wider font-bold">
                  Начните сейчас
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
                  Оставьте заявку
                </span>
              </h2>
              <p className="text-cyan-400 text-lg max-w-2xl mx-auto font-medium">
                🚀 Мы свяжемся с вами в течение 15 минут
              </p>
            </div>

            {/* Карточка формы - яркая версия */}
            <div className="group relative cursor-pointer">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-fuchsia-500/50 hover:border-fuchsia-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fuchsia-500/50">
                {/* Усиленный градиентный фон при ховере */}
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Постоянное слабое свечение */}
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 to-cyan-500/5" />

                {/* Уголки для акцента - ярче */}
                <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-fuchsia-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-fuchsia-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-fuchsia-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-fuchsia-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-5 py-4 bg-black/60 border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/40 transition-all duration-300"
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
                        className="w-full px-5 py-4 bg-black/60 border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/40 transition-all duration-300"
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
                        className="w-full px-5 py-4 bg-black/60 border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/40 transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full group/btn relative overflow-hidden rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] mt-4 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-gradient-xy bg-[length:200%_200%]" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                      <div className="absolute inset-[2px] bg-gray-900 rounded-xl group-hover/btn:bg-gray-800 transition-all duration-500" />
                      <div className="relative px-6 py-4 flex items-center justify-center gap-3">
                        <Send className="w-5 h-5 text-fuchsia-400 group-hover/btn:text-cyan-400 transition-all duration-300 group-hover/btn:rotate-12" />
                        <span className="text-white font-bold text-lg tracking-wide">
                          Отправить заявку
                        </span>
                        <Sparkles className="w-5 text-fuchsia-400 h-5 opacity-0 group-hover/btn:opacity-100 transition-all duration-300" />
                      </div>
                    </button>
                  </form>

                  <p className="text-center text-white/40 text-xs mt-6">
                    🔒 Нажимая на кнопку, вы соглашаетесь с обработкой
                    персональных данных
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер - СТИЛЬНЫЙ */}
      <footer className="relative z-10 border-t border-white/10 py-16 mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Логотип и описание */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  НейроХештег
                </span>
              </h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Автоматизация без рисков. Создаем AI-агентов, которые работают
                24/7.
              </p>
            </div>

            {/* Контакты */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Контакты
              </h4>
              <ul className="space-y-3 inline-block md:block">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <Mail className="w-4 h-4 text-fuchsia-400 flex-shrink-0" />
                  <a
                    href="mailto:hello@neuralhashtag.ru"
                    className="text-white/40 hover:text-fuchsia-400 text-sm transition-colors duration-300"
                  >
                    hello@neuralhashtag.ru
                  </a>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <MessageCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a
                    href="#"
                    className="text-white/40 hover:text-fuchsia-400 text-sm transition-colors duration-300"
                  >
                    @neuralhashtag
                  </a>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <Send className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a
                    href="#"
                    className="text-white/40 hover:text-fuchsia-400 text-sm transition-colors duration-300"
                  >
                    t.me/neuralhashtag
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Нижняя линия с копирайтом */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/25 text-xs">
              © 2026 НейроХештег. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/25 hover:text-fuchsia-400 text-xs transition-colors duration-300"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-white/25 hover:text-fuchsia-400 text-xs transition-colors duration-300"
              >
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Home;
