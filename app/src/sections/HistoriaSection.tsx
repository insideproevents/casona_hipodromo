import { useEffect, useRef, useState } from 'react';
import { Landmark, Clock, Shield, Sparkles } from 'lucide-react';

export default function HistoriaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Landmark,
      title: 'Patrimonio Histórico',
      description: 'Casona del año 1817, declarada inmueble de valor histórico y cultural para la comuna de Independencia.',
    },
    {
      icon: Clock,
      title: 'Más de 200 Años',
      description: 'Testigo de la historia de Santiago, ha preservado su esencia arquitectónica original a través del tiempo.',
    },
    {
      icon: Shield,
      title: 'Restauración Fiel',
      description: 'Meticulosa restauración que respeta cada detalle original, desde las vigas de madera hasta los herrajes.',
    },
    {
      icon: Sparkles,
      title: 'Esencia Única',
      description: 'Ambiente incomparable que combina el encanto de época con las comodidades del siglo XXI.',
    },
  ];

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#FAF8F5]"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-accent text-[#C9A962] text-lg tracking-wider italic">
            Una joya del pasado
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mt-4 mb-6">
            Historia que <span className="italic text-[#C9A962]">Trasciende</span>
          </h2>
          <div className="divider-gold my-6" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img
                src="./images/ilustracion-epoca.png"
                alt="Ilustración histórica del Hipódromo"
                className="w-[120%] rounded-sm shadow-2xl"
              />
              {/* Frame Decoration */}
              <div className="absolute -inset-4 border border-[#C9A962]/30 -z-10" />
              <div className="absolute -inset-8 border border-[#C9A962]/10 -z-20" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-6 bg-white p-4 shadow-xl">
              <div className="text-center">
                <span className="font-display text-6xl text-[#C9A962]">1817</span>
                <p className="font-body text-xs text-[#8B8680] tracking-wider uppercase mt-1">
                  Año de Construcción
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="font-display text-2xl md:text-3xl text-[#1A1A1A] mb-6">
              Donde el Legado se Encontró con el <span className="italic text-[#C9A962]">Futuro</span>
            </h3>
            
            <div className="space-y-4 text-[#8B8680] leading-relaxed">
              <p className="font-body">
                Nuestra Casona, considerada un inmueble histórico del año 1817, ha sido cuidadosamente 
                restaurada y puesta a disposición para la venta. Ubicada estratégicamente en el corazón 
                de Independencia, frente al emblemático Hipódromo Chile.
              </p>
              <p className="font-body">
                Esta majestuosa construcción ha mantenido la esencia original de su arquitectura, 
                aportando a la conservación del legado histórico de la comuna. Cada rincón cuenta 
                una historia, cada viga de madera preserva la memoria de generaciones pasadas.
              </p>
              <p className="font-body">
                Emplazada en uno de los mejores sectores comerciales de la comuna, con un flujo 
                diario cercano a las <strong className="text-[#1A1A1A]">5.000 personas</strong>, 
                esta casona representa una oportunidad única de inversión en un patrimonio vivo.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-[#C9A962]" />
              <span className="font-accent text-[#C9A962] italic text-lg">
                "El pasado ilumina el futuro"
              </span>
            </div>
          </div>
        </div>

        {/* Features Grid with Background */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#C9A962] mt-4 mb-8 text-center italic">
            Características Únicas
          </h2>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-24">
          <img 
            src="./images/carrera.png" 
            alt="Carrera" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
          />
          <div className="relative z-10 col-span-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`card-patrimonial p-8 text-center transition-all duration-700 bg-white/80 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-[#C9A962] rounded-full">
                <feature.icon className="w-6 h-6 text-[#C9A962]" />
              </div>
              <h4 className="font-display text-lg text-[#1A1A1A] mb-3">
                {feature.title}
              </h4>
              <p className="font-body text-sm text-[#8B8680] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
