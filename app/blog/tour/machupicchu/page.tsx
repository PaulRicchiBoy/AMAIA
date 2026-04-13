"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Train, Navigation, Clock, Star, MapPin, ArrowRight, Clock3, Users, Calendar, Mountain, TentTree, Camera, Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';

// Definir los tours de Machu Picchu basado en los IDs
const MACHUPICCHU_TOUR_IDS = [
  'machu-picchu-express-1d',
  'machu-picchu-express-2d1n',
  'machu-picchu-full-day',
  'machu-picchu-sunset-sunrise-2d1n',
  'sacred-valley-machu-picchu-2d1n'
];

// Organizar por subcategorías
const SUBCATEGORIES = [
  {
    id: 'express',
    name: { es: 'Machu Picchu Express', en: 'Machu Picchu Express' },
    description: { 
      es: 'Tours rápidos en tren a la ciudadela, ideal para quienes tienen poco tiempo',
      en: 'Quick train tours to the citadel, ideal for those with limited time'
    },
    icon: Navigation,
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-200 dark:border-amber-800',
    textColor: 'text-amber-600 dark:text-amber-400',
    tourIds: ['machu-picchu-express-1d', 'machu-picchu-express-2d1n']
  },
  {
    id: 'train',
    name: { es: 'Machu Picchu en Tren', en: 'Machu Picchu by Train' },
    description: { 
      es: 'Experiencias completas en tren con paisajes espectaculares',
      en: 'Complete train experiences with spectacular landscapes'
    },
    icon: Train,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    tourIds: ['machu-picchu-full-day', 'machu-picchu-sunset-sunrise-2d1n', 'sacred-valley-machu-picchu-2d1n']
  }
];

