import { FC } from 'react';

export const Hero: FC<{ onOpenBudget: () => void }> = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-end">
      {/* Background Video looping directly from uploaded local MP4 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/video-home.mp4"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>
      </div>

      {/* Floating indicator dots on the right */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-10 pointer-events-none">
        <span className="w-2.5 h-2.5 rounded-full border border-white/80 bg-[#ea8100]"></span>
        <span className="w-2.5 h-2.5 rounded-full border border-white/50"></span>
        <span className="w-2.5 h-2.5 rounded-full border border-white/50"></span>
        <span className="w-2.5 h-2.5 rounded-full border border-white/50"></span>
      </div>
    </section>
  );
};