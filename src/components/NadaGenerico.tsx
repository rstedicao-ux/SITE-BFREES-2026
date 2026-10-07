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
          className="px-10 py-2.5 rounded-[45px] border border-black text-black font-['Jaapokki_subtract:Regular','Jaapokki subtract',sans-serif] text-xl sm:text-2xl uppercase hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
        >
          ORÇAMENTO
        </button>
      </div>
    </section>
  );
};