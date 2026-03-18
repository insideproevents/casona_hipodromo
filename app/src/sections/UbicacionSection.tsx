import { useEffect, useRef, useState } from 'react';
import { MapPin, Train, Building2, GraduationCap, Hospital, Users, Store, TrendingUp } from 'lucide-react';

const nearbyPlaces = [
  { icon: Train, label: 'Metro Plaza Chacabuco', distance: '5 minutos' },
  { icon: Building2, label: 'Hipódromo Chile', distance: 'Frente al inmueble' },
  { icon: GraduationCap, label: 'Universidades', distance: 'Cercano' },
  { icon: Hospital, label: 'Hospitales', distance: 'Cercano' },
  { icon: Store, label: 'Comercio Local', distance: 'Zona activa' },
  { icon: TrendingUp, label: 'Crecimiento', distance: 'En expansión' },
];

const stats = [
  { value: '5.000+', label: 'Personas diarias', icon: Users },
  { value: '200+', label: 'Años de historia', icon: TrendingUp },
  { value: '100%', label: 'Zona comercial', icon: Store },
];

export default function UbicacionSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ubicacion"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#1A1A1A] overflow-hidden"
    >
      {/* Background Map Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/mapa-ubicacion.jpg"
          alt="Mapa de ubicación"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/70" />
      </div>

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-accent text-[#C9A962] text-lg tracking-wider italic">
            El corazón de Independencia
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            Ubicación <span className="italic text-[#C9A962]">Estratégica</span>
          </h2>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-16 h-px bg-[#C9A962]" />
            <span className="text-[#C9A962] text-xl">✦</span>
            <div className="w-16 h-px bg-[#C9A962]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Address Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#C9A962]/20 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#C9A962]" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white mb-2">Dirección</h3>
                  <p className="font-body text-white/80">
                    Hipódromo 1808, Independencia
                  </p>
                  <p className="font-body text-white/60 text-sm mt-1">
                    Santiago de Chile
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-display text-2xl text-white mb-4">
                Un Sector en Constante <span className="text-[#C9A962]">Crecimiento</span>
              </h3>
              <p className="font-body text-white/70 leading-relaxed mb-4">
                Emplazada en uno de los mejores sectores de la comuna de Independencia, 
                a solo pasos del emblemático Hipódromo Chile. Es un sector altamente 
                comercial, con un flujo de visitas diario cercano a las 5.000 personas.
              </p>
              <p className="font-body text-white/70 leading-relaxed">
                La ubicación combina lo mejor de ambos mundos: la tranquilidad de un 
                barrio residencial consolidado con la actividad comercial de una zona 
                en pleno desarrollo.
              </p>
            </div>

            {/* Nearby Places */}
            <div className="grid grid-cols-2 gap-4">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={place.label}
                  className={`flex items-center gap-3 p-4 bg-white/5 border border-white/10 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <place.icon className="w-5 h-5 text-[#C9A962] flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm text-white">{place.label}</p>
                    <p className="font-body text-xs text-white/50">{place.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white p-8 md:p-12">
              <h3 className="font-display text-2xl text-[#1A1A1A] mb-8 text-center">
                Potencial <span className="text-[#C9A962]">Comercial</span>
              </h3>

              {/* Stats Grid */}
              <div className="space-y-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-6 p-6 bg-[#FAF8F5] transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-14 h-14 flex items-center justify-center bg-[#C9A962]/10 rounded-full">
                      <stat.icon className="w-6 h-6 text-[#C9A962]" />
                    </div>
                    <div>
                      <p className="font-display text-3xl text-[#C9A962]">{stat.value}</p>
                      <p className="font-body text-sm text-[#8B8680]">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center pt-6 border-t border-[#E8E4DC]">
                <p className="font-accent text-[#8B8680] italic mb-4">
                  "La ubicación perfecta para tu inversión"
                </p>
                <a
                  href="https://maps.google.com/?q=Hipódromo+1808,+Independencia,+Santiago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elegant inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
