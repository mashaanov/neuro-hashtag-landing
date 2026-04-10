import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sparkles, Zap, Rocket } from "lucide-react";
import hashtag from "../img/hashtag-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    console.log("Активная секция изменилась:", activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Если идет программный скролл - не обновляем активную секцию
      if (isScrolling.current) return;

      const sections = ["hero", "services-and-team", "order-form"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (section !== activeSection) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    // Включаем блокировку
    isScrolling.current = true;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);

      // Сразу устанавливаем активную секцию в целевую
      setActiveSection(sectionId);

      // Очищаем предыдущий таймаут
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Выключаем блокировку после завершения скролла
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        scrollTimeout.current = null;
      }, 800);
    }
  };

  const scrollToForm = () => {
    isScrolling.current = true;
    const element = document.getElementById("order-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
      setActiveSection("order-form");

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        scrollTimeout.current = null;
      }, 800);
    }
  };

  const isActive = (sectionId) => activeSection === sectionId;

  return (
    <nav
      className={`
        fixed w-full z-50 top-0 transition-all duration-500
        ${
          scrolled
            ? "bg-black/90 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            : "bg-black/50"
        }
        border-b border-white/10
      `}
    >
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/50 to-fuchsia-500/20" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-3">
          <button
            onClick={() => scrollToSection("hero")}
            className="focus:outline-none"
          >
            <img
              src={hashtag}
              alt="Hashtag Logo"
              className="h-10 md:h-14 w-auto object-contain relative z-10 transition-transform duration-300 hover:scale-105"
            />
          </button>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-6 lg:gap-8">
              {[
                { id: "hero", label: "НейроХештег" },
                { id: "services-and-team", label: "Команда и сервисы" },
                { id: "order-form", label: "Контакты" },
              ].map((item) => {
                const active = isActive(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative group py-1 text-lg font-medium focus:outline-none"
                  >
                    <span
                      className={`
                        ${
                          active
                            ? "bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
                            : "text-white/80 group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`
                        absolute -bottom-0 left-0 h-0.5 
                        bg-gradient-to-r from-fuchsia-400 to-cyan-400
                        transition-all duration-300 ease-out
                        ${active ? "w-full opacity-100" : "w-0 opacity-0"}
                      `}
                    />

                    {!active && (
                      <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-0" />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={scrollToForm}
              className="group relative overflow-hidden rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 focus:outline-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-[1px] bg-black/60 rounded-xl group-hover:bg-black/20 transition-all duration-500" />
              <div className="relative px-6 py-2.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-fuchsia-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300" />
                <span className="text-white font-bold tracking-wide">
                  Связаться с нами
                </span>
                <span className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </div>
            </button>
          </div>

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg opacity-0 hover:opacity-20 transition-opacity" />
            {isOpen ? (
              <X size={20} className="text-fuchsia-400" />
            ) : (
              <Menu size={20} className="text-cyan-400" />
            )}
          </button>
        </div>

        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col space-y-2 pt-4 pb-6 border-t border-fuchsia-500/20">
            {[
              { id: "hero", label: "НейроХештег", icon: Zap },
              {
                id: "services-and-team",
                label: "Команда и сервисы",
                icon: Rocket,
              },
              { id: "order-form", label: "Контакты", icon: null },
            ].map((item) => {
              const active = isActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full text-left relative group px-4 py-3 rounded-lg transition-all duration-300
                    transform hover:translate-x-2 focus:outline-none
                    ${
                      active
                        ? "bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 text-fuchsia-400 font-medium border border-fuchsia-400/30"
                        : "text-white/80 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-fuchsia-500/10 hover:to-cyan-500/10"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </div>
                </button>
              );
            })}

            <button
              onClick={scrollToForm}
              className="relative mt-4 px-4 py-3 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 focus:outline-none w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-[1px] bg-black/60 rounded-lg group-hover:bg-black/20 transition-all duration-500" />
              <div className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                <span className="text-white font-bold">Связаться с нами</span>
                <span className="text-cyan-400">→</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
