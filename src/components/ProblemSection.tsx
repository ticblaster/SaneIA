import { AlertTriangle, ExternalLink, ListChecks } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { problemEvidenceCards, problemHypothesisCards } from '../data/scope-data';

export default function ProblemSection() {
  return (
    <section id="problema" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contexto e problema"
          title="Perdas persistem, enquanto dados operacionais ainda podem ser melhor aproveitados"
          description={
            <>
              <span className="block">
                O Estudo de Perdas de Água 2026, publicado pelo Instituto Trata Brasil em parceria
                com a GO Associados e baseado em dados do SINISA 2024, aponta que as perdas de água
                decorrem de fatores como vazamentos, falhas operacionais, erros de medição,
                consumos não autorizados e inconsistências cadastrais.
              </span>
              <span className="mt-3 block">
                A SaneIA parte da hipótese de que parte dos operadores possui dados relevantes, mas
                enfrenta dificuldades para integrá-los e transformá-los em prioridades
                operacionais. Essa hipótese será validada por meio de entrevistas com prestadores
                de abastecimento.
              </span>
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <Badge tone="blue" className="mb-4">
              Evidências setoriais
            </Badge>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {problemEvidenceCards.map((item) => (
                <Card as="li" key={item} className="flex items-start gap-3">
                  <ListChecks size={20} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </Card>
              ))}
            </ul>
          </div>

          <div>
            <Badge tone="warning" className="mb-4">
              Hipóteses a validar
            </Badge>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {problemHypothesisCards.map((item) => (
                <Card as="li" key={item} className="flex items-start gap-3">
                  <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </Card>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-xs text-slate-400">
            Fonte setorial: Instituto Trata Brasil e GO Associados. Estudo de Perdas de Água 2026,
            com dados do SINISA 2024.{' '}
            <a
              href="https://tratabrasil.org.br/perdas-de-agua-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1 font-semibold text-brand-blue underline decoration-brand-blue/40 underline-offset-2 hover:decoration-brand-blue"
            >
              Consultar o estudo
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </p>
          <details className="mt-2 text-xs text-slate-400">
            <summary className="cursor-pointer select-none font-medium text-slate-500">
              Equipe técnica do estudo
            </summary>
            <p className="mt-1">Gesner Oliveira, Pedro Scazufca, Thainá Moscão e Pedro Levy Sayon.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
