import { motion, useScroll, useTransform } from 'motion/react';
import { Flame, Trees, Users } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const features = [
    { icon: <Trees className="w-6 h-6" />, title: 'Terraza' },
    { icon: <Flame className="w-6 h-6" />, title: 'Chimenea' },
    { icon: <Users className="w-6 h-6" />, title: 'Comedor privado' },
  ];

  return (
    <section ref={ref} id="about" className="py-24 md:py-32 bg-brand-cream text-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl"
        >
          <motion.img
            src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773141086/molino_romera_salon_3_fqki7l.jpg"
            alt="Interior del Molino de la Romera"
            className="absolute inset-0 w-full h-[130%] object-cover"
            style={{ y: yImage, top: "-15%" }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-olive/20 mix-blend-multiply"></div>
          
          {/* Michelin Badge */}
          <div className="absolute bottom-8 right-8 bg-[#b91c1c] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-2xl border-4 border-brand-cream z-10 transform rotate-[-5deg]">
            <span className="text-[10px] uppercase tracking-widest font-bold mb-1">Guía</span>
            <span className="text-base font-serif font-bold tracking-wider">MICHELIN</span>
            <div className="flex gap-1 text-[10px] mt-1 font-medium">
              <span>'18</span>
              <span>'20</span>
              <span>'21</span>
              <span>'22</span>
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-olive-dark mb-6 leading-tight">
            Historia y <br />
            <span className="italic text-brand-gold">Tradición</span>
          </h2>

          <div className="space-y-6 text-lg text-brand-black/80 font-light leading-relaxed mb-10">
            <p>
              Molino de la Romera es un restaurante situado en un antiguo molino árabe en el corazón de Carmona.
            </p>
            <p>
              Entre bóvedas históricas, chimenea y una torre mirador, nuestro restaurante ofrece una experiencia gastronómica donde la cocina tradicional andaluza se fusiona con nuevas miradas culinarias.
            </p>
            <p>
              Nuestra propuesta se basa en productos de calidad, recetas con historia y un ambiente único que invita a disfrutar sin prisas.
            </p>
          </div>

          <div className="mb-10 p-6 bg-white shadow-sm border border-brand-gold/20 rounded-sm">
            <h3 className="text-sm uppercase tracking-widest text-brand-gold mb-4 font-semibold">
              Reconocimientos
            </h3>
            <p className="text-brand-black/70 italic font-serif">
              El restaurante ha sido incluido en la Guía Michelin en los años: 2018, 2020, 2021, 2022.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-brand-olive/5 rounded-sm">
                <div className="text-brand-olive-dark mb-3">{feature.icon}</div>
                <span className="text-sm font-medium uppercase tracking-wider text-brand-black/80">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