export default function MachuPicchuPage() {
  const { language } = useLanguage();

  // Filtrar solo los tours de Machu Picchu
  const machupicchuTours = tours.filter(tour => 
    MACHUPICCHU_TOUR_IDS.includes(tour.id)
  );

  // Función para obtener tours por subcategoría
  const getToursBySubcategory = (tourIds: string[]) => {
    return machupicchuTours.filter(tour => tourIds.includes(tour.id));
  };

  // Hero image (usamos la primera imagen disponible o una por defecto)
  const heroImage = machupicchuTours[0]?.image || '/images/machupicchu-hero.jpg';

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Machu Picchu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center lg:text-left">
          <div className="max-w-3xl">
            {/* Badge de ubicación */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <MapPin className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-white/90 text-sm">Cusco - Perú</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Machu Picchu
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {language === 'es' 
                ? 'Descubre la ciudadela inca, una de las 7 maravillas del mundo, en todo su esplendor. Vive una experiencia única en los Andes peruanos.'
                : 'Discover the Inca citadel, one of the 7 wonders of the world, in all its splendor. Live a unique experience in the Peruvian Andes.'}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#tours"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {language === 'es' ? 'Ver Tours Disponibles' : 'View Available Tours'}
              </Link>
              <Link 
                href="/contacto"
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg border border-white/30"
              >
                {language === 'es' ? 'Contactar Asesor' : 'Contact Advisor'}
              </Link>
            </div>

            {/* Stats rápidas */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">{machupicchuTours.length}</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Tours' : 'Tours'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">2,430</p>
                <p className="text-white/80 text-sm">msnm</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Años' : 'Years'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Subcategorías y Cards */}
      <section id="tours" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'es' ? 'Formas de llegar a Machu Picchu' : 'Ways to get to Machu Picchu'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Elige la experiencia que mejor se adapte a tu viaje. Todos nuestros tours incluyen guía profesional y tickets de ingreso.'
                : 'Choose the experience that best suits your trip. All our tours include professional guide and entrance tickets.'}
            </p>
          </div>

          <div className="space-y-20">
            {SUBCATEGORIES.map((subcat) => {
              const subcatTours = getToursBySubcategory(subcat.tourIds);
              
              return (
                <div key={subcat.id}>
                  {/* Header de subcategoría */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${subcat.color}`}>
                      <subcat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {subcat.name[language]}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {subcat.description[language]}
                      </p>
                    </div>
                  </div>

                  {/* Grid de Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {subcatTours.map((tour) => (
                      <Link 
                        key={tour.id}
                        href={`/tour/${tour.id}`}
                        className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      >
                        {/* Imagen del tour */}
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={tour.image || '/default-tour.jpg'}
                            alt={language === 'es' ? tour.title : tour.titleEn}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
                          
                          {/* Badge de duración */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {tour.duration} {language === 'es' ? 'días' : 'days'}
                          </div>

                          {/* Badge de dificultad */}
                          <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {tour.difficulty === 'easy' && (language === 'es' ? 'Fácil' : 'Easy')}
                            {tour.difficulty === 'moderate' && (language === 'es' ? 'Moderado' : 'Moderate')}
                            {tour.difficulty === 'challenging' && (language === 'es' ? 'Desafiante' : 'Challenging')}
                          </div>
                        </div>

                        {/* Contenido de la card */}
                        <div className="p-8">
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 transition-colors">
                            {language === 'es' ? tour.title : tour.titleEn}
                          </h4>
                          
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                            {language === 'es' ? tour.description : tour.descriptionEn}
                          </p>

                          {/* Highlights */}
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {tour.highlights?.slice(0, 3).map((highlight, idx) => (
                                <span 
                                  key={idx} 
                                  className={`text-xs px-3 py-1 rounded-full ${subcat.bgColor} ${subcat.textColor} border ${subcat.borderColor}`}
                                >
                                  {highlight}
                                </span>
                              ))}
                              {tour.highlights && tour.highlights.length > 3 && (
                                <span className={`text-xs px-3 py-1 rounded-full ${subcat.bgColor} ${subcat.textColor} border ${subcat.borderColor}`}>
                                  +{tour.highlights.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Características principales */}
                          <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                              <Clock className={`w-5 h-5 mx-auto mb-1 ${subcat.textColor}`} />
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {tour.duration} {language === 'es' ? 'días' : 'days'}
                              </span>
                            </div>
                            <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                              <Users className={`w-5 h-5 mx-auto mb-1 ${subcat.textColor}`} />
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {language === 'es' ? 'Grupos' : 'Groups'}
                              </span>
                            </div>
                            <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                              <Camera className={`w-5 h-5 mx-auto mb-1 ${subcat.textColor}`} />
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {language === 'es' ? 'Fotos' : 'Photos'}
                              </span>
                            </div>
                          </div>

                          {/* Precio y acción */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {language === 'es' ? 'Desde' : 'From'}
                              </p>
                              <p className="text-3xl font-bold text-amber-600">${tour.price}</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${subcat.color} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                <ArrowRight className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Información práctica */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {language === 'es' ? 'Información útil para tu visita' : 'Useful information for your visit'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 dark:bg-amber-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'es' ? 'Mejor época' : 'Best time'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'es' ? 'Abril - Octubre' : 'April - October'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 dark:bg-amber-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock3 className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'es' ? 'Horario' : 'Schedule'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                06:00 - 17:30
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 dark:bg-amber-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'es' ? 'Altitud' : 'Altitude'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                2,430 msnm
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 dark:bg-amber-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'es' ? 'Clima' : 'Weather'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'es' ? 'Templado' : 'Temperate'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'es' 
              ? '¿Listo para conocer Machu Picchu?' 
              : 'Ready to visit Machu Picchu?'}
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Contacta a nuestros asesores y comienza a planificar tu viaje a la maravilla del mundo'
              : 'Contact our advisors and start planning your trip to the wonder of the world'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contacto"
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {language === 'es' ? 'Reservar Ahora' : 'Book Now'}
            </Link>
            <Link 
              href="/tour"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              {language === 'es' ? 'Ver Todos los Tours' : 'View All Tours'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}