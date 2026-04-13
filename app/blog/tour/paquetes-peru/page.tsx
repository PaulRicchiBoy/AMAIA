"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  Globe2, Compass, Clock, Star, MapPin, ArrowRight, 
  Users, Calendar, Camera, Coffee, Train, Bus, 
  Plane, Ship, Mountain, Palmtree, Landmark, Utensils
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';

// Definir los IDs de los paquetes de Perú
const PERU_PACKAGES_IDS = [
  'experiencia-lima-cusco',
  'peru-bolivia-aventura',
  'experiencia-cusco-puno-8d7n',
  'experiencia-lima-cusco-7d6n',
  'experiencia-lima-cusco-6d5n',
  'experiencia-lima-cusco-9d8n',
  'experiencia-lima-cusco-puno-10d9n',
  'experiencia-lima-nazca-cusco-10d9n',
  'peru-completo-aventura'
];

// Organizar por categorías de paquetes
const PACKAGE_CATEGORIES = [
  {
    id: 'lima-cusco',
    name: { es: 'Lima + Cusco', en: 'Lima + Cusco' },
    description: { 
      es: 'Combina la costa con los Andes. Descubre Lima, la Ciudad de los Reyes, y la majestuosidad del Cusco Imperial.',
      en: 'Combine the coast with the Andes. Discover Lima, the City of Kings, and the majesty of Imperial Cusco.'
    },
    icon: Globe2,
    color: 'from-purple-600 to-purple-800',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    textColor: 'text-purple-600 dark:text-purple-400',
    gradient: 'from-purple-500 to-purple-600',
    tourIds: ['experiencia-lima-cusco', 'experiencia-lima-cusco-6d5n', 'experiencia-lima-cusco-7d6n', 'experiencia-lima-cusco-9d8n']
  },
  {
    id: 'cusco-puno',
    name: { es: 'Cusco + Puno', en: 'Cusco + Puno' },
    description: { 
      es: 'Del Imperio Inca al Lago Titicaca. Conecta con la historia y la cultura viva del altiplano.',
      en: 'From the Inca Empire to Lake Titicaca. Connect with history and the living culture of the highlands.'
    },
    icon: Compass,
    color: 'from-blue-600 to-blue-800',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    textColor: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-500 to-blue-600',
    tourIds: ['experiencia-cusco-puno-8d7n']
  },
  {
    id: 'peru-bolivia',
    name: { es: 'Perú + Bolivia', en: 'Peru + Bolivia' },
    description: { 
      es: 'La experiencia binacional definitiva. Perú y Bolivia en un solo viaje: Andes, Lago Titicaca y Salar de Uyuni.',
      en: 'The definitive binational experience. Peru and Bolivia in one trip: Andes, Lake Titicaca and Uyuni Salt Flat.'
    },
    icon: Plane,
    color: 'from-emerald-600 to-emerald-800',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    gradient: 'from-emerald-500 to-emerald-600',
    tourIds: ['peru-bolivia-aventura']
  },
  {
    id: 'nazca',
    name: { es: 'Incluyendo Nazca', en: 'Including Nazca' },
    description: { 
      es: 'Añade el misterio de las Líneas de Nazca a tu aventura peruana. Historia, arqueología y enigmas del desierto.',
      en: 'Add the mystery of the Nazca Lines to your Peruvian adventure. History, archaeology and desert enigmas.'
    },
    icon: Ship,
    color: 'from-orange-600 to-orange-800',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-200 dark:border-orange-800',
    textColor: 'text-orange-600 dark:text-orange-400',
    gradient: 'from-orange-500 to-orange-600',
    tourIds: ['experiencia-lima-nazca-cusco-10d9n']
  },
  {
    id: 'completo',
    name: { es: 'Perú Completo', en: 'Complete Peru' },
    description: { 
      es: 'La experiencia más completa. Todo Perú en un solo viaje: costa, sierra, selva, andes y altiplano.',
      en: 'The most complete experience. All Peru in one trip: coast, highlands, jungle, andes and altiplano.'
    },
    icon: Landmark,
    color: 'from-amber-600 to-amber-800',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-200 dark:border-amber-800',
    textColor: 'text-amber-600 dark:text-amber-400',
    gradient: 'from-amber-500 to-amber-600',
    tourIds: ['peru-completo-aventura', 'experiencia-lima-cusco-puno-10d9n']
  }
];

