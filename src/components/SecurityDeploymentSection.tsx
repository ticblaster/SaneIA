import { KeyRound, Lock, Server, ShieldCheck } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import { securityPrinciples, securityRequirements, deploymentOptions, deploymentNote } from '../data/scope-data';

export default function SecurityDeploymentSection() {
  return (
    <section id="seguranca" className="section-anchor bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integração, segurança e implantação"
          title="Requisitos arquiteturais para operar em um ambiente corporativo"
          description="Estes pontos descrevem a arquitetura prevista e os requisitos de produção — não funcionalidades já implementadas ou certificações já obtidas."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-brand-deep">
              <KeyRound size={20} className="text-brand-blue" aria-hidden="true" />
              Princípios de integração
            </h3>
            <ul className="flex flex-col gap-2.5">
              {securityPrinciples.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-brand-teal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-brand-deep">
              <Lock size={20} className="text-brand-blue" aria-hidden="true" />
              Segurança esperada para produção
            </h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {securityRequirements.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-brand-mist/60 px-3 py-2 text-xs font-medium text-slate-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Badge tone="neutral" className="mb-4">
            Opções de implantação em avaliação
          </Badge>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {deploymentOptions.map((option) => (
              <div key={option.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-deep text-white">
                  <Server size={18} aria-hidden="true" />
                </span>
                <h4 className="mb-1.5 text-sm font-bold text-brand-deep">{option.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">{option.description}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-slate-500">{deploymentNote}</p>
        </div>
      </div>
    </section>
  );
}
