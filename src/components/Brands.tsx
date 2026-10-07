import { FC, useRef, useEffect, useCallback, useState } from 'react';
import svgPaths from '@/imports/SecaoMarcas-1/svg-2j9j7ags04';
import womanImg from '@/imports/SecaoMarcas-1/cc523b1780c4ce37f8f681ce819c9edd3f0f2357.png';

// ─── Brand cards data ────────────────────────────────────────────────────────
const BRANDS = [
  { name: 'Abras', logo: '/logos/abras.svg' },
  { name: 'CHEP', logo: '/logos/chep.svg' },
  { name: 'Danone', logo: '/logos/danone.svg' },
  { name: 'DFM', logo: '/logos/dfm.svg' },
  { name: 'Giovanna Baby', logo: '/logos/giovanna-baby.svg' },
  { name: 'HBR', logo: '/logos/hbr.svg' },
  { name: 'Medison', logo: '/logos/medison.png' },
  { name: 'Midea Carrier', logo: '/logos/midea-carrier.svg' },
  { name: 'Nomad', logo: '/logos/nomad.svg' },
  { name: 'PepsiCo', logo: '/logos/pepsico.svg' },
  { name: 'Grupo Santa Cruz', logo: '/logos/santa-cruz.svg' },
  { name: 'Sherwin Williams', logo: '/logos/sherwin-williams.svg' },
  { name: 'Suvinil', logo: '/logos/suvinil.svg' },
  { name: 'Venâncio', logo: '/logos/venancio.svg' },
];

// ─── Auto step carousel (leves pausas no card da frente, sem interação de mouse) ───
function useAutoStepCarousel(count: number) {
  const [displayPos, setDisplayPos] = useState(0);

  useEffect(() => {
    let animId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    let currentPos = 0;
    const HOLD_TIME = 2300;       // Pausa / trava no card da frente por 2.3s
    const TRANSITION_TIME = 950;  // Transição leve e suave de 950ms

    // Easing suave (easeInOutCubic) para movimento leve
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateToNext = () => {
      const startPos = currentPos;
      const targetPos = currentPos + 1;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / TRANSITION_TIME);
        const eased = easeInOutCubic(progress);

        currentPos = startPos + eased * (targetPos - startPos);
        setDisplayPos(currentPos);

        if (progress < 1) {
          animId = requestAnimationFrame(step);
        } else {
          currentPos = targetPos;
          setDisplayPos(targetPos);
          timeoutId = setTimeout(animateToNext, HOLD_TIME);
        }
      };

      animId = requestAnimationFrame(step);
    };

    timeoutId = setTimeout(animateToNext, HOLD_TIME);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timeoutId);
    };
  }, [count]);

  return { displayPos };
}

// ─── 3D Card Carousel ─────────────────────────────────────────────────────────
interface CarouselProps {
  onOpenBudget: () => void;
}

