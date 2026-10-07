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
  useEffect(() => {
    const update = () => setScale(Math.min(window.innerWidth / 1920, 1.2));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const FRAME_H = 2210;

  return (
    <section
      id="sobre"
      className="w-full overflow-hidden relative"
      style={{ height: FRAME_H * scale }}
    >
      <div
        className="absolute overflow-hidden"
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

        {/* "About Us" label */}
        <p style={{
          position: 'absolute', left: 1171, top: 705,
          width: 183,
          fontFamily: "'Ubuntu', sans-serif", fontWeight: 400, fontSize: 40,
          color: '#000000', margin: 0,
        }}>About Us</p>

        {/* "We Always Make The Best" */}
        <p style={{
          position: 'absolute', left: 1171, top: 780,
          width: 598,
          fontFamily: "'Ubuntu', sans-serif", fontWeight: 500, fontSize: 64,
          lineHeight: 1.1, color: '#000000', margin: 0,
        }}>
          We Always Make The Best
        </p>

        {/* Body text */}
        <p style={{
          position: 'absolute', left: 1171, top: 963,
          width: 669,
          fontFamily: "'Ubuntu', sans-serif", fontWeight: 400, fontSize: 22,
          lineHeight: 1.5, color: '#000000', margin: 0,
        }}>
          A BFrees (Onze30) não é apenas uma produtora; somos um estúdio
          criativo focado em imersão. Nossa estrutura nos permite desenhar
          soluções sob medida, com fluidez entre conceito e execução, sempre
          guiados pela estética e pelo propósito.
        </p>

        {/* Botão "Contate-nos" */}
        <button
          onClick={onOpenBudget}
          style={{
            position: 'absolute', left: 1171, top: 1150,
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

        {/* ── 4. OUR SKILLS (Texto de introdução) ── */}
        <p style={{
          position: 'absolute', left: 41, top: 1290,
          width: 800,
          fontFamily: "'Ubuntu', sans-serif", fontWeight: 500, fontSize: 64,
          lineHeight: 1.1, color: '#000000', margin: 0,
        }}>
          Our Skills
        </p>

        <p style={{
          position: 'absolute', left: 41, top: 1380,
          width: 1023,
          fontFamily: "'Ubuntu', sans-serif", fontWeight: 400, fontSize: 25,
          lineHeight: 1.5, color: '#000000', margin: 0,
        }}>
          Cada entrega reflete a excelência técnica e criativa que construímos
          ao longo de anos de mercado, sempre buscando superar expectativas e
          entregar resultados que movimentam marcas.
        </p>

        {/* ── 5. BLOCO ROXO/AZUL (#24214D) — renderizado ANTES do card CTA para ficar abaixo ── */}
        <div style={{
          position: 'absolute', left: 0, top: 1948,
          width: 1920, height: 263,
          background: '#24214D',
          zIndex: 0,
        }} />

        {/* ── 6. CTA CARD com vídeo 3 de fundo e texto BRANCO ── */}
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
          {/* Overlay suave para legibilidade com vivacidade */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)',
          }} />
        </div>

        {/* "Hire Us Now" — texto BRANCO sobre card */}
        <p style={{
          position: 'absolute',
          left: 477, top: 1655,
          width: 966,
          fontFamily: "'Ubuntu', sans-serif",
          fontWeight: 400,
          fontSize: 34,
          textAlign: 'center',
          color: '#FFFFFF',
          margin: 0,
          zIndex: 2,
          letterSpacing: '0.02em',
          textShadow: '0 2px 8px rgba(0,0,0,0.6)',
        }}>
          Hire Us Now
        </p>

        {/* "We Are Always Ready To Take A Perfect Shot" — texto BRANCO */}
        <p style={{
          position: 'absolute',
          left: 477, top: 1720,
          width: 966,
          fontFamily: "'Ubuntu', sans-serif",
          fontWeight: 500,
          fontSize: 62,
          textAlign: 'center',
          lineHeight: 1.15,
          color: '#FFFFFF',
          margin: 0,
          zIndex: 2,
          textShadow: '0 2px 12px rgba(0,0,0,0.7)',
        }}>
          We Are Always Ready To<br />Take A Perfect Shot
        </p>

        {/* Botão "Get Started" — borda e texto BRANCOS */}
        <button
          onClick={onOpenBudget}
          style={{
            position: 'absolute',
            left: 864, top: 1945,
            width: 192, height: 47,
            border: '1px solid #FFFFFF',
            borderRadius: 45,
            background: 'transparent',
            cursor: 'pointer',
            fontFamily: "'Jaapokki subtract', sans-serif",
            fontWeight: 400,
            fontSize: 22.95,
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            transition: 'all 0.3s ease',
          }}
        >
          Get Started
        </button>



      </div>
    </section>
  );
};