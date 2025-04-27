
import React from "react";

type AdvantageCardProps = {
  title: string;
  description: string;
};

const AdvantageCard = ({ title, description }: AdvantageCardProps) => (
  <div className="bg-slate-50 p-4 rounded">
    <h3 className="font-medium text-slate-800">{title}</h3>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Простота использования",
      description: "Одностраничный HTML-файл, который легко редактировать",
    },
    {
      title: "Адаптивный дизайн",
      description: "Корректно отображается на мобильных устройствах",
    },
    {
      title: "Без зависимостей",
      description: "Не требует установки дополнительных библиотек",
    },
    {
      title: "Современный дизайн",
      description: "Стильный и сдержанный интерфейс",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">Преимущества</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {advantages.map((advantage, index) => (
          <AdvantageCard 
            key={index} 
            title={advantage.title} 
            description={advantage.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default AdvantagesSection;
