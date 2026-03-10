import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'La Carta', href: '#menu' },
    { name: 'Reseñas', href: '#reviews' },
    { name: 'Visítanos', href: '#location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773141085/logo-molino-horizontal_ia7gjz.png" 
            alt="Molino de la Romera Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/80 hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reserva"
            className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors uppercase tracking-widest text-sm"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-md py-6 flex flex-col items-center space-y-6 md:hidden border-t border-white/10"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest text-white/80 hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reserva"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors uppercase tracking-widest text-sm"
          >
            Reservar
          </a>
        </motion.div>
      )}
    </nav>
  );
}
