import { useEffect, useRef, useState } from 'react';
import { Maximize, Bath, Car, Tag, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Local {
  id: string;
  name: string;
  subtitle: string;
  superficie: number;
  precio: number;
  precioOriginal: number;
  descuento: number;
  caracteristicas: {
    pisos: number;
    baños: number;
    estacionamiento: string;
    extras?: string[];
  };
  detalles: {
    label: string;
    value: string;
  }[];
  imagen: string;
  destacado?: boolean;
}

const locales: Local[] = [
  {
    id: '1c',
    name: 'Local 1C',
    subtitle: 'La Casona Principal',
    superficie: 288.98,
    precio: 19260,
    precioOriginal: 25680,
    descuento: 25,
    caracteristicas: {
      pisos: 2,
      baños: 2,
      estacionamiento: '1 espacio minusválidos',
      extras: ['Bodega subterránea', 'Terraza'],
    },
    detalles: [
      { label: 'Primer Piso', value: '90,31 m²' },
      { label: 'Segundo Piso', value: '133,93 m²' },
      { label: 'Bodega Subterránea', value: '23,94 m²' },
      { label: 'Terraza', value: '40,76 m²' },
      { label: 'Superficie Municipal', value: '224,24 m²' },
    ],
    imagen: './images/1C_plano.jpg',
  },
  {
    id: '2c',
    name: 'Local 2C',
    subtitle: 'Espacio Íntimo',
    superficie: 96.74,
    precio: 6420,
    precioOriginal: 8560,
    descuento: 25,
    caracteristicas: {
      pisos: 1,
      baños: 2,
      estacionamiento: 'Tandem (2 unidades)',
      extras: ['Terraza'],
    },
    detalles: [
      { label: 'Primer Piso', value: '66,24 m²' },
      { label: 'Terraza', value: '30,50 m²' },
      { label: 'Superficie Municipal', value: '66,24 m²' },
    ],
    imagen: './images/2C _plano.jpg',
  },
  {
    id: '2',
    name: 'Local 2',
    subtitle: 'Strip Center',
    superficie: 128.58,
    precio: 11840,
    precioOriginal: 14800,
    descuento: 20,
    caracteristicas: {
      pisos: 3,
      baños: 3,
      estacionamiento: 'Estacionamiento general',
      extras: ['Terraza en piso 3'],
    },
    detalles: [
      { label: 'Piso 1', value: '65,15 m²' },
      { label: 'Piso 2', value: '60,43 m²' },
      { label: 'Piso 3 - Terraza', value: '3,00 m²' },
      { label: 'Superficie Municipal', value: '128,58 m²' },
    ],
    imagen: './images/2_plano.jpg',
  },
  {
    id: 'casona-completa',
    name: 'Casona Completa',
    subtitle: 'La Casona Completa',
    superficie: 385,
    precio: 19260,
    precioOriginal: 25680,
    descuento: 25,
    caracteristicas: {
      pisos: 2,
      baños: 4,
      estacionamiento: '3 Estacionamientos (Incluye PMR)',
      extras: ['1 Bodega Subterránea', '71,26 m² de terrazas + Área Exterior con paisajismo'],
    },
    detalles: [
      { label: '1er Piso', value: '156,55 m²' },
      { label: '2do Piso', value: '133,93 m²' },
      { label: 'Bodega', value: '23,94 m²' },
      { label: 'Terrazas', value: '71,26 m²' },
    ],
    imagen: './images/1C_plano.jpg',
  },
];

function LocalCard({ local, index, isVisible }: { local: Local; index: number; isVisible: boolean }) {
  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      {local.destacado && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-[#C9A962] text-white px-6 py-2 font-body text-xs tracking-widest uppercase">
            Más Espacioso
          </span>
        </div>
      )}

      <div className="card-patrimonial overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={local.imagen}
            alt={local.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Discount Badge */}
          <div className="absolute top-4 right-4 bg-[#B8735A] text-white px-4 py-2 rounded-full">
            <span className="font-display text-lg">-{local.descuento}%</span>
          </div>
          
          {/* Title Overlay */}
          <div className="absolute bottom-4 left-6">
            <h3 className="font-display text-2xl text-white">{local.name}</h3>
            <p className="font-accent text-white/80 italic">{local.subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Superficie */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E8E4DC]">
            <Maximize className="w-5 h-5 text-[#C9A962]" />
            <div>
              <span className="font-body text-xs text-[#8B8680] uppercase tracking-wider">Superficie Total</span>
              <p className="font-display text-xl text-[#1A1A1A]">{local.superficie.toFixed(2)} m²</p>
            </div>
          </div>

          {/* Características */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-[#C9A962]/10 rounded-full">
                <span className="font-display text-sm text-[#C9A962]">{local.caracteristicas.pisos}</span>
              </div>
              <span className="font-body text-xs text-[#8B8680]">
                {local.id === 'casona-completa' ? '2 Niveles completamente funcionales' : (local.caracteristicas.pisos === 1 ? 'Piso' : 'Pisos')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-[#C9A962]/10 rounded-full">
                <Bath className="w-4 h-4 text-[#C9A962]" />
              </div>
              <span className="font-body text-xs text-[#8B8680]">
                {local.caracteristicas.baños} Baños
              </span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <div className="w-8 h-8 flex items-center justify-center bg-[#C9A962]/10 rounded-full">
                <Car className="w-4 h-4 text-[#C9A962]" />
              </div>
              <span className="font-body text-xs text-[#8B8680]">
                {local.caracteristicas.estacionamiento}
              </span>
            </div>
          </div>

          {/* Extras */}
          {local.caracteristicas.extras && (
            <div className="flex flex-wrap gap-2 mb-6">
              {local.caracteristicas.extras.map((extra) => (
                <span
                  key={extra}
                  className="px-3 py-1 bg-[#FAF8F5] border border-[#E8E4DC] font-body text-xs text-[#8B8680]"
                >
                  {extra}
                </span>
              ))}
            </div>
          )}

          {/* Price */}
          <div className="mt-auto pt-6 border-t border-[#E8E4DC]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-body text-xs text-[#8B8680] line-through">
                  UF {local.precioOriginal.toLocaleString()}
                </span>
                <p className="font-display text-2xl text-[#C9A962]">
                  UF {local.precio.toLocaleString()}
                </p>
              </div>
              <Tag className="w-5 h-5 text-[#C9A962]" />
            </div>

            {/* CTA */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full btn-filled flex items-center justify-center gap-2">
                  Ver Detalles
                  <ArrowRight className="w-4 h-4" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-white">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-[#1A1A1A]">
                    {local.name} - {local.subtitle}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={local.imagen}
                    alt={local.name}
                    className="w-full h-48 object-cover rounded-sm mb-6"
                  />
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {local.detalles.map((detalle) => (
                      <div key={detalle.label} className="flex justify-between py-2 border-b border-[#E8E4DC]">
                        <span className="font-body text-sm text-[#8B8680]">{detalle.label}</span>
                        <span className="font-display text-sm text-[#1A1A1A]">{detalle.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#FAF8F5] p-6 rounded-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-body text-xs text-[#8B8680] uppercase tracking-wider">
                          Precio Especial
                        </span>
                        <p className="font-display text-3xl text-[#C9A962]">
                          UF {local.precio.toLocaleString()}
                        </p>
                        <span className="font-body text-sm text-[#8B8680] line-through">
                          Antes UF {local.precioOriginal.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="bg-[#B8735A] text-white px-4 py-2 font-display text-lg">
                          -{local.descuento}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LocalesSection() {
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
      id="locales"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#1A1A1A]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A962 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-accent text-[#C9A962] text-lg tracking-wider italic">
            Oportunidad de inversión
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            Locales <span className="italic text-[#C9A962]">Disponibles</span>
          </h2>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-16 h-px bg-[#C9A962]" />
            <span className="text-[#C9A962] text-xl">✦</span>
            <div className="w-16 h-px bg-[#C9A962]" />
          </div>
          <p className="font-body text-white/70 max-w-2xl mx-auto">
            Cuatro espacios comerciales únicos, cada uno con características especiales 
            que preservan el encanto histórico de la casona.
          </p>
        </div>

        {/* Locales Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locales.map((local, index) => (
            <LocalCard key={local.id} local={local} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-accent text-white/60 italic text-lg mb-6">
            "El espacio ideal para tu futuro negocio"
          </p>
          <a href="#contacto" className="btn-elegant inline-flex items-center gap-2">
            Consultar por un Local
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
