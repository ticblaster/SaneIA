import { Sparkles, Plug2, FileJson, Webhook, LayoutDashboard, Map as MapIcon, Settings2, ClipboardList } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import { consumptionResults, consumptionChannels } from '../data/scope-data';

const channelIcons = [Plug2, FileJson, Webhook, LayoutDashboard, MapIcon, Settings2, LayoutDashboard];

export default function ConsumptionModesSection() {
  return (
    <section id="consumo" className="section-anchor bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Formas de consumo"
          title="O motor analítico é desacoplado da visualização"
          description="Os resultados gerados pelo SaneIA podem ser consumidos pelos sistemas e dashboards que o operador já utiliza, ou pela própria interface do SaneIA. O dashboard é apenas uma das formas possíveis de consumo."
        />

        <div className="mt-10">
          <Badge tone="blue" className="mb-4">
            <Sparkles size={14} aria-hidden="true" />
            Resultados SaneIA
          </Badge>
          <ul className="flex flex-wrap gap-2">
            {consumptionResults.map((item) => (
              <li
                key={item}
                className="rounded-full border border-brand-blue/20 bg-white px-3.5 py-1.5 text-xs font-medium text-brand-deep"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Badge tone="neutral" className="mb-4">
            <ClipboardList size={14} aria-hidden="true" />
            Canais de consumo
          </Badge>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {consumptionChannels.map((channel, index) => {
              const Icon = channelIcons[index % channelIcons.length];
              return (
                <li
                  key={channel}
                  className="flex flex-col items-start gap-2.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-card"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-fog text-brand-teal">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{channel}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
