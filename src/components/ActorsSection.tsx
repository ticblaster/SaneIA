import { UserCog, ClipboardList, HardHat, Settings } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { actors } from '../data/scope-data';

const icons = [UserCog, ClipboardList, HardHat, Settings];

export default function ActorsSection() {
  return (
    <section className="bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Atores" title="Perfis de uso previstos na plataforma" align="center" />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {actors.map((actor, index) => {
            const Icon = icons[index];
            return (
              <Card as="li" key={actor.role} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-deep text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-brand-deep">{actor.role}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{actor.description}</p>
              </Card>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
