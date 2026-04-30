"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDark = mounted && theme === 'dark';
  const accentRed = '#A82726';

  const getMenuItems = (lang: 'es' | 'en') => {
    if (lang === 'es') {
      return [
        { href: "/machu-picchu", label: "Machu Picchu" },
        { href: "/trekking", label: "Trekking" },
        { href: "/luxury", label: "Luxury" },
        { href: "/tours-cusco", label: "Tours Cusco" },
        { href: "/paquetes", label: "Paquetes" },
        { href: "/blog", label: "Blog" },
        { href: "/sobre-nosotros", label: "Sobre Nosotros" },
      ];
    } else {
      return [
        { href: "/machu-picchu", label: "Machu Picchu" },
        { href: "/trekking", label: "Trekking" },
        { href: "/luxury", label: "Luxury" },
        { href: "/tours-cusco", label: "Cusco Tours" },
        { href: "/paquetes", label: "Packages" },
        { href: "/blog", label: "Blog" },
        { href: "/sobre-nosotros", label: "About Us" },
      ];
    }
  };

  const menuItems = getMenuItems(language);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDark ? 'bg-black' : 'bg-white shadow-sm'} ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo-r.png"
              alt="AMAIA TOURS"
              width={105}
              height={105}
              className="h-14 w-auto transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex flex-col leading-none -mt-1">
              <span className={`text-3xl font-bold tracking-[-1.5px] ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}>AMAIA</span>
              <span className="text-[18px] font-semibold tracking-[3px] -mt-1" style={{ color: accentRed }}>TOURS</span>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex items-center gap-x-8 text-sm font-medium">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`hover:text-[#A82726] transition-colors whitespace-nowrap ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Derecha - Solo visible en desktop */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Idioma */}
            <div className="flex bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-full p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all ${language === 'es' ? 'bg-[#A82726] text-white' : isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-black'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all ${language === 'en' ? 'bg-[#A82726] text-white' : isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-black'}`}
              >
                EN
              </button>
            </div>

            {/* Botón Reservar */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-[#A82726] hover:bg-[#8B1E1E] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-[0.985]"
            >
              RESERVAR
            </button>

            {/* Tema */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all cursor-pointer ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-200 text-[#3F2A1F]'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Solo Hamburguesa en móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${isDark ? 'text-white' : 'text-[#3F2A1F]'}`}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil (ahora incluye Idioma + Reservar) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t ${isDark ? 'bg-black border-white/10' : 'bg-white border-gray-200'}`}
          >
            <div className="px-6 py-8 space-y-6 text-lg">

              {/* Links */}
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`block transition-colors ${isDark ? 'text-white hover:text-[#A82726]' : 'text-[#3F2A1F] hover:text-[#A82726]'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Idioma en móvil */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex justify-center">
                <div className="flex bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-full p-1">
                  <button
                    onClick={() => { setLanguage('es'); setMobileMenuOpen(false); }}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all ${language === 'es' ? 'bg-[#A82726] text-white' : isDark ? 'text-white/70' : 'text-gray-600'}`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all ${language === 'en' ? 'bg-[#A82726] text-white' : isDark ? 'text-white/70' : 'text-gray-600'}`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Botón Reservar en móvil */}
              <div className="pt-2">
                <button
                  onClick={() => { handleWhatsApp(); setMobileMenuOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 bg-[#A82726] hover:bg-[#8B1E1E] text-white py-3.5 rounded-full font-semibold text-lg"
                >
                  RESERVAR AHORA
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}