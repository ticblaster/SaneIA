import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { alertTypeData } from '../../data/dashboard-data';

const total = alertTypeData.reduce((sum, item) => sum + item.value, 0);

export default function AlertDonutChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="text-sm font-bold text-brand-deep">Distribuição dos tipos de alerta (simulado)</h3>
      <p className="mt-0.5 text-xs text-slate-500">Proporção de cada tipo de alerta entre as 437 anomalias identificadas.</p>
      <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
        <div className="h-56 w-56 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[...alertTypeData]}
                dataKey="value"
                nameKey="type"
                innerRadius={56}
                outerRadius={90}
                paddingAngle={2}
                stroke="#FFFFFF"
                strokeWidth={2}
              >
                {alertTypeData.map((entry) => (
                  <Cell key={entry.type} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: 12, borderColor: '#E1E0D9', fontSize: 12 }}
                formatter={(value: number, _name, item) => [
                  `${value} casos (${Math.round((value / total) * 100)}%)`,
                  item.payload.type,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="flex flex-1 flex-col gap-2 self-stretch">
          {alertTypeData.map((entry) => (
            <li key={entry.type} className="flex items-center justify-between gap-3 text-xs">
              <span className="flex items-center gap-2 text-slate-600">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: entry.color }}
                  aria-hidden="true"
                />
                {entry.type}
              </span>
              <span className="font-semibold text-brand-deep" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {Math.round((entry.value / total) * 100)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
