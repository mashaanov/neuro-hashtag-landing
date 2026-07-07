import React from "react";
import {
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Shield,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10">
      {/* Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand - слева */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  НейроХештег
                </span>
              </h3>
            </div>

            <p className="text-white/60 leading-relaxed max-w-md">
              Создаём AI-агентов и автоматизации для бизнеса. Помогаем сократить
              рутину, ускорить обработку заявок и увеличить конверсию без
              расширения штата.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-white/70">Поддержка 24/7</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5">
                <Shield className="w-4 h-4 text-fuchsia-400" />
                <span className="text-xs text-white/70">
                  Работа по договору
                </span>
              </div>
            </div>
          </div>

          {/* Пустой блок для отступа */}
          <div className="md:col-span-3"></div>

          {/* Contacts - справа */}
          <div className="md:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6">
              <h4 className="text-white font-semibold mb-5">
                Связаться с нами
              </h4>

              <div className="space-y-4">
                <a
                  href="mailto:hello@neuralhashtag.ru"
                  className="flex items-center gap-3 text-white/60 hover:text-fuchsia-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@neuralhashtag.ru
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 text-white/60 hover:text-cyan-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  @neuralhashtag
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 text-white/60 hover:text-blue-400 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  t.me/neuralhashtag
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm text-center md:text-left">
              © 2026 НейроХештег. AI-автоматизация для современного бизнеса.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
