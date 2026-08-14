import { PiggyBank, Leaf, Users, CheckCircle2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { impactCategories } from '../data/scope-data';

const icons = [PiggyBank, Leaf, Users];

export default function ImpactSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Impacto econômico e socioambiental"
          title="Impactos que orientam a proposta"
          description="Direções esperadas, ainda sem números de impacto validados em campo."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {impactCategories.map((group, index) => {
            const Icon = icons[index];
            return (
              <Card key={group.category} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-fog text-brand-teal">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold text-brand-deep">{group.category}</h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-teal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
