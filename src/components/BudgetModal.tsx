import { FC } from 'react';

export const BudgetModal: FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"></div>
      
      <div 
        className="relative bg-brand-dark border border-brand-orange/30 rounded-3xl w-full max-w-xl p-8 md:p-12 shadow-[0_0_50px_rgba(234,129,0,0.15)]"
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          onClick={onClose}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <h2 className="font-display font-bold text-4xl text-white mb-2 uppercase">Iniciar Projeto</h2>
        <p className="text-white/60 font-sans mb-8">Conte-nos um pouco sobre a sua ideia e nós entraremos em contato via WhatsApp.</p>

        <form className="space-y-6" onSubmit={(e) => {
          e.preventDefault();
          // Simulating WhatsApp redirect
          window.open('https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20um%20evento.', '_blank');
          onClose();
        }}>
          <div>
            <label className="block text-white/80 font-sans text-sm mb-2">Nome / Empresa</label>
            <input 
              type="text" 
              required
              className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
              placeholder="Digite aqui..."
            />
          </div>
          <div>
            <label className="block text-white/80 font-sans text-sm mb-2">Resumo da Ideia</label>
            <textarea 
              required
              rows={4}
              className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
              placeholder="Tipo de evento, expectativa de público..."
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-brand-orange text-white py-4 rounded-xl font-sans font-bold tracking-wider hover:bg-brand-orange-light transition-all hover:scale-[1.02] active:scale-95"
          >
            ENVIAR PARA WHATSAPP
          </button>
        </form>
      </div>
    </div>
  );
};
