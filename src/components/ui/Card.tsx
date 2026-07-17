import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li';
}

export default function Card({ children, className = '', as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-shadow hover:shadow-soft ${className}`}
    >
      {children}
    </Tag>
  );
}
