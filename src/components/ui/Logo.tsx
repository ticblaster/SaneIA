interface LogoProps {
  className?: string;
  withWordmark?: boolean;
}

export default function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Símbolo SaneIA Água">
      <defs>
        <linearGradient id="drop-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A78D6" />
          <stop offset="100%" stopColor="#0B2545" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill="#F4F8FA" stroke="#DCE7EF" />
      <path
        d="M24 8C24 8 12 23.6 12 32.4C12 39.5 17.4 44 24 44C30.6 44 36 39.5 36 32.4C36 23.6 24 8 24 8Z"
        fill="url(#drop-gradient)"
      />
      <g stroke="#8FE0CC" strokeWidth="1.4" opacity="0.9">
        <line x1="18" y1="30" x2="24" y2="26" />
        <line x1="24" y1="26" x2="30" y2="30" />
        <line x1="24" y1="26" x2="24" y2="34" />
        <line x1="18" y1="30" x2="24" y2="34" />
        <line x1="30" y1="30" x2="24" y2="34" />
      </g>
      <circle cx="18" cy="30" r="2" fill="#8FE0CC" />
      <circle cx="30" cy="30" r="2" fill="#8FE0CC" />
      <circle cx="24" cy="26" r="2" fill="#EAFBF4" />
      <circle cx="24" cy="34" r="2.3" fill="#EAFBF4" />
    </svg>
  );
}

export function Logo({ className = '', withWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-tight text-brand-deep">
            SaneIA <span className="text-brand-blue">Água</span>
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
            proposta para pré-incubação
          </span>
        </span>
      )}
    </span>
  );
}