export default function PeruPackagesPage() {
  const { language } = useLanguage();

  // Filtrar solo los paquetes de Perú
  const peruPackages = tours.filter(tour => 
    PERU_PACKAGES_IDS.includes(tour.id)
  );

  // Función para obtener paquetes por categoría
  const getPackagesByCategory = (tourIds: string[]) => {
    return peruPackages.filter(tour => tourIds.includes(tour.id));
  };

  // Hero image para Paquetes Perú
  const heroImage = 'https://images.unsplash.com/photo-1526392060935-9d621c5c46b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Perú"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center lg:text-left">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Globe2 className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-white/90 text-sm">Perú - Multi-destinos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {language === 'es' ? 'Paquetes Perú' : 'Peru Packages'}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {language === 'es' 
                ? 'Descubre lo mejor de Perú en un solo viaje. Combina destinos, culturas y experiencias únicas. Desde la costa hasta los Andes y la selva.'
                : 'Discover the best of Peru in one trip. Combine destinations, cultures and unique experiences. From the coast to the Andes and the jungle.'}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#paquetes"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {language === 'es' ? 'Ver Paquetes' : 'View Packages'}
              </Link>
              <Link 
                href="/contacto"
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg border border-white/30"
              >
                {language === 'es' ? 'Asesoría Personalizada' : 'Personalized Advice'}
              </Link>
            </div>

            {/* Stats rápidas */}
            <div className="grid grid-cols-4 gap-4 mt-12 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">{peruPackages.length}</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Paquetes' : 'Packages'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">6-15</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Días' : 'Days'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Destinos' : 'Destinations'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-white/80 text-sm">{language === 'es' ? 'Personalizable' : 'Customizable'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Por qué elegir paquetes */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'es' ? '¿Por qué elegir un paquete?' : 'Why choose a package?'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Ahorra tiempo y dinero mientras disfrutas de una experiencia perfectamente organizada'
                : 'Save time and money while enjoying a perfectly organized experience'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'es' ? 'Todo Incluido' : 'All Inclusive'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {language === 'es'
                  ? 'Hoteles, traslados, tours y comidas seleccionadas'
                  : 'Hotels, transfers, tours and selected meals'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'es' ? 'Guías Expertos' : 'Expert Guides'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {language === 'es'
                  ? 'Profesionales bilingües en todos los tours'
                  : 'Bilingual professionals on all tours'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'es' ? 'Flexibilidad' : 'Flexibility'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {language === 'es'
                  ? 'Personalizamos según tus intereses'
                  : 'We customize according to your interests'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'es' ? 'Mejor Precio' : 'Best Price'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {language === 'es'
                  ? 'Ahorra hasta 30% vs reservar por separado'
                  : 'Save up to 30% vs booking separately'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías de Paquetes */}
      <section id="paquetes" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'es' ? 'Nuestros Paquetes' : 'Our Packages'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Selecciona el paquete que mejor se adapte a tu tiempo y presupuesto'
                : 'Select the package that best suits your time and budget'}
            </p>
          </div>

          <div className="space-y-20">
            {PACKAGE_CATEGORIES.map((category) => {
              const categoryPackages = getPackagesByCategory(category.tourIds);
              
              if (categoryPackages.length === 0) return null;

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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {categoryPackages.map((pkg) => (
                      <Link 
                        key={pkg.id}
                        href={`/tour/${pkg.id}`}
                        className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      >
                        {/* Imagen del paquete */}
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={pkg.image || '/default-package.jpg'}
                            alt={language === 'es' ? pkg.title : pkg.titleEn}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          
                          {/* Badge de duración */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {pkg.duration} {language === 'es' ? 'días' : 'days'} / {pkg.duration - 1} {language === 'es' ? 'noches' : 'nights'}
                          </div>

                          {/* Badge de categoría de hotel */}
                          <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {pkg.hotelCategory}
                          </div>
                        </div>

                        {/* Contenido de la card */}
                        <div className="p-8">
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">
                            {language === 'es' ? pkg.title : pkg.titleEn}
                          </h4>
                          
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                            {language === 'es' ? pkg.description : pkg.descriptionEn}
                          </p>

                          {/* Destinos incluidos (highlights) */}
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {pkg.highlights?.slice(0, 4).map((highlight, idx) => (
                                <span 
                                  key={idx} 
                                  className={`text-xs px-3 py-1 rounded-full ${category.bgColor} ${category.textColor} border ${category.borderColor}`}
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Características del paquete */}
                          <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                              <Clock className={`w-5 h-5 mx-auto mb-1 ${category.textColor}`} />
                              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                                {pkg.duration} {language === 'es' ? 'días' : 'days'}
                              </span>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                              <MapPin className={`w-5 h-5 mx-auto mb-1 ${category.textColor}`} />
                              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                                {pkg.highlights?.length || 0}+ {language === 'es' ? 'destinos' : 'destinations'}
                              </span>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                              <Users className={`w-5 h-5 mx-auto mb-1 ${category.textColor}`} />
                              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                                {pkg.passengerType}
                              </span>
                            </div>
                          </div>

                          {/* Transporte incluido */}
                          <div className="flex gap-2 mb-6">
                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <Plane className="w-3 h-3" />
                              <span>Vuelos</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <Train className="w-3 h-3" />
                              <span>Tren</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <Bus className="w-3 h-3" />
                              <span>Bus</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <Ship className="w-3 h-3" />
                              <span>Lancha</span>
                            </div>
                          </div>

                          {/* Precio y acción */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {language === 'es' ? 'Desde' : 'From'}
                              </p>
                              <p className="text-3xl font-bold text-purple-600">${pkg.price}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {language === 'es' ? 'por persona' : 'per person'}
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
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

      {/* Paquetes Destacados */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'es' ? 'Paquetes Más Populares' : 'Most Popular Packages'}
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Los favoritos de nuestros viajeros'
                : 'Our travelers favorites'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Paquete 1: Perú-Bolivia */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500/30 p-3 rounded-xl">
                  <Plane className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Perú - Bolivia</h3>
              </div>
              <p className="text-purple-200 mb-4">11 días / 10 noches</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$2,199</span>
                <span className="text-sm text-purple-200">desde</span>
              </div>
            </div>

            {/* Paquete 2: Lima-Cusco 8D */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500/30 p-3 rounded-xl">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Lima - Cusco</h3>
              </div>
              <p className="text-purple-200 mb-4">8 días / 7 noches</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$1,499</span>
                <span className="text-sm text-purple-200">desde</span>
              </div>
            </div>

            {/* Paquete 3: Perú Completo */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500/30 p-3 rounded-xl">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Perú Completo</h3>
              </div>
              <p className="text-purple-200 mb-4">15 días / 14 noches</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$2,799</span>
                <span className="text-sm text-purple-200">desde</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'es' 
              ? '¿Listo para tu aventura peruana?' 
              : 'Ready for your Peruvian adventure?'}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Contacta a nuestros asesores y te ayudaremos a crear el paquete perfecto para ti'
              : 'Contact our advisors and we will help you create the perfect package for you'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contacto"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {language === 'es' ? 'Cotizar Ahora' : 'Get a Quote'}
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