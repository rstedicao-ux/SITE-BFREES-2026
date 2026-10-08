import { FC, useState, useMemo } from 'react';

export type SectorType = 'Todos' | 'Estandes' | 'Evento Interno' | 'Convenção' | 'Exposição';

export interface CaseItem {
  id: number;
  title: string;
  category: 'Estandes' | 'Evento Interno' | 'Convenção' | 'Exposição';
  client: string;
  clientLogo?: string;
  tagline: string;
  desc: string;
  highlight: string;
  bg: string;
  image: string;
}

const CASES_DATA: CaseItem[] = [
  // ─── Estandes ───
  {
    id: 1,
    title: 'Midea Febrava 2025',
    category: 'Estandes',
    client: 'Midea Carrier',
    clientLogo: '/logos/midea-carrier.svg',
    tagline: 'Estande Imersivo & Climatização de Alta Performance',
    desc: 'Arquitetura cenográfica imersiva e interativa desenvolvida para a principal feira de refrigeração e climatização da América Latina, destacando inovação e eficiência energética.',
    highlight: 'Estrutura de grande formato com fluxos inteligentes, vitrine tecnológica e áreas dedicadas a negociações corporativas.',
    bg: '#d9d9d9',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Midea Equipotel 2026',
    category: 'Estandes',
    client: 'Midea Carrier',
    clientLogo: '/logos/midea-carrier.svg',
    tagline: 'Soluções Corporativas & Hospitalidade',
    desc: 'Concepção de estande conceito focado no mercado de hotelaria e hospitalidade, unindo requinte arquitetônico, conforto acústico e tecnologia de ponta.',
    highlight: 'Espaços de networking premium, ambientação contemporânea e exposição de portfólio completo.',
    bg: '#b8b8b8',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Haus Decor 2026',
    category: 'Estandes',
    client: 'Haus Decor',
    tagline: 'Design, Arquitetura & Tendências de Decoração',
    desc: 'Cenografia sofisticada com acabamento de alto padrão e materiais selecionados, proporcionando uma experiência estética memorável na feira referência de tendências de acabamento.',
    highlight: 'Composição de volumes inovadores, iluminação cenográfica pontual e forte identidade visual.',
    bg: '#929292',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Feicon 2026',
    category: 'Estandes',
    client: 'Feicon',
    tagline: 'Presença Robusta na Maior Feira da Construção',
    desc: 'Mega estande projetado para alto tráfego de visitantes na referência latino-americana do setor de construção civil e arquitetura.',
    highlight: 'Solução arquitetônica impactante, visibilidade 360° no pavilhão e demonstrações ao vivo.',
    bg: '#474747',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'DFM',
    category: 'Estandes',
    client: 'DFM',
    clientLogo: '/logos/dfm.svg',
    tagline: 'Cenografia Industrial & Presença de Marca',
    desc: 'Estande robusto desenvolvido para o segmento automotivo/industrial, com estética limpa, valorização de veículos e suporte a negociações institucionais.',
    highlight: 'Posicionamento estratégico, acabamentos metálicos modernos e lounge executivo.',
    bg: '#c2c2c2',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'CHEP',
    category: 'Estandes',
    client: 'CHEP',
    clientLogo: '/logos/chep.svg',
    tagline: 'Logística Circular & Sustentabilidade',
    desc: 'Estande sustentável que materializou visualmente o compromisso com a economia circular e a eficiência logística global da CHEP.',
    highlight: 'Narrativa visual eco-consciente, integração de elementos modulares e acolhimento ergonômico.',
    bg: '#707070',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Farme e negócios(giovanna baby)',
    category: 'Estandes',
    client: 'Giovanna Baby',
    clientLogo: '/logos/giovanna-baby.svg',
    tagline: 'Ativação Sensorial & Afetividade de Marca',
    desc: 'Espaço sensorial exclusivo no evento Farme e Negócios, traduzindo o universo lúdico, nostálgico e perfumado característico da marca.',
    highlight: 'Estética instagramável, túnel de aromas e forte conexão emocional com os participantes.',
    bg: '#a4a4a4',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'HBR',
    category: 'Estandes',
    client: 'HBR',
    clientLogo: '/logos/hbr.svg',
    tagline: 'Presença Corporativa & Real Estate',
    desc: 'Estande corporativo refinado criado para apresentação de portfólio imobiliário e reuniões de negócios de alta relevância.',
    highlight: 'Lounge privativo VIP, linhas minimalistas e comunicação assertiva dos empreendimentos.',
    bg: '#3d3d3d',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop',
  },

  // ─── Evento Interno ───
  {
    id: 9,
    title: 'Colormix + cor do ano 2026',
    category: 'Evento Interno',
    client: 'Colormix',
    tagline: 'Reveal da Cor do Ano & Cenografia de Imersão',
    desc: 'Convenção interna e celebração de lançamento da cor do ano, integrando projeções cênicas, instalações cromáticas e experiência envolvente para colaboradores e convidados.',
    highlight: 'Túnel de luzes e cores, palco conceitual e impacto visual cinematográfico.',
    bg: '#d2d2d2',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Campanha de discarte Midea 2026',
    category: 'Evento Interno',
    client: 'Midea Carrier',
    clientLogo: '/logos/midea-carrier.svg',
    tagline: 'Conscientização ESG & Ativação de Equipes',
    desc: 'Campanha corporativa interna voltada ao descarte sustentável e responsabilidade socioambiental, com cenografia interativa e pontos temáticos de descarte criativo.',
    highlight: 'Engajamento de centenas de colaboradores com mecânicas visuais gamificadas.',
    bg: '#878787',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'Jantar Febrafar',
    category: 'Evento Interno',
    client: 'Febrafar',
    tagline: 'Jantar de Gala & Comemoração Institucional',
    desc: 'Ambientação sofisticada para celebração anual com iluminação aconchegante, palco refinado e sonorização impecável para líderes e parceiros.',
    highlight: 'Hospitalidade requintada, roteiro dinâmico e conforto total para homenageados.',
    bg: '#b0b0b0',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 12,
    title: 'Nomad',
    category: 'Evento Interno',
    client: 'Nomad',
    clientLogo: '/logos/nomad.svg',
    tagline: 'All Hands & Experiência Global de Time',
    desc: 'Encontro corporativo integrado para alinhamento estratégico da fintech global Nomad, criando atmosfera tecnológica, moderna e acolhedora.',
    highlight: 'Palco dinâmico para pitchs e premiações, com transmissão híbrida de alta resolução.',
    bg: '#4d4d4d',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 13,
    title: 'Stock Car/Sherwin-Williams',
    category: 'Evento Interno',
    client: 'Sherwin-Williams',
    clientLogo: '/logos/sherwin-williams.svg',
    tagline: 'Hospitalidade VIP & Adrenalina nos Boxes',
    desc: 'Ativação de relacionamento e endomarketing nos boxes da Stock Car, unindo a vibração das pistas com a vivência prática das tintas de alta tecnologia.',
    highlight: 'Lounge exclusivo no paddock, vista privilegiada da pista e ambientação imersiva temática.',
    bg: '#999999',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1920&auto=format&fit=crop',
  },

  // ─── Convenção ───
  {
    id: 14,
    title: 'Venancio',
    category: 'Convenção',
    client: 'Venâncio',
    clientLogo: '/logos/venancio.svg',
    tagline: 'Convenção Nacional de Vendas & Metas',
    desc: 'Mega convenção comercial reunindo forças de vendas de todo o Brasil, com painéis de LED panorâmicos, cenografia motivacional e roteiro eletrizante.',
    highlight: 'Momento de revelação de metas, entrega turnkey de ponta a ponta e efeitos especiais.',
    bg: '#666666',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 15,
    title: 'Convenção Pepsico',
    category: 'Convenção',
    client: 'PepsiCo',
    clientLogo: '/logos/pepsico.svg',
    tagline: 'Convenção Anual de Liderança & Lançamentos',
    desc: 'Estrutura 360° para a convenção estratégica da PepsiCo, conectando centenas de líderes em torno de inovação, cultura de marca e novos produtos.',
    highlight: 'Palco imersivo com telões de LED de última geração e experiências de marca em cada detalhe.',
    bg: '#333333',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1920&auto=format&fit=crop',
  },

  // ─── Exposição ───
  {
    id: 16,
    title: 'BAB | Bienal de Arquitetura Brasileira(Sherwin-Williams)',
    category: 'Exposição',
    client: 'Sherwin-Williams',
    clientLogo: '/logos/sherwin-williams.svg',
    tagline: 'Pavilhão Artístico & Intervenção Arquitetônica',
    desc: 'Espaço conceitual concebido para a Bienal de Arquitetura Brasileira, explorando as cores e a volumetria como agentes transformadores do espaço urbano e do design.',
    highlight: 'Arquitetura efêmera premiada, integração com a comunidade artística e acabamento impecável.',
    bg: '#bfbfbf',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop',
  },
];

