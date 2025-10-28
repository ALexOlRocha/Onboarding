import { cn } from "@/lib/utils";
import { ProgressIndicatorProps } from "@/models/progressIndicatorModels";

const ProgressIndicator = ({
  currentSection,
  totalSections,
}: ProgressIndicatorProps) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-card px-6 py-3 rounded-full border border-border shadow-elegant">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Seção {currentSection} de {totalSections}
          </span>
          <div className="flex gap-2">
            {Array.from({ length: totalSections }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  index < currentSection
                    ? "w-8 bg-primary"
                    : index === currentSection
                    ? "w-12 bg-gradient-primary"
                    : "w-8 bg-muted"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
