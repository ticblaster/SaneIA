import SectionHeading from './ui/SectionHeading';
import { explainabilityFactors } from '../data/dashboard-data';

export default function ExplainabilitySection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Explicabilidade" title="Por que este caso foi priorizado?" align="center" />

        <div className="mt-10 rounded-2xl border border-slate-200 bg-brand-mist/50 p-6 sm:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold text-brand-deep">Ligação 004821 · exemplo demonstrativo</span>
            <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-200">
              Score de anomalia: 96
            </span>
          </div>

          <ul className="flex flex-col gap-4">
            {explainabilityFactors.map((item) => (
              <li key={item.factor}>
                <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-slate-700">{item.factor}</span>
                  <span
                    className="shrink-0 text-xs font-semibold text-brand-blue"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {item.weight}%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100" role="presentation">
                  <div
                    className="h-full rounded-full bg-brand-blue"
                    style={{ width: `${item.weight}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600">
          Cada alerta deve apresentar justificativas compreensíveis para que a equipe operacional
          possa avaliar a recomendação antes de agir.
        </p>
      </div>
    </section>
  );
}
