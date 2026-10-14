import { FC } from 'react';

export const NadaGenerico: FC<{ onOpenBudget?: () => void }> = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center border-b border-black/10">
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        <h3 className="font-['Jaapokki:Regular','Jaapokki',sans-serif] text-2xl sm:text-4xl md:text-5xl text-[#ea8100] uppercase tracking-normal leading-[1.1] mb-4">
          Ideias que ganham forma.<br />
          <span className="text-[#24214d]">Marcas que viram experiência.</span>
        </h3>
        <p className="font-['Ubuntu',sans-serif] text-base sm:text-xl text-black/75 max-w-2xl leading-relaxed m-0">
          Criamos e produzimos eventos, estandes, ativações e experiências de marca do conceito à execução.
        </p>
      </div>
    </section>
  );
};