import { FC, useEffect, useState } from 'react';
import { Logo } from './Logo';

export const Header: FC<{ onOpenBudget: () => void }> = ({ onOpenBudget }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-1' : 'bg-transparent py-1'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between" style={{ height: 48 }}>
        <a href="#" className="block w-24 md:w-28">
          <Logo className="w-full h-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-['Jaapokki_subtract:Regular',sans-serif] font-medium text-lg tracking-wider">
          <a href="#projetos" className="hover:text-brand-orange transition-colors">PROJETOS</a>
          <a href="#sobre" className="hover:text-brand-orange transition-colors">SOBRE</a>
          <a href="#contato" className="hover:text-brand-orange transition-colors">CONTATO</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 mr-4">
            <a href="https://instagram.com/ag_bfrees" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com/company/bfrees" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
          <button
            onClick={onOpenBudget}
            className="border-2 border-brand-orange text-brand-orange px-6 py-2 rounded-full font-sans font-semibold text-sm hover:bg-brand-orange hover:text-white transition-colors"
          >
            [ ORÇAMENTO ]
          </button>
        </div>
      </div>
    </header>
  );
};
