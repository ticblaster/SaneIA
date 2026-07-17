import { HelpCircle, CheckCircle } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { hypothesesToValidate, validationSteps } from '../data/scope-data';

export default function ValidationSection() {
  return (
    <section id="validacao" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Validação" title="Hipóteses a validar e plano de validação" />

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
              {validationSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-3.5 text-sm font-medium text-slate-700"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-deep text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
