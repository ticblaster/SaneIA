import { Database, BrainCircuit, Target, HardHat, ClipboardCheck, RefreshCw, ArrowRight, ArrowDown } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const cycle = [
  { icon: Database, title: 'Dados', description: 'OS, rede, pressão, telemetria, medições e contexto territorial.' },
  { icon: BrainCircuit, title: 'Inteligência', description: 'Qualidade dos dados, correlações, anomalias, recorrência e modelos de priorização.' },
  { icon: Target, title: 'Priorização', description: 'Scores, alertas, regiões críticas e provável necessidade de investigação.' },
  { icon: HardHat, title: 'Ação', description: 'Direcionamento da equipe e escolha do ponto de intervenção.' },
  { icon: ClipboardCheck, title: 'Resultado', description: 'Registro do que foi encontrado e feito em campo.' },
  { icon: RefreshCw, title: 'Aprendizado', description: 'O resultado da intervenção pode retornar ao histórico e apoiar a recalibração dos modelos.' },
];

export default function ProductLogicSection() {
  return (
    <section className="bg-brand-deep py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como o produto pensa"
          title="Um ciclo, não um retrato único"
          align="center"
          description={
            <span className="text-blue-200/80">
              Dados → Inteligência → Priorização → Ação → Resultado → Aprendizado → Dados.
            </span>
          }
        />

        <div className="mt-14 flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
          {cycle.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-1 flex-col items-stretch lg:flex-row">
                <div className="flex flex-1 flex-col gap-2 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-blue-100/80">{step.description}</p>
                </div>

                {index < cycle.length - 1 && (
                  <div className="flex items-center justify-center py-3 lg:px-2 lg:py-0">
                    <ArrowDown size={20} className="text-brand-blue lg:hidden" aria-hidden="true" />
                    <ArrowRight size={20} className="hidden text-brand-blue lg:block" aria-hidden="true" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 text-center text-xs font-medium text-blue-200/70">
          <RefreshCw size={14} className="shrink-0" aria-hidden="true" />
          O feedback operacional pode retroalimentar o histórico, fechando o ciclo de melhoria.
        </p>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-200/70">
              BI e sistemas existentes
            </h3>
            <p className="text-sm leading-relaxed text-blue-100/90">
              Organizam e apresentam informações operacionais.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-brand-blue/40">
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-white">SaneIA</h3>
            <p className="text-sm leading-relaxed text-blue-50">
              Adiciona uma camada analítica para transformar esses dados em sinais de decisão —
              indicando onde investigar primeiro e quais fatores podem estar contribuindo para a
              criticidade observada.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-blue-200/80">
          O SaneIA complementa o ecossistema existente, não exige substituí-lo. O diferencial está
          em combinar múltiplas fontes de informação operacional e territorial para gerar uma
          camada adaptativa de priorização. Os pesos e modelos podem evoluir conforme a realidade
          de cada rede, cidade ou operador e conforme os resultados das intervenções realizadas.
        </p>
      </div>
    </section>
  );
}