const SECTORS: { key: SectorType; label: string }[] = [
  { key: 'Todos', label: 'Todos' },
  { key: 'Estandes', label: 'Estandes' },
  { key: 'Evento Interno', label: 'Evento Interno' },
  { key: 'Convenção', label: 'Convenção' },
  { key: 'Exposição', label: 'Exposição' },
];

export const Projects: FC<{ onOpenBudget?: () => void }> = ({ onOpenBudget }) => {
  const [selectedSector, setSelectedSector] = useState<SectorType>('Todos');
  const [selectedProject, setSelectedProject] = useState<CaseItem | null>(null);

  // Filtered cases based on sector
  const filteredCases = useMemo(() => {
    if (selectedSector === 'Todos') return CASES_DATA;
    return CASES_DATA.filter((item) => item.category === selectedSector);
  }, [selectedSector]);

  // Sector counts
  const sectorCounts = useMemo(() => {
    const counts: Record<SectorType, number> = {
      Todos: CASES_DATA.length,
      Estandes: 0,
      'Evento Interno': 0,
      Convenção: 0,
      Exposição: 0,
    };
    CASES_DATA.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="projetos" className="py-24 sm:py-32 bg-[#e6e6e6] overflow-hidden text-left">
      {/* Top Header & Sector Filters */}
      <div className="px-6 md:px-16 max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[#ea8100] text-xs font-ubuntu font-bold tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ea8100] animate-pulse"></span>
              PORTFÓLIO & EXPERIÊNCIA
            </div>
            <h2 className="font-jaapokki-subtract text-3xl sm:text-5xl lg:text-6xl text-black uppercase tracking-wider m-0 leading-none">
              CASES BFREES
            </h2>
          </div>

          {/* Sector Tabs Filter */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {SECTORS.map(({ key, label }) => {
              const isActive = selectedSector === key;
              const count = sectorCounts[key];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedSector(key)}
                  className={`cursor-pointer px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-ubuntu font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#ea8100] text-white shadow-lg shadow-[#ea8100]/30 scale-105'
                      : 'bg-white/70 text-black/70 hover:bg-white hover:text-black border border-black/10'
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-black/20 text-white' : 'bg-black/5 text-black/60'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cases List */}
      <div className="w-full flex flex-col">
        {filteredCases.map((proj) => {
          return (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-500"
              style={{ backgroundColor: proj.bg }}
            >
              {/* Background Cover Image (always visible) */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                  src={proj.image}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                  alt={proj.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/75 transition-opacity duration-700 group-hover:opacity-85"></div>
              </div>

              {/* Content Row */}
              <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 max-w-[1920px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 pointer-events-none">
                <div className="flex flex-col items-start max-w-4xl">
                  {/* Category & Client Badge */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <span
                      className="text-[11px] sm:text-xs font-ubuntu font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-colors duration-300 bg-white/15 text-white/90 group-hover:bg-[#ea8100] group-hover:text-white"
                    >
                      {proj.category}
                    </span>
                    <span
                      className="text-xs sm:text-sm font-ubuntu transition-colors duration-300 text-white/70 group-hover:text-white/80"
                    >
                      • {proj.tagline}
                    </span>
                  </div>

                  {/* Main Case Title */}
                  <h3
                    className="font-jaapokki uppercase leading-[0.9] tracking-tight sm:tracking-[-3px] lg:tracking-[-4px] transition-colors duration-300 m-0 text-white text-3xl sm:text-5xl md:text-6xl lg:text-[75px]"
                  >
                    {proj.title}
                  </h3>
                </div>

                {/* Right side: Client info / CTA preview */}
                <div className="flex items-center gap-4 self-start md:self-center transition-all duration-300 group-hover:translate-x-2">
                  {proj.clientLogo && (
                    <div className="hidden lg:flex items-center justify-center w-28 h-12 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 group-hover:bg-white/20 transition-all">
                      <img
                        src={proj.clientLogo}
                        alt={proj.client}
                        className="max-h-8 max-w-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                      />
                    </div>
                  )}

                  <div
                    className="flex items-center gap-2 text-xs sm:text-sm font-ubuntu font-bold tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 border-white/30 text-white group-hover:border-[#ea8100] group-hover:bg-[#ea8100] group-hover:text-white"
                  >
                    <span>Ver Case</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>

          <div
            className="relative bg-[#080711] border border-white/15 rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-30 w-11 h-11 flex items-center justify-center bg-black/70 border border-white/10 text-white rounded-full hover:bg-[#ea8100] transition-colors"
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Media Cover */}
            <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full flex items-center justify-center relative overflow-hidden bg-black">
              <img
                src={selectedProject.image}
                className="w-full h-full object-cover min-h-[340px]"
                alt={selectedProject.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080711] via-transparent to-transparent md:hidden"></div>
              
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-white/90 text-xs font-ubuntu flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ea8100]"></span>
                Setor: <strong>{selectedProject.category}</strong>
              </div>
            </div>

            {/* Technical Sheet & Content */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between bg-[#121029]">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-block px-3.5 py-1 rounded-full text-[#ea8100] border border-[#ea8100]/40 bg-[#ea8100]/10 text-xs font-ubuntu font-bold tracking-widest uppercase">
                    FICHA TÉCNICA
                  </div>

                  {selectedProject.clientLogo && (
                    <div className="h-8 max-w-[120px] flex items-center">
                      <img
                        src={selectedProject.clientLogo}
                        alt={selectedProject.client}
                        className="max-h-8 max-w-full object-contain filter brightness-0 invert"
                      />
                    </div>
                  )}
                </div>

                <h2 className="text-3xl sm:text-4xl font-jaapokki text-white mb-2 leading-tight uppercase">
                  {selectedProject.title}
                </h2>
                
                <h3 className="text-base sm:text-lg text-[#ea8100] font-ubuntu font-medium mb-6">
                  Cliente: <span className="text-white">{selectedProject.client}</span>
                </h3>

                <div className="space-y-4 text-white/80 font-ubuntu text-sm sm:text-base leading-relaxed mb-8">
                  <p className="text-white/90 font-medium">{selectedProject.desc}</p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs uppercase tracking-wider text-[#ea8100] font-bold mb-1">Destaque de Entrega:</p>
                    <p className="text-white/80 text-sm">{selectedProject.highlight}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                {onOpenBudget && (
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenBudget();
                    }}
                    className="w-full sm:w-auto flex-1 bg-[#ea8100] hover:bg-[#ff941a] text-white px-6 py-3 rounded-full font-ubuntu font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#ea8100]/30 text-center"
                  >
                    SOLICITAR PROJETO SIMILAR
                  </button>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-ubuntu text-sm font-semibold transition-all text-center"
                >
                  Voltar aos Cases
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
