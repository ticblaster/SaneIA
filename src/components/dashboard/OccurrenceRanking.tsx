import Badge from '../ui/Badge';
import { occurrenceRanking, type Priority } from '../../data/dashboard-data';

const priorityTone: Record<Priority, 'critical' | 'warning' | 'green'> = {
  Alta: 'critical',
  Média: 'warning',
  Baixa: 'green',
};

export default function OccurrenceRanking() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="text-sm font-bold text-brand-deep">Ranking de ocorrências (simulado)</h3>
      <p className="mt-0.5 text-xs text-slate-500">
        Ligações priorizadas pelo modelo, com o principal motivo e a ação recomendada.
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th scope="col" className="py-2 pr-3 font-semibold">Ligação</th>
              <th scope="col" className="py-2 pr-3 font-semibold">Setor</th>
              <th scope="col" className="py-2 pr-3 font-semibold">Consumo atual</th>
              <th scope="col" className="py-2 pr-3 font-semibold">Média histórica</th>
              <th scope="col" className="py-2 pr-3 font-semibold">Variação</th>
              <th scope="col" className="py-2 pr-3 font-semibold">Score</th>
              <th scope="col" className="py-2 pr-3 font-semibold">Prioridade</th>
              <th scope="col" className="py-2 pr-3 font-semibold">Ação recomendada</th>
            </tr>
          </thead>
          <tbody>
            {occurrenceRanking.map((row) => (
              <tr key={row.ligacao} className="border-b border-slate-100 last:border-0">
                <td className="py-2.5 pr-3 font-semibold text-brand-deep">{row.ligacao}</td>
                <td className="py-2.5 pr-3 text-slate-600">{row.setor}</td>
                <td className="py-2.5 pr-3 text-slate-600" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {row.consumoAtual}
                </td>
                <td className="py-2.5 pr-3 text-slate-600" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {row.mediaHistorica}
                </td>
                <td className="py-2.5 pr-3 text-slate-600" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {row.variacao}
                </td>
                <td className="py-2.5 pr-3 text-slate-600" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {row.score}
                </td>
                <td className="py-2.5 pr-3">
                  <Badge tone={priorityTone[row.prioridade]}>{row.prioridade}</Badge>
                </td>
                <td className="py-2.5 pr-3 text-slate-600">{row.acao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500 sm:hidden">
        {occurrenceRanking.slice(0, 2).map((row) => (
          <li key={row.ligacao}>
            <span className="font-semibold text-brand-deep">Ligação {row.ligacao}:</span> {row.motivo}.
            Prioridade {row.prioridade.toLowerCase()}. Ação recomendada: {row.acao.toLowerCase()}.
          </li>
        ))}
      </ul>
    </div>
  );
}
