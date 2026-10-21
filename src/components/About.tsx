import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// ─── Animated counter ────────────────────────────────────────────────────────
const Counter: FC<{ end: number; suffix?: string; sep?: boolean }> = ({ end, suffix = '', sep = false }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (!inView) return;
    let start: number, raf: number;
    const dur = 1800;
    const run = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setCount(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [end, inView]);
  const display = sep ? count.toLocaleString('pt-BR') : String(count);
  return <span ref={ref}>{display}{suffix}</span>;
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const About: FC<{ onOpenBudget: () => void }> = ({ onOpenBudget }) => {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setScale(Math.min(w / 1920, 1.2));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const FRAME_H = 2210;

  return (
    <section
      id="sobre"
      className="w-full overflow-hidden relative"
      style={{ height: isMobile ? 'auto' : FRAME_H * scale }}
    >
      {/* ── DESKTOP VIEW (md+) ── */}
      <div
        className="hidden md:block absolute overflow-hidden"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: 1920,
          height: FRAME_H,
          left: '50%',
          marginLeft: -960,
          background: '#FFFFFF',
        }}
      >

        {/* ── 1. HEADER CARD com vídeo de fundo ── */}
        <div style={{
          position: 'absolute', left: 43, top: 38,
          width: 1834, height: 495,
          borderRadius: 36,
          overflow: 'hidden',
          background: '#D9D9D9',
        }}>
          {/* Vídeo principal BFrees Motion */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          >
            <source src="/sobre-nos/video 1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ── 2. IMAGEM ESQUERDA (área da imagem sobre nós) ── */}
        <div style={{
          position: 'absolute', left: 41, top: 638,
          width: 1023, height: 597,
          background: '#D9D9D9', borderRadius: 36,
          overflow: 'hidden',
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/sobre-nos/video 2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ── 3. COLUNA DIREITA ── */}

        <div style={{
          position: 'absolute', left: 1171, top: 705,
          width: 669,
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        }}>
          {/* "About Us" label */}
          <p style={{
            fontFamily: "'Ubuntu', sans-serif", fontWeight: 400, fontSize: 40,
            color: '#000000', margin: 0, whiteSpace: 'nowrap',
          }}>Sobre a Bfrees</p>

          {/* Título */}
          <p style={{
            maxWidth: 669, marginTop: 28,
            fontFamily: "'Ubuntu', sans-serif", fontWeight: 500, fontSize: 64,
            lineHeight: 1.1, color: '#000000', marginBottom: 0, marginLeft: 0, marginRight: 0,
            textWrap: 'balance',
          }}>
            Transformamos estratégia em experiência.
          </p>

          {/* Body text */}
          <p style={{
            width: 669, marginTop: 36,
            fontFamily: "'Ubuntu', sans-serif", fontWeight: 400, fontSize: 22,
            lineHeight: 1.5, color: '#000000', marginBottom: 0, marginLeft: 0, marginRight: 0,
          }}>
            A BFrees é uma produtora de eventos e brand experience que cria experiências
            presenciais para aproximar marcas e pessoas. Atuamos em feiras e estandes, eventos
            corporativos, convenções, lançamentos, exposições e projetos especiais, sempre
            buscando traduzir a essência e os objetivos de cada marca em experiências relevantes
            para o público.
          </p>

          {/* Botão "Contate-nos" */}
          <button
            onClick={onOpenBudget}
            style={{
              marginTop: 36,
              width: 192, height: 47,
              border: '1px solid #000000', borderRadius: 45,
              background: 'transparent', cursor: 'pointer',
              fontFamily: "'Jaapokki subtract', sans-serif", fontWeight: 400, fontSize: 22.95,
              color: '#000000',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            Contate-nos
          </button>
        </div>


        {/* ── 4. OUR SKILLS (Texto de introdução) ── */}
        <p style={{
          position: 'absolute', left: 41, top: 1290,
          width: 800,
          fontFamily: "'Ubuntu', sans-serif", fontWeight: 500, fontSize: 64,
          lineHeight: 1.1, color: '#000000', margin: 0,
        }}>
          Nossa Expertise
        </p>

        <p style={{
          position: 'absolute', left: 41, top: 1380,
          width: 1023,
          fontFamily: "'Ubuntu', sans-serif", fontWeight: 400, fontSize: 25,
          lineHeight: 1.5, color: '#000000', margin: 0,
        }}>
          Para fazer cada projeto acontecer, reunimos diferentes frentes em uma operação
          integrada. Atuamos com cenografia e projetos 3D, produção, tecnologia e audiovisual,
          ativações, hospitalidade, credenciamento e gestão de fornecedores, acompanhando
          todas as etapas para garantir uma entrega consistente do planejamento à operação.
        </p>

        {/* ── 5. BLOCO ROXO/AZUL (#24214D) — renderizado ANTES do card CTA para ficar abaixo ── */}
        <div style={{
          position: 'absolute', left: 0, top: 1948,
          width: 1920, height: 263,
          background: '#24214D',
          zIndex: 0,
        }} />

        {/* ── 6. CTA CARD com vídeo 3 de fundo e conteúdo centralizado ── */}
        <div style={{
          position: 'absolute', left: 43, top: 1550,
          width: 1834, height: 597,
          borderRadius: 36, overflow: 'hidden',
          background: '#111',
          zIndex: 1,
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 47%',
              pointerEvents: 'none',
            }}
          >
            <source src="/sobre-nos/video 3.mov" type="video/quicktime" />
            <source src="/sobre-nos/video 3.mov" type="video/mp4" />
          </video>
          {/* Overlay suave para legibilidade e vivacidade */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)',
          }} />

          {/* Conteúdo harmonizado e centralizado */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 60px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 400,
                fontSize: 40,
                color: '#FFFFFF',
                margin: '0 0 10px 0',
                letterSpacing: '-0.01em',
              }}
            >
              Seu próximo projeto pode começar aqui.
            </p>

            <h3
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 500,
                fontSize: 73.6,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: '#FF8D00',
                margin: '0 0 14px 0',
                maxWidth: 1350,
              }}
            >
              Conte para a gente o desafio, o<br />
              objetivo e onde você quer chegar.
            </h3>

            <p
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 400,
                fontSize: 30,
                lineHeight: 1.25,
                color: '#FFFFFF',
                margin: '0 0 32px 0',
                maxWidth: 1200,
              }}
            >
              A BFrees transforma isso em uma experiência pensada para acontecer de verdade.
            </p>

            <button
              onClick={onOpenBudget}
              style={{
                width: 243,
                height: 47,
                padding: '0 20px',
                border: '1px solid #FFFFFF',
                borderRadius: 45,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                fontFamily: "'Jaapokki subtract', sans-serif",
                fontWeight: 400,
                fontSize: 23,
                color: '#FFFFFF',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FF8D00';
                e.currentTarget.style.borderColor = '#FF8D00';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Fale com a Bfrees
            </button>
          </div>
        </div>



      </div>

      {/* ── MOBILE VIEW (< md): Imagem no topo, texto embaixo ── */}
      <div className="block md:hidden w-full bg-white text-black py-12 px-5">
        {/* 1. Vídeo 1 (Motion principal) */}
        <div className="w-full h-52 sm:h-64 rounded-3xl overflow-hidden bg-black shadow-lg mb-10 relative">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover pointer-events-none">
            <source src="/sobre-nos/video 1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 2. Sobre a Bfrees: Imagem/Vídeo 2 no topo, texto embaixo */}
        <div className="mb-12">
          {/* Imagem / Vídeo 2 no topo */}
          <div className="w-full h-64 sm:h-72 rounded-3xl overflow-hidden bg-[#D9D9D9] shadow-md mb-6 relative">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/sobre-nos/video 2.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Texto embaixo */}
          <div className="text-left">
            <p className="font-['Ubuntu'] font-bold text-xs uppercase tracking-widest text-[#ea8100] mb-2">
              Sobre a Bfrees
            </p>
            <h2 className="font-['Ubuntu'] font-bold text-2xl sm:text-3xl text-black leading-tight mb-4">
              Transformamos estratégia em experiência.
            </h2>
            <p className="font-['Ubuntu'] text-black/80 text-sm sm:text-base leading-relaxed mb-6">
              A BFrees é uma produtora de eventos e brand experience que cria experiências presenciais para aproximar marcas e pessoas. Atuamos em feiras e estandes, eventos corporativos, convenções, lançamentos, exposições e projetos especiais, sempre buscando traduzir a essência e os objetivos de cada marca em experiências relevantes para o público.
            </p>
            <button
              onClick={onOpenBudget}
              className="w-48 h-12 rounded-full border border-black font-['Jaapokki_subtract'] text-lg text-black hover:bg-black hover:text-white transition-colors flex items-center justify-center"
            >
              Contate-nos
            </button>
          </div>
        </div>

        {/* 3. Nossa Expertise */}
        <div className="text-left mb-12 pt-6 border-t border-black/10">
          <h3 className="font-['Ubuntu'] font-bold text-2xl text-black leading-tight mb-3">
            Nossa Expertise
          </h3>
          <p className="font-['Ubuntu'] text-black/80 text-sm sm:text-base leading-relaxed">
            Para fazer cada projeto acontecer, reunimos diferentes frentes em uma operação integrada. Atuamos com cenografia e projetos 3D, produção, tecnologia e audiovisual, ativações, hospitalidade, credenciamento e gestão de fornecedores, acompanhando todas as etapas para garantir uma entrega consistente do planejamento à operação.
          </p>
        </div>

        {/* 4. CTA Card (Card com o vídeo do olho no fundo, textos e botão) */}
        <div className="w-full rounded-3xl overflow-hidden relative bg-[#111] p-6 sm:p-8 text-center text-white shadow-xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-50"
          >
            <source src="/sobre-nos/video 3.mov" type="video/quicktime" />
            <source src="/sobre-nos/video 3.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <p className="font-['Ubuntu'] text-sm sm:text-base text-white/90 mb-2">
              Seu próximo projeto pode começar aqui.
            </p>
            <h4 className="font-['Ubuntu'] font-medium text-xl sm:text-2xl text-[#FF8D00] leading-snug mb-3">
              Conte para a gente o desafio, o objetivo e onde você quer chegar.
            </h4>
            <p className="font-['Ubuntu'] text-xs sm:text-sm text-white/90 leading-relaxed mb-6 max-w-sm">
              A BFrees transforma isso em uma experiência pensada para acontecer de verdade.
            </p>
            <button
              onClick={onOpenBudget}
              className="w-48 h-12 rounded-full border border-white text-white font-['Jaapokki_subtract'] text-base bg-white/10 backdrop-blur-sm hover:bg-[#FF8D00] hover:border-[#FF8D00] transition-colors flex items-center justify-center shadow-lg"
            >
              Fale com a Bfrees
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};