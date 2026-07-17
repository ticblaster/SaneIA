import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { lossEvolutionData } from '../../data/dashboard-data';

export default function LossEvolutionChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="text-sm font-bold text-brand-deep">Evolução do índice de perdas (simulado)</h3>
      <p className="mt-0.5 text-xs text-slate-500">Percentual estimado de perdas ao longo de 12 meses, com meta de referência.</p>
      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={[...lossEvolutionData]} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#E1E0D9" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: '#898781' }}
              axisLine={{ stroke: '#C3C2B7' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#898781' }}
              axisLine={false}
              tickLine={false}
              unit="%"
              domain={[30, 44]}
            />
            <Tooltip
              contentStyle={{ borderRadius: 12, borderColor: '#E1E0D9', fontSize: 12 }}
              formatter={(value: number, name) => [`${value}%`, name === 'perdas' ? 'Perdas estimadas' : 'Meta']}
            />
            <Legend
              formatter={(value) => (value === 'perdas' ? 'Perdas estimadas' : 'Meta')}
              wrapperStyle={{ fontSize: 12 }}
            />
            <Line
              type="monotone"
              dataKey="perdas"
              name="perdas"
              stroke="#2A78D6"
              strokeWidth={2.5}
              dot={{ r: 3, fill: '#2A78D6' }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="meta"
              name="meta"
              stroke="#898781"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
