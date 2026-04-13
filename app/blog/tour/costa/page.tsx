"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  Waves, Palmtree, Ship, Sun, Clock, Star, MapPin, ArrowRight, 
  Users, Calendar, Camera, Coffee, Umbrella, Fish, Bird,
  Utensils, Wine, Tent, Compass, Navigation, Plane
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';

// Definir los IDs de TODOS los tours de costa (incluyendo los que tienen Lima)
const COSTA_TOUR_IDS = [
  'city-tour-lima',                    // City Tour Lima
  'lima-express',                       // Lima Express
  'lima-paracas-ballestas-2d1n',        // Lima - Paracas & Ballestas
  'lima-paracas-huacachina-3d2n',       // Lima - Paracas & Huacachina
  'experiencia-lima-cusco',             // Experiencia Lima-Cusco 8d/7n
  'experiencia-lima-cusco-6d5n',        // Experiencia Lima-Cusco 6d/5n
  'experiencia-lima-cusco-7d6n',        // Experiencia Lima-Cusco 7d/6n
  'experiencia-lima-cusco-9d8n',        // Experiencia Lima-Cusco 9d/8n
  'experiencia-lima-cusco-puno-10d9n',  // Experiencia Lima-Cusco-Puno
  'experiencia-lima-nazca-cusco-10d9n'  // Experiencia Lima-Nazca-Cusco
];

// Organizar por categorías de costa
const COSTA_CATEGORIES = [
  {
    id: 'lima-city',
    name: { es: 'City Tours Lima', en: 'Lima City Tours' },
    description: { 
      es: 'Descubre la histórica Ciudad de los Reyes, su arquitectura colonial y su moderna vida urbana.',
      en: 'Discover the historic City of Kings, its colonial architecture and modern urban life.'
    },
    icon: Compass,
    color: 'from-sky-600 to-sky-800',
    bgColor: 'bg-sky-50 dark:bg-sky-900/20',
    borderColor: 'border-sky-200 dark:border-sky-800',
    textColor: 'text-sky-600 dark:text-sky-400',
    gradient: 'from-sky-500 to-sky-600',
    tourIds: ['city-tour-lima', 'lima-express']
  },
  {
    id: 'paracas-ballestas',
    name: { es: 'Paracas e Islas Ballestas', en: 'Paracas & Ballestas Islands' },
    description: { 
      es: 'Explora la Reserva Nacional de Paracas y navega hacia el "Galápagos peruano".',
      en: 'Explore the Paracas National Reserve and sail to the "Peruvian Galapagos".'
    },
    icon: Ship,
    color: 'from-blue-600 to-blue-800',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    textColor: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-500 to-blue-600',
    tourIds: ['lima-paracas-ballestas-2d1n']
  },
  {
    id: 'huacachina',
    name: { es: 'Aventura en Huacachina', en: 'Huacachina Adventure' },
    description: { 
      es: 'Aventura en el oasis de América: buggies, sandboarding y atardeceres en el desierto.',
      en: 'Adventure in the oasis of America: buggies, sandboarding and desert sunsets.'
    },
    icon: Sun,
    color: 'from-amber-600 to-amber-800',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-200 dark:border-amber-800',
    textColor: 'text-amber-600 dark:text-amber-400',
    gradient: 'from-amber-500 to-amber-600',
    tourIds: ['lima-paracas-huacachina-3d2n']
  },
  {
    id: 'paquetes-costa',
    name: { es: 'Paquetes que Incluyen Costa', en: 'Packages Including Coast' },
    description: { 
      es: 'Combina la costa con otros destinos peruanos en un solo viaje.',
      en: 'Combine the coast with other Peruvian destinations in one trip.'
    },
    icon: Plane,
    color: 'from-purple-600 to-purple-800',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    textColor: 'text-purple-600 dark:text-purple-400',
    gradient: 'from-purple-500 to-purple-600',
    tourIds: [
      'experiencia-lima-cusco',
      'experiencia-lima-cusco-6d5n',
      'experiencia-lima-cusco-7d6n',
      'experiencia-lima-cusco-9d8n',
      'experiencia-lima-cusco-puno-10d9n',
      'experiencia-lima-nazca-cusco-10d9n'
    ]
  }
];

export default function CostaPage() {
  const { language } = useLanguage();

  // Filtrar todos los tours de costa
  const costaTours = tours.filter(tour => 
    COSTA_TOUR_IDS.includes(tour.id)
  );

  // Función para obtener tours por categoría
  const getToursByCategory = (tourIds: string[]) => {
    return costaTours.filter(tour => tourIds.includes(tour.id));
  };

  // Hero image para Costa
  const heroImage = 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Costa Peruana"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center lg:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Waves className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-white/90 text-sm">Costa Peruana - Pacífico</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {language === 'es' ? 'Costa Peruana' : 'Peruvian Coast'}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {language === 'es' 
                ? 'Descubre la magia del Pacífico peruano. Playas, desiertos, historia y la mejor gastronomía de Sudamérica te esperan.'
                : 'Discover the magic of the Peruvian Pacific. Beaches, deserts, history and the best gastronomy in South America await you.'}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#tours"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {language === 'es' ? 'Ver Tours' : 'View Tours'}
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
                <p className="text-3xl font-bold text-white">{costaTours.length}</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Tours' : 'Tours'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">10</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Destinos' : 'Destinations'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">18-30°</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Temperatura' : 'Temperature'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Tours por Categoría */}
      <section id="tours" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'es' ? 'Tours en la Costa' : 'Coast Tours'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Explora todos nuestros tours que incluyen la costa peruana'
                : 'Explore all our tours that include the Peruvian coast'}
            </p>
          </div>

          <div className="space-y-20">
            {COSTA_CATEGORIES.map((category) => {
              const categoryTours = getToursByCategory(category.tourIds);
              
              if (categoryTours.length === 0) return null;

              return (
                <div key={category.id}>
                  {/* Header de categoría */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {category.name[language]}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {category.description[language]}
                      </p>
                    </div>
                  </div>

                  {/* Grid de Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryTours.map((tour) => (
                      <Link 
                        key={tour.id}
                        href={`/tour/${tour.id}`}
                        className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                      >
                        {/* Imagen del tour */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={tour.image || '/default-coast.jpg'}
                            alt={language === 'es' ? tour.title : tour.titleEn}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Badge de duración */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            {tour.duration === 0.5 ? '½ día' : tour.duration === 1 ? '1 día' : `${tour.duration} días`}
                          </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 transition-colors">
                            {language === 'es' ? tour.title : tour.titleEn}
                          </h4>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                            {language === 'es' ? tour.description : tour.descriptionEn}
                          </p>

                          {/* Precio */}
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {language === 'es' ? 'Desde' : 'From'}
                              </p>
                              <p className="text-2xl font-bold text-sky-600">${tour.price}</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <ArrowRight className="w-5 h-5 text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity" />
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
    </main>
  );
}