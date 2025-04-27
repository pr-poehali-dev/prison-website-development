
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-900 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Поехали.dev</h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Доступные проекты</h2>
          
          <div className="grid gap-6">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Сайт Исправительной колонии</h3>
              <p className="text-gray-600 mb-4">
                Простой HTML/CSS сайт для Исправительной колонии, который можно скачать и использовать.
              </p>
              <Link to="/prison-site">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Открыть проект
                </Button>
              </Link>
            </div>
            
            {/* Здесь могут быть другие проекты */}
          </div>
        </div>
      </main>
      
      <footer className="bg-slate-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Поехали.dev — запусти свой сайт за минуту!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
