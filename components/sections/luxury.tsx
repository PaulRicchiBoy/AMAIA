"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Crown, Clock, Sparkles } from 'lucide-react';

export function LuxuryEleganceSection() {
  const { language } = useLanguage();

  const luxuryTours = [
    {
      id: 1,
      title: language === 'es' ? 'Machu Picchu Private Sunset' : 'Machu Picchu Private Sunset',
      subtitle: language === 'es' ? 'Solo 4 pasajeros • Experiencia VIP' : 'Only 4 passengers • VIP Experience',
      image: '/tours/machu-picchu-vip.jpg',
      duration: '2D / 1N',
      price: language === 'es' ? 'Desde $1,890' : 'From $1,890',
      description: language === 'es' 
        ? 'Entrada privada al atardecer, hotel boutique y guía exclusivo.' 
        : 'Private sunset entry, boutique hotel and exclusive guide.',
      path: '/tour/machupicchu/private-sunset-vip'
    },
    {
      id: 2,
      title: language === 'es' ? 'Cusco & Valle Sagrado Élite' : 'Cusco & Sacred Valley Elite',
      subtitle: language === 'es' ? 'Máximo 6 pasajeros • Lujo total' : 'Max 6 passengers • Total Luxury',
      image: '/tours/cusco-vip.jpg',
      duration: '4D / 3N',
      price: language === 'es' ? 'Desde $2,450' : 'From $2,450',
      description: language === 'es' 
        ? 'Traslados privados, hoteles 5 estrellas y visitas sin multitudes.' 
        : 'Private transfers, 5-star hotels and exclusive visits.',
      path: '/tour/cusco/elite-experience'
    },
    {
      id: 3,
      title: language === 'es' ? 'Salkantay Trek Premium' : 'Salkantay Trek Premium',
      subtitle: language === 'es' ? 'Solo 5 aventureros • Glamping de lujo' : 'Only 5 adventurers • Luxury Glamping',
      image: '/tours/salkantay-vip.jpg',
      duration: '5D / 4N',
      price: language === 'es' ? 'Desde $2,790' : 'From $2,790',
      description: language === 'es' 
        ? 'Carpa glamping con cama king y chef privado.' 
        : 'Luxury glamping tent with king bed and private chef.',
      path: '/tour/trekking/salkantay-premium'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      
      {/* ==================== FONDO AMARILLO MÁS OSCURO Y ELEGANTE ==================== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8B800] via-[#D9A41A] to-[#C38F00]" />

      {/* Brillo sutil y matices (más elegante, no chillón) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFEA00]/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#FFEA00]/10 to-[#E8B800]/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-black text-[#FFEA00] text-sm font-bold px-10 py-4 rounded-3xl mb-6 shadow-2xl">
            <Crown className="w-7 h-7" />
            <span className="tracking-[3px] uppercase">LUXURY COLLECTION</span>
          </div>

          <h2 className="text-6xl lg:text-7xl font-black text-black tracking-[-3px] leading-none text-center">
            {language === 'es' ? 'Lujo y Elegancia' : 'Luxury & Elegance'}
          </h2>
          
          <p className="max-w-2xl text-xl text-black/70 mt-6">
            {language === 'es' 
              ? 'Experiencias exclusivas para grupos muy pequeños. El verdadero lujo de viajar en Perú.' 
              : 'Exclusive experiences for very small groups. The real luxury of traveling in Peru.'}
          </p>
        </div>

        {/* Grid de Tours - Negro minimalista */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {luxuryTours.map((tour) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group bg-black border border-black/90 rounded-3xl overflow-hidden hover:border-[#E8B800] hover:-translate-y-3 transition-all duration-500"
            >
              <div className="relative h-72">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                <div className="absolute top-6 left-6 bg-[#E8B800] text-black text-xs font-bold px-6 py-2.5 rounded-3xl flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  VIP
                </div>

                <div className="absolute bottom-6 right-6 bg-black text-white text-sm font-medium px-4 py-2 rounded-3xl flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {tour.duration}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#E8B800] transition-colors">
                  {tour.title}
                </h3>
                <p className="text-[#E8B800] text-sm mt-1 font-medium">{tour.subtitle}</p>
                
                <p className="mt-6 text-white/90 text-base line-clamp-3">
                  {tour.description}
                </p>

                <div className="flex justify-between items-end mt-10">
                  <div>
                    <span className="text-xs text-white/60">Desde</span>
                    <span className="block text-3xl font-bold text-[#E8B800]">{tour.price}</span>
                  </div>
                  
                  <Button
                    asChild
                    className="bg-black hover:bg-white text-white hover:text-black font-bold rounded-3xl px-8 py-6 border border-white/30"
                  >
                    <Link href={tour.path}>
                      {language === 'es' ? 'Ver experiencia' : 'View experience'}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón final */}
        <div className="flex justify-center mt-16">
          <Button
            onClick={() => {
              const phoneNumber = '51987654321';
              const message = language === 'es' 
                ? 'Hola, estoy interesado en los tours de Lujo y Elegancia. ¿Me pueden dar más información?'
                : 'Hello, I am interested in the Luxury & Elegance tours. Can you give me more information?';
              window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="justify-center whitespace-nowrap bg-black hover:bg-[#E8B800] hover:text-black text-white px-14 py-8 text-2xl font-bold rounded-3xl flex items-center gap-4 shadow-2xl transition-all hover:scale-105"
          >
            <Sparkles className="w-7 h-7" />
            {language === 'es' ? 'Quiero mi experiencia VIP' : 'I want my VIP experience'}
          </Button>
        </div>
      </div>
    </section>
  );
}