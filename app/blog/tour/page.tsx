"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  Castle, MapPinned, Footprints, Globe2, Waves,
  ArrowRight, Train, TentTree, Compass, Palmtree,
  Landmark, Utensils, Camera, Users, Star, Clock,
  Shield, Heart, Award, Map, Sunrise, Sunset, Coffee,
  Wifi, Bus, CreditCard, ChevronRight, Phone, Mail,
  Facebook, Instagram, Twitter, Youtube, MessageCircle
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ToursPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  // Textos bilingües
  const t = {
    hero: {
      badge: language === 'es' ? '15 años de experiencia' : '15 years of experience',
      title1: language === 'es' ? 'Descubre el' : 'Discover',
      title2: language === 'es' ? 'Perú Auténtico' : 'Authentic Peru',
      description: language === 'es' 
        ? 'Vive experiencias únicas en el corazón de los Andes. Machu Picchu, Cusco, Trekking y la mejor gastronomía.'
        : 'Live unique experiences in the heart of the Andes. Machu Picchu, Cusco, Trekking and the best gastronomy.',
      explore: language === 'es' ? 'Explorar Tours' : 'Explore Tours',
      contact: language === 'es' ? 'Contactar Asesor' : 'Contact Advisor',
      stats1: language === 'es' ? 'Viajeros felices' : 'Happy travelers',
      stats2: language === 'es' ? 'Tours únicos' : 'Unique tours',
      stats3: language === 'es' ? 'Recomendado' : 'Recommended'
    },
    destinations: {
      title: language === 'es' ? 'Destinos Destacados' : 'Featured Destinations',
      subtitle: language === 'es' 
        ? 'Los lugares más impresionantes que no puedes perderte' 
        : 'The most impressive places you cannot miss',
      tours: language === 'es' ? 'tours disponibles' : 'tours available'
    },
    categories: {
      badge: language === 'es' ? 'Nuestros tours' : 'Our tours',
      title: language === 'es' ? 'Categorías de Tours' : 'Tour Categories',
      subtitle: language === 'es'
        ? 'Explora nuestras diferentes categorías y encuentra la aventura perfecta para ti'
        : 'Explore our different categories and find the perfect adventure for you',
      viewAll: language === 'es' ? 'Ver todos los tours' : 'View all tours',
      from: language === 'es' ? 'desde' : 'from'
    },
    whyUs: {
      title: language === 'es' ? '¿Por qué elegirnos?' : 'Why choose us?',
      subtitle: language === 'es' ? 'La excelencia nos define en cada detalle' : 'Excellence defines us in every detail'
    },
    blog: {
      title: language === 'es' ? 'Blog' : 'Blog',
      description: language === 'es' 
        ? 'Consejos, guías y novedades sobre viajes en Perú'
        : 'Tips, guides and news about travel in Peru',
      more: language === 'es' ? 'Conocer más' : 'Learn more'
    },
    about: {
      title: language === 'es' ? 'Nosotros' : 'About Us',
      description: language === 'es'
        ? 'Conoce a nuestro equipo y nuestra historia'
        : 'Meet our team and our story',
      more: language === 'es' ? 'Conocer más' : 'Learn more'
    },
    testimonials: {
      title: language === 'es' ? 'Lo que dicen nuestros viajeros' : 'What our travelers say',
      subtitle: language === 'es'
        ? 'Experiencias reales de personas como tú'
        : 'Real experiences from people like you'
    },
    cta: {
      title: language === 'es' ? '¿Listo para tu próxima aventura?' : 'Ready for your next adventure?',
      subtitle: language === 'es'
        ? 'Contacta a nuestros asesores y comienza a planificar el viaje de tus sueños'
        : 'Contact our advisors and start planning your dream trip',
      button: language === 'es' ? 'Reservar Ahora' : 'Book Now'
    }
  };

  // Definición de categorías principales con textos bilingües
  const categories = [
    {
      id: 'machupicchu',
      name: { es: 'Machu Picchu', en: 'Machu Picchu' },
      description: { 
        es: 'Descubre la ciudadela inca, una de las 7 maravillas del mundo',
        en: 'Discover the Inca citadel, one of the 7 wonders of the world'
      },
      shortDesc: { es: 'La joya del Imperio Inca', en: 'The jewel of the Inca Empire' },
      icon: Castle,
      color: 'from-amber-500 to-amber-700',
      bgImage: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      subcategories: [
        { 
          name: { es: 'Machu Picchu Express', en: 'Machu Picchu Express' },
          path: '/tour/machupicchu/machu-picchu-express',
          duration: { es: '1 día', en: '1 day' },
          price: { es: 'desde $350', en: 'from $350' }
        },
        { 
          name: { es: 'Machu Picchu en Tren', en: 'Machu Picchu by Train' },
          path: '/tour/machupicchu/machu-picchu-train',
          duration: { es: '2 días', en: '2 days' },
          price: { es: 'desde $450', en: 'from $450' }
        }
      ]
    },
    {
      id: 'cusco',
      name: { es: 'Cusco', en: 'Cusco' },
      description: { 
        es: 'La capital arqueológica de América, llena de historia y cultura',
        en: 'The archaeological capital of America, full of history and culture'
      },
      shortDesc: { es: 'El ombligo del mundo', en: 'The navel of the world' },
      icon: MapPinned,
      color: 'from-emerald-500 to-emerald-700',
      bgImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      subcategories: [
        { 
          name: { es: 'Paquetes Cusco', en: 'Cusco Packages' },
          path: '/tour/cusco/cusco-packages',
          duration: { es: '3-6 días', en: '3-6 days' },
          price: { es: 'desde $250', en: 'from $250' }
        },
        { 
          name: { es: 'Tours Clásicos', en: 'Classic Tours' },
          path: '/tour/cusco/classic-tours',
          duration: { es: '1 día', en: '1 day' },
          price: { es: 'desde $80', en: 'from $80' }
        }
      ]
    },
    {
      id: 'trekking',
      name: { es: 'Trekking', en: 'Trekking' },
      description: { 
        es: 'Rutas ancestrales y paisajes espectaculares en los Andes',
        en: 'Ancestral routes and spectacular landscapes in the Andes'
      },
      shortDesc: { es: 'Aventura en los Andes', en: 'Andes Adventure' },
      icon: Footprints,
      color: 'from-blue-500 to-blue-700',
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      subcategories: [
        { 
          name: { es: 'Camino Inca', en: 'Inca Trail' },
          path: '/tour/trekking/inca-trail',
          duration: { es: '4 días', en: '4 days' },
          price: { es: 'desde $650', en: 'from $650' }
        },
        { 
          name: { es: 'Salkantay', en: 'Salkantay' },
          path: '/tour/trekking/salkantay',
          duration: { es: '5 días', en: '5 days' },
          price: { es: 'desde $550', en: 'from $550' }
        }
      ]
    },
    {
      id: 'paquetes-peru',
      name: { es: 'Paquetes Perú', en: 'Peru Packages' },
      description: { 
        es: 'Experiencias completas combinando lo mejor de Perú',
        en: 'Complete experiences combining the best of Peru'
      },
      shortDesc: { es: 'Lo mejor de Perú', en: 'The best of Peru' },
      icon: Globe2,
      color: 'from-purple-500 to-purple-700',
      bgImage: 'https://images.unsplash.com/photo-1526392060935-9d621c5c46b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      subcategories: [
        { 
          name: { es: 'Lima + Cusco', en: 'Lima + Cusco' },
          path: '/tour/paquetes-peru/lima-cusco',
          duration: { es: '6-8 días', en: '6-8 days' },
          price: { es: 'desde $850', en: 'from $850' }
        },
        { 
          name: { es: 'Perú Completo', en: 'Complete Peru' },
          path: '/tour/paquetes-peru/peru-completo',
          duration: { es: '15 días', en: '15 days' },
          price: { es: 'desde $1,850', en: 'from $1,850' }
        }
      ]
    },
    {
      id: 'costa',
      name: { es: 'Costa Peruana', en: 'Peruvian Coast' },
      description: { 
        es: 'Playas, desiertos y la mejor gastronomía de Sudamérica',
        en: 'Beaches, deserts and the best gastronomy in South America'
      },
      shortDesc: { es: 'Sol, arena y sabor', en: 'Sun, sand and flavor' },
      icon: Waves,
      color: 'from-sky-500 to-sky-700',
      bgImage: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      subcategories: [
        { 
          name: { es: 'Tours en Lima', en: 'Lima Tours' },
          path: '/tour/costa/lima',
          duration: { es: '1-3 días', en: '1-3 days' },
          price: { es: 'desde $120', en: 'from $120' }
        }
      ]
    }
  ];

  // Páginas adicionales
  const additionalPages = [
    {
      id: 'blog',
      name: { es: 'Blog', en: 'Blog' },
      description: { 
        es: 'Consejos, guías y novedades sobre viajes en Perú',
        en: 'Tips, guides and news about travel in Peru'
      },
      icon: Camera,
      color: 'from-pink-500 to-pink-700',
      bgImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      path: '/blog'
    },
    {
      id: 'nosotros',
      name: { es: 'Nosotros', en: 'About Us' },
      description: { 
        es: 'Conoce a nuestro equipo y nuestra historia',
        en: 'Meet our team and our story'
      },
      icon: Users,
      color: 'from-indigo-500 to-indigo-700',
      bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      path: '/nosotros'
    }
  ];

  // Testimonios bilingües
  const testimonials = [
    {
      name: 'María González',
      country: 'España',
      text: {
        es: 'Una experiencia inolvidable. Machu Picchu es aún más impresionante en persona.',
        en: 'An unforgettable experience. Machu Picchu is even more impressive in person.'
      },
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108777-2961285f4ab0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'John Smith',
      country: 'USA',
      text: {
        es: 'El Camino Inca fue desafiante pero increíble. Guías excelentes y organización perfecta.',
        en: 'The Inca Trail was challenging but incredible. Excellent guides and perfect organization.'
      },
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Claire Dubois',
      country: 'Francia',
      text: {
        es: 'Cusco es mágico. Los paquetes todo incluido nos facilitaron mucho el viaje.',
        en: 'Cusco is magical. The all-inclusive packages made our trip so much easier.'
      },
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  // Características
  const features = [
    {
      icon: Users,
      title: { es: 'Guías Locales Expertos', en: 'Expert Local Guides' },
      description: { 
        es: 'Profesionales apasionados que conocen cada rincón',
        en: 'Passionate professionals who know every corner'
      },
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Compass,
      title: { es: 'Rutas Exclusivas', en: 'Exclusive Routes' },
      description: { 
        es: 'Acceso a lugares únicos y experiencias auténticas',
        en: 'Access to unique places and authentic experiences'
      },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Utensils,
      title: { es: 'Gastronomía Premium', en: 'Premium Gastronomy' },
      description: { 
        es: 'Incluye lo mejor de la cocina peruana',
        en: 'Includes the best of Peruvian cuisine'
      },
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Camera,
      title: { es: 'Fotos Profesionales', en: 'Professional Photos' },
      description: { 
        es: 'Captura los momentos más espectaculares',
        en: 'Capture the most spectacular moments'
      },
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: { es: 'Seguridad Garantizada', en: 'Guaranteed Safety' },
      description: { 
        es: 'Viaja con tranquilidad y confianza',
        en: 'Travel with peace of mind and confidence'
      },
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Award,
      title: { es: 'Mejor Precio', en: 'Best Price' },
      description: { 
        es: 'Calidad asegurada al mejor precio del mercado',
        en: 'Quality assured at the best market price'
      },
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  // Destinos destacados
  const featuredDestinations = [
    {
      name: { es: 'Machu Picchu', en: 'Machu Picchu' },
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tours: 12,
      color: 'amber'
    },
    {
      name: { es: 'Montaña de Colores', en: 'Rainbow Mountain' },
      image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3a0134?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tours: 5,
      color: 'pink'
    },
    {
      name: { es: 'Laguna Humantay', en: 'Humantay Lake' },
      image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3a0134?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tours: 4,
      color: 'blue'
    },
    {
      name: { es: 'Valle Sagrado', en: 'Sacred Valley' },
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tours: 8,
      color: 'green'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1526392060935-9d621c5c46b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Peru landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center lg:text-left"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
            >
              <Star className="w-4 h-4 text-yellow-400 mr-2 fill-yellow-400" />
              <span className="text-white/90 text-sm font-medium">
                ✦ {t.hero.badge} ✦
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {t.hero.title1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                {t.hero.title2}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              {t.hero.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link 
                href="#categorias"
                className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                {t.hero.explore}
                <Compass className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
              
              <Link 
                href="/contacto"
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20 flex items-center"
              >
                {t.hero.contact}
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-16 max-w-2xl"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-3xl font-bold text-white">+5000</p>
                <p className="text-white/70 text-sm">{t.hero.stats1}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-3xl font-bold text-white">+50</p>
                <p className="text-white/70 text-sm">{t.hero.stats2}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-white/70 text-sm">{t.hero.stats3}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </motion.div>
      </section>

      {/* Destinos Destacados */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.destinations.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.destinations.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={dest.image}
                  alt={dest.name[language]}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{dest.name[language]}</h3>
                  <p className="text-white/80 text-sm mb-3">{dest.tours} {t.destinations.tours}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías Principales */}
      <section id="categorias" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              {t.categories.badge}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
              {t.categories.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.categories.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.bgImage}
                    alt={category.name[language]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-80 mix-blend-multiply`} />
                  
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {category.shortDesc[language]}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.name[language]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {category.description[language]}
                  </p>

                  <div className="space-y-3 mb-6">
                    {category.subcategories.map((sub) => (
                      <Link 
                        key={sub.path}
                        href={sub.path}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors group/item"
                      >
                        <div>
                          <span className="text-gray-900 dark:text-white font-medium group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400">
                            {sub.name[language]}
                          </span>
                          <div className="flex items-center mt-1">
                            <Clock className="w-3 h-3 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-500 dark:text-gray-400">{sub.duration[language]}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                            {sub.price[language]}
                          </span>
                          <ArrowRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover/item:opacity-100 transition-all ml-auto mt-1" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link 
                    href={`/tour/${category.id}`}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 group/link"
                  >
                    {t.categories.viewAll}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.whyUs.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t.whyUs.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog y Nosotros */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalPages.map((page, index) => (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link 
                  href={page.path}
                  className="group relative h-96 rounded-3xl overflow-hidden block"
                >
                  <Image
                    src={page.bgImage}
                    alt={page.name[language]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t ${page.color} opacity-90 group-hover:opacity-95 transition-opacity`} />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <page.icon className="w-12 h-12 text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all" />
                    <h3 className="text-3xl font-bold text-white mb-2">{page.name[language]}</h3>
                    <p className="text-white/90 text-lg mb-4 max-w-md">{page.description[language]}</p>
                    <div className="flex items-center text-white font-semibold group/link">
                      {page.id === 'blog' ? t.blog.more : t.about.more}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t.testimonials.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 italic">
                  &ldquo;{testimonial.text[language]}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <Link 
              href="/contacto"
              className="inline-flex items-center bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Heart className="w-5 h-5 mr-2" />
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Redes Sociales Flotantes */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:block space-y-3 z-50">
        <a href="#" className="block w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="block w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="block w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="block w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors">
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </main>
  );
}