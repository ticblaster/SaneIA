import {
  Map,
  ClipboardList,
  ShieldCheck,
  BrainCircuit,
  Target,
  HardHat,
  ArrowRight,
  ArrowDown,
  FlaskConical,
  Network,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import { radarConceptualAttributes } from '../data/scope-data';

const mvpFlow = [
  { icon: Map, title: 'Mapa da rede / KMZ', description: 'Base geográfica da rede de distribuição.' },
  { icon: ClipboardList, title: 'OS + pressão + idade/material', description: 'Variáveis operacionais de boa qualidade.' },
  { icon: ShieldCheck, title: 'Qualidade e tratamento dos dados', description: 'Checagem, padronização e confiabilidade.' },
  { icon: BrainCircuit, title: 'Análise e score de risco/prioridade', description: 'Modelo estatístico e de Machine Learning.' },
  { icon: Target, title: 'Mapa de regiões prioritárias', description: 'Visualização das áreas que merecem atenção.' },
  { icon: HardHat, title: 'Apoio à ação em campo', description: 'Direcionamento de equipes e inspeções.' },
];

const supportedFormats = ['CSV', 'XLSX', 'KML', 'KMZ', 'GeoJSON'];

export default function FirstMvpSection() {
  return (
    <section id="primeiro-mvp" className="section-anchor bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Primeiro MVP"
          title="Um recorte claro e incremental para testar o modelo"
          align="center"
          description="O MVP será construído de forma incremental. O primeiro experimento deverá combinar uma base geográfica real com um conjunto reduzido de variáveis operacionais de boa qualidade, permitindo testar se o modelo consegue distinguir regiões com diferentes níveis de prioridade para investigação."
        />

        <div className="mt-14 flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
          {mvpFlow.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-1 flex-col items-stretch lg:flex-row">
                <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-slate-200 bg-brand-mist/40 p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-deep text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold text-brand-deep">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600">{step.description}</p>
                </div>

                {index < mvpFlow.length - 1 && (
                  <div className="flex items-center justify-center py-3 lg:px-2 lg:py-0">
                    <ArrowDown size={20} className="text-brand-blue lg:hidden" aria-hidden="true" />
                    <ArrowRight size={20} className="hidden text-brand-blue lg:block" aria-hidden="true" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-brand-mist/40 p-6 sm:p-8">
          <Badge tone="blue" className="mb-4">
            Radar operacional — fatores conceituais
          </Badge>
          <p className="mb-5 max-w-3xl text-sm leading-relaxed text-slate-600">
            A partir da validação com o setor, o radar operacional passa a considerar, ao menos
            conceitualmente, os fatores abaixo. Nem todos estão implementados como funcionalidades
            reais no protótipo atual.
          </p>
          <ul className="flex flex-wrap gap-2">
            {radarConceptualAttributes.map((attr) => (
              <li
                key={attr}
                className="rounded-full border border-brand-blue/20 bg-white px-3.5 py-1.5 text-xs font-medium text-brand-deep"
              >
                {attr}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
              <Map size={20} aria-hidden="true" />
            </span>
            <h3 className="mb-2 text-sm font-bold text-brand-deep">Camada geográfica</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Camadas geográficas existentes podem ser incorporadas à plataforma, incluindo
              arquivos KML/KMZ, permitindo relacionar trechos da rede com atributos operacionais e
              históricos.
            </p>
            <p className="mt-3 text-xs text-slate-500">Formatos suportados/propostos:</p>
            <ul className="mt-1.5 flex flex-wrap gap-2">
              {supportedFormats.map((format) => (
                <li
                  key={format}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                >
                  {format}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[11px] text-slate-400">
              Formatos conceituais/propostos. O protótipo atual não possui um arquivo KMZ real
              carregado.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
              <Network size={20} aria-hidden="true" />
            </span>
            <h3 className="mb-2 text-sm font-bold text-brand-deep">Integração prevista</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Em ambiente de produção, a integração não deve depender de importações manuais
              recorrentes. A arquitetura prevista contempla sincronização controlada com fontes
              corporativas por mecanismos como APIs, rotinas automatizadas ou camadas de
              integração com acesso restrito.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-brand-navy">
              <span className="rounded-full bg-slate-100 px-2.5 py-1">Sistemas da concessionária</span>
              <ArrowRight size={12} className="text-brand-blue" aria-hidden="true" />
              <span className="rounded-full bg-slate-100 px-2.5 py-1">Camada de integração segura</span>
              <ArrowRight size={12} className="text-brand-blue" aria-hidden="true" />
              <span className="rounded-full bg-slate-100 px-2.5 py-1">SaneIA</span>
              <ArrowRight size={12} className="text-brand-blue" aria-hidden="true" />
              <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-brand-blue">
                Inteligência operacional
              </span>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              Arquitetura prevista, ainda não contratada nem implementada em produção.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-xs font-semibold text-amber-700">
          <FlaskConical size={14} className="shrink-0" aria-hidden="true" />
          Protótipo conceitual com dados 100% sintéticos. Não representa sistemas, dados ou
          operações de nenhuma concessionária.
        </p>
      </div>
    </section>
  );
}
