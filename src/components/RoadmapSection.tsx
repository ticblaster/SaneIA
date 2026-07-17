import SectionHeading from './ui/SectionHeading';
import { roadmapPhases } from '../data/scope-data';

export default function RoadmapSection() {
  return (
    <section className="bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Roadmap" title="Linha do tempo pretendida" align="center" />

        <ol className="relative mt-14 flex flex-col gap-8 lg:flex-row lg:gap-4">
          <div
            className="absolute left-3 top-0 hidden h-full w-px bg-slate-200 lg:left-0 lg:top-3 lg:h-px lg:w-full"
            aria-hidden="true"
          />
          {roadmapPhases.map((item) => (
            <li key={item.phase} className="relative flex flex-1 gap-4 lg:flex-col lg:gap-3">
              <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue ring-4 ring-brand-mist" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-brand-teal">{item.phase}</span>
                <h3 className="mt-1 text-sm font-bold text-brand-deep">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
