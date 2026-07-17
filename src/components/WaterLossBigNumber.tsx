import { ExternalLink } from 'lucide-react';
import WaterDrops from './illustrations/WaterDrops';

export default function WaterLossBigNumber() {
  return (
    <section className="bg-brand-deep py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-4">
          <span className="text-8xl font-bold leading-none tracking-tight sm:text-9xl">
            39,5<span className="text-4xl align-top sm:text-5xl">%</span>
          </span>
          <p className="text-xl font-semibold text-blue-100 sm:text-2xl">
            da água potável é perdida nos sistemas de distribuição no Brasil.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-blue-200/80">
            O percentual corresponde ao indicador nacional apresentado no Estudo de Perdas de
            Água 2026, divulgado pelo Instituto Trata Brasil em parceria com a GO Associados, com
            referência a dados do SINISA, ano-base 2024. Este indicador é nacional: não representa
            especificamente Palmas, a BRK Ambiental ou qualquer organização individual.
          </p>
          <a
            href="https://tratabrasil.org.br/reduzir-perdas-de-agua-no-brasil-poderia-abastecer-populacao-maior-que-um-dos-paises-sede-da-copa-do-mundo-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white underline decoration-blue-300/60 underline-offset-4 hover:decoration-white"
          >
            Ler o estudo do Instituto Trata Brasil
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-6">
          <WaterDrops />
          <p className="mt-4 text-center text-xs text-blue-200/70">
            Cada gota representa 1% do volume distribuído. As gotas destacadas simbolizam a fração
            perdida, segundo o indicador nacional citado.
          </p>
        </div>
      </div>
    </section>
  );
}
