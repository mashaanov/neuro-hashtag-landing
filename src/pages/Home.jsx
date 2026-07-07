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
  Mail,
  Bot,
  Calculator,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Heart,
  Shield,
  Award,
} from "lucide-react";

import HeroCard from "../components/HeroCard.jsx";
import Block from "../components/Block.jsx";
import ProblemSolution from "../components/ProblemSolution.jsx";
import TeamSection from "../components/TeamSection.tsx";
import ServicesSection from "../components/ServicesSection.tsx";
import Form from "../components/Form.jsx";
import Footer from "../components/Footer.jsx";

import photo1 from "../img/1.jpg";
import photo2 from "../img/2.jpg";
import photo3 from "../img/3.jpg";
import photo4 from "../img/4.jpg";
import photo5 from "../img/5.jpg";
import background from "../img/back-1.png";
import back from "../img/image.jpg";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  // Убираем mousemove слушатель для мобильных устройств
  useEffect(() => {
    // Проверяем, не мобильное ли устройство
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      // Только для десктопа добавляем эффект свечения за мышкой
      const handleMouseMove = (e) => {
        const cursor = document.getElementById("cursor-glow");
        if (cursor) {
          cursor.style.left = e.clientX - 250 + "px";
          cursor.style.top = e.clientY - 250 + "px";
        }
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("✨ Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const team = [
    {
      name: "Артём Кустов",
      role: "CEO & Founder",
      bio: "Вижу AI-будущее и строю его сегодня",
      photo: photo1,
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      name: "Артём Столбов",
      role: "AI Engineer",
      bio: "Обучаю нейросети, которые приносят пользу",
      photo: photo3,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Анастасия Юдина",
      role: "Graphic Designer",
      bio: "Вовлекаю дизайном с первого взгляда",
      photo: photo2,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Мария Новикова",
      role: "Software-developer",
      bio: "Пишу надёжный и хорошо структурированный код",
      photo: photo4,
      color: "from-orange-500 to-red-500",
    },
  ];

  const scrollToForm = () => {
    const element = document.getElementById("order-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Фоновое изображение */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${back})` }}
      />

      {/* Оптимизированное свечение - только для десктопа */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
        <div
          id="cursor-glow"
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 transition-all duration-300"
          style={{
            background:
              "radial-gradient(circle, rgba(192,132,252,0.4) 0%, rgba(6,182,212,0.4) 100%)",
            left: "-250px",
            top: "-250px",
          }}
        />
      </div>

      <section className="relative min-h-screen flex flex-col z-10" id="hero">
        <HeroCard />
      </section>

      <Block />

      <ProblemSolution />

      <ServicesSection />

      <TeamSection team={team} />

      <Form submit={handleSubmit} />

      <Footer />

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
      `}</style>
    </div>
  );
};

export default Home;
