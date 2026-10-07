import { FC } from 'react';

const SERVICES = [
  {
    id: 1,
    title: "PRODUÇÃO DE EVENTOS",
    desc: "Do planejamento à entrega final. Cuidamos de cada detalhe logístico e técnico para garantir que o seu evento seja impecável.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "CRIAÇÃO DE ESTANDES",
    desc: "Transformamos espectadores em participantes ativos. Criamos experiências dinâmicas que geram engajamento real e memórias de marca.",
    img: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "BRAND EXPERIENCE",
    desc: "Cenografia monumental e design de palco. Estruturas imersivas que impressionam visualmente e suportam operações complexas.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "ENDOMARKETING",
    desc: "Registro de alta qualidade. Aftermovies, transmissões ao vivo e fotografia que capturam a verdadeira essência da sua entrega.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  }
];

export const Services: FC = () => {
  return (
    <section className="py-32 bg-black relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="flex flex-col lg:flex-row justify-between mb-20 gap-12">
          <h2 className="font-jaapokki text-[50px] md:text-[80px] lg:text-[100px] text-white uppercase tracking-[-2px] leading-none max-w-lg mb-6 lg:mb-0">
            estratégia criativa
          </h2>
          <p className="font-ubuntu text-white/80 max-w-xl text-lg leading-relaxed pt-4 border-l-2 border-brand-orange pl-8">
            Na Onze30, a estratégia criativa nasce da escuta atenta e da colaboração direta com marcas e agências. Acreditamos que grandes histórias são construídas com clareza de intenção. 
            <br/><br/>
            Somos uma produtora com olhar de agência e atuação full service.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-[1000px] lg:h-[600px]">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group relative flex-1 bg-brand-dark rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:flex-[3] cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <h3 className="font-jaapokki-subtract text-3xl md:text-4xl text-white uppercase tracking-[-2px] mb-2 group-hover:text-brand-orange transition-colors whitespace-pre-wrap leading-tight">
                  {srv.title.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
                </h3>
                
                <div className="h-0 opacity-0 group-hover:h-[120px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-700 ease-out overflow-hidden flex flex-col justify-end">
                  <p className="text-white font-ubuntu text-sm md:text-base leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                  <a 
                    href="#projetos" 
                    className="inline-flex items-center gap-2 text-white bg-white/20 hover:bg-brand-orange px-6 py-2 rounded-full font-jaapokki-subtract text-sm transition-all w-max"
                  >
                    PORTFÓLIO
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
