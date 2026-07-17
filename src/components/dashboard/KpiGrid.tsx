import { kpiData } from '../../data/dashboard-data';

export default function KpiGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {kpiData.map((kpi) => (
        <div
          key={kpi.label}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card"
        >
          <p
            className="text-2xl font-bold text-brand-deep sm:text-3xl"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {kpi.value}
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-600">{kpi.label}</p>
          <p className="text-[11px] text-slate-400">{kpi.hint}</p>
        </div>
      ))}
    </div>
  );
}
