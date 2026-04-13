"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';
import { Clock, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Tours() {
  const { language, t } = useLanguage();

  const getDifficultyText = (difficulty: string) => {
    const map: { [key: string]: string } = {
      easy: t.tours?.easy || 'Fácil',
      moderate: t.tours?.moderate || 'Moderado',
      challenging: t.tours?.challenging || 'Desafiante',
    };
    return map[difficulty] || difficulty;
  };

  return (
    <section id="tours" className="py-24 bg-gradient-to-br from-stone-50 to-stone-100 dark:from-[#1F120A] dark:to-[#2C1A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-stone-900 dark:text-white tracking-[-2px]">
            {t.tours?.title || 'Nuestros Tours'}
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 mt-4 max-w-2xl mx-auto">
            {t.tours?.subtitle || 'Experiencias de lujo con grupos pequeños y servicio VIP'}
          </p>
        </motion.div>

        {/* Grid de tours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group bg-white dark:bg-[#2C1A0F] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#FF9F1C]/30"
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tour.image || '/default-tour.jpg'}
                  alt={language === 'es' ? tour.title : tour.titleEn}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-md text-xs font-bold rounded-2xl shadow">
                  ${tour.price}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-3 line-clamp-2">
                  {language === 'es' ? tour.title : tour.titleEn}
                </h3>

                <p className="text-stone-600 dark:text-stone-400 text-base line-clamp-3 mb-6">
                  {language === 'es' ? tour.description : tour.descriptionEn}
                </p>

                {/* Info */}
                <div className="flex items-center justify-between text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#FF9F1C]" />
                    <span className="font-medium">{tour.duration} días</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#FF9F1C]" />
                    <span className="font-medium">{getDifficultyText(tour.difficulty)}</span>
                  </div>
                </div>

                {/* Botón */}
                <Button
                  size="lg"
                  className="w-full bg-[#FF9F1C] hover:bg-[#FFB74C] text-[#2C1708] font-bold rounded-2xl py-7 text-base shadow-inner transition-all"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver detalles
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}