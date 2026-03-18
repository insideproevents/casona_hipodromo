import { Landmark, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="w-8 h-8 text-[#C9A962]" />
              <span className="font-display text-2xl tracking-wider">
                <span className="text-[#C9A962]">CASONA</span> HIPÓDROMO
              </span>
            </div>
            <p className="font-body text-white/60 leading-relaxed mb-6 max-w-md">
              Inmueble histórico del año 1817, cuidadosamente restaurado para preservar 
              su legado arquitectónico. Una oportunidad única de inversión en el corazón 
              de Independencia.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#C9A962] hover:bg-[#C9A962]/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#C9A962] hover:bg-[#C9A962]/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:inversionistas@ileben.cl"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#C9A962] hover:bg-[#C9A962]/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#historia', label: 'Historia' },
                { href: '#locales', label: 'Locales' },
                { href: '#galeria', label: 'Galería' },
                { href: '#ubicacion', label: 'Ubicación' },
                { href: '#contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-[#C9A962] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+56952269921"
                  className="flex items-center gap-3 text-white/60 hover:text-[#C9A962] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-body text-sm">+56 9 5226 9921</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:inversionistas@ileben.cl"
                  className="flex items-center gap-3 text-white/60 hover:text-[#C9A962] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-body text-sm">inversionistas@ileben.cl</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Landmark className="w-4 h-4 mt-1" />
                <span className="font-body text-sm">
                  Hipódromo 1808<br />
                  Independencia, Santiago
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/40 text-center md:text-left">
              © {currentYear} Ileben Inversiones. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-xs text-white/40 hover:text-[#C9A962] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="font-body text-xs text-white/40 hover:text-[#C9A962] transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-[#111] section-padding py-4">
        <p className="font-body text-[10px] text-white/30 text-center leading-relaxed">
          Las imágenes, textos y contenidos en este sitio fueron elaborados con fines ilustrativos y no constituyen 
          necesariamente una representación exacta de la realidad. Su objetivo es mostrar una caracterización general 
          del proyecto y no cada uno de sus detalles. Verifique las especificaciones de cada local al momento de comprar. 
          Esto se informa en virtud de lo señalado en la Ley N°19.496 y según la Ley N°21.014, y DDU 361 de fecha 16 de junio de 2017.
        </p>
      </div>
    </footer>
  );
}
