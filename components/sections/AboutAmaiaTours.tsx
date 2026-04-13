"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export function AboutAMAIA() {
  const { language } = useLanguage();
  const { theme, mounted } = useTheme();
  
  const isDark = mounted && theme === 'dark';

  return (
    <section id="about" className={`relative py-24 lg:py-32 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* === COLUMNA IZQUIERDA: VIDEO === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/20">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                src="/aboutvideo.mp4"
              />
            </div>
          </motion.div>

          {/* === COLUMNA DERECHA: TEXTO === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className={`text-5xl lg:text-6xl font-black tracking-[-2px] leading-none mb-8 ${
              isDark ? 'text-white' : 'text-[#2C1708]'
            }`}>
              {language === 'es' 
                ? 'El lujo de viajar con alma peruana' 
                : 'The luxury of traveling with Peruvian soul'}
            </h2>

            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? 'text-white/80' : 'text-[#3F2A1F]/80'
            }`}>
              {language === 'es' 
                ? 'AMAIA Tours nace de la pasión por mostrar el verdadero Perú. No somos solo un operador turístico, somos peruanos que queremos compartir nuestra cultura, historia y paisajes de forma exclusiva y respetuosa.'
                : 'AMAIA Tours was born from the passion to show the real Peru. We are not just a tour operator, we are Peruvians who want to share our culture, history and landscapes in an exclusive and respectful way.'}
            </p>

            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-white/70' : 'text-[#3F2A1F]/70'
            }`}>
              {language === 'es' 
                ? 'Con grupos muy pequeños, guías locales expertos y un servicio de alto nivel, creamos experiencias únicas que conectan al viajero con la esencia más auténtica de los Andes y el Perú.'
                : 'With very small groups, expert local guides and high-level service, we create unique experiences that connect the traveler with the most authentic essence of the Andes and Peru.'}
            </p>

            {/* Botón final */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-10 py-4 text-lg font-semibold rounded-3xl transition-all hover:scale-105 ${
                  isDark 
                    ? 'bg-white text-[#2C1708] hover:bg-white/90' 
                    : 'bg-[#FF9F1C] text-[#2C1708] hover:bg-[#FFB74C]'
                }`}
              >
                {language === 'es' ? 'Conoce nuestra historia' : 'Learn our story'}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}