import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Send, Sparkles, Phone, User, MessageSquare } from "lucide-react";
import { schema } from "../utils/schema.js";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // Валидация при каждом изменении
    defaultValues: {
      name: "",
      phone: "+7",
      message: "",
    },
  });

  const phone = watch("phone");

  // Нормализация номера телефона
  const normalizePhone = (value) => {
    let cleaned = value.replace(/\D/g, "");
    if (!cleaned) return "+7";
    if (!cleaned.startsWith("7")) {
      cleaned = "7" + cleaned;
    }
    if (cleaned.length > 11) {
      cleaned = cleaned.slice(0, 11);
    }
    return "+" + cleaned;
  };

  const formatPhoneDisplay = (value) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length === 0) return "+7";

    let formatted = "+7";
    const rest = digits.slice(1);

    if (rest.length > 0) {
      formatted += rest.slice(0, 3);
    }
    if (rest.length > 3) {
      formatted += rest.slice(3, 6);
    }
    if (rest.length > 6) {
      formatted += rest.slice(6, 8);
    }
    if (rest.length > 8) {
      formatted += rest.slice(8, 10);
    }

    return formatted;
  };

  // Получение классов для инпутов
  const getInputClass = (error) => {
    return `w-full px-5 py-4 bg-[#4D4B91] border-2 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 ${
      error
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/40"
        : "border-[#4D4B91]/50 focus:border-[#4D4B91] focus:ring-[#4D4B91]/40"
    }`;
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Показываем загрузочный тост
    const loadingToast = toast.loading("⏳ Отправка заявки...", {
      style: {
        background: "#2A2847",
        color: "#fff",
        border: "1px solid #4D4B91",
      },
    });

    try {
      // Форматируем телефон для письма
      const cleanPhone = data.phone.replace(/\s/g, "");

      // Параметры для EmailJS
      const templateParams = {
        from_name: data.name,
        from_phone: cleanPhone,
        message: data.message || "Не указано",
        to_name: "Менеджер",
        reply_to: data.email || "no-reply@example.com",
      };

      // Отправка через EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      console.log("Письмо отправлено:", result);

      // Успешная отправка
      toast.success(
        "✨ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
        {
          id: loadingToast,
          duration: 4000,
          style: {
            background: "#1a1a2e",
            color: "#fff",
            border: "1px solid #4CAF50",
            padding: "16px",
            borderRadius: "12px",
          },
          icon: "🎉",
        },
      );

      // Очищаем форму
      reset({
        name: "",
        phone: "+7",
        message: "",
      });
    } catch (error) {
      console.error("Ошибка при отправке:", error);

      // Ошибка
      toast.error(
        "❌ Произошла ошибка при отправке. Пожалуйста, попробуйте позже.",
        {
          id: loadingToast,
          duration: 5000,
          style: {
            background: "#1a1a2e",
            color: "#fff",
            border: "1px solid #f44336",
            padding: "16px",
            borderRadius: "12px",
          },
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toaster */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1a1a2e",
            color: "#fff",
            border: "1px solid #4D4B91",
            padding: "16px 20px",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: "#4CAF50",
              secondary: "#fff",
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: "#f44336",
              secondary: "#fff",
            },
          },
        }}
      />

      <section className="py-20 relative z-10" id="order-form">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Заголовок */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r text-white animate-[shimmer_3s_linear_infinite]">
                  Начните сейчас
                </span>
              </h2>
              <p className="text-[#9498B5] text-lg max-w-2xl mx-auto font-medium">
                Мы свяжемся с вами в течение 15 минут
              </p>
            </div>

            {/* Форма */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-[#2A2847]/80 to-[#1A1932]/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#4D4B91]/30 hover:border-[#4D4B91]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4D4B91]/20">
                {/* Декоративные элементы */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#4D4B91]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#7C79D4]/20 rounded-full blur-3xl" />

                <div className="relative z-10 p-8 md:p-10">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* NAME */}
                    <div>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Ваше имя"
                          {...register("name")}
                          className={`${getInputClass(errors.name)} pl-12`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1.5">
                          <span className="inline-block w-1 h-1 rounded-full bg-red-400" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 pointer-events-none" />
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <input
                              type="tel"
                              value={formatPhoneDisplay(field.value)}
                              onChange={(e) => {
                                const formatted = normalizePhone(
                                  e.target.value,
                                );
                                field.onChange(formatted);
                              }}
                              placeholder="+7 999 999-99-99"
                              className={`${getInputClass(errors.phone)} pl-12 tracking-wide font-mono`}
                            />
                          )}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1.5">
                          <span className="inline-block w-1 h-1 rounded-full bg-red-400" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-white/30 pointer-events-none" />
                        <textarea
                          rows={3}
                          placeholder="Сообщение (необязательно)"
                          {...register("message")}
                          className={`${getInputClass(errors.message)} pl-12 resize-none min-h-[100px]`}
                        />
                      </div>
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1.5">
                          <span className="inline-block w-1 h-1 rounded-full bg-red-400" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* BUTTON */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className={`w-1/2 block mx-auto relative group/btn overflow-hidden rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${
                          !isValid 
                            ? 'bg-[#4D4B91]/50 cursor-not-allowed' 
                            : 'bg-[#4D4B91] hover:bg-[#5D5BA1]'
                        }`}
                      >
                        {/* Анимация фона - только если валидно */}
                        {isValid && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[#4D4B91] via-[#6B68C4] to-[#4D4B91] bg-[length:200%_100%] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_linear_infinite]" />
                        )}

                        <div className="relative px-6 py-4 flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span className="text-white">Отправка...</span>
                            </div>
                          ) : (
                            <>
                              <Send className={`w-5 h-5 transition-all duration-300 ${
                                !isValid 
                                  ? 'text-white/30' 
                                  : 'text-white/70 group-hover/btn:text-white group-hover/btn:rotate-12 group-hover/btn:scale-110'
                              }`} />
                              <span className={`${
                                !isValid ? 'text-white/30' : 'text-white'
                              }`}>
                                {!isValid ? 'Заполните форму' : 'Отправить заявку'}
                              </span>
                              <Sparkles className={`w-5 h-5 transition-all duration-300 ${
                                !isValid 
                                  ? 'text-white/30 opacity-0' 
                                  : 'text-white/70 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-110'
                              }`} />
                            </>
                          )}
                        </div>
                      </button>
                    </div>

                    {/* Согласие */}
                    <p className="text-center text-white/30 text-xs mt-4 flex items-center justify-center gap-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-white/20" />
                      🔒 Нажимая на кнопку, вы соглашаетесь с обработкой
                      персональных данных
                      <span className="inline-block w-1 h-1 rounded-full bg-white/20" />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
          .animate-shimmer {
            animation: shimmer 3s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default Form;