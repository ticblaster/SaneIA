import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import SolutionFlowIllustration from './illustrations/SolutionFlowIllustration';
import { solutionCapabilities } from '../data/scope-data';

export default function SolutionSection() {
  return (
    <section id="solucao" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solução proposta"
          title="Uma plataforma formada por cinco capacidades integradas"
          align="center"
        />

        <div className="mt-10 rounded-2xl border border-slate-200 bg-brand-mist/60 p-4 sm:p-8">
          <SolutionFlowIllustration />
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {solutionCapabilities.map((capability, index) => (
            <Card as="li" key={capability.title} className="flex flex-col gap-2">
              <span className="text-xs font-bold text-brand-blue">0{index + 1}</span>
              <h3 className="text-sm font-semibold text-brand-deep">{capability.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{capability.description}</p>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
