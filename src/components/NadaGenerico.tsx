import { FC } from 'react';

export const NadaGenerico: FC<{ onOpenBudget: () => void }> = ({ onOpenBudget }) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center border-b border-black/10">
      <div className="max-w-6xl mx-auto w-full text-center flex flex-col items-center">
        {/* Main Heading layout: "nada genérico" in single line or compact stacked */}
        <div className="flex flex-wrap items-baseline justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-1">
          <span className="font-['Jaapokki:Regular','Jaapokki',sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-[105px] text-[#24214d] lowercase leading-none">
            nada
          </span>
          <span className="font-['Jaapokki:Regular','Jaapokki',sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-[105px] text-[#ea8100] lowercase leading-none">
            genérico
          </span>
        </div>

        {/* Subheading: "tudo autêntico" */}
        <p className="font-['Jaapokki_subtract:Regular','Jaapokki subtract',sans-serif] text-4xl sm:text-6xl md:text-7xl lg:text-[90px] text-black lowercase leading-none mb-8">
          tudo autêntico
        </p>

        {/* Action Button */}
        <button
          onClick={onOpenBudget}
          className="px-10 py-2.5 rounded-[45px] border border-black text-black font-['Jaapokki_subtract:Regular','Jaapokki subtract',sans-serif] text-xl sm:text-2xl uppercase hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          ORÇAMENTO
        </button>

        {/* ── Bloco Conheça Nossos Projetos (conforme PDF Pág. 24) ── */}
        <div className="mt-14 pt-12 border-t border-black/10 flex flex-col items-center max-w-4xl text-center">
          <h3 className="font-['Jaapokki:Regular','Jaapokki',sans-serif] text-2xl sm:text-4xl md:text-5xl text-[#ea8100] uppercase tracking-normal leading-[1.1] mb-4">
            Ideias que ganham forma.<br />
            <span className="text-[#24214d]">Marcas que viram experiência.</span>
          </h3>
          <p className="font-['Ubuntu',sans-serif] text-base sm:text-xl text-black/75 max-w-2xl mb-8 leading-relaxed">
            Criamos e produzimos eventos, estandes, ativações e experiências de marca do conceito à execução.
          </p>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ea8100] text-white font-['Ubuntu',sans-serif] font-bold text-sm sm:text-base tracking-wider uppercase hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#ea8100]/25"
          >
            <span>Conheça Nossos Projetos</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};