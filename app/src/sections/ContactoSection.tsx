import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    values: [
      { value: '+56 9 8189 2341', href: 'https://wa.me/56981892341' },
      { value: '+56 9 8960 8591', href: 'https://wa.me/56989608591' },
    ],
  },
  {
    icon: Phone,
    label: 'Teléfono',
    values: [
      { value: '+56 9 8189 2341', href: 'tel:+56981892341' },
      { value: '+56 9 8960 8591', href: 'tel:+56989608591' },
    ],
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'ventas@marielaguilera.cl',
    href: 'mailto:ventas@marielaguilera.cl',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Hipódromo 1808, Independencia',
    href: 'https://maps.google.com/?q=Hipódromo+1808,+Independencia,+Santiago',
  },
  {
    icon: Clock,
    label: 'Horario de Atención',
    value: 'Lun - Vie: 9:00 - 18:00',
    href: null,
  },
];

export default function ContactoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formResult, setFormResult] = useState<string>("");
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    local: '',
    mensaje: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataObj = new FormData();
    formDataObj.append("access_key", "0bf3d904-36f1-4240-9d21-b814acfd64fb");
    formDataObj.append("email", "insideproevents@gmail.com");
    formDataObj.append("cc", "venta@marielaguilera.cl");
    formDataObj.append("nombre", formData.nombre);
    formDataObj.append("email", formData.email);
    formDataObj.append("telefono", formData.telefono);
    formDataObj.append("local", formData.local);
    formDataObj.append("mensaje", formData.mensaje);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj
    });

    const data = await response.json();
    
    if (data.success) {
      setIsSubmitted(true);
      setFormResult("¡Mensaje enviado exitosamente! Nos contactaremos contigo pronto.");
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        local: '',
        mensaje: '',
      });
      setTimeout(() => {
        setIsSubmitted(false);
        setFormResult("");
      }, 5000);
    } else {
      setFormResult("Error al enviar el mensaje. Por favor intenta nuevamente.");
    }
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#FAF8F5]"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A962]/5 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-accent text-[#C9A962] text-lg tracking-wider italic">
            Estamos aquí para ayudarte
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mt-4 mb-6">
            Contacto <span className="italic text-[#C9A962]">Directo</span>
          </h2>
          <div className="divider-gold my-6" />
          <p className="font-body text-[#8B8680] max-w-2xl mx-auto">
            ¿Te interesa conocer más sobre esta oportunidad única de inversión? 
            Agenda una visita guiada y descubre el potencial de la Casona Hipódromo.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="font-display text-2xl text-[#1A1A1A] mb-8">
              Información de <span className="text-[#C9A962]">Contacto</span>
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#C9A962]/10 rounded-full flex-shrink-0">
                    <info.icon className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#8B8680] uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {'values' in info && info.values ? (
                      <div className="flex flex-col gap-1">
                        {info.values.map((item, i) => (
                          item.href ? (
                            <a
                              key={i}
                              href={item.href}
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="font-body text-[#1A1A1A] hover:text-[#C9A962] transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p key={i} className="font-body text-[#1A1A1A]">{item.value}</p>
                          )
                        ))}
                      </div>
                    ) : info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-body text-[#1A1A1A] hover:text-[#C9A962] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-body text-[#1A1A1A]">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-[#1A1A1A] p-8 relative">
              <div className="absolute -top-3 left-8 w-6 h-6 bg-[#1A1A1A] rotate-45" />
              <blockquote className="font-accent text-xl text-white/90 italic leading-relaxed">
                "Invertir en patrimonio es invertir en historia, en tradición y en el futuro."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-px bg-[#C9A962]" />
                <span className="font-body text-sm text-[#C9A962]">Ileben Inversiones</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white p-8 md:p-10 shadow-xl border border-[#E8E4DC]">
              <h3 className="font-display text-2xl text-[#1A1A1A] mb-2">
                Agenda tu <span className="text-[#C9A962]">Visita</span>
              </h3>
              <p className="font-body text-sm text-[#8B8680] mb-8">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-display text-xl text-[#1A1A1A] mb-2">
                    ¡Mensaje Enviado!
                  </h4>
                  <p className="font-body text-[#8B8680]">
                    {formResult || "Nos contactaremos contigo pronto."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="font-body text-sm text-[#1A1A1A]">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                        className="border-[#E8E4DC] focus:border-[#C9A962] focus:ring-[#C9A962]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body text-sm text-[#1A1A1A]">
                        Correo Electrónico *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-[#E8E4DC] focus:border-[#C9A962] focus:ring-[#C9A962]/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="font-body text-sm text-[#1A1A1A]">
                        Teléfono *
                      </Label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="+56 9 0000 0000"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        required
                        className="border-[#E8E4DC] focus:border-[#C9A962] focus:ring-[#C9A962]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="local" className="font-body text-sm text-[#1A1A1A]">
                        Local de Interés
                      </Label>
                      <Select
                        value={formData.local}
                        onValueChange={(value) => setFormData({ ...formData, local: value })}
                      >
                        <SelectTrigger className="border-[#E8E4DC] focus:border-[#C9A962] focus:ring-[#C9A962]/20">
                          <SelectValue placeholder="Selecciona un local" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="1c">Local 1C - Casona (288,98 m²)</SelectItem>
                          <SelectItem value="2c">Local 2C - Casona (96,74 m²)</SelectItem>
                          <SelectItem value="2">Local 2 - Strip Center (128,58 m²)</SelectItem>
                          <SelectItem value="todos">Todos los locales</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="font-body text-sm text-[#1A1A1A]">
                      Mensaje
                    </Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos sobre tu interés..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      rows={4}
                      className="border-[#E8E4DC] focus:border-[#C9A962] focus:ring-[#C9A962]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#C9A962] hover:bg-[#A88B4A] text-white font-display tracking-widest uppercase py-6"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>

                  <p className="font-body text-xs text-[#8B8680] text-center">
                    Al enviar, aceptas nuestra política de privacidad. Te contactaremos dentro de 24 horas.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
