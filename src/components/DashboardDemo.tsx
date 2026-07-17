import { FlaskConical } from 'lucide-react';
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
          eyebrow="Demonstração de BI"
          title="Painel demonstrativo de indicadores operacionais"
          description="Protótipo visual do futuro produto. Todos os números, gráficos e ordens de serviço abaixo utilizam dados sintéticos."
        />

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">
          <FlaskConical size={14} aria-hidden="true" />
          Dados demonstrativos e sintéticos
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
