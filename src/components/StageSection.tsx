import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const stageItems = [
  'Problema identificado.',
  'Protótipo conceitual funcional.',
  'Dados sintéticos estruturados.',
  'Primeira validação com profissionais do setor realizada.',
  'Hipóteses de variáveis operacionais refinadas.',
];

const nextStep = 'Próxima etapa: MVP com recorte de dados reais e caso de uso delimitado.';

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
          <li className="flex items-center gap-3 rounded-xl border border-dashed border-brand-blue/40 bg-white/60 p-4">
            <ArrowRight size={20} className="shrink-0 text-brand-blue" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-deep">{nextStep}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
