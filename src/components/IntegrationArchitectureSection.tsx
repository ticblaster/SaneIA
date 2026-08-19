import { Database, Plug, BrainCircuit, Share2, MonitorSmartphone, ArrowRight, ArrowDown } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import {
  integrationLayerSteps,
  integrationSourceExamples,
  maturityPathLow,
  maturityPathHigh,
} from '../data/scope-data';

const layerIcons = [Database, Plug, BrainCircuit, Share2, MonitorSmartphone];

export default function IntegrationArchitectureSection() {
  return (
    <section id="arquitetura" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Arquitetura de integração"
          title="Uma camada independente das fontes e dos sistemas de saída do operador"
          align="center"
          description="O SaneIA é source-agnostic e output-agnostic: conecta-se às fontes disponíveis e entrega resultados para os sistemas que o operador já utiliza, ou pela própria interface do SaneIA."
        />

        <div className="mt-14 flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
          {integrationLayerSteps.map((layer, index) => {
            const Icon = layerIcons[index];
            return (
              <div key={layer.title} className="flex flex-1 flex-col items-stretch lg:flex-row">
                <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-slate-200 bg-brand-mist/40 p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-deep text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold text-brand-deep">{layer.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600">{layer.description}</p>
                </div>

                {index < integrationLayerSteps.length - 1 && (
                  <div className="flex items-center justify-center py-3 lg:px-2 lg:py-0">
                    <ArrowDown size={20} className="text-brand-blue lg:hidden" aria-hidden="true" />
                    <ArrowRight size={20} className="hidden text-brand-blue lg:block" aria-hidden="true" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-brand-blue/30 bg-brand-mist/30 p-5 sm:p-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-teal">
            Exemplos de fontes possíveis
          </p>
          <ul className="flex flex-wrap gap-2">
            {integrationSourceExamples.map((source) => (
              <li
                key={source}
                className="rounded-full border border-brand-blue/20 bg-white px-3.5 py-1.5 text-xs font-medium text-brand-deep"
              >
                {source}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] text-slate-400">
            Conectores possíveis — capacidade a ser validada em cada piloto. Integração sujeita à
            arquitetura e às políticas de segurança do operador.
          </p>
        </div>

        <div className="mt-16">
          <Badge tone="neutral" className="mb-4">
            A arquitetura se adapta à maturidade do operador
          </Badge>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[maturityPathLow, maturityPathHigh].map((path) => (
              <div key={path.title} className="rounded-2xl border border-slate-200 p-6 sm:p-8">
                <h3 className="mb-4 text-sm font-bold text-brand-deep">{path.title}</h3>
                <div className="flex flex-col gap-2">
                  {path.steps.map((step, index) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-brand-navy">
                        {step}
                      </span>
                      {index < path.steps.length - 1 && (
                        <ArrowDown size={14} className="shrink-0 text-brand-blue" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
            Nenhum dos dois caminhos é tratado como comercialmente superior ao outro — são formas
            diferentes de integração, escolhidas conforme a realidade de cada operador.
          </p>
        </div>
      </div>
    </section>
  );
}
