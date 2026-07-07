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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
            if (section !== activeSection) setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    isScrolling.current = true;
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        scrollTimeout.current = null;
      }, 800);
    }
  };

  const scrollToForm = () => {
    isScrolling.current = true;
    setIsOpen(false);
    const element = document.getElementById("order-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection("order-form");
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
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
        fixed w-full z-50 top-0 transition-colors duration-200
        ${scrolled ? "bg-black/95" : "bg-black/50"}
        border-b border-white/10
      `}
    >

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center items-center py-3">
          <button
            onClick={() => scrollToSection("hero")}
            className="focus:outline-none"
          >
            <img
              src={hashtag}
              alt="Hashtag Logo"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </button>

          {/* Десктоп меню - без изменений */}
          <div className="hidden md:flex items-center gap-8 lg:gap-8">
            <div className="flex items-center gap-6 lg:gap-8">
              {[
                { id: "hero", label: "НейроХештег" },
                { id: "services-and-team", label: "Команда и продукты" },
                { id: "order-form", label: "Контакты" },
              ].map((item) => {
                const active = isActive(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative group py-1 text-lg font-medium focus:outline-none cursor-pointer"
                  >
                    <span
                      className={`
                        ${
                          active
                            ? "text-white"
                            : "text-white/80 group-hover:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`
                        absolute bg-[#4D4B91] -bottom-0 left-0 h-0.5 
                         to-cyan-400
                        transition-all duration-300 ease-out
                        ${active ? "w-full opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  </button>
                );
              })}
            </div>

            <button
              onClick={scrollToForm}
              className="group relative overflow-hidden font-semibold transform transition-all duration-300 hover:scale-105 focus:outline-none cursor-pointer bg-[#4D4B91] rounded-full"
            >
              <div className="relative px-6 py-2.5 flex items-center gap-2">
                <span className="text-white font-bold tracking-wide">
                  Связаться с нами
                </span>
              </div>
            </button>
          </div>

          {/* Мобильная кнопка меню - БЕЗ backdrop-blur */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg focus:outline-none active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
          >
            {isOpen ? (
              <X size={20} className="text-fuchsia-400" />
            ) : (
              <Menu size={20} className="text-cyan-400" />
            )}
          </button>
        </div>

        {/* Мобильное меню - ОПТИМИЗИРОВАННАЯ АНИМАЦИЯ */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-1">
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
                      w-full text-left px-4 py-3 rounded-lg
                      focus:outline-none active:scale-98
                      ${
                        active
                          ? "bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 text-fuchsia-400 font-medium border border-fuchsia-400/30"
                          : "text-white/80"
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
                className="relative mt-4 px-4 py-3 rounded-lg overflow-hidden focus:outline-none active:scale-98 w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600" />
                <div className="absolute inset-[1px] bg-black/60 rounded-lg" />
                <div className="relative flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-fuchsia-400" />
                  <span className="text-white font-bold">Связаться с нами</span>
                  <span className="text-cyan-400">→</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
