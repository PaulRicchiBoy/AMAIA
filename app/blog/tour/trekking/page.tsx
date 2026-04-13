"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  TentTree, Mountain, Clock, Star, MapPin, ArrowRight, 
  Clock3, Users, Calendar, Footprints, Camera, Coffee, 
  AlertTriangle, Thermometer, Sunrise, Sunset 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';

// Definir los tours de Trekking basado en los IDs
const TREKKING_TOUR_IDS = [
  'short-inca-trail-2d1n',
  'classic-inca-trail-4d3n',
  'salkantay-trek-5d4n'
];

// Organizar por subcategorías
const SUBCATEGORIES = [
  {
    id: 'inca-trail',
    name: { es: 'Camino Inca', en: 'Inca Trail' },
    description: { 
      es: 'La ruta de trekking más famosa de Sudamérica. Camina por senderos ancestrales hacia Machu Picchu.',
      en: 'The most famous trekking route in South America. Walk along ancestral paths to Machu Picchu.'
    },
    icon: TentTree,
    color: 'from-amber-600 to-amber-800',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-200 dark:border-amber-800',
    textColor: 'text-amber-600 dark:text-amber-400',
    gradient: 'from-amber-500 to-amber-600',
    lightGradient: 'from-amber-400 to-amber-500',
    tourIds: ['short-inca-trail-2d1n', 'classic-inca-trail-4d3n']
  },
  {
    id: 'salkantay',
    name: { es: 'Salkantay Trek', en: 'Salkantay Trek' },
    description: { 
      es: 'Considerada una de las 25 mejores caminatas del mundo. Rodea el imponente nevado Salkantay.',
      en: 'Considered one of the 25 best treks in the world. Circumnavigate the imposing Salkantay snow peak.'
    },
    icon: Mountain,
    color: 'from-blue-600 to-blue-800',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    textColor: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-500 to-blue-600',
    lightGradient: 'from-blue-400 to-blue-500',
    tourIds: ['salkantay-trek-5d4n']
  }
];

// Información de altura de los treks
const TREK_INFO = {
  'inca-trail': {
    maxAltitude: { es: '4,200 msnm (Abra de Muerto)', en: '4,200 masl (Dead Woman\'s Pass)' },
    duration: { es: '2 - 4 días', en: '2 - 4 days' },
    difficulty: { es: 'Moderado a Desafiante', en: 'Moderate to Challenging' },
    bestSeason: { es: 'Mayo - Septiembre', en: 'May - September' }
  },
  'salkantay': {
    maxAltitude: { es: '4,650 msnm (Abra Salkantay)', en: '4,650 masl (Salkantay Pass)' },
    duration: { es: '5 días', en: '5 days' },
    difficulty: { es: 'Desafiante', en: 'Challenging' },
    bestSeason: { es: 'Abril - Octubre', en: 'April - October' }
  }
};

