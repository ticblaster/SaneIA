import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-teal">{eyebrow}</span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-brand-deep text-balance">{title}</h2>
      {description && <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{description}</p>}
    </div>
  );
}
