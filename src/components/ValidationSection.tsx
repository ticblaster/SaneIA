import { HelpCircle, CheckCircle, Circle, ArrowRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { hypothesesToValidate, validationSteps, nextValidationHypothesis } from '../data/scope-data';

export default function ValidationSection() {
  return (
    <section id="validacao" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Validação"
          title="Hipóteses em aberto e continuidade do plano de validação"
          description="A primeira rodada de validação técnica já foi realizada. As etapas a seguir mostram o que já avançou e o que ainda depende de aprofundamento junto ao setor."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-brand-deep">
              <HelpCircle size={20} className="text-brand-blue" aria-hidden="true" />
              Quadro de pesquisa: hipóteses a validar
            </h3>
            <ul className="flex flex-col gap-2.5">
              {hypothesesToValidate.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-200 bg-brand-mist/50 p-3.5 text-sm font-medium text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-brand-deep">
              <CheckCircle size={20} className="text-brand-teal" aria-hidden="true" />
              Plano de validação
            </h3>
            <ol className="flex flex-col gap-2.5">
              {validationSteps.map((step) => (
                <li
                  key={step.label}
                  className={`flex items-center gap-3 rounded-xl border p-3.5 text-sm font-medium ${
                    step.done
                      ? 'border-emerald-200 bg-emerald-50/60 text-slate-700'
                      : 'border-slate-200 text-slate-700'
                  }`}
                >
                  {step.done ? (
                    <CheckCircle size={20} className="shrink-0 text-emerald-600" aria-hidden="true" />
                  ) : (
                    <Circle size={20} className="shrink-0 text-slate-300" aria-hidden="true" />
                  )}
                  <span>{step.label}</span>
                  {step.done && (
                    <span className="ml-auto shrink-0 text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
                      Concluída
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-brand-blue/20 bg-brand-mist/60 p-6 sm:p-8">
          <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-brand-deep">
            <ArrowRight size={20} className="text-brand-blue" aria-hidden="true" />
            Próxima validação
          </h3>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            A próxima etapa é selecionar, junto a profissionais do setor, um problema operacional
            delimitado e um conjunto mínimo de dados reais para testar o modelo em um recorte
            controlado.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{nextValidationHypothesis}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-amber-600">
            Hipótese de MVP — ainda não é resultado comprovado.
          </p>
        </div>
      </div>
    </section>
  );
}