const BrandCarousel: FC<CarouselProps> = ({ onOpenBudget }) => {
  const COUNT = BRANDS.length;
  const { displayPos } = useAutoStepCarousel(COUNT);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Render 5 visible card slots: -2, -1, 0, +1, +2
  const SLOTS = [-2, -1, 0, 1, 2];

  return (
    <div
      ref={containerRef}
      className="select-none"
      style={{
        position: 'absolute',
        left: 620,
        top: 560,
        width: 1300,
        height: 360,
        perspective: '1200px',
        perspectiveOrigin: '50% 80%',
      }}
    >
      {SLOTS.map((slot) => {
        // slot=0 is center; actual brand index wraps around
        const fracOffset = displayPos - Math.round(displayPos) + slot;
        const brandIdx = ((Math.round(displayPos) + slot) % COUNT + COUNT) % COUNT;
        const brand = BRANDS[brandIdx];

        // distance from center (signed)
        const dist = fracOffset;
        const absDist = Math.abs(dist);

        // How much to spread cards: center at 50% width = 650px
        const X_SPREAD = 260; // px per slot
        const translateX = dist * X_SPREAD;

        // Z depth: center card pops forward
        const translateZ = absDist < 0.5 ? 60 * (1 - absDist * 2) : -60 * (absDist - 0.5);

        // Y rotation: slight tilt based on position
        const rotateY = -dist * 18;

        // Scale: center = 1, fade out sides
        const scale = Math.max(0.28, 1 - absDist * 0.28);

        // Opacity: fade far sides
        const opacity = Math.max(0.15, 1 - absDist * 0.35);

        // Blur far cards
        const blur = Math.max(0, absDist - 0.4) * 3;

        // Card size
        const isCenter = absDist < 0.3;
        const W = 323;
        const H = 286;

        // Hover tilt
        const isHovered = hoveredIdx === brandIdx && absDist < 0.5;
        const hoverTiltX = 0;
        const hoverTiltY = 0;
        const hoverY = isHovered ? -8 : 0;
        const hoverScale = isHovered ? 1.05 : 1;

        // Shadow depth
        const shadowBlur = isCenter ? 60 : 20 * scale;
        const shadowOpacity = isCenter ? 0.35 : 0.15 * scale;

        // z-index: center in front
        const zIndex = Math.round(100 - absDist * 30);

        // Don't render cards that are too far away
        if (absDist > 2.6) return null;

        return (
          <div
            key={`${slot}-${brandIdx}`}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: W,
              height: H,
              marginLeft: -W / 2,
              marginTop: -H / 2,
              transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY + hoverTiltY}deg) rotateX(${hoverTiltX}deg) translateY(${hoverY}px) scale(${scale * hoverScale})`,
              opacity,
              filter: `blur(${blur}px)`,
              zIndex,
              transition: isHovered ? 'transform 0.15s ease-out' : undefined,
              cursor: 'pointer',
              willChange: 'transform, opacity',
            }}
            onClick={onOpenBudget}
            onMouseEnter={() => setHoveredIdx(brandIdx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Card body */}
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 22,
                background: isCenter
                  ? 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 60%, #efefef 100%)'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.9) 100%)',
                boxShadow: [
                  `0 ${shadowBlur}px ${shadowBlur * 1.5}px rgba(0,0,0,${shadowOpacity})`,
                  isCenter ? '0 2px 8px rgba(234,129,0,0.12)' : '',
                  // Glass specular highlight
                  'inset 0 1px 0 rgba(255,255,255,0.8)',
                ].filter(Boolean).join(', '),
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glass reflection stripe */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-30%',
                width: '70%',
                height: '45%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)',
                borderRadius: '0 0 50% 0',
                pointerEvents: 'none',
              }} />

              {/* Brand Logo (letterings removed as requested) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '36px 32px',
                  opacity: isCenter ? 1 : 0.75,
                  pointerEvents: 'none',
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{
                    maxWidth: '82%',
                    maxHeight: '62%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: isCenter
                      ? 'drop-shadow(0 2px 6px rgba(0,0,0,0.06))'
                      : 'none',
                    transition: 'all 0.2s ease',
                  }}
                  draggable={false}
                />
              </div>

              {/* Center card subtle ambient glow outline */}
              {isCenter && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 22,
                  boxShadow: 'inset 0 0 0 1.5px rgba(254,183,1,0.4)',
                  pointerEvents: 'none',
                }} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ─── Chevron Arrow SVG ────────────────────────────────────────────────────────
function ChevronRight() {
  return (
    <svg width="11.6087" height="17.4131" viewBox="0 0 11.6087 17.4131" fill="none">
      <path d={svgPaths.p2c65b480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.90217" />
    </svg>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export const Brands: FC<{ onOpenBudget: () => void }> = ({ onOpenBudget }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setScale(Math.min(w / 1920, 1.2));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section
      ref={containerRef}
      id="marcas"
      className="w-full overflow-hidden relative"
      style={{ height: 1359 * scale }}
    >
      <div
        className="absolute overflow-hidden"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: 1920,
          height: 1359,
          left: '50%',
          marginLeft: -960,
        }}
      >
        {/* ── Background: orange radial gradient ── */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 8% 60%, #FEB701 0%, #F39102 40%, #E76B02 80%, #c85600 100%)',
          }}
        />

        {/* ── GRADIENT LAYER: all gradients sit behind everything (z-5) ── */}

        {/* Top-edge vignette: inverted fade — opaque orange at top, dissolves downward */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: -1, top: 0, width: 1920, height: 320,
            background: 'linear-gradient(to bottom, #ed8202 0%, rgba(237,130,2,0) 100%)',
            zIndex: 5,
          }}
        />

        {/* Right-edge vignette: rotated gradient creates right-side depth */}
        <div
          className="absolute pointer-events-none overflow-hidden"
          style={{ left: 1625, top: -1, width: 320, height: 1359, zIndex: 15 }}
        >
          <div style={{
            position: 'absolute',
            width: 1359,
            height: 320,
            top: '50%',
            left: '50%',
            marginLeft: -1359 / 2,
            marginTop: -160,
            transform: 'rotate(-90deg)',
            background: 'linear-gradient(to bottom, rgba(237,130,2,0) 0%, #ed8202 100%)',
          }} />
        </div>

        {/* Bottom shadow: "shadow a exportar" — acima da mulher (z:10), abaixo dos cards (z:20) */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: 0, top: 1039, width: 1920, height: 320,
            background: 'linear-gradient(180deg, rgba(237,130,2,0) 0%, rgba(237,130,2,1) 47%)',
            zIndex: 12,
          }}
        />

        {/* ── Decorative curved ribbon (z-6, above gradients) ── */}
        <div className="absolute pointer-events-none" style={{ left: 448, top: 174, width: 1701, height: 750, zIndex: 6 }}>
          <div className="absolute" style={{ inset: '-5.67% -2.5%' }}>
            <svg className="block size-full" fill="none" height="834.997" preserveAspectRatio="none" viewBox="0 0 1786.02 834.997" width="1786.02">
              <path d={svgPaths.p1388db00} stroke="url(#ribbon_grad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="85" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="ribbon_grad" x1="1743.51" x2="42.5075" y1="417.5" y2="417.5">
                  <stop stopColor="#F39800" />
                  <stop offset="1" stopColor="#FEB700" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* ── Woman with hand image (z-10, behind cards z-20) ── */}
        <div className="absolute pointer-events-none" style={{ left: 720, top: 67, width: 1018, height: 1526, zIndex: 10 }}>
          <img
            alt="Mulher com mão estendida"
            className="absolute inset-0 max-w-none size-full"
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            src={womanImg}
          />
        </div>

        {/* ── Headline text (z-30, above everything) ── */}
        <p className="absolute"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: 100,
            lineHeight: 0.97,
            letterSpacing: '-7px',
            color: 'white',
            left: 65,
            top: 450,
            width: 581,
            wordBreak: 'break-word',
            zIndex: 30,
          }}>
          Ideias que <span style={{ color: '#24214d' }}>ganham vida.</span>
        </p>

        {/* ── Body text ── */}
        <p className="absolute"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 500,
            fontSize: 24.857,
            lineHeight: 1.3,
            color: 'white',
            left: 65,
            top: 696,
            width: 455,
            zIndex: 30,
          }}>
          Transformamos estratégias em experiências que conectam marcas e pessoas. Cada projeto é uma história de criatividade, propósito e resultados reais.
        </p>



{/* ── 3D Brand Carousel (z-20, in front of woman z-10) ── */}
        <div className="absolute" style={{ zIndex: 20 }}>
          <BrandCarousel onOpenBudget={onOpenBudget} />
        </div>

        {/* ── Bottom separator lines ── */}
        {[-501, -51, 399].map((offset, i) => (
          <div key={i} className="absolute"
            style={{ left: `calc(50% + ${offset}px)`, top: 1138, height: 158, width: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 30 }}>
            <div style={{ width: 1, height: 158, background: 'white' }} />
          </div>
        ))}

        {/* ── Bottom icon circles with icons from Figma ── */}
        {[
          { left: 120, icon: '/icon-lampada.svg',      iconW: 54, iconH: 65, iconTop: 17, iconLeft: 23 },
          { left: 519, icon: '/icon-negocio.svg',      iconW: 70, iconH: 51, iconTop: 24, iconLeft: 15 },
          { left: 969, icon: '/icon-apresentacao.svg', iconW: 61, iconH: 61, iconTop: 19, iconLeft: 19 },
          { left: 1419, icon: '/icon-coracao.svg',     iconW: 66, iconH: 57, iconTop: 21, iconLeft: 17 },
        ].map(({ left, icon, iconW, iconH, iconTop, iconLeft }, i) => (
          <div key={i} className="absolute" style={{ left, top: 1158, width: 99, height: 99, zIndex: 30 }}>
            <svg width="99" height="99" viewBox="0 0 99 99" fill="none">
              <circle cx="49.5" cy="49.5" r="49" stroke="white" strokeOpacity="0.6" />
            </svg>
            <img
              src={icon}
              alt=""
              draggable={false}
              style={{
                position: 'absolute',
                top: iconTop,
                left: iconLeft,
                width: iconW,
                height: iconH,
                pointerEvents: 'none',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </div>
        ))}

        {/* ── Bottom stats columns ── */}
        {[
          { left: 254, title: 'Criatividade\ncom propósito', body: 'Ideias que eles têm\ne geram impacto real.' },
          { left: 653, title: 'Parcerias que\ntransformam', body: 'Trabalhamos lado a lado com grandes marcas.' },
          { left: 1103, title: 'incomum que\nfalam por si', body: 'Estratégia, execução e resultados mensuráveis.' },
          { left: 1553, title: 'Experiências que ficam na memória', body: 'Criamos momentos que marcam e inspiram.' },
        ].map(({ left, title, body }, i) => (
          <div key={i}>
            <p className="absolute"
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 500,
                fontSize: 24.857,
                lineHeight: 1.3,
                color: 'white',
                left,
                top: 1155,
                width: i === 3 ? 244 : i === 2 ? 193 : 167,
                whiteSpace: 'pre-wrap',
                zIndex: 30,
              }}>
              {title}
            </p>
            <p className="absolute"
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.4,
                color: 'white',
                left,
                top: 1219,
                width: i === 0 ? 182 : 193,
                whiteSpace: 'pre-wrap',
                zIndex: 30,
              }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
