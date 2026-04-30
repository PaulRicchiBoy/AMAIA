"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
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

      {/* OVERLAY MÁS CLARO */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Texto con BRILLO ROJO */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-[-3px] mb-6"
              style={{
                textShadow: '0 0 20px #A82726, 0 0 40px #A82726, 0 0 60px #A82726'
              }}
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

          {/* Logo con BRILLO ROJO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div 
              className="relative w-72 sm:w-80 md:w-96 lg:w-[420px] aspect-square"
              style={{
                filter: 'drop-shadow(0 0 25px #A82726) drop-shadow(0 0 50px #A82726)'
              }}
            >
              <Image
                src="/logo-res.png"
                alt="AMAIA TOURS"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Botón CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <Link href="/tours">
              <Button
                size="lg"
                className="bg-[#A82726] hover:bg-[#8B1E1E] text-white text-xl md:text-2xl px-12 py-8 rounded-3xl font-bold shadow-2xl flex items-center gap-4 group w-full sm:w-auto"
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