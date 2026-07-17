import { Database, UploadCloud, ShieldCheck, Wand2, BrainCircuit, MonitorSmartphone, ArrowRight, ArrowDown } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import {
  pipelineSources,
  pipelineExtraction,
  pipelineValidation,
  pipelineTransformation,
  pipelineIntelligence,
  pipelineOutputs,
} from '../data/scope-data';

const stages = [
  { icon: Database, title: 'Fontes de dados', items: pipelineSources },
  { icon: UploadCloud, title: 'Extração', items: pipelineExtraction },
  { icon: ShieldCheck, title: 'Validação', items: pipelineValidation },
  { icon: Wand2, title: 'Transformação', items: pipelineTransformation },
  { icon: BrainCircuit, title: 'Inteligência', items: pipelineIntelligence },
  { icon: MonitorSmartphone, title: 'Saídas', items: pipelineOutputs },
];

export default function PipelineSection() {
  return (
    <section id="pipeline" className="section-anchor bg-brand-deep py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pipeline de dados e Machine Learning"
          title="Pipeline inteligente: dos dados brutos à ação operacional"
          align="center"
          description={
            <span className="text-blue-200/80">
              Seis etapas conectam os registros operacionais brutos às recomendações apresentadas às
              equipes de campo.
            </span>
          }
        />

        <div className="mt-14 flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={stage.title} className="flex flex-1 flex-col items-stretch lg:flex-row">
                <div className="flex flex-1 flex-col gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold text-white">{stage.title}</h3>
                  <ul className="flex flex-col gap-1.5">
                    {stage.items.map((item) => (
                      <li key={item} className="text-xs leading-relaxed text-blue-100/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < stages.length - 1 && (
                  <div className="flex items-center justify-center py-3 lg:px-2 lg:py-0">
                    <ArrowDown size={20} className="text-brand-blue lg:hidden" aria-hidden="true" />
                    <ArrowRight size={20} className="hidden text-brand-blue lg:block" aria-hidden="true" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-blue-200/80">
          O modelo de Machine Learning não substitui a análise humana. Ele atua como ferramenta de
          triagem, identificando padrões que merecem investigação e explicando os principais fatores
          que influenciaram a prioridade atribuída.
        </p>
      </div>
    </section>
  );
}
