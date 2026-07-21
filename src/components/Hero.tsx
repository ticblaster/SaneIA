import { ArrowRight, LayoutDashboard } from 'lucide-react';
import HeroIllustration from './illustrations/HeroIllustration';

export default function Hero() {
  return (
    <section id="topo" className="section-anchor relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full bg-brand-fog px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-teal">
            Proposta candidata à pré-incubação · Startup UFT
          </span>
          <h1 className="text-4xl font-bold leading-tight text-brand-deep text-balance sm:text-5xl">
            Transformar dados operacionais em ações para reduzir perdas de água.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            A SaneIA Água propõe uma camada de inteligência capaz de importar dados, identificar
            anomalias, priorizar inspeções e apoiar decisões operacionais em sistemas de
            abastecimento de água.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#pipeline"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy"
            >
              Ver como funciona
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#painel"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-fog"
            >
              <LayoutDashboard size={18} aria-hidden="true" />
              Explorar painel demonstrativo
            </a>
          </div>
          <p className="pt-1 text-xs text-slate-500">
            MVP demonstrativo com dados sintéticos. Nenhum dado exibido representa clientes ou
            municípios reais.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
