import { Users2, Lightbulb, ArrowRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';

export default function SectorValidationSection() {
  return (
    <section id="validacao-setor" className="section-anchor bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Badge tone="green" className="mb-4">
          Validação do problema
        </Badge>
        <SectionHeading title="Uma primeira rodada de validação técnica já foi realizada" />

        <div className="mt-8 flex flex-col gap-5">
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <Users2 size={20} aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Em agosto de 2026, o conceito do SaneIA foi discutido em uma reunião de validação com
              profissionais das áreas de operação, eletromecânica, analytics e inteligência de
              dados de uma concessionária de saneamento atuante no Tocantins. A conversa reforçou
              uma oportunidade central: dados operacionais já existem, mas transformá-los em
              informação útil para priorização e tomada de decisão continua sendo um desafio
              relevante.
            </p>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
              <Lightbulb size={20} aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Um dos principais aprendizados foi que, antes da gestão de perdas, existe a gestão de
              serviços. Ordens de serviço, histórico de intervenções, características da rede e
              condições hidráulicas formam a base para análises mais inteligentes — e passaram a
              orientar as variáveis consideradas pelo protótipo.
            </p>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-dashed border-brand-blue/30 bg-white/60 p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-fog text-brand-teal">
              <ArrowRight size={20} aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-slate-600">
              Há interesse em dar continuidade à validação com uma nova rodada técnica junto a
              profissionais do setor. Isso ainda não configura parceria firmada, cliente ou piloto
              contratado — é a etapa natural de aprofundamento de uma hipótese que se mostrou
              relevante na prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
