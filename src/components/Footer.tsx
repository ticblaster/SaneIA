import { Logo } from './ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-navy py-10 text-blue-100/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Logo className="[&_span]:!text-white" />
        <p className="max-w-xl text-xs leading-relaxed">
          SaneIA Água é uma proposta em fase de pré-incubação, submetida ao Programa Startup UFT.
          Todo o conteúdo deste hotsite tem caráter demonstrativo e não representa clientes,
          contratos ou resultados já obtidos.
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-7xl px-4 text-[11px] text-blue-200/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} SaneIA Água. Hotsite institucional e protótipo visual.
      </p>
    </footer>
  );
}
