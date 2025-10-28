import { ContentSectionProps } from "@/models/contentSectionModal";
import { ChevronRight, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const sectionImages: Record<number, string[]> = {
  1: [
    new URL("@/assets/quotation.jpg", import.meta.url).href,
    new URL("@/assets/inventory.jpg", import.meta.url).href,
    new URL("@/assets/communication.jpg", import.meta.url).href,
  ],
  2: [
    new URL("@/assets/novos-clientes.jpg", import.meta.url).href,
    new URL("@/assets/clientes-ativos.jpg", import.meta.url).href,
    new URL("@/assets/clientes-inativos.jpg", import.meta.url).href,
  ],
  3: [
    new URL("@/assets/Logistica.jpg", import.meta.url).href,
    new URL("@/assets/billing.jpg", import.meta.url).href,
  ],
  4: [
    new URL("@/assets/confirmation.jpg", import.meta.url).href,
    new URL("@/assets/entrega.jpg", import.meta.url).href,
  ],
};

const ContentSection = ({
  title,
  subtitle,
  items,
  onNext,
  sectionNumber,
}: ContentSectionProps) => {
  const images = sectionImages[sectionNumber] || [];
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
  const [imageErrors, setImageErrors] = useState<boolean[]>([]);

  // Inicializar estados das imagens
  useEffect(() => {
    setLoadedImages(new Array(images.length).fill(false));
    setImageErrors(new Array(images.length).fill(false));
  }, [images.length]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-orange-50/30 to-blue-50/30 py-8 px-4">
      <div className="max-w-[85%] w-full space-y-12 animate-fade-in">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>Progresso do Módulo</span>
              <span>{sectionNumber}/4</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-orange-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(sectionNumber / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              <div
                className={`grid ${
                  images[index] ? "lg:grid-cols-2" : ""
                } gap-0`}
              >
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {item.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-4 px-3 rounded-xl hover:bg-gray-50/50 transition-colors duration-300"
                        >
                          <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xl text-gray-700 leading-relaxed flex-1">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {images[index] && (
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 min-h-[250px] lg:min-h-[300px] flex items-center justify-center overflow-hidden">
                    {!imageErrors[index] ? (
                      <>
                        {!loadedImages[index] && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                          </div>
                        )}

                        <img
                          src={images[index]}
                          alt={item.title}
                          onLoad={() => handleImageLoad(index)}
                          onError={() => handleImageError(index)}
                          className={`w-full h-auto object-cover transition-all duration-700 ${
                            loadedImages[index]
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-105"
                          } group-hover:scale-105`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center">
                          <ImageIcon className="w-10 h-10 text-gray-400" />
                        </div>
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-600">
                            Imagem ilustrativa
                          </p>
                          <p className="text-sm text-gray-500 max-w-xs">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <div className="relative">
            <Button
              onClick={onNext}
              size="lg"
              className="group bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-16 py-8 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Continuar
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>

            <div className="flex justify-center gap-2 mt-6">
              {items.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
