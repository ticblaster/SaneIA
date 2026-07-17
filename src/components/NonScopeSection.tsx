import { XCircle } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { nonScopeItems } from '../data/scope-data';

export default function NonScopeSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Não escopo"
          title="O que não faz parte desta proposta, por ora"
          description="Delimitar o que fica de fora ajuda a manter o MVP demonstrativo viável e honesto quanto ao estágio atual do projeto."
        />

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {nonScopeItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <XCircle size={20} className="mt-0.5 shrink-0 text-slate-400" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
