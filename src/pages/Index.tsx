import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContentSection from "@/components/ContentSection";
import QuizSection from "@/components/QuizSection";
import { sections } from "@/data/onboardingData";
import {
  ChevronLeft,
  CheckCircle,
  Users,
  TrendingUp,
  LucideCirclePlay,
  LucideRefreshCcw,
} from "lucide-react";
import welcomeHero from "@/assets/welcome-hero.jpg";

type ViewMode = "intro" | "content" | "quiz" | "complete";

const Index = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("intro");

  const currentSection = sections[currentSectionIndex];

  const handleStart = () => {
    setViewMode("content");
  };

  const handleContentNext = () => {
    setViewMode("quiz");
  };

  const handleQuizComplete = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setViewMode("content");
    } else {
      setViewMode("complete");
    }
  };

  const handlePrevious = () => {
    if (viewMode === "quiz") {
      setViewMode("content");
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setViewMode("content");
    }
  };

  const handleRestart = () => {
    setCurrentSectionIndex(0);
    setViewMode("intro");
  };

  if (viewMode === "intro") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-orange-600 rounded-full blur-3xl opacity-20 animate-float-slow"></div>

        <div className="relative flex items-center justify-center min-h-screen p-8">
          <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center animate-scale-in">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight text-center">
                    <span className="bg-gradient-to-r  from-orange-500 to-blue-600 bg-clip-text text-transparent">
                      MK Distribuidora
                    </span>
                  </h1>
                </div>

                <div className="space-y-3">
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Bem-vindo ao treinamento interativo! Aprenda nosso processo
                    completo de vendas através de conteúdos dinâmicos e quizzes
                    práticos para excelência operacional.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                    onClick={handleStart}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                          {section.subtitle}
                        </p>
                      </div>
                      <div className="opacity-0 items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                        <LucideCirclePlay className="w-8 h-8 text-orange-500  items-center " />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:hidden mt-10 text-center">
                <Button
                  onClick={handleStart}
                  size="lg"
                  className="group bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-12 py-7 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Iniciar Onboarding
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative">
                <img
                  src={welcomeHero}
                  alt="Bem-vindo à MK Distribuidora"
                  className="rounded-3xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute -top-3 md:-top-4 -left-4 md:-left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-orange-50 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">+85%</div>
                      <div className="text-xs text-gray-500">Eficiência</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 md:-right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-blue-200 animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Time</div>
                      <div className="text-xs text-gray-500">Qualificado</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-md:hidden text-center">
                <Button
                  onClick={handleStart}
                  size="lg"
                  className="group bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-12 py-8 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Iniciar Onboarding
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === "complete") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-700 to-orange-600 rounded-full blur-3xl opacity-30"></div>

        <div className="relative flex items-center justify-center min-h-screen p-8">
          <div className="max-w-4xl w-full text-center space-y-12 animate-scale-in">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-black text-gray-900">
                  <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                    Parabéns!
                  </span>
                </h1>
                <p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Você dominou o processo de venda e faturamento da MK
                  Distribuidora e está pronto para excelência operacional.
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-200 shadow-2xl max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {section.title}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Concluído com sucesso
                      </div>
                    </div>
                    <CheckCircle className="w-6 h-6 text-orange-500 ml-auto flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Button
                onClick={handleRestart}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-12 py-7 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform"
              >
                <LucideRefreshCcw className="w-6 h-6 mr-3" />
                Refazer Onboarding
              </Button>

              <p className="text-gray-500 text-sm">
                Revise o conteúdo para consolidar seu conhecimento
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <ProgressIndicator
        currentSection={currentSectionIndex + 1}
        totalSections={sections.length}
      /> */}

      {(currentSectionIndex > 0 || viewMode === "quiz") && (
        <Button
          onClick={handlePrevious}
          variant="outline"
          size="lg"
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 rounded-full w-14 h-14 p-0 border-2 border-gray-300 bg-orange-500 hover:bg-orange-600 hover:text-white text-white hover:border-orange-500 shadow-lg backdrop-blur-sm  transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </Button>
      )}

      {viewMode === "content" ? (
        <ContentSection
          title={currentSection.title}
          subtitle={currentSection.subtitle}
          items={currentSection.items}
          onNext={handleContentNext}
          sectionNumber={currentSection.id}
        />
      ) : (
        <QuizSection
          quiz={currentSection.quiz}
          onComplete={handleQuizComplete}
          sectionNumber={currentSection.id}
        />
      )}
    </>
  );
};

export default Index;
