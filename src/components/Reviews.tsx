import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  // Slide 1
  [
    {
      author: "Paco Machuca",
      text: "Extraordinaria materia prima y ejecución exquisita. Fui con mi pareja a almorzar sin reserva, esperamos poco tiempo y nos dieron un trato impecable.",
      stars: 5
    },
    {
      author: "Guillermo Guerra",
      text: "Una experiencia espectacular en el Molino de la Romera, en Carmona. Lugar precioso con encanto andaluz y vistas increíbles. Comida deliciosa y bien presentada. Atención inmejorable.",
      stars: 5
    },
    {
      author: "Alfonso Morales",
      text: "Nos ha encantado el sitio. Molino antiguo habilitado con mucho gusto como restaurante. Trato de los camareros muy bueno. La comida excelente.",
      stars: 5
    }
  ],
  // Slide 2
  [
    {
      author: "Jonathan Cañamero Hidalgo",
      text: "Comida bastante rica, algún plato un pelín escaso pero en general todo bien. Especial recomendación de los bombones de foie y mascarpone.",
      stars: 5
    },
    {
      author: "Luis Zoido",
      text: "Un referente en Carmona. Local amplio, decoración acorde a su origen. Buena comida y servicio. Vistas magníficas desde la terraza.",
      stars: 5
    },
    {
      author: "Sandra M. Sibilskis",
      text: "Es un sitio mágico que te traslada al tiempo pasado. Hermosa experiencia, comida de 5 estrellas y ambiente espectacular.",
      stars: 5
    }
  ],
  // Slide 3
  [
    {
      author: "Jaime Ruiz Peña",
      text: "Viajar en el tiempo. Molino de siglos. Servicio atento y muy encima. Comida de calidad y elaboración esmerada. Vistas exteriores de película. Imprescindible visitar.",
      stars: 5
    },
    {
      author: "Miguel Arroyo Santos",
      text: "Espectacular como siempre. Ya hemos repetido varias veces porque tienen una comida espectacularmente buena. Volveremos a repetir sin duda.",
      stars: 5
    },
    {
      author: "M Đ",
      text: "Comida muy rica, sobre todo champiñones asados y cordero lechal. Ambiente muy bonito con encanto rural de molino antiguo.",
      stars: 5
    }
  ]
];

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-brand-cream text-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-olive-dark mb-4">
            Experiencias
          </h2>
          <p className="text-brand-gold font-serif italic text-xl">Lo que dicen nuestros clientes</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden min-h-[400px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {reviews[currentSlide].map((review, index) => (
                  <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brand-gold/10 flex flex-col h-full">
                    <div className="flex text-brand-gold mb-4">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-brand-black/70 font-light italic mb-6 flex-grow leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-serif font-bold text-brand-olive-dark uppercase tracking-wider text-sm">
                        {review.author}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="px-6 py-3 rounded-full border border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white transition-colors flex items-center gap-2"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="uppercase tracking-widest text-xs font-medium">Anterior</span>
            </button>
            
            <button
              onClick={nextSlide}
              className="px-6 py-3 rounded-full border border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white transition-colors flex items-center gap-2"
              aria-label="Siguiente"
            >
              <span className="uppercase tracking-widest text-xs font-medium">Siguiente</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a
            href="https://www.google.com/maps/place/Restaurante+Molino+de+la+Romera/@37.4711412,-5.6379169,17z/data=!3m1!4b1!4m6!3m5!1s0xd128c8f8acc331b:0x17b6e708b396bfa7!8m2!3d37.471137!4d-5.635342!16s%2Fg%2F1w2yw45f?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-brand-black text-brand-black hover:bg-brand-black hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium text-center w-full sm:w-auto"
          >
            Deja tu reseña en Google Maps
          </a>
          <a
            href="https://www.tripadvisor.es/UserReviewEdit-g315913-d3185800-Molino_de_la_Romera-Carmona_Province_of_Seville_Andalucia.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-brand-black text-brand-black hover:bg-brand-black hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium text-center w-full sm:w-auto"
          >
            Deja tu reseña en TripAdvisor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
