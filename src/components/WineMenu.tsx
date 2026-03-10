import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface WineMenuProps {
  onBack: () => void;
}

export default function WineMenu({ onBack }: WineMenuProps) {
  const wines = [
    {
      category: "Blancos andaluces",
      items: [
        { name: "Castillo San Diego Barbadillo", origin: "Cádiz", price: "Botella 14,00€" },
        { name: "Tierra Blanca", origin: "Semidulce · Cádiz", price: "Botella 14,00€" },
        { name: "Viña Barredero", origin: "Huelva", price: "Botella 15,00€" },
        { name: "Finca La Cañada", origin: "Verdejo (Montilla)", price: "Botella 15,00€" },
      ]
    },
    {
      category: "Tintos andaluces",
      items: [
        { name: "Pago del Zancúo", origin: "Sierra Norte · Sevilla", price: "Botella 16,00€" },
        { name: "Overo", origin: "Lebrija · Sevilla", price: "Botella 19,00€" },
        { name: "Finca Moncloa", origin: "Arcos de la Frontera · Cádiz", price: "Botella 23,00€" },
        { name: "Barbazul", origin: "Arcos de la Frontera · Cádiz", price: "Botella 16,00€" },
        { name: "Iceni", origin: "Vino de la Tierra de Cádiz", price: "Botella 17,00€" },
      ]
    },
    {
      category: "Blancos",
      items: [
        { name: "Fragantia Frizzante", origin: "Verdejo", price: "Botella 16,00€" },
        { name: "Beronia Rueda", origin: "Verdejo", price: "Botella 16,00€" },
        { name: "José Pariente", origin: "Verdejo", price: "Botella 16,00€" },
        { name: "Godeval", origin: "Godello", price: "Botella 19,00€" },
        { name: "Loess", origin: "Verdejo · D.O. Rueda", price: "Botella 18,00€" },
        { name: "Lolo", origin: "Albariño", price: "Botella 16,00€" },
      ]
    },
    {
      category: "Rosados",
      items: [
        { name: "Barón de Ley", origin: "Tempranillo", price: "Botella 16,00€" },
        { name: "Viñas del Vero", origin: "Pinot Noir", price: "Botella 16,00€" },
        { name: "Natureo (Chardonnay)", origin: "Vino sin alcohol", price: "Botella 15,00€" },
      ]
    },
    {
      category: "Generosos",
      items: [
        { name: "Manzanilla Solear", origin: "Sanúcar de Barrameda", price: "Copa · 2,20€ | Botella 0,37cl 8,00€" },
        { name: "Tío Pepe", origin: "Fino · Jerez", price: "Copa · 2,50€ | Botella 15,00€" },
        { name: "Cristina", origin: "Medium · Jerez", price: "Copa · 3,50€ | Botella 16,00€" },
        { name: "Néctar", origin: "Pedro Ximénez · Jerez", price: "Copa · 3,20€ | Botella 15,00€" },
        { name: "Alfonso", origin: "Oloroso seco · Jerez", price: "Copa · 2,60€ | Botella 15,00€" },
        { name: "Viña AB", origin: "Amontillado · Jerez", price: "Copa · 4,00€ | Botella 22,00€" },
        { name: "Leonor", origin: "Palo cortado · Jerez", price: "Copa · 5,50€ | Botella 32,00€" },
        { name: "Solera 1847", origin: "Oloroso dulce · Jerez", price: "Copa · 3,20€ | Botella 16,00€" },
      ]
    },
    {
      category: "Espumosos",
      items: [
        { name: "Visiega brut", origin: "Cava", price: "Botella 12,00€ | Benjamín 5,00€" },
        { name: "Terrer de la Creu", origin: "Cava · Brut nature", price: "Botella 18,00€" },
        { name: "Juvé y Camps · Reserva de la familia", origin: "Cava", price: "Botella 30,00€" },
        { name: "Moët Chandon", origin: "Champagne", price: "Botella 65,00€" },
      ]
    },
    {
      category: "Ribera del Duero",
      items: [
        { name: "Sembro", origin: "100% Tempranillo · 4 meses", price: "Botella 16,00€" },
        { name: "Yllera Vendimia Seleccionada", origin: "24 meses", price: "Botella 19,00€" },
        { name: "Celeste · Roble", origin: "", price: "Botella 16,00€" },
        { name: "Celeste · Crianza", origin: "12 meses", price: "Botella 25,00€" },
        { name: "Venta Las Vacas", origin: "Crianza · 12 meses", price: "Botella 27,00€" },
        { name: "Bosque de Matasnos", origin: "", price: "Botella 45,00€" },
        { name: "PSI Pingus", origin: "", price: "Botella 65,00€" },
        { name: "Jaros", origin: "Tempranillo · Roble", price: "Botella 16,00€" },
        { name: "Monteabellón", origin: "Tempranillo Crianza · 5 meses", price: "Botella 16,00€" },
        { name: "Monteabellón", origin: "Tempranillo Crianza · 14 meses", price: "Botella 26,00€" },
        { name: "Díaz Bayo", origin: "Tempranillo Crianza · 20 meses", price: "Botella 38,00€" },
        { name: "Pago de Carraovejas", origin: "Tempranillo", price: "Botella 50,00€" },
        { name: "Malabrigo", origin: "Tempranillo", price: "Botella 48,00€" },
      ]
    },
    {
      category: "Rioja",
      items: [
        { name: "Beronia Crianza", origin: "Tempranillo", price: "Botella 16,00€" },
        { name: "Beronia Reserva", origin: "", price: "Botella 22,00€" },
        { name: "Baigorri", origin: "Crianza", price: "Botella 50cl 13,00€ | Botella 75cl 22,00€" },
        { name: "Ramón Bilbao", origin: "Crianza", price: "Botella 17,00€" },
        { name: "Viuda negra", origin: "Crianza", price: "Botella 20,00€" },
        { name: "Medrano", origin: "Reserva", price: "Botella 20,00€" },
        { name: "Barón de Ley", origin: "Reserva", price: "Botella 21,00€" },
        { name: "Puente del Ea", origin: "Crianza", price: "Botella 17,00€" },
        { name: "Valsarte", origin: "Crianza", price: "Botella 16,00€" },
        { name: "La Vanidosa (recomendado)", origin: "Crianza", price: "Botella 17,00€" },
        { name: "Maturana", origin: "12 meses", price: "Botella 21,00€" },
      ]
    },
    {
      category: "Otras zonas vinícolas",
      items: [
        { name: "Cuenta Ovejas", origin: "Toro · Tinta de Toro", price: "Botella 19,00€" },
        { name: "Habla del silencio", origin: "Extremadura · Syrah, Cabernet", price: "Botella 19,00€" },
        { name: "Regina Viarum", origin: "Mencía 2022 · D.O. Ribeira Sacra", price: "Botella 19,00€" },
        { name: "Summum", origin: "Yecla · Monastrell · 16 meses", price: "Botella 25,00€" },
      ]
    },
    {
      category: "Nuestras magnum",
      items: [
        { name: "Godeval", origin: "Godello · Valdeorras", price: "Botella 35,00€" },
        { name: "Celeste · Roble", origin: "Tempranillo · Crianza · 5 meses", price: "Botella 30,00€" },
        { name: "Monteabellón", origin: "Tempranillo · Crianza · 5 meses", price: "Botella 30,00€" },
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto text-left"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 uppercase tracking-widest text-sm font-medium"
      >
        <ArrowLeft size={18} />
        Volver a la carta
      </button>

      <h3 className="text-4xl md:text-5xl font-serif text-brand-gold mb-12 text-center">Carta de Vinos</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {wines.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h4 className="text-2xl font-serif text-brand-gold border-b border-brand-gold/20 pb-2">
              {section.category}
            </h4>
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="font-medium text-white/90">{item.name}</span>
                    <span className="text-brand-gold/80 text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                  {item.origin && (
                    <span className="text-white/50 text-sm font-light italic">{item.origin}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
