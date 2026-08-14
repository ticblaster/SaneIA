import { ShieldAlert, FlaskConical } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { dataReliability, dataQualityIssues } from '../data/dashboard-data';

export default function DataQualitySection() {
  return (
    <section className="bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Qualidade dos dados"
          title="Confiabilidade dos dados"
          description="A priorização deve considerar não apenas o risco operacional, mas também a qualidade das informações que sustentam a análise."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card">
            <span
              className="text-5xl font-bold text-brand-teal"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {dataReliability.score}%
            </span>
            <span className="text-sm font-semibold text-brand-deep">{dataReliability.label}</span>
            <span className="mt-1 text-[11px] text-slate-400">exemplo demonstrativo</span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-brand-deep">
              <ShieldAlert size={18} className="text-amber-500" aria-hidden="true" />
              O que o SaneIA pode conceitualmente identificar
            </h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {dataQualityIssues.map((issue) => (
                <li
                  key={issue}
                  className="rounded-lg bg-brand-mist/60 px-3 py-2 text-xs font-medium text-slate-600"
                >
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 text-center text-xs font-semibold text-amber-700">
          <FlaskConical size={14} className="shrink-0" aria-hidden="true" />
          Indicador conceitual, calculado sobre dados sintéticos.
        </p>
      </div>
    </section>
  );
}
