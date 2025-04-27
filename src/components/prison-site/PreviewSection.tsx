
import React from "react";

const PreviewSection = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">Предпросмотр</h2>
      <div className="border rounded-md overflow-hidden">
        <div className="bg-slate-800 text-white p-3 text-sm">
          Исправительная колония №12
        </div>
        <div className="h-64 bg-slate-100 flex items-center justify-center">
          <div className="text-center p-4">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Предпросмотр сайта</h3>
            <p className="text-sm text-gray-600 mb-4">Скачайте файл, чтобы увидеть сайт целиком</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
