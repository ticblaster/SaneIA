const TOTAL_DROPS = 100;
const HIGHLIGHTED_DROPS = 40;

function Drop({ highlighted, delay }: { highlighted: boolean; delay: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full animate-fill-drop"
      style={{ animationDelay: `${delay}ms` }}
      aria-hidden="true"
    >
      <path
        d="M12 2C12 2 4 12.8 4 18.2C4 22.1 7.6 25 12 25C16.4 25 20 22.1 20 18.2C20 12.8 12 2 12 2Z"
        fill={highlighted ? '#0B2545' : '#D7E4EC'}
      />
    </svg>
  );
}

export default function WaterDrops() {
  const drops = Array.from({ length: TOTAL_DROPS }, (_, i) => i < HIGHLIGHTED_DROPS);

  return (
    <div
      className="grid grid-cols-10 gap-1.5 sm:gap-2"
      role="img"
      aria-label={`Representação visual de 100 gotas de água, das quais ${HIGHLIGHTED_DROPS} estão destacadas para simbolizar o percentual perdido`}
    >
      {drops.map((highlighted, index) => (
        <div key={index} className="aspect-square">
          <Drop highlighted={highlighted} delay={index * 8} />
        </div>
      ))}
    </div>
  );
}
