import { GraduationCap } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { teamMembers } from '../data/team-data';

export default function TeamSection() {
  return (
    <section id="equipe" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Equipe" title="Quem está estruturando a proposta" align="center" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-deep text-white">
                <GraduationCap size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-brand-deep">{member.name}</h3>
                <p className="text-sm font-medium text-brand-blue">{member.role}</p>
              </div>
              <ul className="flex flex-col gap-1.5">
                {member.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-slate-600">
                    · {bullet}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-400">
          Não há vínculo societário formal constituído entre os membros até o momento. As funções
          descritas refletem a divisão de responsabilidades pretendida durante a pré-incubação.
        </p>
      </div>
    </section>
  );
}
