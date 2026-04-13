'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/lib/data';
import { getRoute } from '@/lib/routes';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Clock, MapPin, Star, Users, Calendar, Check, 
  ArrowLeft, Phone, Mail, Share2, Heart, 
  Mountain, Train, Bus, Plane, Ship, Coffee,
  Sun, Moon, Cloud, Thermometer, ChevronRight,
  Award, Shield, Users2, ThumbsUp, Sparkles,
  Instagram, Facebook, Twitter, Linkedin,
  MessageCircle, Send, Copy, Download
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// ============================================
// TIPOS MEJORADOS
// ============================================

interface ItineraryDay {
  day: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  schedule?: string;
  includes?: string[];
  includesEn?: string[];
}

interface Tour {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  duration: number;
  difficulty: string;
  price: number;
  hotelCategory?: string;
  passengerType?: string;
  highlights?: string[];
  highlightsEn?: string[];
  inclusions?: string[];
  inclusionsEn?: string[];
  itinerary?: ItineraryDay[];
}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export default function TourPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'gallery'>('overview');
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Buscar el tour por ID
  const tour = tours.find(t => t.id === params.id) as Tour | undefined;

  // Si no existe el tour, mostrar 404
  if (!tour) {
    notFound();
  }

  // ============================================
  // FUNCIONES UTILITARIAS
  // ============================================

  // WhatsApp
  const handleWhatsApp = () => {
    const phoneNumber = '51987654321'; // Reemplazar con número real
    const message = language === 'es' 
      ? `¡Hola! Estoy interesado en el tour: ${tour.title} (${window.location.href}). ¿Podrían darme más información?`
      : `Hello! I'm interested in the tour: ${tour.titleEn} (${window.location.href}). Could you give me more information?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Email
  const handleEmail = () => {
    const subject = language === 'es' 
      ? `Información sobre tour: ${tour.title}`
      : `Information about tour: ${tour.titleEn}`;
    const body = language === 'es'
      ? `Hola, estoy interesado en el tour "${tour.title}". ¿Podrían enviarme más información?`
      : `Hello, I'm interested in the tour "${tour.titleEn}". Could you send me more information?`;
    window.location.href = `mailto:info@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Compartir
  const handleShare = async () => {
    const url = window.location.href;
    const title = language === 'es' ? tour.title : tour.titleEn;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: language === 'es' ? tour.description : tour.descriptionEn,
          url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(url);
      alert(language === 'es' ? 'Enlace copiado al portapapeles' : 'Link copied to clipboard');
    }
  };

  // Formatear duración
  const getDurationText = (duration: number) => {
    if (duration === 0.5) return language === 'es' ? 'Medio día' : 'Half day';
    if (duration === 1) return language === 'es' ? '1 día' : '1 day';
    return `${duration} ${language === 'es' ? 'días' : 'days'}`;
  };

  // Obtener icono de dificultad
  const getDifficultyIcon = (difficulty: string) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return <ThumbsUp className="w-4 h-4 text-green-500" />;
      case 'moderate': return <Users className="w-4 h-4 text-yellow-500" />;
      case 'challenging': return <Mountain className="w-4 h-4 text-red-500" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  // Obtener color de dificultad
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'challenging': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Datos según idioma
  const highlights = language === 'es' ? tour.highlights : tour.highlightsEn;
  const inclusions = language === 'es' ? tour.inclusions : tour.inclusionsEn;

  // ============================================
  // RENDER
  // ============================================

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      
      {/* ===== HERO SECTION MEJORADA ===== */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end justify-center overflow-hidden">
        {/* Imagen de fondo con overlay mejorado */}
        <div className="absolute inset-0">
          <Image
            src={tour.image || '/images/default-tour.jpg'}
            alt={language === 'es' ? tour.title : tour.titleEn}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-transparent mix-blend-multiply" />
        </div>
        
        {/* Contenido del hero */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-16 text-white">
          
          {/* Navegación superior */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/tours"
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-lg transition-all group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {language === 'es' ? 'Todos los tours' : 'All tours'}
            </Link>
            
            <div className="flex gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-lg transition-colors"
                aria-label={language === 'es' ? 'Guardar tour' : 'Save tour'}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={language === 'es' ? 'Compartir' : 'Share'}
                >
                  <Share2 className="w-5 h-5" />
                </button>
                
                {showShareMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                    <button
                      onClick={handleShare}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{language === 'es' ? 'Copiar enlace' : 'Copy link'}</span>
                    </button>
                    <button
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(language === 'es' ? tour.title : tour.titleEn)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </button>
                    <button
                      onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`${language === 'es' ? tour.title : tour.titleEn} - ${window.location.href}`)}`, '_blank')}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Badges y título */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 bg-emerald-600 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 mr-1" />
                {getDurationText(tour.duration)}
              </span>
              
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tour.difficulty)}`}>
                {getDifficultyIcon(tour.difficulty)}
                <span className="ml-1 capitalize">{tour.difficulty}</span>
              </span>
              
              {tour.passengerType && (
                <span className="inline-flex items-center px-3 py-1 bg-purple-600 rounded-full text-sm font-medium">
                  <Users2 className="w-4 h-4 mr-1" />
                  {tour.passengerType}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {language === 'es' ? tour.title : tour.titleEn}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl">
              {language === 'es' ? tour.description : tour.descriptionEn}
            </p>

            {/* Precio y CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-3">
                <span className="text-sm text-white/80">{language === 'es' ? 'Desde' : 'From'}</span>
                <span className="text-3xl font-bold ml-2">${tour.price}</span>
                <span className="text-sm text-white/80 ml-1">USD</span>
              </div>
              
              <Button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                {language === 'es' ? 'Reservar ahora' : 'Book now'}
              </Button>
              
              <Button
                onClick={handleEmail}
                variant="outline"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg rounded-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                {language === 'es' ? 'Consultar' : 'Inquire'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PESTAÑAS DE NAVEGACIÓN MEJORADAS ===== */}
      <section className="sticky top-20 z-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            {[
              { id: 'overview', label: 'Descripción General', labelEn: 'Overview', icon: <Sparkles className="w-4 h-4" /> },
              { id: 'itinerary', label: 'Itinerario', labelEn: 'Itinerary', icon: <Calendar className="w-4 h-4" /> },
              { id: 'inclusions', label: 'Incluye', labelEn: 'Inclusions', icon: <Check className="w-4 h-4" /> },
              { id: 'gallery', label: 'Galería', labelEn: 'Gallery', icon: <ImageIcon className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-4 font-medium text-sm transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.icon}
                <span>{language === 'es' ? tab.label : tab.labelEn}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* ----- DESCRIPCIÓN GENERAL MEJORADA ----- */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Descripción */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 mr-2 text-emerald-600" />
                    {language === 'es' ? 'Sobre el tour' : 'About the tour'}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {language === 'es' ? tour.description : tour.descriptionEn}
                  </p>
                </div>

                {/* Highlights */}
                {highlights && highlights.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-emerald-600" />
                      {language === 'es' ? 'Lo que vivirás' : 'What you\'ll experience'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {highlights.map((highlight: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Características adicionales */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    {language === 'es' ? 'Características del tour' : 'Tour features'}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Feature icon={<Clock />} label={language === 'es' ? 'Duración' : 'Duration'} value={getDurationText(tour.duration)} />
                    <Feature icon={<Users />} label={language === 'es' ? 'Tipo' : 'Type'} value={tour.passengerType || 'Regular'} />
                    <Feature icon={<Award />} label={language === 'es' ? 'Categoría' : 'Category'} value={tour.hotelCategory || 'Standard'} />
                    <Feature icon={<Shield />} label={language === 'es' ? 'Garantía' : 'Guarantee'} value={language === 'es' ? '100% Seguro' : '100% Safe'} />
                  </div>
                </div>
              </div>

              {/* Sidebar de información rápida */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-32 space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {language === 'es' ? 'Información rápida' : 'Quick info'}
                  </h3>
                  
                  <InfoItem 
                    icon={<Calendar />}
                    label={language === 'es' ? 'Duración' : 'Duration'}
                    value={getDurationText(tour.duration)}
                  />
                  
                  <InfoItem 
                    icon={getDifficultyIcon(tour.difficulty)}
                    label={language === 'es' ? 'Dificultad' : 'Difficulty'}
                    value={<span className="capitalize">{tour.difficulty}</span>}
                  />
                  
                  <InfoItem 
                    icon={<MapPin />}
                    label={language === 'es' ? 'Destino' : 'Destination'}
                    value={language === 'es' ? 'Cusco, Perú' : 'Cusco, Peru'}
                  />
                  
                  {tour.hotelCategory && (
                    <InfoItem 
                      icon={<Award />}
                      label={language === 'es' ? 'Hoteles' : 'Hotels'}
                      value={tour.hotelCategory}
                    />
                  )}

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-emerald-600">${tour.price}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">USD</span>
                    </div>
                    
                    <Button
                      onClick={handleWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 mb-3"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      {language === 'es' ? 'Reservar ahora' : 'Book now'}
                    </Button>
                    
                    <Button
                      onClick={handleEmail}
                      variant="outline"
                      className="w-full"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {language === 'es' ? 'Más información' : 'More info'}
                    </Button>
                  </div>

                  {/* Sellos de confianza */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-3">
                      {language === 'es' ? 'Pago 100% seguro' : '100% secure payment'}
                    </p>
                    <div className="flex justify-center gap-2">
                      <img src="/images/visa.svg" alt="Visa" className="h-6" />
                      <img src="/images/mastercard.svg" alt="Mastercard" className="h-6" />
                      <img src="/images/amex.svg" alt="American Express" className="h-6" />
                      <img src="/images/paypal.svg" alt="PayPal" className="h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ----- ITINERARIO MEJORADO ----- */}
          {activeTab === 'itinerary' && tour.itinerary && tour.itinerary.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-emerald-600" />
                {language === 'es' ? 'Itinerario día a día' : 'Day by day itinerary'}
              </h2>
              
              <div className="relative">
                {/* Línea de tiempo */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200 dark:bg-emerald-800"></div>
                
                <div className="space-y-6">
                  {tour.itinerary.map((day: ItineraryDay, index: number) => {
                    const dayIncludes = language === 'es' ? day.includes : day.includesEn;
                    
                    return (
                      <div key={index} className="relative pl-16">
                        {/* Círculo de día */}
                        <div className="absolute left-0 top-0 w-16 flex justify-center">
                          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            {day.day}
                          </div>
                        </div>
                        
                        {/* Tarjeta de día */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-4">
                            <h3 className="text-lg font-semibold">
                              {language === 'es' ? `Día ${day.day}` : `Day ${day.day}`}: {language === 'es' ? day.title : day.titleEn}
                            </h3>
                          </div>
                          
                          <div className="p-6">
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                              {language === 'es' ? day.description : day.descriptionEn}
                            </p>
                            
                            {day.schedule && (
                              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>{day.schedule}</span>
                              </div>
                            )}
                            
                            {dayIncludes && dayIncludes.length > 0 && (
                              <div className="mt-4">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                  <Check className="w-4 h-4 mr-2 text-emerald-600" />
                                  {language === 'es' ? 'Incluye hoy:' : 'Today includes:'}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {dayIncludes.map((item: string, i: number) => (
                                    <span 
                                      key={i} 
                                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center"
                                    >
                                      <Check className="w-3 h-3 mr-1 text-emerald-600" />
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ----- INCLUYE MEJORADO ----- */}
          {activeTab === 'inclusions' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Check className="w-6 h-6 mr-2 text-emerald-600" />
                {language === 'es' ? 'Qué incluye el tour' : 'What the tour includes'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Incluye */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {language === 'es' ? 'Incluye' : 'Includes'}
                    </h3>
                  </div>
                  
                  {inclusions && inclusions.length > 0 ? (
                    <ul className="space-y-3">
                      {inclusions.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                          <div className="flex-shrink-0 w-5 h-5 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-emerald-600" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400">
                      {language === 'es' ? 'Información no disponible' : 'Information not available'}
                    </p>
                  )}
                </div>
                
                {/* No incluye */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold text-xl">✗</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {language === 'es' ? 'No incluye' : 'Not included'}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      { es: 'Vuelos internacionales', en: 'International flights' },
                      { es: 'Seguro de viaje', en: 'Travel insurance' },
                      { es: 'Gastos personales', en: 'Personal expenses' },
                      { es: 'Propinas', en: 'Tips' },
                      { es: 'Comidas no especificadas', en: 'Meals not specified' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        <span className="text-red-500 font-bold">✗</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {language === 'es' ? item.es : item.en}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Notas adicionales */}
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  {language === 'es' ? 'Importante saber' : 'Good to know'}
                </h4>
                <p className="text-blue-700 dark:text-blue-400 text-sm">
                  {language === 'es' 
                    ? 'Los horarios y la disponibilidad están sujetos a cambios. Recomendamos reservar con anticipación.'
                    : 'Schedules and availability are subject to change. We recommend booking in advance.'}
                </p>
              </div>
            </div>
          )}

          {/* ----- GALERÍA (NUEVA) ----- */}
          {activeTab === 'gallery' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <ImageIcon className="w-6 h-6 mr-2 text-emerald-600" />
                {language === 'es' ? 'Galería de fotos' : 'Photo gallery'}
              </h2>
              
              {/* Grid de imágenes (simulado - implementar con imágenes reales) */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div 
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(i)}
                  >
                    <Image
                      src={tour.image || '/images/default-tour.jpg'}
                      alt={`Gallery ${i}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== TOURS RELACIONADOS MEJORADOS ===== */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Sparkles className="w-6 h-6 mr-2 text-emerald-600" />
            {language === 'es' ? 'También te puede interesar' : 'You may also like'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours
              .filter(t => t.id !== tour.id)
              .slice(0, 3)
              .map(relatedTour => (
                <Link
                  key={relatedTour.id}
                  href={getRoute(relatedTour.id)}
                  className="group bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedTour.image || '/images/default-tour.jpg'}
                      alt={language === 'es' ? relatedTour.title : relatedTour.titleEn}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ${relatedTour.price}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors line-clamp-1">
                      {language === 'es' ? relatedTour.title : relatedTour.titleEn}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {language === 'es' ? relatedTour.description : relatedTour.descriptionEn}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {getDurationText(relatedTour.duration)}
                      </div>
                      <div className="flex items-center text-emerald-600 font-medium group-hover:translate-x-1 transition-transform">
                        <span>{language === 'es' ? 'Ver tour' : 'View tour'}</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ===== STICKY CTA PARA MÓVIL ===== */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 md:hidden z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-sm text-gray-500">{language === 'es' ? 'Desde' : 'From'}</span>
            <span className="text-2xl font-bold text-emerald-600 ml-1">${tour.price}</span>
          </div>
          <Button
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex-1"
          >
            <Phone className="w-4 h-4 mr-2" />
            {language === 'es' ? 'Reservar' : 'Book'}
          </Button>
        </div>
      </div>
    </main>
  );
}

// ============================================
// COMPONENTES AUXILIARES
// ============================================

const Feature = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
    <div className="text-emerald-600 mb-2 flex justify-center">{icon}</div>
    <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
    <div className="font-semibold text-gray-900 dark:text-white text-sm">{value}</div>
  </div>
);

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
      <span className="w-4 h-4">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
    <div className="font-medium text-gray-900 dark:text-white text-sm">{value}</div>
  </div>
);

// Icono adicional necesario
const ImageIcon = (props: any) => (
  <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const Info = (props: any) => (
  <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <circle cx="12" cy="8" r="0.5" fill="currentColor"></circle>
  </svg>
);

const Search = (props: any) => (
  <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);