export default function TrekkingPage() {
  const { language } = useLanguage();

  // Filtrar solo los tours de Trekking
  const trekkingTours = tours.filter(tour => 
    TREKKING_TOUR_IDS.includes(tour.id)
  );

  // Función para obtener tours por subcategoría
  const getToursBySubcategory = (tourIds: string[]) => {
    return trekkingTours.filter(tour => tourIds.includes(tour.id));
  };

  // Hero image para Trekking
  const heroImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Trekking en Perú"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          {/* Efecto de niebla */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-900/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center lg:text-left">
          <div className="max-w-3xl">
            {/* Badge de ubicación */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <MapPin className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-white/90 text-sm">Cusco - Andes Peruanos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {language === 'es' ? 'Trekking en Perú' : 'Trekking in Peru'}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {language === 'es' 
                ? 'Descubre las rutas de trekking más espectaculares de los Andes. Camino Inca, Salkantay y más. Vive la aventura de tu vida.'
                : 'Discover the most spectacular trekking routes in the Andes. Inca Trail, Salkantay and more. Live the adventure of your life.'}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#treks"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {language === 'es' ? 'Ver Rutas de Trekking' : 'View Trekking Routes'}
              </Link>
              <Link 
                href="/contacto"
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg border border-white/30"
              >
                {language === 'es' ? 'Contactar Guía' : 'Contact Guide'}
              </Link>
            </div>

            {/* Stats rápidas */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">{trekkingTours.length}</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Rutas' : 'Routes'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">4,650</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Max. Altitud' : 'Max. Altitude'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">25+</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Años Exp.' : 'Years Exp.'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Introducción al Trekking */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'es' 
                  ? 'Aventura en los Andes Peruanos' 
                  : 'Adventure in the Peruvian Andes'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {language === 'es'
                  ? 'Los Andes peruanos ofrecen algunas de las rutas de trekking más impresionantes del mundo. Desde el legendario Camino Inca hasta el desafiante Salkantay, cada ruta te regalará paisajes inolvidables, montañas nevadas, bosques de nubes y una conexión única con la naturaleza.'
                  : 'The Peruvian Andes offer some of the most impressive trekking routes in the world. From the legendary Inca Trail to the challenging Salkantay, each route will give you unforgettable landscapes, snow-capped mountains, cloud forests, and a unique connection with nature.'}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <Footprints className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {language === 'es' ? 'Rutas ancestrales' : 'Ancestral routes'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <Mountain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {language === 'es' ? 'Nevados +4,600m' : 'Snow peaks +4,600m'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <Camera className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {language === 'es' ? 'Paisajes únicos' : 'Unique landscapes'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {language === 'es' ? 'Grupos reducidos' : 'Small groups'}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <Sunrise className="w-8 h-8 text-amber-500 mb-3" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">4,650m</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'es' ? 'Punto más alto' : 'Highest point'}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <Thermometer className="w-8 h-8 text-blue-500 mb-3" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">-5° a 20°C</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'es' ? 'Temperatura' : 'Temperature'}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <Clock className="w-8 h-8 text-green-500 mb-3" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">2-5 días</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'es' ? 'Duración' : 'Duration'}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <AlertTriangle className="w-8 h-8 text-orange-500 mb-3" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">Moderado</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'es' ? 'Dificultad' : 'Difficulty'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategorías y Cards */}
      <section id="treks" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'es' ? 'Rutas de Trekking' : 'Trekking Routes'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Elige la ruta que mejor se adapte a tu nivel de experiencia y tiempo disponible.'
                : 'Choose the route that best suits your experience level and available time.'}
            </p>
          </div>

          <div className="space-y-20">
            {SUBCATEGORIES.map((subcat) => {
              const subcatTours = getToursBySubcategory(subcat.tourIds);
              const trekInfo = TREK_INFO[subcat.id as keyof typeof TREK_INFO];
              
              return (
                <div key={subcat.id}>
                  {/* Header de subcategoría */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
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
                    
                    {/* Info rápida del trek */}
                    <div className="flex flex-wrap gap-3">
                      <div className={`px-4 py-2 rounded-full ${subcat.bgColor} border ${subcat.borderColor}`}>
                        <span className={`text-sm font-medium ${subcat.textColor}`}>
                          ↑ {trekInfo.maxAltitude[language]}
                        </span>
                      </div>
                      <div className={`px-4 py-2 rounded-full ${subcat.bgColor} border ${subcat.borderColor}`}>
                        <span className={`text-sm font-medium ${subcat.textColor}`}>
                          {trekInfo.duration[language]}
                        </span>
                      </div>
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
                        <div className="relative h-72 overflow-hidden">
                          <Image
                            src={tour.image || '/default-trek.jpg'}
                            alt={language === 'es' ? tour.title : tour.titleEn}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent`} />
                          
                          {/* Badge de duración */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {tour.duration} {language === 'es' ? 'días' : 'days'}
                          </div>

                          {/* Badge de dificultad */}
                          <div className="absolute top-4 left-4">
                            {tour.difficulty === 'easy' && (
                              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                {language === 'es' ? 'Fácil' : 'Easy'}
                              </div>
                            )}
                            {tour.difficulty === 'moderate' && (
                              <div className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                {language === 'es' ? 'Moderado' : 'Moderate'}
                              </div>
                            )}
                            {tour.difficulty === 'challenging' && (
                              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                {language === 'es' ? 'Desafiante' : 'Challenging'}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Contenido de la card */}
                        <div className="p-8">
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                            {language === 'es' ? tour.title : tour.titleEn}
                          </h4>
                          
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                            {language === 'es' ? tour.description : tour.descriptionEn}
                          </p>

                          {/* Highlights específicos de trekking */}
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {tour.highlights?.slice(0, 4).map((highlight, idx) => (
                                <span 
                                  key={idx} 
                                  className={`text-xs px-3 py-1 rounded-full ${subcat.bgColor} ${subcat.textColor} border ${subcat.borderColor}`}
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Características del trek */}
                          <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                              <Mountain className={`w-5 h-5 mx-auto mb-1 ${subcat.textColor}`} />
                              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                                {trekInfo.maxAltitude[language].split(' ')[0]}
                              </span>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                              <Clock className={`w-5 h-5 mx-auto mb-1 ${subcat.textColor}`} />
                              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                                {tour.duration} {language === 'es' ? 'días' : 'days'}
                              </span>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                              <Users className={`w-5 h-5 mx-auto mb-1 ${subcat.textColor}`} />
                              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                                {language === 'es' ? '8 máx' : '8 max'}
                              </span>
                            </div>
                          </div>

                          {/* Precio y acción */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {language === 'es' ? 'Desde' : 'From'}
                              </p>
                              <p className="text-3xl font-bold text-blue-600">${tour.price}</p>
                            </div>
                            
                            <div className="flex items-center gap-3">
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

      {/* Guía de preparación para trekking */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {language === 'es' ? 'Prepárate para tu Trekking' : 'Prepare for your Trek'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="bg-blue-500/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Footprints className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {language === 'es' ? 'Entrenamiento' : 'Training'}
              </h3>
              <p className="text-blue-100">
                {language === 'es'
                  ? 'Recomendamos entrenamiento cardiovascular 1-2 meses antes'
                  : 'We recommend cardiovascular training 1-2 months before'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="bg-blue-500/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Thermometer className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {language === 'es' ? 'Equipo necesario' : 'Required equipment'}
              </h3>
              <p className="text-blue-100">
                {language === 'es'
                  ? 'Ropa térmica, botas de trekking, impermeable, linterna'
                  : 'Thermal clothing, trekking boots, waterproof, flashlight'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="bg-blue-500/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Coffee className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {language === 'es' ? 'Aclimatación' : 'Acclimatization'}
              </h3>
              <p className="text-blue-100">
                {language === 'es'
                  ? 'Llegar 2-3 días antes a Cusco para aclimatarse'
                  : 'Arrive 2-3 days early in Cusco to acclimatize'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="bg-blue-500/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {language === 'es' ? 'Salud' : 'Health'}
              </h3>
              <p className="text-blue-100">
                {language === 'es'
                  ? 'Seguro de viaje recomendado, pastillas para altura'
                  : 'Travel insurance recommended, altitude sickness pills'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'es' 
              ? '¿Listo para la aventura?' 
              : 'Ready for the adventure?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Contacta a nuestros guías expertos y comienza a planificar tu trekking en los Andes'
              : 'Contact our expert guides and start planning your trekking in the Andes'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contacto"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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