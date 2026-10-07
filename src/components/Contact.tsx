import { FC, useState, MouseEvent } from 'react';
import imgHomeAddress from '@/imports/SecaoContato-1/d2283a87328b531cc46595e5445ec27dceb8d692.png';
import imgPhone from '@/imports/SecaoContato-1/3d7544a749cbd8ffdff0532284039af4f3476fde.png';
import imgCircledEnvelope from '@/imports/SecaoContato-1/7373deb795614e8047e17e304f216c1893317ff3.png';
import imgGoodQuality from '@/imports/SecaoContato-1/917957039757b99dce1ade014eb3e88daa9b261d.png';

export const Contact: FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="contato" 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-brand-black overflow-hidden py-24 md:py-32 flex items-center justify-center select-none"
    >
      {/* Interactive Background with parallax texture grid and mouse movement light glow */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 0) scale(1.05)`,
        }}
      >
        {/* Particle/Grid Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Dynamic Glow following mouse position */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-brand-orange/20 blur-[120px] transition-all duration-300 pointer-events-none"
          style={{
            left: `calc(50% + ${mousePos.x * 600}px - 300px)`,
            top: `calc(50% + ${mousePos.y * 600}px - 300px)`,
          }}
        />

        {/* Secondary atmospheric ambient orb */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Animated "Get in touch." Heading */}
          <div 
            className="lg:col-span-6 transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0)`,
            }}
          >
            <h2 className="font-['Jaapokki:Regular',sans-serif] text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-normal leading-[0.85] text-white tracking-tight uppercase">
              Get in<br />
              <span className="text-brand-orange drop-shadow-[0_0_25px_rgba(234,129,0,0.4)]">
                touch.
              </span>
            </h2>
            <p className="font-['Ubuntu:Medium',sans-serif] text-white/60 text-lg md:text-xl mt-8 max-w-md">
              Pronto para transformar sua próxima experiência ou evento corporativo em algo verdadeiramente inesquecível?
            </p>
          </div>

          {/* Right Side: Contact Cards Panel based on SecaoContato Figma design */}
          <div 
            className="lg:col-span-6 glass border border-white/10 rounded-[40px] md:rounded-[60px] p-8 sm:p-12 md:p-16 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 15}px, ${mousePos.y * 15}px, 0)`,
            }}
          >
            <div className="space-y-10">
              
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shrink-0 group-hover:border-brand-orange/50 transition-colors">
                  <img src={imgHomeAddress} alt="Address" className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-2xl md:text-3xl text-white mb-2">Address</h3>
                  <p className="font-sans text-white/70 text-lg md:text-xl leading-relaxed">
                    São Paulo, SP<br />
                    Atendimento Global e Presencial
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shrink-0 group-hover:border-brand-orange/50 transition-colors">
                  <img src={imgPhone} alt="Phone" className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-2xl md:text-3xl text-white mb-2">Phone</h3>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="font-sans text-white/70 text-lg md:text-xl hover:text-brand-orange transition-colors">
                    +55 11 99999-9999
                  </a>
                </div>
              </div>

              {/* Mail */}
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shrink-0 group-hover:border-brand-orange/50 transition-colors">
                  <img src={imgCircledEnvelope} alt="Mail" className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-2xl md:text-3xl text-white mb-2">Mail</h3>
                  <a href="mailto:contato@bfrees.com.br" className="font-sans text-white/70 text-lg md:text-xl hover:text-brand-orange transition-colors">
                    contato@bfrees.com.br
                  </a>
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shrink-0 group-hover:border-brand-orange/50 transition-colors">
                  <img src={imgGoodQuality} alt="Follow Us" className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-2xl md:text-3xl text-white mb-3">Follow Us</h3>
                  <div className="flex items-center gap-4">
                    <a 
                      href="https://linkedin.com/company/bfrees" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-white font-sans text-sm hover:bg-brand-orange hover:border-brand-orange transition-all hover:scale-105"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://instagram.com/ag_bfrees" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-white font-sans text-sm hover:bg-brand-orange hover:border-brand-orange transition-all hover:scale-105"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};