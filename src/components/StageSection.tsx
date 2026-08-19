import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const stageItems = [
  'Problema identificado.',
  'Protótipo conceitual funcional, com dados sintéticos estruturados.',
  'Primeira validação setorial realizada.',
  'Segunda rodada de questionamentos técnicos (integração, segurança e arquitetura) concluída.',
  'Arquitetura conceitual refinada: camada de inteligência independente de fontes e sistemas de saída.',
];

const nextSteps = [
  'Definir, junto ao operador, um caso de uso e um conjunto mínimo de dados.',
  'Definir a arquitetura de integração e segurança para o piloto.',
  'Executar um piloto controlado, caso haja acordo entre as partes.',
];

export default function StageSection() {
  return (
    <section className="bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Maturidade do projeto" title="Estágio atual" align="center" />

        <ul className="mt-10 flex flex-col gap-3">
          {stageItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card"
            >
              <CheckCircle2 size={20} className="shrink-0 text-emerald-600" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-center text-sm font-bold uppercase tracking-wide text-brand-teal">
          Próximos passos
        </h3>
        <ul className="mt-4 flex flex-col gap-3">
          {nextSteps.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-dashed border-brand-blue/40 bg-white/60 p-4"
            >
              <ArrowRight size={20} className="shrink-0 text-brand-blue" aria-hidden="true" />
              <span className="text-sm font-semibold text-brand-deep">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
