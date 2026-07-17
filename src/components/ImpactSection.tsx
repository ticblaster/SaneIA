import { Droplets, Gauge, Timer, Wrench, Landmark, PiggyBank, Leaf, Users } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { impactCards } from '../data/scope-data';

const icons = [Droplets, Gauge, Timer, Wrench, Landmark, PiggyBank, Leaf, Users];

export default function ImpactSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Impactos esperados"
          title="Impactos que orientam a proposta"
          description="Direções esperadas, ainda sem números de impacto validados em campo."
          align="center"
        />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactCards.map((item, index) => {
            const Icon = icons[index];
            return (
              <Card as="li" key={item} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-fog text-brand-teal">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <p className="text-sm font-medium leading-relaxed text-slate-700">{item}</p>
              </Card>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
