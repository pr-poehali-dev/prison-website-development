
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { getHtmlContent } from "@/lib/prisonSiteHtml";

const DownloadSection = () => {
  const handleDownload = () => {
    const htmlContent = getHtmlContent();
    
    // Создаем Blob из HTML-контента
    const blob = new Blob([htmlContent], { type: 'text/html' });
    
    // Создаем ссылку для скачивания
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'prison-site.html';
    
    // Имитируем клик для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center">
      <Button 
        onClick={handleDownload} 
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2"
      >
        <Download className="w-4 h-4 mr-2" />
        Скачать HTML файл
      </Button>
      <p className="text-xs text-gray-500 mt-3">
        Скачав файл, вы получите полностью готовый к использованию сайт.
      </p>
    </div>
  );
};

export default DownloadSection;
