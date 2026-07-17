import { CheckCircle2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { scopeItems } from '../data/scope-data';

export default function ScopeSection() {
  return (
    <section id="escopo" className="section-anchor bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Escopo do MVP" title="O que compõe o escopo preliminar demonstrado" />

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {scopeItems.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-teal" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
