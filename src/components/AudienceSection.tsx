import { Building2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { audienceCards } from '../data/scope-data';

export default function AudienceSection() {
  return (
    <section className="bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Público-alvo" title="Para quem a proposta é pensada" />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audienceCards.map((card) => (
            <Card as="li" key={card.title} className="flex flex-col gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-fog text-brand-teal">
                <Building2 size={22} aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold text-brand-deep">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{card.description}</p>
            </Card>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-slate-500">
          Embora o nome de alguns órgãos contenha "Água e Esgoto", o primeiro MVP demonstrativo
          abrange somente o abastecimento de água.
        </p>
      </div>
    </section>
  );
}
