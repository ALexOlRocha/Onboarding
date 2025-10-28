import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuizSectionProps } from "@/models/quizQuestion";

const QuizSection = ({ quiz, onComplete, sectionNumber }: QuizSectionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === quiz.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  const handleNext = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-light p-8">
      <Card className="max-w-3xl w-full p-8 md:p-12 bg-card border-border shadow-elegant animate-scale-in">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary font-semibold">
                Quiz - Seção {sectionNumber}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Teste seu conhecimento
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-foreground font-medium">
              {quiz.question}
            </p>

            <div className="space-y-3">
              {quiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && setSelectedAnswer(index)}
                  disabled={showResult}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 text-left transition-all duration-300",
                    "hover:scale-[1.01] hover:shadow-md",
                    selectedAnswer === index
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card",
                    showResult &&
                      index === quiz.correctAnswer &&
                      "border-success bg-success/10",
                    showResult &&
                      selectedAnswer === index &&
                      !isCorrect &&
                      "border-destructive bg-destructive/10"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0",
                        selectedAnswer === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-foreground font-medium">
                      {option}
                    </span>
                    {showResult && index === quiz.correctAnswer && (
                      <CheckCircle2 className="ml-auto text-success w-6 h-6" />
                    )}
                    {showResult && selectedAnswer === index && !isCorrect && (
                      <XCircle className="ml-auto text-destructive w-6 h-6" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {showResult && (
            <div
              className={cn(
                "p-6 rounded-xl border-2 animate-fade-in",
                isCorrect
                  ? "bg-success/10 border-success"
                  : "bg-destructive/10 border-destructive"
              )}
            >
              <div className="flex items-start gap-4">
                {isCorrect ? (
                  <CheckCircle2 className="w-8 h-8 text-success flex-shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-destructive flex-shrink-0" />
                )}
                <div className="space-y-2">
                  <p
                    className={cn(
                      "text-xl font-bold",
                      isCorrect ? "text-success" : "text-destructive"
                    )}
                  >
                    {isCorrect
                      ? "Parabéns! Você entendeu este tópico."
                      : "Você errou! Reveja o tópico."}
                  </p>
                  {!isCorrect && quiz.explanation && (
                    <p className="text-muted-foreground">{quiz.explanation}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center gap-4 pt-4">
            {!showResult ? (
              <Button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-elegant"
              >
                Confirmar Resposta
              </Button>
            ) : isCorrect ? (
              <Button
                onClick={handleNext}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-elegant group"
              >
                Próximo
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Button
                onClick={handleRetry}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full shadow-md"
              >
                <RotateCcw className="mr-2 w-5 h-5" />
                Tentar Novamente
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuizSection;
