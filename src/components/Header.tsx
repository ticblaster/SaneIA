import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui/Logo';

const navItems = [
  { href: '#problema', label: 'Problema' },
  { href: '#solucao', label: 'Solução' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#painel', label: 'Painel' },
  { href: '#escopo', label: 'Escopo' },
  { href: '#validacao', label: 'Validação' },
  { href: '#equipe', label: 'Equipe' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? 'bg-white/90 shadow-card backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#topo" className="focus-ring rounded-lg">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#painel"
            className="focus-ring inline-flex items-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-brand-deep"
          >
            Conhecer o MVP
          </a>
        </div>

        <button
          type="button"
          className="focus-ring rounded-lg p-2 text-brand-deep lg:hidden"
          aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Navegação principal móvel"
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="focus-ring block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-mist"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#painel"
                onClick={() => setMenuOpen(false)}
                className="focus-ring block rounded-full bg-brand-blue px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Conhecer o MVP
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
