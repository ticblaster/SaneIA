import { ArrowRight, Database, Target, Lightbulb, SlidersHorizontal } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const highlights = [
  {
    icon: Database,
    title: 'Qualidade e consolidação dos dados',
  },
  {
    icon: Target,
    title: 'Radar de prioridades',
  },
  {
    icon: Lightbulb,
    title: 'Explicabilidade por setor',
  },
  {
    icon: SlidersHorizontal,
    title: 'Simulação de critérios e ações',
  },
];

export default function PrototypeShowcaseSection() {
  return (
    <section className="bg-brand-fog py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Protótipo interativo"
          title="Veja a SaneIA em funcionamento"
          align="center"
          description="O protótipo interativo demonstra como diferentes fontes de dados podem ser consolidadas, avaliadas quanto à qualidade e transformadas em prioridades operacionais explicáveis."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-brand-deep">{item.title}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <a
            href="https://saneia-demo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy"
          >
            Abrir demonstração
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <p className="max-w-2xl text-xs text-slate-500">
            Os indicadores, ocorrências, scores e ações apresentados são ilustrativos e não
            representam operações reais de nenhuma concessionária.
          </p>
        </div>
      </div>
    </section>
  );
}
