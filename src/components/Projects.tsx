import { FC, useState, useMemo } from 'react';

export type SectorType = 
  | 'Todos' 
  | 'Feiras & Estandes' 
  | 'Eventos Corporativos' 
  | 'Lançamentos & Brand Experience' 
  | 'Convenções' 
  | 'Exposições & Projetos Especiais';

export interface CaseItem {
  id: number;
  title: string;
  category: 'Feiras & Estandes' | 'Eventos Corporativos' | 'Lançamentos & Brand Experience' | 'Convenções' | 'Exposições & Projetos Especiais';
  client: string;
  clientLogo?: string;
  tagline: string;
  desc: string;
  highlight: string;
  signature: string;
  bg: string;
  image: string;
  gallery?: string[];
  videoEmbed?: string;
  videoUrl?: string;
  externalLink?: string;
  externalLinkLabel?: string;
}

const CASES_DATA: CaseItem[] = [
  // ─── 1. Feiras & Estandes ───
  {
    id: 1,
    title: 'Midea Carrier | Equipotel 2026',
    category: 'Feiras & Estandes',
    client: 'Midea Carrier',
    clientLogo: '/logos/midea-carrier.svg',
    tagline: 'Experiência de Marca & Hospitalidade',
    desc: 'Na Equipotel 2026, transformamos a presença da Midea Carrier em uma experiência inspirada na própria jornada da hotelaria: do check-in ao check-out. Criamos um percurso em que o visitante era recebido como hóspede, passava por diferentes ambientes e conhecia as soluções da marca de forma contextualizada. Integramos exposição de produtos, conteúdo, interação, gamificação, hospitalidade e relacionamento, além de catering conectado aos produtos Home Appliance e gifts pensados para prolongar a experiência.',
    highlight: 'Jornada imersiva do check-in ao check-out conectando soluções corporativas a momentos reais da operação hoteleira.',
    signature: 'BFrees | Transformando presença de marca em experiência.',
    bg: '#1a1f2c',
    image: '/cases/case_p03_1.jpg',
    gallery: ['/cases/case_p03_1.jpg', '/cases/case_p03_2.jpg'],
  },
  {
    id: 2,
    title: 'Midea Carrier | Febrava 2025',
    category: 'Feiras & Estandes',
    client: 'Midea Carrier',
    clientLogo: '/logos/midea-carrier.svg',
    tagline: 'Produto, Tecnologia & Experiência Imersiva',
    desc: 'Na Febrava 2025, criamos para a Midea Carrier um espaço pensado para unir produto, tecnologia, conteúdo e experiência em uma das principais feiras do setor de climatização e refrigeração. Além da exposição das soluções da marca, desenvolvemos ativações para aumentar a interação com o público e tornar a visita ao estande mais dinâmica. Entre elas, tivemos um Photo Opportunity personalizado, que gerou mais de 600 registros, e um Plinko interativo, criado para estimular participação e engajamento ao longo da feira. A experiência também ganhou força com conteúdos audiovisuais desenvolvidos especialmente para o espaço, incluindo vídeo anamórfico para painel de LED curvo, vídeos e vinhetas para diferentes telas, integrando comunicação, tecnologia e cenografia em uma mesma narrativa.',
    highlight: 'Vídeo anamórfico em LED curvo, photo opportunity (+600 registros) e ativação com plinko interativo.',
    signature: 'BFrees | Transformando presença de marca em experiência.',
    bg: '#0e243a',
    image: '/cases/case_p02_5.jpg',
    gallery: ['/cases/case_p02_5.jpg', '/cases/case_p04_1.jpg'],
    videoUrl: 'https://vimeo.com/1218131931/357dfa6ff3',
    videoEmbed: 'https://player.vimeo.com/video/1218131931?h=357dfa6ff3',
  },
  {
    id: 3,
    title: 'HAUS DECOR 2026',
    category: 'Feiras & Estandes',
    client: 'Suvinil + Sherwin-Williams',
    clientLogo: '/logos/suvinil.svg',
    tagline: 'Dois Espaços Independentes & Presença de Marca',
    desc: 'Na HAUS DECOR 2026, estivemos presentes com dois projetos distintos: um espaço para a Sherwin-Williams e outro para a Suvinil, cada um desenvolvido a partir do universo, posicionamento e objetivos de cada marca. Criamos dois ambientes independentes, com soluções de cenografia, exposição de produtos, comunicação e relacionamento, buscando traduzir a identidade de cada cliente de forma clara dentro da feira. Mesmo dividindo o mesmo contexto, cada espaço precisava ter personalidade própria e criar uma experiência coerente com a marca que representava.',
    highlight: 'Concepção simultânea de dois estandes autorais de alto padrão para marcas referências do setor.',
    signature: 'BFrees | diferentes marcas, diferentes histórias, experiências pensadas para cada uma.',
    bg: '#2e1c14',
    image: '/cases/case_p05_1.jpg',
    gallery: ['/cases/case_p05_1.jpg', '/cases/case_p02_2.jpg', '/cases/case_p02_3.jpg', '/cases/case_p02_4.jpg'],
    videoUrl: 'https://vimeo.com/1194157252/efd519b48d',
    videoEmbed: 'https://player.vimeo.com/video/1194157252?h=efd519b48d',
  },
  {
    id: 4,
    title: 'Feicon 2026 | Suvinil + Sherwin-Williams',
    category: 'Feiras & Estandes',
    client: 'Suvinil + Sherwin-Williams',
    clientLogo: '/logos/sherwin-williams.svg',
    tagline: 'Estandes Prático & PDV na Maior Feira da Construção',
    desc: 'Na Feicon 2026, fomos responsáveis pelo desenvolvimento e execução dos estandes Prático e PDV, em parceria com Suvinil e Sherwin-Williams. Durante os quatro dias de evento, criamos espaços que foram além da exposição de produtos, combinando cenografia, ativações, conteúdo e soluções de fluxo para proporcionar uma experiência mais dinâmica e fortalecer a presença das marcas dentro da feira. A programação também contou com palestras e conteúdos especiais, ampliando os pontos de contato com o público e criando novas oportunidades de relacionamento ao longo da jornada.',
    highlight: 'Operação integrada com cenografia, fluxo inteligente e palestras nos estandes Prático e PDV.',
    signature: 'BFrees | Transformamos estandes em experiências de marca.',
    bg: '#1f2937',
    image: '/cases/case_p06_1.jpg',
    gallery: ['/cases/case_p06_1.jpg'],
    videoUrl: 'https://vimeo.com/1194156299/81efcde20b',
    videoEmbed: 'https://player.vimeo.com/video/1194156299?h=81efcde20b',
  },
  {
    id: 5,
    title: 'CHEP | Economia Circular',
    category: 'Feiras & Estandes',
    client: 'CHEP',
    clientLogo: '/logos/chep.svg',
    tagline: 'Logística Circular & Sustentabilidade na Prática',
    desc: 'Para a CHEP, criamos uma experiência pensada para transformar um tema técnico — economia circular e logística de pallets — em uma jornada simples, visual e fácil de entender. Ao longo da interação, o visitante acompanhava o percurso de um pallet pela cadeia logística, tomava decisões e conseguia visualizar, na prática, as diferenças entre o modelo linear e o modelo circular, entendendo impactos ligados a transporte, produtividade, redistribuição, custos e reaproveitamento. Conectamos cenografia, narrativa, audiovisual e tecnologia para tornar o conceito claro e memorável.',
    highlight: 'Gamificação didática sobre logística circular conectando cenografia, narrativa e impacto sustentável.',
    signature: 'BFrees | Transformando conteúdos complexos em experiências que aproximam marcas e pessoas.',
    bg: '#253d2f',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'HBR | ABF',
    category: 'Feiras & Estandes',
    client: 'HBR',
    clientLogo: '/logos/hbr.svg',
    tagline: 'Presença Comercial & Relacionamento de Negócios',
    desc: 'Na ABF, criamos para a HBR um espaço pensado para apresentar de forma clara o seu portfólio de empreendimentos e as oportunidades comerciais disponíveis em diferentes ativos administrados pela empresa. Como o público da feira é formado por marcas, franqueadores, investidores e operadores em busca de novos pontos, o estande precisava funcionar não só como presença institucional, mas principalmente como um ambiente de relacionamento e geração de negócios.\n\nOrganizamos a experiência para facilitar a conversa com o público e aproximar potenciais parceiros das possibilidades oferecidas pela HBR. A proposta era transformar informações sobre localização, perfil dos empreendimentos e oportunidades de ocupação em uma apresentação mais acessível, criando um espaço que ajudasse o time comercial a conduzir reuniões, apresentar o portfólio e abrir novas conversas ao longo da feira.\n\nDo conceito do espaço à produção e operação, nosso trabalho foi criar uma presença que traduzisse a atuação da HBR e, ao mesmo tempo, tivesse uma função comercial clara: receber, apresentar, conectar e gerar oportunidades.',
    highlight: 'Espaço funcional para reuniões executivas e apresentação dinâmica de empreendimentos comerciais.',
    signature: 'BFrees | Criamos espaços que aproximam marcas, pessoas e negócios.',
    bg: '#1e2430',
    image: '/cases/case_p08_1.jpg',
    gallery: ['/cases/case_p08_1.jpg'],
    videoUrl: 'https://vimeo.com/1215924109',
    videoEmbed: 'https://player.vimeo.com/video/1215924109',
  },
  {
    id: 7,
    title: 'Farmácias & Negócios | Giovanna Baby',
    category: 'Feiras & Estandes',
    client: 'Giovanna Baby',
    clientLogo: '/logos/giovanna-baby.svg',
    tagline: 'Ativação Sensorial & Exposição Comercial',
    desc: 'No Farmácias & Negócios, criamos para a Giovanna Baby um espaço pensado para aproximar a marca do público da feira e valorizar seu portfólio em um ambiente voltado a relacionamento e oportunidades comerciais. O projeto faz parte do portfólio de estandes da BFrees.\n\nTrabalhamos a presença da marca para que o estande funcionasse como um ponto de exposição, conversa e conexão, equilibrando identidade visual, apresentação dos produtos e áreas destinadas ao contato com visitantes e parceiros.\n\nMais do que estar presente na feira, buscamos criar um espaço capaz de fortalecer a marca, estimular o relacionamento e transformar circulação em oportunidade de negócio.',
    highlight: 'Equilíbrio harmônico entre universo sensorial lúdico e ambiente propício para negociações comerciais.',
    signature: 'BFrees | Criamos espaços para marcas serem vistas, vividas e lembradas.',
    bg: '#33202a',
    image: '/cases/case_p09_1.jpg',
    gallery: ['/cases/case_p09_1.jpg', '/cases/case_p09_2.jpg'],
  },

  // ─── 2. Eventos Corporativos ───
  {
    id: 8,
    title: 'Jantar Febrafar 2026 | Evento Corporativo',
    category: 'Eventos Corporativos',
    client: 'Febrafar',
    tagline: 'Jantar de Gala & Experiência de Relacionamento',
    desc: 'Estivemos presentes no Jantar Febrafar 2026, um encontro voltado a relacionamento, fortalecimento de parcerias e geração de novas oportunidades para o setor.\n\nPara enriquecer a jornada dos convidados, criamos diferentes pontos de experiência ao longo do evento. Desenvolvemos um túnel com backlight, um painel de LED com um globo de LED central como elemento de destaque e um painel de fotos, compondo ambientes pensados para gerar impacto visual, interação e conexão entre pessoas e marcas.\n\nAlém da criação dos espaços, cuidamos da produção e da execução para que cada elemento funcionasse de forma integrada à dinâmica da noite, contribuindo para uma experiência fluida e marcante.\n\nMais do que estar presente em um evento corporativo, buscamos criar pontos de contato que fortaleçam relacionamentos, valorizem a marca e transformem encontros em experiências memoráveis.',
    highlight: 'Túnel cenográfico com backlight, globo de LED centralizado e painel interativo de fotos para os convidados.',
    signature: 'BFrees | Criamos experiências que geram.',
    bg: '#251b35',
    image: '/cases/case_p11_1.jpg',
    gallery: ['/cases/case_p11_1.jpg', '/cases/case_p10_1.jpg'],
  },
  {
    id: 9,
    title: 'Nomad | Evento Corporativo',
    category: 'Eventos Corporativos',
    client: 'Nomad',
    clientLogo: '/logos/nomad.svg',
    tagline: 'All Hands Global & Alinhamento Estratégico',
    desc: 'Para a Nomad, desenvolvemos um evento corporativo pensado para fortalecer relacionamento, criar proximidade com os convidados e transformar o encontro em uma experiência alinhada ao universo da marca. O projeto aparece no portfólio da BFrees dentro da frente de eventos internos/corporativos.\n\nTrabalhamos o evento como uma jornada completa, olhando para a forma como o público seria recebido, como os diferentes momentos aconteceriam e como ambiente, conteúdo, hospitalidade e operação poderiam trabalhar juntos para criar uma experiência fluida e bem executada.\n\nMais do que produzir um encontro, buscamos criar um contexto capaz de gerar conexão, relacionamento e memória de marca, cuidando da experiência do convidado do início ao fim.',
    highlight: 'Jornada corporativa 360° com atmosfera contemporânea, cuidando da experiência do convidado do início ao fim.',
    signature: 'BFrees | Criamos encontros que aproximam marcas e pessoas.',
    bg: '#161e2b',
    image: '/cases/case_p12_1.jpg',
    gallery: ['/cases/case_p12_1.jpg', '/cases/case_p10_2.jpg'],
    videoUrl: 'https://vimeo.com/1194157444/a3618482f7',
    videoEmbed: 'https://player.vimeo.com/video/1194157444?h=a3618482f7',
  },
  {
    id: 10,
    title: 'Stock Car | Sherwin-Williams',
    category: 'Eventos Corporativos',
    client: 'Sherwin-Williams',
    clientLogo: '/logos/sherwin-williams.svg',
    tagline: 'Truck Lounge VIP & Ativação de Paddock',
    desc: 'A BFrees esteve à frente da criação e execução de uma jornada completa para a Sherwin-Williams na Stock Car, com destaque para o exclusivo Truck Lounge, pensado como um hub de relacionamento premium dentro do autódromo.\n\nDo receptivo ao pós-corrida, cada etapa foi planejada de forma integrada, conectando logística, ambientação, hospitalidade, kits personalizados e experiências exclusivas para aproximar a marca de seus convidados.\n\nNo Truck Lounge, o público teve acesso a uma vista privilegiada da pista, bar de drinks, ativações interativas, simuladores e experiências especiais como visita aos boxes, acesso ao grid e meet & greet com grandes nomes do automobilismo.\n\nMais do que um evento, criamos uma plataforma viva de relacionamento entre marca e público, pensada para gerar conexão, valor e memória de marca.',
    highlight: 'Truck Lounge VIP dentro do autódromo com vista privilegiada, bar de drinks, simuladores e acesso ao grid.',
    signature: 'BFrees | Criando experiências que aproximam marcas e pessoas.',
    bg: '#2b1b18',
    image: '/cases/case_p13_1.jpg',
    gallery: ['/cases/case_p13_1.jpg', '/cases/case_p10_3.jpg'],
  },
  {
    id: 11,
    title: 'Campanha Descarte Consciente | Midea Carrier',
    category: 'Eventos Corporativos',
    client: 'Midea Carrier',
    clientLogo: '/logos/midea-carrier.svg',
    tagline: 'Conscientização ESG & Ativação de Colaboradores',
    desc: 'Para a Midea Carrier, transformamos uma mensagem importante sobre o descarte correto de eletroeletrônicos em uma experiência leve, interativa e próxima dos colaboradores.\n\nFomos responsáveis pela concepção, produção e operacionalização da ação, criando um ambiente que combinou conscientização ambiental, exposição de produtos, ativações promocionais e diferentes pontos de engajamento com o público.\n\nAo longo da campanha, diversos eletroeletrônicos e eletrodomésticos foram destinados corretamente para reciclagem e descarte responsável, transformando conscientização em atitude e reforçando, na prática, o compromisso da marca com a sustentabilidade.\n\nMais do que comunicar uma causa, criamos uma experiência capaz de informar, mobilizar e gerar impacto positivo.',
    highlight: 'Ação ESG interna com mecânicas interativas que engajou colaboradores e destinou toneladas de resíduos para reciclagem.',
    signature: 'BFrees | Experiências que conectam propósito, marca e pessoas.',
    bg: '#1b2923',
    image: '/cases/case_p14_1.jpg',
    gallery: ['/cases/case_p14_1.jpg', '/cases/case_p10_4.jpg'],
  },

  // ─── 3. Lançamentos & Brand Experience ───
  {
    id: 12,
    title: 'ColorMix 2027 + Cor do Ano | Sherwin-Williams',
    category: 'Lançamentos & Brand Experience',
    client: 'Sherwin-Williams',
    clientLogo: '/logos/sherwin-williams.svg',
    tagline: 'Jornada Sensorial & Revelação da Cor do Ano: Aipo',
    desc: 'Para o lançamento do ColorMix 2027 + Cor do Ano da Sherwin-Williams, criamos uma jornada de experiências pensada para transformar o universo de cores da marca em algo vivo, sensorial e participativo. O evento reuniu mais de 140 convidados e percorreu diferentes momentos e ambientes ao longo da experiência.\n\nA narrativa passou pelos espaços Renascer, Reviver, Reacender e Reconectar, com ativações que convidavam o público a interagir com o conceito. Em Reviver, por exemplo, os convidados puderam escrever e enviar postais como lembrança da experiência; ao final, 42 cartões foram enviados. Também fizeram parte da jornada conteúdos, momentos de hospitalidade, experiências de cuidado, a participação do Chef Claude Troisgros e a revelação da Cor do Ano 2027: Aipo, que ganhou protagonismo no encerramento. Os convidados ainda receberam uma seleção de brindes personalizados, como lata de tinta, caderno, revista e sacola.\n\nDa concepção à operação, nosso papel foi conectar cenografia, ambientação, ativações, conteúdo, audiovisual, hospitalidade e produção geral em uma única experiência de marca.',
    highlight: 'Quatro salas conceituais imersivas, envio interativo de postais, menu exclusivo por Claude Troisgros e reveal da cor Aipo.',
    signature: 'BFrees | Transformamos conceitos em experiências que as pessoas vivem, registram e levam com elas.',
    bg: '#33231a',
    image: '/cases/case_p16_1.jpg',
    gallery: ['/cases/case_p16_1.jpg', '/cases/case_p15_2.jpg'],
    videoUrl: 'https://vimeo.com/1233495206/64f5ab1ca1',
    videoEmbed: 'https://player.vimeo.com/video/1233495206?h=64f5ab1ca1',
  },
  {
    id: 13,
    title: 'DFM | Festival Interlagos',
    category: 'Lançamentos & Brand Experience',
    client: 'DFM',
    clientLogo: '/logos/dfm.svg',
    tagline: 'Lançamento Nacional, Paddock VIP & Mega Test Drive',
    desc: 'No Festival Interlagos, estivemos à frente de uma operação de grande porte para a DFM (Dongfeng Motor), criando uma experiência completa de lançamento e relacionamento para apresentar a marca ao mercado brasileiro.\n\nO projeto ocupou diferentes frentes do evento: um espaço de aproximadamente 600 m² no paddock, preparado para lançamento oficial, imprensa, convidados e coquetel; um estande de 225 m² na Arena, pensado para exposição, relacionamento e direcionamento do público; e uma área exclusiva de cerca de 1.780 m² para test drive, com percurso off-road e experiências com os veículos da marca.\n\nCuidamos da produção geral, cenografia, montagem, hospitalidade, credenciamento, gestão de fornecedores e operação dos espaços, mobilizando uma equipe com mais de 70 profissionais para fazer toda a jornada acontecer de forma integrada.\n\nMais do que marcar presença no festival, criamos uma plataforma de lançamento, experimentação e relacionamento, permitindo que diferentes públicos conhecessem a DFM não apenas pelo produto, mas pela experiência construída ao redor da marca.',
    highlight: 'Operação integrada de mais de 2.600 m² dividida entre paddock VIP de 600 m², estande de 225 m² e circuito test drive de 1.780 m².',
    signature: 'BFrees | Grandes projetos, múltiplas frentes e uma experiência conectada de ponta a ponta.',
    bg: '#141824',
    image: '/cases/case_p17_1.jpg',
    gallery: ['/cases/case_p17_1.jpg', '/cases/case_p15_1.jpg'],
    videoUrl: 'https://vimeo.com/1233495090/ad90112abb',
    videoEmbed: 'https://player.vimeo.com/video/1233495090?h=ad90112abb',
  },

  // ─── 4. Convenções ───
  {
    id: 14,
    title: 'Convenção Giga X | PepsiCo',
    category: 'Convenções',
    client: 'PepsiCo',
    clientLogo: '/logos/pepsico.svg',
    tagline: 'Convenção Estratégica & Ativação Loja Perfeita',
    desc: 'Na Convenção Giga X da PepsiCo, contribuímos para a realização de um encontro estratégico voltado a vendas, marketing e performance no ponto de venda, reunindo profissionais de diferentes áreas da empresa em torno de um mesmo objetivo: fortalecer a execução comercial e impulsionar resultados.\n\nUm dos principais pilares do evento foi o conceito de “Loja Perfeita”, que trabalha técnicas e soluções para otimizar a experiência de compra e aumentar a eficiência das vendas desde a disposição estratégica dos produtos nas prateleiras até displays, campanhas promocionais e padrões de execução nos diferentes canais.\n\nA convenção também teve um papel importante de treinamento, alinhamento e troca, compartilhando ferramentas e boas práticas para unificar o padrão de excelência da PepsiCo e preparar os times para uma atuação cada vez mais estratégica no mercado.\n\nNosso trabalho foi contribuir para transformar todo esse conteúdo em uma experiência de alto impacto, conectando produção, ambientação, comunicação e operação para que estratégia e engajamento acontecessem no mesmo espaço.',
    highlight: 'Imersão prática no conceito Loja Perfeita e alinhamento de alta performance para a força de vendas nacional da PepsiCo.',
    signature: 'BFrees | Criamos convenções que conectam pessoas, estratégia e resultado.',
    bg: '#19253b',
    image: '/cases/case_p19_1.jpg',
    gallery: ['/cases/case_p19_1.jpg', '/cases/case_p18_1.jpg'],
    videoUrl: 'https://vimeo.com/1071528670',
    videoEmbed: 'https://player.vimeo.com/video/1071528670',
  },
  {
    id: 15,
    title: 'Convenção DNA 2026',
    category: 'Convenções',
    client: 'Convenção DNA',
    tagline: 'Mega Encontro de Liderança, Cultura & Pertencimento',
    desc: 'Na Convenção DNA 2026, criamos uma experiência pensada para ir além do conteúdo e transformar o encontro em um momento de conexão, cultura e pertencimento para mais de 1.800 participantes.\n\nDa plenária aos espaços de convivência, desenvolvemos uma jornada integrada, conectando cenografia, ativações, tecnologia e produção para reforçar a identidade da marca e manter o público envolvido ao longo de toda a experiência.\n\nCada ambiente foi pensado para contribuir com a narrativa do evento, criando diferentes pontos de contato entre conteúdo, pessoas e marca.\n\nMais do que produzir uma convenção, buscamos criar uma experiência capaz de engajar, aproximar e transformar cada detalhe em parte da jornada.',
    highlight: 'Cenografia monumental, tecnologia de ponta e engajamento integrado para mais de 1.800 participantes simultâneos.',
    signature: 'BFrees | Convenções que conectam pessoas, cultura e propósito.',
    bg: '#2d1b22',
    image: '/cases/case_p20_1.jpg',
    gallery: ['/cases/case_p20_1.jpg', '/cases/case_p18_2.jpg'],
  },

  // ─── 5. Exposições & Projetos Especiais ───
  {
    id: 16,
    title: 'BAB | Bienal de Arquitetura Brasileira',
    category: 'Exposições & Projetos Especiais',
    client: 'Suvinil',
    clientLogo: '/logos/suvinil.svg',
    tagline: 'Instalação Imersiva de 30 Dias & Boteco Co(r)existir',
    desc: 'Na Bienal de Arquitetura Brasileira, transformamos ideias em experiências reais ao lado da Suvinil e parceiros, em uma jornada imersiva que permaneceu ativa por 30 dias, conectando arquitetura, cor e vivência.\n\nAo longo do projeto, diferentes espaços convidavam o público a experimentar a cor de novas formas. Entre os destaques estavam as experiências Criar, Brincar, Sentir e Respirar, um espaço instagramável e o Boteco Co(r)existir.\n\nDos pavilhões ao boteco, a cor conduziu a narrativa, criando atmosferas, contando histórias e aproximando as pessoas do universo da marca.\n\nA BFrees atuou como parceira estratégica em toda a jornada, da viabilização à execução, conectando equipes, transformando ideias em soluções e garantindo que cada detalhe ganhasse forma ao longo da experiência.',
    highlight: 'Espaço conceitual com 30 dias contínuos de ativação, pavilhões sensoriais e o Boteco Co(r)existir.',
    signature: 'BFrees | Projetos especiais que transformam conceito em experiência.',
    bg: '#2e261f',
    image: '/cases/case_p22_1.jpg',
    gallery: ['/cases/case_p22_1.jpg', '/cases/case_p22_2.jpg'],
    externalLink: 'https://www.instagram.com/p/DYDQIYomrEU/',
    externalLinkLabel: 'Ver Reels no Instagram',
  },
];

