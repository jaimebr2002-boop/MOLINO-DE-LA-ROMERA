import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { ChevronDown, Globe, Wine } from 'lucide-react';
import WineMenu from './WineMenu';

export default function Menu() {
  const [isLangSelectorOpen, setIsLangSelectorOpen] = useState(false);
  const [showWineMenu, setShowWineMenu] = useState(false);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yPattern = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} id="menu" className="py-24 md:py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', 
          backgroundSize: '20px 20px',
          y: yPattern,
          height: '150%',
          top: '-25%'
        }} 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          {!showWineMenu ? (
            <motion.div
              key="main-menu"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl font-serif text-brand-gold mb-8">
                La Carta
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Descubra nuestra selección de platos donde la tradición andaluza se encuentra con la innovación culinaria, elaborados con los mejores productos de temporada.
              </p>

              <div className="flex flex-col items-center gap-8 mt-12">
                <div className="bg-white p-4 rounded-xl shadow-2xl inline-block">
                  <img 
                    src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773141085/qr-molino-romera_od00ss.png" 
                    alt="QR Carta Molino de la Romera" 
                    className="w-48 h-48 md:w-64 md:h-64 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <p className="text-brand-gold uppercase tracking-widest text-sm font-medium flex items-center gap-2">
                  <Globe size={18} />
                  Escanea para ver la carta
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
                <div className="relative inline-block w-full sm:w-auto">
                  <button
                    onClick={() => setIsLangSelectorOpen(!isLangSelectorOpen)}
                    className="w-full px-10 py-5 bg-brand-gold text-brand-black hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm font-medium flex items-center justify-center gap-3"
                  >
                    <Globe size={18} />
                    Ver Carta
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isLangSelectorOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isLangSelectorOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-full mt-2 bg-white rounded-sm shadow-xl overflow-hidden z-20"
                    >
                      <a
                        href="https://molinodelaromera.es/wp-content/uploads/2026/03/carta-4-marzo-2026-esp-molino-romera.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 hover:bg-brand-cream transition-colors text-brand-black w-full text-left"
                      >
                        <span className="text-xl">🇪🇸</span>
                        <span className="uppercase tracking-wider text-sm font-medium">Español</span>
                      </a>
                      <div className="h-px bg-brand-black/10 w-full"></div>
                      <a
                        href="https://molinodelaromera.es/wp-content/uploads/2026/03/carta-4-marzo-2026-ing-molino-romera.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 hover:bg-brand-cream transition-colors text-brand-black w-full text-left"
                      >
                        <span className="text-xl">🇬🇧</span>
                        <span className="uppercase tracking-wider text-sm font-medium">English</span>
                      </a>
                    </motion.div>
                  )}
                </div>

                <button
                  onClick={() => setShowWineMenu(true)}
                  className="w-full sm:w-auto px-10 py-5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors duration-300 uppercase tracking-widest text-sm font-medium flex items-center justify-center gap-3"
                >
                  <Wine size={18} />
                  Carta de Vinos
                </button>
              </div>
            </motion.div>
          ) : (
            <WineMenu key="wine-menu" onBack={() => setShowWineMenu(false)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
