import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773141086/molino_romera_salon_2c_syvxox.jpg")',
          y
        }}
      >
        <div className="absolute inset-0 bg-brand-black/60"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex flex-wrap justify-center gap-4"
        >
          <div className="flex flex-col items-center border border-brand-gold/40 px-4 py-2 rounded-sm bg-brand-black/40 backdrop-blur-sm">
            <span className="text-brand-gold text-xs uppercase tracking-widest mb-1">Guía Michelin</span>
            <div className="flex gap-2 text-white/90 text-sm font-serif italic">
              <span>2018</span>
              <span>·</span>
              <span>2020</span>
              <span>·</span>
              <span>2021</span>
              <span>·</span>
              <span>2022</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight leading-none"
        >
          Molino de la Romera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-brand-gold font-serif italic mb-8"
        >
          Cocina tradicional andaluza en un antiguo molino árabe
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/80 max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed"
        >
          Bienvenido al lugar donde la historia, la cocina tradicional y las nuevas miras culinarias se dan la mano.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#reserva"
            className="px-8 py-4 bg-brand-gold text-brand-black hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
          >
            Reservar mesa
          </a>
          <a
            href="#menu"
            className="px-8 py-4 border border-white/30 text-white hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
          >
            Ver carta
          </a>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 md:left-auto md:right-8 flex justify-center md:justify-end gap-6 z-20"
      >
        <a
          href="https://www.instagram.com/molinodelaromera"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors bg-brand-black/20 backdrop-blur-sm"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://www.facebook.com/molinodelaromera"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors bg-brand-black/20 backdrop-blur-sm"
          aria-label="Facebook"
        >
          <Facebook size={20} />
        </a>
      </motion.div>
    </section>
  );
}
