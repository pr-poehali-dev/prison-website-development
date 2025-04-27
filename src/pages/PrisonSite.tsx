
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

const PrisonSite = () => {
  const handleDownload = () => {
    // Создаем содержимое HTML файла
    const htmlContent = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Исправительная колония №12</title>
  <style>
    /* Базовые стили */
    :root {
      --primary: #34495e;
      --secondary: #7f8c8d;
      --accent: #3498db;
      --background: #f9f9f9;
      --text: #333;
      --light: #ecf0f1;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      background-color: var(--background);
      color: var(--text);
      line-height: 1.6;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Заголовок сайта */
    .header {
      background-color: var(--primary);
      color: #fff;
      padding: 20px 0;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 24px;
      font-weight: bold;
    }
    
    .logo span {
      color: var(--accent);
    }
    
    /* Навигация */
    .nav ul {
      display: flex;
      list-style: none;
    }
    
    .nav li {
      margin-left: 20px;
    }
    
    .nav a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .nav a:hover {
      color: var(--accent);
    }
    
    /* Главный контент */
    .main {
      padding: 50px 0;
    }
    
    .hero {
      text-align: center;
      margin-bottom: 50px;
    }
    
    .hero h1 {
      font-size: 36px;
      margin-bottom: 20px;
      color: var(--primary);
    }
    
    .hero p {
      font-size: 18px;
      color: var(--secondary);
      max-width: 800px;
      margin: 0 auto 30px;
    }
    
    .btn {
      display: inline-block;
      background-color: var(--accent);
      color: #fff;
      padding: 12px 30px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s;
    }
    
    .btn:hover {
      background-color: #2980b9;
    }
    
    /* Секции */
    .section {
      margin-bottom: 50px;
    }
    
    .section-title {
      font-size: 28px;
      margin-bottom: 25px;
      color: var(--primary);
      text-align: center;
    }
    
    .features {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    
    .feature {
      flex-basis: calc(33.333% - 20px);
      background-color: #fff;
      padding: 30px;
      margin-bottom: 30px;
      border-radius: 5px;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }
    
    .feature h3 {
      font-size: 20px;
      margin-bottom: 15px;
      color: var(--primary);
    }
    
    .feature p {
      color: var(--secondary);
    }
    
    /* Информация */
    .info-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .info-card {
      flex: 1;
      min-width: 300px;
      background-color: #fff;
      padding: 25px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .info-card h3 {
      font-size: 20px;
      margin-bottom: 15px;
      color: var(--primary);
    }
    
    .info-card p, .info-card ul {
      color: var(--secondary);
    }
    
    .info-card ul {
      margin-left: 20px;
    }
    
    .info-card li {
      margin-bottom: 8px;
    }
    
    /* Футер */
    .footer {
      background-color: var(--primary);
      color: #fff;
      padding: 40px 0 20px;
    }
    
    .footer-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    
    .footer-section {
      flex-basis: calc(25% - 20px);
      margin-bottom: 30px;
    }
    
    .footer-section h3 {
      font-size: 18px;
      margin-bottom: 15px;
      color: var(--light);
    }
    
    .footer-section p, .footer-section ul {
      font-size: 14px;
      color: #bdc3c7;
    }
    
    .footer-section ul {
      list-style: none;
    }
    
    .footer-section li {
      margin-bottom: 10px;
    }
    
    .footer-section a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .footer-section a:hover {
      color: var(--accent);
    }
    
    .copyright {
      text-align: center;
      padding-top: 20px;
      margin-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 14px;
      color: #bdc3c7;
    }
    
    /* Адаптивность */
    @media (max-width: 992px) {
      .feature {
        flex-basis: calc(50% - 15px);
      }
      
      .footer-section {
        flex-basis: calc(50% - 15px);
      }
    }
    
    @media (max-width: 768px) {
      .header-container {
        flex-direction: column;
      }
      
      .nav {
        margin-top: 20px;
      }
      
      .feature {
        flex-basis: 100%;
      }
    }
    
    @media (max-width: 576px) {
      .nav ul {
        flex-direction: column;
        text-align: center;
      }
      
      .nav li {
        margin: 10px 0;
      }
      
      .footer-section {
        flex-basis: 100%;
      }
    }
  </style>
</head>
<body>
  <!-- Заголовок -->
  <header class="header">
    <div class="container header-container">
      <div class="logo">ИК-<span>12</span></div>
      <nav class="nav">
        <ul>
          <li><a href="#about">О колонии</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#info">Информация</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Главное содержимое -->
  <main class="main">
    <div class="container">
      <!-- Герой секция -->
      <section class="hero">
        <h1>Исправительная колония №12</h1>
        <p>Учреждение исполнения наказаний, обеспечивающее изоляцию осужденных от общества и организующее исправительный процесс</p>
        <a href="#contacts" class="btn">Связаться с нами</a>
      </section>

      <!-- О колонии -->
      <section id="about" class="section">
        <h2 class="section-title">О колонии</h2>
        <div class="features">
          <div class="feature">
            <h3>История</h3>
            <p>Исправительная колония №12 основана в 1956 году. За годы работы учреждение неоднократно модернизировалось и совершенствовалось в соответствии с современными требованиями.</p>
          </div>
          <div class="feature">
            <h3>Миссия</h3>
            <p>Наша миссия — обеспечивать исполнение наказаний в соответствии с законодательством РФ, способствовать исправлению осужденных и их социальной адаптации.</p>
          </div>
          <div class="feature">
            <h3>Принципы</h3>
            <p>Работа учреждения строится на принципах законности, гуманизма, соблюдения прав человека и дифференцированного подхода к осужденным.</p>
          </div>
        </div>
      </section>

      <!-- Услуги и возможности -->
      <section id="services" class="section">
        <h2 class="section-title">Услуги и возможности</h2>
        <div class="features">
          <div class="feature">
            <h3>Производство</h3>
            <p>На территории колонии функционирует производство, где осужденные могут приобрести трудовые навыки и специальности в различных областях.</p>
          </div>
          <div class="feature">
            <h3>Образование</h3>
            <p>Осужденные имеют возможность получить общее и профессиональное образование в школе и профессиональном училище при колонии.</p>
          </div>
          <div class="feature">
            <h3>Реабилитация</h3>
            <p>В учреждении реализуются программы психологической помощи и социальной реабилитации, направленные на подготовку осужденных к освобождению.</p>
          </div>
        </div>
      </section>

      <!-- Информация -->
      <section id="info" class="section">
        <h2 class="section-title">Полезная информация</h2>
        <div class="info-grid">
          <div class="info-card">
            <h3>Режим работы</h3>
            <p>Прием граждан по личным вопросам:</p>
            <ul>
              <li>Понедельник - пятница: 9:00 - 17:00</li>
              <li>Обед: 13:00 - 14:00</li>
              <li>Выходные: суббота, воскресенье</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>Передачи и посылки</h3>
            <p>Порядок приема посылок и передач:</p>
            <ul>
              <li>Прием передач: ежедневно с 9:00 до 16:00</li>
              <li>Максимальный вес посылки: 20 кг</li>
              <li>Перечень разрешенных предметов можно уточнить у сотрудников</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>Свидания</h3>
            <p>Информация о порядке предоставления свиданий:</p>
            <ul>
              <li>Краткосрочные свидания: до 4 часов</li>
              <li>Длительные свидания: до 3 суток</li>
              <li>Необходима предварительная запись</li>
              <li>При себе иметь документ, удостоверяющий личность</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </main>

  <!-- Подвал -->
  <footer id="contacts" class="footer">
    <div class="container footer-container">
      <div class="footer-section">
        <h3>Контакты</h3>
        <p>123456, Россия, Область</p>
        <p>г. Город, ул. Примерная, д. 12</p>
        <p>Телефон: +7 (123) 456-78-90</p>
        <p>Email: info@ik12.ru</p>
      </div>
      <div class="footer-section">
        <h3>Полезные ссылки</h3>
        <ul>
          <li><a href="#">ФСИН России</a></li>
          <li><a href="#">Управление ФСИН</a></li>
          <li><a href="#">Министерство юстиции</a></li>
          <li><a href="#">Правовая информация</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Для родственников</h3>
        <ul>
          <li><a href="#">Порядок посещения</a></li>
          <li><a href="#">Образцы заявлений</a></li>
          <li><a href="#">Банковские реквизиты</a></li>
          <li><a href="#">Часто задаваемые вопросы</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Дополнительно</h3>
        <ul>
          <li><a href="#">Трудоустройство</a></li>
          <li><a href="#">Вакансии</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Объявления</a></li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        © 2025 Исправительная колония №12. Все права защищены.
      </div>
    </div>
  </footer>
</body>
</html>
`;

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
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-slate-800 text-white p-6">
            <h1 className="text-2xl font-bold">Сайт Исправительной колонии</h1>
            <p className="mt-2 text-slate-300">Простой HTML/CSS сайт, который можно скачать и использовать</p>
          </div>
          
          <div className="p-6">
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
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Преимущества</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded">
                  <h3 className="font-medium text-slate-800">Простота использования</h3>
                  <p className="text-sm text-gray-600 mt-1">Одностраничный HTML-файл, который легко редактировать</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <h3 className="font-medium text-slate-800">Адаптивный дизайн</h3>
                  <p className="text-sm text-gray-600 mt-1">Корректно отображается на мобильных устройствах</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <h3 className="font-medium text-slate-800">Без зависимостей</h3>
                  <p className="text-sm text-gray-600 mt-1">Не требует установки дополнительных библиотек</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <h3 className="font-medium text-slate-800">Современный дизайн</h3>
                  <p className="text-sm text-gray-600 mt-1">Стильный и сдержанный интерфейс</p>
                </div>
              </div>
            </div>
            
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
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Вернуться на <Link to="/" className="text-blue-600 hover:underline">главную страницу</Link></p>
        </div>
      </div>
    </div>
  );
};

export default PrisonSite;
