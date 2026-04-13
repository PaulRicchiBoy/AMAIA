"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  const { t } = useLanguage();        // ← Aquí usamos t
  const { theme, mounted } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/video-hero1.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1708]/95 via-[#2C1708]/85 to-[#FF9F1C]/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C1708]/70 via-transparent to-black/80" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Columna Izquierda: Texto */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-[-3px] mb-6"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-md mx-auto lg:mx-0"
            >
              {t.hero.subtitle}
            </motion.p>
          </div>

          {/* Columna Derecha: Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 md:w-96 lg:w-[440px] aspect-square">
              <Image
                src="/logovacio-new.png"
                alt="AMAIA TOURS"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Botón */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <Link href="/tours">
              <Button
                size="lg"
                className="bg-[#FF9F1C] hover:bg-[#FFB74C] text-[#2C1708] text-xl md:text-2xl px-12 py-8 rounded-3xl font-bold shadow-2xl flex items-center gap-4 group w-full sm:w-auto"
              >
                {t.hero.ctaButton || "EXPLORAR TOURS"}
                <ArrowRight className="w-7 h-7 group-active:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}