const SECTORS: { key: SectorType; label: string }[] = [
  { key: 'Todos', label: 'Todos' },
  { key: 'Feiras & Estandes', label: 'Feiras & Estandes' },
  { key: 'Eventos Corporativos', label: 'Eventos Corporativos' },
  { key: 'Lançamentos & Brand Experience', label: 'Lançamentos' },
  { key: 'Convenções', label: 'Convenções' },
  { key: 'Exposições & Projetos Especiais', label: 'Projetos Especiais' },
];

export const Projects: FC<{ onOpenBudget?: () => void }> = ({ onOpenBudget }) => {
  const [selectedSector, setSelectedSector] = useState<SectorType>('Todos');
  const [selectedProject, setSelectedProject] = useState<CaseItem | null>(null);
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'photo'>('video');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  // Filtered cases based on sector
  const filteredCases = useMemo(() => {
    if (selectedSector === 'Todos') return CASES_DATA;
    return CASES_DATA.filter((item) => item.category === selectedSector);
  }, [selectedSector]);

  // Sector counts
  const sectorCounts = useMemo(() => {
    const counts: Record<SectorType, number> = {
      Todos: CASES_DATA.length,
      'Feiras & Estandes': 0,
      'Eventos Corporativos': 0,
      'Lançamentos & Brand Experience': 0,
      'Convenções': 0,
      'Exposições & Projetos Especiais': 0,
    };
    CASES_DATA.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleOpenProject = (proj: CaseItem) => {
    setSelectedProject(proj);
    setActiveMediaTab(proj.videoEmbed ? 'video' : 'photo');
    setActivePhotoIndex(0);
  };

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
              onClick={() => handleOpenProject(proj)}
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
                  {/* Category & Tagline Badge */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <span
                      className="text-[11px] sm:text-xs font-ubuntu font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-colors duration-300 bg-white/15 text-white/90 group-hover:bg-[#ea8100] group-hover:text-white"
                    >
                      {proj.category}
                    </span>
                    {proj.videoEmbed && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-ubuntu font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#ea8100]/90 text-white shadow-sm">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Vídeo do Case
                      </span>
                    )}
                    <span
                      className="text-xs sm:text-sm font-ubuntu transition-colors duration-300 text-white/70 group-hover:text-white/80"
                    >
                      • {proj.tagline}
                    </span>
                  </div>

                  {/* Main Case Title */}
                  <h3
                    className="font-jaapokki uppercase leading-[0.95] tracking-tight sm:tracking-[-2px] lg:tracking-[-3px] transition-colors duration-300 m-0 text-white text-3xl sm:text-5xl md:text-6xl lg:text-[70px]"
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>

          <div
            className="relative bg-[#080711] border border-white/15 rounded-3xl w-full max-w-6xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-40 w-11 h-11 flex items-center justify-center bg-black/80 border border-white/20 text-white rounded-full hover:bg-[#ea8100] transition-colors cursor-pointer"
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Media Presentation (Left Column) */}
            <div className="w-full lg:w-1/2 bg-black flex flex-col justify-between relative overflow-hidden">
              {/* Media Switcher Tab (when project has both video and photos) */}
              {selectedProject.videoEmbed && selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="p-3 bg-black/60 border-b border-white/10 flex items-center gap-2 z-20">
                  <button
                    onClick={() => setActiveMediaTab('video')}
                    className={`px-4 py-1.5 rounded-full text-xs font-ubuntu font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeMediaTab === 'video'
                        ? 'bg-[#ea8100] text-white shadow-md'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Vídeo do Case
                  </button>
                  <button
                    onClick={() => setActiveMediaTab('photo')}
                    className={`px-4 py-1.5 rounded-full text-xs font-ubuntu font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeMediaTab === 'photo'
                        ? 'bg-[#ea8100] text-white shadow-md'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    Fotos ({selectedProject.gallery.length})
                  </button>
                </div>
              )}

              {/* Main Media Player / Photo */}
              <div className="flex-1 flex items-center justify-center relative min-h-[320px] md:min-h-[420px] bg-black">
                {activeMediaTab === 'video' && selectedProject.videoEmbed ? (
                  <div className="w-full h-full aspect-video flex items-center justify-center bg-black">
                    <iframe
                      src={selectedProject.videoEmbed}
                      className="w-full h-full min-h-[320px] md:min-h-[420px] border-0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={selectedProject.title}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={
                        selectedProject.gallery && selectedProject.gallery.length > 0
                          ? selectedProject.gallery[activePhotoIndex] || selectedProject.image
                          : selectedProject.image
                      }
                      className="w-full h-full object-cover min-h-[340px] max-h-[500px]"
                      alt={selectedProject.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                )}
              </div>

              {/* Gallery Thumbnails Strip (if photos exist and more than 1) */}
              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <div className="p-3 bg-black/80 border-t border-white/10 flex items-center gap-2 overflow-x-auto z-10">
                  {selectedProject.gallery.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveMediaTab('photo');
                        setActivePhotoIndex(idx);
                      }}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activeMediaTab === 'photo' && activePhotoIndex === idx
                          ? 'border-[#ea8100] scale-105'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgSrc} className="w-full h-full object-cover" alt="" />
                    </button>
                  ))}
                </div>
              )}

              {/* Sector Badge */}
              <div className="p-4 bg-[#080711] border-t border-white/10 text-white/90 text-xs font-ubuntu flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ea8100]"></span>
                  <span>Setor: <strong>{selectedProject.category}</strong></span>
                </div>
                {selectedProject.externalLink && (
                  <a
                    href={selectedProject.externalLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#ea8100] hover:text-white font-ubuntu font-bold transition-colors"
                  >
                    <span>{selectedProject.externalLinkLabel || 'Ver Mídia Externa'}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Technical Sheet & Content (Right Column) */}
            <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between bg-[#121029]">
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="inline-block px-3.5 py-1 rounded-full text-[#ea8100] border border-[#ea8100]/40 bg-[#ea8100]/10 text-xs font-ubuntu font-bold tracking-widest uppercase">
                    FICHA TÉCNICA DO CASE
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

                <h2 className="text-2xl sm:text-4xl font-jaapokki text-white mb-2 leading-tight uppercase">
                  {selectedProject.title}
                </h2>
                
                <h3 className="text-sm sm:text-base text-[#ea8100] font-ubuntu font-medium mb-5">
                  Cliente: <span className="text-white">{selectedProject.client}</span>
                </h3>

                <div className="space-y-4 text-white/80 font-ubuntu text-sm sm:text-base leading-relaxed mb-6">
                  <div className="space-y-3 text-white/90 font-normal leading-relaxed">
                    {selectedProject.desc.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph.trim()}</p>
                    ))}
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs uppercase tracking-wider text-[#ea8100] font-bold mb-1">Destaque de Entrega:</p>
                    <p className="text-white/85 text-sm">{selectedProject.highlight}</p>
                  </div>

                  {/* Assinatura oficial do Case conforme PDF */}
                  <div className="p-3.5 rounded-xl bg-[#ea8100]/10 border border-[#ea8100]/30">
                    <p className="text-xs sm:text-sm text-[#ea8100] font-ubuntu font-medium italic m-0">
                      "{selectedProject.signature}"
                    </p>
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
                    className="w-full sm:w-auto flex-1 bg-[#ea8100] hover:bg-[#ff941a] text-white px-6 py-3 rounded-full font-ubuntu font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#ea8100]/30 text-center cursor-pointer"
                  >
                    SOLICITAR PROJETO SIMILAR
                  </button>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-ubuntu text-sm font-semibold transition-all text-center cursor-pointer"
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
