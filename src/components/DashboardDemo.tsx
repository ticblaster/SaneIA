import { FlaskConical, Info } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import KpiGrid from './dashboard/KpiGrid';
import LossEvolutionChart from './dashboard/LossEvolutionChart';
import RegionBarChart from './dashboard/RegionBarChart';
import AlertDonutChart from './dashboard/AlertDonutChart';
import OperationalHeatmap from './dashboard/OperationalHeatmap';
import OccurrenceRanking from './dashboard/OccurrenceRanking';
import ServiceOrdersPanel from './dashboard/ServiceOrdersPanel';

export default function DashboardDemo() {
  return (
    <section id="painel" className="section-anchor bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Uma das formas de consumir a inteligência gerada"
          title="Camada demonstrativa de visualização"
          description="Protótipo visual do futuro produto. Todos os números, gráficos e ordens de serviço abaixo utilizam dados sintéticos."
        />

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">
          <FlaskConical size={14} aria-hidden="true" />
          Dados demonstrativos e sintéticos
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-blue/20 bg-brand-mist/50 p-4 sm:p-5">
          <Info size={18} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-slate-700">
            O motor analítico é desacoplado da visualização. Em operações que já possuem BI ou
            sistemas corporativos, os resultados podem ser integrados a essas ferramentas. O painel
            abaixo demonstra apenas uma possível experiência de consumo.
          </p>
        </div>

        <div className="mt-8">
          <KpiGrid />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LossEvolutionChart />
          <RegionBarChart />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AlertDonutChart />
          <OperationalHeatmap />
        </div>

        <div className="mt-6">
          <OccurrenceRanking />
        </div>

        <div className="mt-6">
          <ServiceOrdersPanel />
        </div>
      </div>
    </section>
  );
}
