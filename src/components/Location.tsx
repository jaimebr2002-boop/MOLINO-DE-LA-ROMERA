import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-white text-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-olive-dark mb-4">
            Visítanos
          </h2>
          <p className="text-brand-gold font-serif italic text-xl">Encuéntranos en el corazón de Carmona</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-cream p-8 md:p-12 rounded-sm shadow-sm border border-brand-gold/10 h-full flex flex-col justify-center"
          >
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl text-brand-olive-dark mb-2">Dirección</h3>
                  <p className="text-brand-black/80 font-light">
                    Molino de la Romera<br />
                    C. Sor Angela de la Cruz, 8<br />
                    41410 Carmona, Sevilla
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl text-brand-olive-dark mb-2">Contacto</h3>
                  <p className="text-brand-black/80 font-light">
                    Teléfono: <a href="tel:+34954142000" className="hover:text-brand-gold transition-colors">954 14 20 00</a><br />
                    Email: <a href="mailto:molinoromera@gmail.com" className="hover:text-brand-gold transition-colors">molinoromera@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-brand-gold mt-1 flex-shrink-0" size={24} />
                <div className="w-full">
                  <h3 className="font-serif text-xl text-brand-olive-dark mb-2">Horario</h3>
                  <ul className="text-brand-black/80 font-light space-y-2 w-full">
                    <li className="flex justify-between border-b border-brand-black/5 pb-1">
                      <span>Lunes</span> <span className="text-brand-gold italic">Cerrado</span>
                    </li>
                    <li className="flex justify-between border-b border-brand-black/5 pb-1">
                      <span>Martes y Miércoles</span> <span>13:00 – 16:00</span>
                    </li>
                    <li className="flex justify-between border-b border-brand-black/5 pb-1">
                      <span>Jueves a Sábado</span> 
                      <div className="text-right">
                        <div>13:00 – 16:00</div>
                        <div>20:00 – 23:00</div>
                      </div>
                    </li>
                    <li className="flex justify-between">
                      <span>Domingo</span> <span>13:00 – 16:00</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.google.com/maps/place/Restaurante+Molino+de+la+Romera/@37.4711412,-5.6379169,17z/data=!3m1!4b1!4m6!3m5!1s0xd128c8f8acc331b:0x17b6e708b396bfa7!8m2!3d37.471137!4d-5.635342!16s%2Fg%2F1w2yw45f?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-olive-dark text-white hover:bg-brand-gold hover:text-brand-black transition-colors duration-300 uppercase tracking-widest text-xs font-medium rounded-sm"
                >
                  <MapPin size={16} />
                  Cómo llegar
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[500px] lg:h-full min-h-[500px] rounded-sm overflow-hidden shadow-lg border border-brand-gold/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.68131378124!2d-5.637916884692505!3d37.47113697981591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd128c8f8acc331b%3A0x17b6e708b396bfa7!2sRestaurante%20Molino%20de%20la%20Romera!5e0!3m2!1ses!2ses!4v1710000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Molino de la Romera"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
