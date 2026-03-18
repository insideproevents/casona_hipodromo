import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: './images/fachada-frontal.jpg',
    alt: 'Fachada Principal de la Casona',
    caption: 'Fachada Principal',
    description: 'Vista frontal de la casona restaurada con sus características ventanas de madera y balcones de hierro forjado.',
  },
  {
    src: './images/fachada-lateral.jpg',
    alt: 'Vista Lateral',
    caption: 'Perspectiva Lateral',
    description: 'Ángulo que muestra la arquitectura única de la construcción y su integración con el entorno urbano.',
  },
  {
    src: './images/vista-aerea.jpg',
    alt: 'Vista Aérea',
    caption: 'Vista Panorámica',
    description: 'Perspectiva aérea que revela la distribución de la casona y su techo de tejas tradicionales.',
  },
  {
    src: './images/interior-vigas.jpg',
    alt: 'Interior con Vigas',
    caption: 'Detalles Arquitectónicos',
    description: 'Vigas de madera originales que dan testimonio de la construcción del siglo XIX.',
  },
  {
    src: './images/escaleras.jpg',
    alt: 'Escaleras Interiores',
    caption: 'Escalera Principal',
    description: 'Elegante escalera que conecta los diferentes niveles de la casona.',
  },
  {
    src: './images/restaurante-vista.jpg',
    alt: 'Vista del Restaurante',
    caption: 'Vista al Hipódromo',
    description: 'Ilustración del potencial del local con vista panorámica al Hipódromo Chile.',
  },
];

export default function GaleriaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#FAF8F5]"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-accent text-[#C9A962] text-lg tracking-wider italic">
            Un recorrido visual
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mt-4 mb-6">
            Galería <span className="italic text-[#C9A962]">de la Casona</span>
          </h2>
          <div className="divider-gold my-6" />
          <p className="font-body text-[#8B8680] max-w-2xl mx-auto">
            Cada imagen cuenta una parte de la historia de este patrimonio arquitectónico 
            que ha resistido el paso de más de dos siglos.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${index === 0 || index === 5 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="font-display text-lg text-white mb-1">{image.caption}</h4>
                  <p className="font-body text-xs text-white/70">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image */}
          <div 
            className="max-w-5xl max-h-[80vh] px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[70vh] object-contain"
            />
            <div className="text-center mt-6">
              <h4 className="font-display text-xl text-white mb-2">
                {galleryImages[selectedImage].caption}
              </h4>
              <p className="font-body text-sm text-white/60">
                {galleryImages[selectedImage].description}
              </p>
              <p className="font-body text-xs text-white/40 mt-4">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
