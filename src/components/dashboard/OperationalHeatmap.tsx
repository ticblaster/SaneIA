import { heatmapData, weeks } from '../../data/dashboard-data';

// Rampa sequencial de um único matiz (azul), do mais claro (baixa intensidade)
// ao mais escuro (alta intensidade), usada apenas para codificar magnitude.
const sequentialSteps = ['#CDE2FB', '#9EC5F4', '#6DA7EC', '#3987E5', '#256ABF', '#184F95', '#0D366B'];

function colorForValue(value: number) {
  const index = Math.min(sequentialSteps.length - 1, Math.floor((value / 100) * sequentialSteps.length));
  return sequentialSteps[index];
}

export default function OperationalHeatmap() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="text-sm font-bold text-brand-deep">Mapa de calor operacional (simulado)</h3>
      <p className="mt-0.5 text-xs text-slate-500">
        Intensidade relativa de ocorrências por setor e semana. Tons mais escuros indicam maior
        concentração de alertas.
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[420px] border-separate border-spacing-1.5 text-xs">
          <thead>
            <tr>
              <th scope="col" className="text-left font-semibold text-slate-500">
                Setor
              </th>
              {weeks.map((week) => (
                <th key={week} scope="col" className="px-1 py-1 text-center font-semibold text-slate-500">
                  {week}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {heatmapData.map((row) => (
              <tr key={row.sector}>
                <th scope="row" className="pr-2 text-left font-medium text-slate-600">
                  {row.sector}
                </th>
                {row.values.map((value, index) => (
                  <td key={index} className="p-0">
                    <div
                      className="flex h-10 w-full items-center justify-center rounded-md text-[11px] font-semibold text-white"
                      style={{ backgroundColor: colorForValue(value) }}
                      title={`${row.sector}, ${weeks[index]}: índice ${value}`}
                    >
                      {value}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
        <span>Menor intensidade</span>
        <div className="flex h-2.5 flex-1 overflow-hidden rounded-full">
          {sequentialSteps.map((step) => (
            <span key={step} className="flex-1" style={{ backgroundColor: step }} />
          ))}
        </div>
        <span>Maior intensidade</span>
      </div>
    </div>
  );
}
