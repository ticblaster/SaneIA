import { Coins } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { businessModelItems } from '../data/scope-data';

export default function BusinessModelSection() {
  return (
    <section className="bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Modelo de negócio preliminar" title="Hipóteses comerciais em avaliação" />

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {businessModelItems.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
              <Coins size={18} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 inline-flex items-center rounded-full bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">
          Modelo sujeito a validação caso o projeto seja selecionado para a pré-incubação.
        </p>
      </div>
    </section>
  );
}
