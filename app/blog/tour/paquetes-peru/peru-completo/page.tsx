'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Clock, DollarSign } from 'lucide-react';

export default function PeruCompletoPage() {
  const { language } = useLanguage();
  
  // Filtrar tours de Perú Completo
  const peruCompletoTours = tours.filter(tour => 
    tour.id.includes('peru-completo') || 
    tour.id.includes('peru-bolivia')
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-4">
          <Globe className="w-10 h-10 text-emerald-600" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {language === 'es' ? 'Perú Completo' : 'Complete Peru'}
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          {language === 'es' 
            ? 'La experiencia definitiva: explora lo mejor del Perú de norte a sur'
            : 'The definitive experience: explore the best of Peru from north to south'}
        </p>

        {peruCompletoTours.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {language === 'es' 
                ? 'No hay tours disponibles en esta categoría' 
                : 'No tours available in this category'}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peruCompletoTours.map((tour) => (
              <Link key={tour.id} href={`/tours/${tour.id}`}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={tour.image || '/default-tour.jpg'}
                      alt={language === 'es' ? tour.title : tour.titleEn}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {language === 'es' ? tour.title : tour.titleEn}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                      {language === 'es' ? tour.description : tour.descriptionEn}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {tour.duration} {language === 'es' ? 'días' : 'days'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                        <span className="font-bold text-emerald-600">${tour.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}