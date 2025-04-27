
import React from "react";

const AboutSection = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">О сайте</h2>
      <p className="text-gray-600">
        Это одностраничный сайт для Исправительной колонии, созданный только с использованием HTML и CSS.
        Сайт содержит следующие разделы:
      </p>
      <ul className="list-disc ml-6 mt-3 text-gray-600">
        <li>Информация о колонии</li>
        <li>Услуги и возможности</li>
        <li>Полезная информация для посетителей</li>
        <li>Контактная информация</li>
      </ul>
    </div>
  );
};

export default AboutSection;
