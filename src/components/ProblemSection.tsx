import { AlertTriangle } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { problemCards } from '../data/scope-data';

export default function ProblemSection() {
  return (
    <section id="problema" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contexto e problema"
          title="Dados existem, mas raramente viram prioridade operacional"
          description="Pequenos municípios, SAAEs, autarquias e prestadores locais podem possuir dados relevantes, mas nem sempre contam com uma camada integrada de análise capaz de transformar esses registros em prioridades operacionais explicáveis."
        />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((item) => (
            <Card as="li" key={item} className="flex items-start gap-3">
              <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
