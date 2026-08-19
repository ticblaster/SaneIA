import { TrendingUp, AlertOctagon, Gauge } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { useCases } from '../data/scope-data';

const icons = [TrendingUp, AlertOctagon, Gauge];

export default function UseCasesSection() {
  return (
    <section id="casos-de-uso" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge tone="blue" className="mb-4">
          Casos de uso em validação com o setor
        </Badge>
        <SectionHeading title="Três hipóteses de valor, ainda sem resultados comprovados" />

        <ul className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = icons[index];
            return (
              <Card as="li" key={useCase.title} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-deep text-sm font-bold text-white">
                    {useCase.letter}
                  </span>
                  <Icon size={22} className="text-brand-teal" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-brand-deep">{useCase.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{useCase.description}</p>
              </Card>
            );
          })}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs font-semibold uppercase tracking-wide text-amber-600">
          Hipóteses candidatas a validação — não são funcionalidades comprovadas em produção.
        </p>
      </div>
    </section>
  );
}
