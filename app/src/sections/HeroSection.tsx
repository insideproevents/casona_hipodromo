import { useEffect, useRef } from 'react';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach((el) => {
          (el as HTMLElement).style.transform = `translateY(${scrollY * 0.5}px)`;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 parallax">
        <img
          src="/images/fachada-frontal.jpg"
          alt="Casona Hipódromo 1808"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A962] to-transparent opacity-60" />
      <div className="absolute top-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A962] to-transparent opacity-60" />
      <div className="absolute bottom-32 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A962] to-transparent opacity-60" />
      <div className="absolute bottom-32 right-10 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A962] to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
        {/* Year Badge */}
        <div className="animate-fade-in mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#C9A962]/50 rounded-full">
            <Calendar className="w-4 h-4 text-[#C9A962]" />
            <span className="font-accent text-lg text-[#C9A962] tracking-wider">
              Desde 1817
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="animate-slide-down font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide">
          <span className="italic text-[#C9A962]">Casona</span>
          <br />
          <span className="text-white">Hipódromo</span>
        </h1>

        {/* Divider */}
        <div className="animate-fade-in flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-[#C9A962]" />
          <span className="text-[#C9A962] text-xl">✦</span>
          <div className="w-16 h-px bg-[#C9A962]" />
        </div>

        {/* Subtitle */}
        <p className="animate-slide-up font-accent text-xl md:text-2xl text-white/90 mb-4 tracking-wide">
          Inmueble Histórico Restaurado
        </p>

        {/* Location */}
        <div className="animate-slide-up flex items-center justify-center gap-2 text-white/70 mb-12">
          <MapPin className="w-5 h-5 text-[#C9A962]" />
          <span className="font-body text-sm tracking-wider">
            Hipódromo 1808, Independencia · Santiago de Chile
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#locales" className="btn-filled">
            Ver Locales Disponibles
          </a>
          <a href="#contacto" className="btn-elegant border-white text-white hover:bg-white hover:text-[#1A1A1A]">
            Agendar Visita
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#historia" className="flex flex-col items-center gap-2 text-white/60 hover:text-[#C9A962] transition-colors">
          <span className="font-body text-xs tracking-widest uppercase">Descubrir</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
