"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDark = mounted && theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phone = '51987654321';
    const msg = language === 'es' 
      ? '¡Hola! Quiero más información sobre sus tours de lujo.'
      : 'Hello! I would like more information about your luxury tours.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">

      {/* ==================== NAVBAR PRINCIPAL ==================== */}
      <div className={`transition-all duration-300 border-b ${isDark ? 'bg-black' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <Image 
                src="/logovacio-new.png" 
                alt="AMAIA TOURS" 
                width={140} 
                height={140} 
                className="h-20 w-auto transition-transform group-hover:scale-105" 
                priority 
              />
              <div className="flex flex-col leading-none">
                <span className={`text-4xl font-bold tracking-[-2px] ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}>AMAIA</span>
                <span className="text-2xl font-light tracking-[3px] text-[#FF9F1C]">TOURS</span>
              </div>
            </Link>

            {/* Menú Desktop */}
            <div className="hidden lg:flex items-center gap-x-8 text-sm font-semibold">
              <Link href="/machu-picchu" className={`hover:text-[#FF9F1C] transition-colors ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}>Machu Picchu</Link>
              <Link href="/trekking" className={`hover:text-[#FF9F1C] transition-colors ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}>Trekking</Link>
              <Link href="/luxury" className={`hover:text-[#FF9F1C] transition-colors ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}>Luxury</Link>
              <Link href="/tours-cusco" className={`hover:text-[#FF9F1C] transition-colors ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}>Tours Cusco</Link>
              <Link href="/paquetes" className={`hover:text-[#FF9F1C] transition-colors ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}>Paquetes</Link>
              <Link href="/blog" className={`hover:text-[#FF9F1C] transition-colors ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}>Blog</Link>
              <Link href="/sobre-nosotros" className={`hover:text-[#FF9F1C] transition-colors ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}>Sobre Nosotros</Link>
            </div>

            {/* ==================== IDIOMAS + TEMA ==================== */}
            <div className="flex items-center gap-4">

              {/* Botones de idioma */}
              <div className="flex bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-full p-1">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                    language === 'es' 
                      ? 'bg-[#FF9F1C] text-[#1F120A] shadow-md' 
                      : 'text-stone-700 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-700'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                    language === 'en' 
                      ? 'bg-[#FF9F1C] text-[#1F120A] shadow-md' 
                      : 'text-stone-700 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-700'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Botón Tema */}
              <button 
                onClick={toggleTheme} 
                className="p-3 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
              >
                {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-[#3F2A1F]" />}
              </button>

              {/* Menú móvil */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}
              >
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-black border-t"
          >
            <div className="px-6 py-8 space-y-6 text-lg">
              <Link href="/machu-picchu" className="block" onClick={() => setMobileMenuOpen(false)}>Machu Picchu</Link>
              <Link href="/trekking" className="block" onClick={() => setMobileMenuOpen(false)}>Trekking</Link>
              <Link href="/luxury" className="block" onClick={() => setMobileMenuOpen(false)}>Luxury</Link>
              <Link href="/tours-cusco" className="block" onClick={() => setMobileMenuOpen(false)}>Tours Cusco</Link>
              <Link href="/paquetes" className="block" onClick={() => setMobileMenuOpen(false)}>Paquetes</Link>
              <Link href="/blog" className="block" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              <Link href="/sobre-nosotros" className="block" onClick={() => setMobileMenuOpen(false)}>Sobre Nosotros</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}