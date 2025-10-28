import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import AnimationExample from "@/components/lottie";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-0">
          <div className="justify-center flex">
            <AnimationExample />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-4"></h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Página Não Encontrada
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Não conseguimos encontrar a página{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
            {location.pathname}
          </code>
          . Ela pode ter sido movida ou não existe mais.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="w-full bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-semibold flex items-center justify-center gap-3"
          >
            <Home size={20} />
            Voltar para o Início
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-gray-400 transition-colors font-semibold flex items-center justify-center gap-3"
          >
            <ArrowLeft size={20} />
            Voltar à Página Anterior
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Se você acredita que isso é um erro, entre em contato com o suporte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
