import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { anomaliesByRegionData } from '../../data/dashboard-data';

export default function RegionBarChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="text-sm font-bold text-brand-deep">Anomalias por região (simulado)</h3>
      <p className="mt-0.5 text-xs text-slate-500">Contagem de alertas identificados por setor no período demonstrativo.</p>
      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[...anomaliesByRegionData]}
            layout="vertical"
            margin={{ top: 8, right: 24, left: 8, bottom: 0 }}
          >
            <CartesianGrid horizontal={false} stroke="#E1E0D9" />
            <XAxis type="number" tick={{ fontSize: 12, fill: '#898781' }} axisLine={false} tickLine={false} />
            <YAxis
              type="category"
              dataKey="region"
              width={110}
              tick={{ fontSize: 12, fill: '#52514E' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: '#F4F8FA' }}
              contentStyle={{ borderRadius: 12, borderColor: '#E1E0D9', fontSize: 12 }}
              formatter={(value: number) => [`${value}`, 'Anomalias']}
            />
            <Bar dataKey="anomalias" radius={[0, 6, 6, 0]} maxBarSize={22}>
              {anomaliesByRegionData.map((entry) => (
                <Cell key={entry.region} fill="#2A78D6" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
