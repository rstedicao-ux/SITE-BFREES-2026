import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NadaGenerico } from './components/NadaGenerico';
import { Brands } from './components/Brands';
import { Services } from './components/Services';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { BudgetModal } from './components/BudgetModal';

function App() {
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsBudgetOpen(false);
    };
    if (isBudgetOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBudgetOpen]);

  return (
    <div className="bg-brand-black min-h-screen">
      <Header onOpenBudget={() => setIsBudgetOpen(true)} />
      <main>
        <Hero onOpenBudget={() => setIsBudgetOpen(true)} />
        <NadaGenerico onOpenBudget={() => setIsBudgetOpen(true)} />
        <Brands onOpenBudget={() => setIsBudgetOpen(true)} />
        <About onOpenBudget={() => setIsBudgetOpen(true)} />
        <Services />
        <Projects onOpenBudget={() => setIsBudgetOpen(true)} />
        <Contact />
      </main>

      <footer className="bg-brand-black border-t border-white/5 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 font-sans text-sm">© {new Date().getFullYear()} BFrees. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/ag_bfrees" target="_blank" rel="noreferrer" className="text-white/60 hover:text-brand-orange transition-colors">Instagram</a>
            <a href="https://linkedin.com/company/bfrees" target="_blank" rel="noreferrer" className="text-white/60 hover:text-brand-orange transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      <BudgetModal 
        isOpen={isBudgetOpen} 
        onClose={() => setIsBudgetOpen(false)} 
      />
    </div>
  );
}

export default App;
