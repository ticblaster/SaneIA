export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      className="h-auto w-full max-w-xl"
      role="img"
      aria-label="Ilustração de uma rede de abastecimento de água conectada a um motor de inteligência artificial e a um painel de decisão"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAF1F5" />
          <stop offset="100%" stopColor="#F4F8FA" />
        </linearGradient>
        <linearGradient id="hero-tank" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B8CDE" />
          <stop offset="100%" stopColor="#0B2545" />
        </linearGradient>
        <linearGradient id="hero-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1BAF9A" />
          <stop offset="100%" stopColor="#2A78D6" />
        </linearGradient>
      </defs>

      <rect width="560" height="420" rx="24" fill="url(#hero-sky)" />

      {/* Reservatório */}
      <g>
        <rect x="40" y="120" width="90" height="110" rx="10" fill="url(#hero-tank)" />
        <rect x="40" y="120" width="90" height="18" rx="9" fill="#0B2545" />
        <text x="85" y="184" textAnchor="middle" fontSize="11" fill="#EAF1F5" fontWeight="600">
          Reservatório
        </text>
      </g>

      {/* Tubulações */}
      <path
        d="M130 190 H230 V150 H330 V210 H430"
        fill="none"
        stroke="#9DB6C6"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M130 190 H230 V150 H330 V210 H430"
        fill="none"
        stroke="url(#hero-flow)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="6 10"
        className="animate-draw-line"
        style={{ strokeDasharray: 1000, strokeDashoffset: 0 }}
      />

      {/* Hidrômetros */}
      <g aria-hidden="true">
        <circle cx="230" cy="150" r="9" fill="#fff" stroke="#0E7C86" strokeWidth="2.5" />
        <circle cx="330" cy="210" r="9" fill="#fff" stroke="#0E7C86" strokeWidth="2.5" />
      </g>

      {/* Ponto de vazamento */}
      <g>
        <circle cx="230" cy="150" r="16" fill="#E34948" opacity="0.12" />
        <path d="M230 158 q6 8 0 14 q-6 -6 0 -14 Z" fill="#E34948" />
      </g>

      {/* Casas / hidrômetros finais */}
      <g fill="#8FA6B5">
        <rect x="420" y="196" width="22" height="20" rx="3" />
        <rect x="420" y="150" width="22" height="20" rx="3" />
      </g>

      {/* Fluxo de dados até o motor de ML */}
      <path
        d="M442 160 C 470 150, 470 110, 500 100"
        fill="none"
        stroke="#2A78D6"
        strokeWidth="2.5"
        strokeDasharray="4 6"
      />
      <path
        d="M442 206 C 470 200, 470 130, 500 105"
        fill="none"
        stroke="#1BAF9A"
        strokeWidth="2.5"
        strokeDasharray="4 6"
      />

      {/* Motor de Machine Learning */}
      <g transform="translate(455, 50)">
        <rect width="90" height="70" rx="14" fill="#0B2545" />
        <g stroke="#8FE0CC" strokeWidth="1.4" opacity="0.9">
          <line x1="20" y1="45" x2="45" y2="25" />
          <line x1="45" y1="25" x2="70" y2="45" />
          <line x1="45" y1="25" x2="45" y2="52" />
          <line x1="20" y1="45" x2="45" y2="52" />
          <line x1="70" y1="45" x2="45" y2="52" />
        </g>
        <circle cx="20" cy="45" r="3" fill="#8FE0CC" />
        <circle cx="70" cy="45" r="3" fill="#8FE0CC" />
        <circle cx="45" cy="25" r="3" fill="#EAFBF4" />
        <circle cx="45" cy="52" r="3.4" fill="#EAFBF4" />
        <text x="45" y="-8" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0B2545">
          Motor de ML
        </text>
      </g>

      {/* Painel de decisão */}
      <g transform="translate(150, 260)">
        <rect width="300" height="120" rx="16" fill="#FFFFFF" stroke="#DCE7EF" strokeWidth="1.5" />
        <text x="18" y="26" fontSize="12" fontWeight="700" fill="#0B2545">
          Painel de decisão (demonstrativo)
        </text>
        <rect x="18" y="38" width="70" height="58" rx="8" fill="#F4F8FA" />
        <polyline
          points="24,84 34,70 44,76 54,58 62,66 80,48"
          fill="none"
          stroke="#2A78D6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g>
          <rect x="100" y="38" width="182" height="16" rx="8" fill="#FDEDED" />
          <rect x="100" y="38" width="130" height="16" rx="8" fill="#E34948" opacity="0.75" />
          <text x="106" y="50" fontSize="9" fill="#7A1F1F" fontWeight="600">
            Setor Norte: prioridade alta
          </text>
        </g>
        <g>
          <rect x="100" y="60" width="182" height="16" rx="8" fill="#FFF6E5" />
          <rect x="100" y="60" width="90" height="16" rx="8" fill="#EDA100" opacity="0.8" />
          <text x="106" y="72" fontSize="9" fill="#6B4A00" fontWeight="600">
            Jardim Central: prioridade média
          </text>
        </g>
        <g>
          <rect x="100" y="82" width="182" height="16" rx="8" fill="#EAF9F1" />
          <rect x="100" y="82" width="52" height="16" rx="8" fill="#1BAF7A" opacity="0.8" />
          <text x="106" y="94" fontSize="9" fill="#0F5132" fontWeight="600">
            Região Oeste: prioridade baixa
          </text>
        </g>
      </g>

      {/* Conector do motor até o painel */}
      <path
        d="M500 120 C 480 200, 400 240, 340 260"
        fill="none"
        stroke="#0E7C86"
        strokeWidth="2.5"
        strokeDasharray="4 6"
      />
    </svg>
  );
}
