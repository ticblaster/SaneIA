import { Plug, ShieldCheck, GitMerge, BrainCircuit, Share2, RefreshCw } from 'lucide-react';

const steps = [
  { icon: Plug, label: 'Conexão com fontes' },
  { icon: ShieldCheck, label: 'Qualidade e preparação' },
  { icon: GitMerge, label: 'Engenharia de atributos' },
  { icon: BrainCircuit, label: 'Inteligência operacional' },
  { icon: Share2, label: 'Entrega dos resultados' },
  { icon: RefreshCw, label: 'Feedback e aprendizado' },
];

export default function SolutionFlowIllustration() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex min-w-[720px] items-center justify-between gap-2 px-2 py-6 md:min-w-0">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-deep text-white shadow-soft">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <span className="max-w-[110px] text-xs font-semibold text-brand-navy sm:text-sm">
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <svg
                  className="mx-1 hidden h-4 flex-1 sm:block"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line
                    x1="0"
                    y1="5"
                    x2="100"
                    y2="5"
                    stroke="#2A78D6"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />
                  <polygon points="94,1 100,5 94,9" fill="#2A78D6" />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
