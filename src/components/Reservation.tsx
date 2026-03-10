import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Reservation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} id="reserva" className="py-32 md:py-48 bg-brand-olive-dark text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773141086/molino_romera_salon_1_qlg5d3.jpg")',
          y: yBg,
          height: '140%',
          top: '-20%'
        }}
      ></motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-brand-gold mb-6">
            Reserva tu mesa
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed italic font-serif">
            Te invitamos a vivir una experiencia gastronómica única en un entorno inigualable.
          </p>

          <a
            href="tel:+34954142000"
            className="px-12 py-6 bg-brand-gold text-brand-black hover:bg-white transition-colors duration-300 uppercase tracking-widest text-lg font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Llamar para Reservar
          </a>
          
          <p className="mt-8 text-white/60 text-sm font-light">
            Teléfono de reservas: <span className="text-brand-gold">954 14 20 00</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
