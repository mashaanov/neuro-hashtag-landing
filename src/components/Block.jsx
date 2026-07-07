import React from "react";

const Block = () => {
  const cards = [
    {
      title: "NeuralHashtag посетили:",
      items: [
        "Хакатон «Я в деле»защитили проект и получили обратную связь от предпринимателей",
        "Бизнес-форум «Банк Хлынов» посмотрели, как реально мыслят бизнесы и где у них затыки",
        "Мастер-класс по продажам с Алсу Нагматуллиной разобрали, как получать первое «да», а не «мы подумаем»",
      ],
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      title: "ИИ — больше не игрушка. Исследования показывают:",
      items: [
        "58% компаний экономят более 20 часов в месяц благодаря AI",
        "операционные расходы снижаются до 30%",
        "максимальный эффект AI даёт в: втоматизации рутины, поддержке клиентов, документообороте",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "У тебя маркетинг белый?",
      items: [
        "Разобрали этот вопрос на практике на мастер-классе с Татьяной Нерословой. Поговорили не про «как правильно», а про то, как реально становиться заметным и привлекать клиентов.Без лишней теории — с разбором подходов, которые работают в бизнесе."
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Neuralhashtag в деле",
      items: [
        "Команда Neuralhashtag во главе с руководителем проекта Кустовым Артёмом посетила кафе «Рататуй» и пообщалась с предпринимателем Светланой Белкиной."
      ],
      color: "from-fuchsia-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#4D4B91] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-fuchsia-500/10 h-full">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {card.title}
                  </h3>
                  <ul className="text-white/50 text-xs leading-relaxed space-y-1">
                    {card.items.map((item, i) => (
                      <li key={i}>— {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Block;
