import { Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white/80 py-16 border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-serif text-brand-gold tracking-widest uppercase mb-4">
              Molino de la Romera
            </h2>
            <p className="text-sm uppercase tracking-widest text-white/60 mb-6">
              Carmona · Sevilla
            </p>
            <div className="space-y-2 text-sm font-light">
              <p>
                Teléfono: <a href="tel:+34954142000" className="hover:text-brand-gold transition-colors">954 142 000</a>
              </p>
              <p>
                Email: <a href="mailto:molinoromera@gmail.com" className="hover:text-brand-gold transition-colors">molinoromera@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-sm uppercase tracking-widest text-brand-gold mb-6 font-semibold">
              Síguenos
            </h3>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/molinodelaromera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 hover:border-brand-gold hover:text-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/molinodelaromera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 hover:border-brand-gold hover:text-brand-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs font-light text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Molino de la Romera. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-gold transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Política de Cookies</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
