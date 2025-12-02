'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Mobile code elements - closer to center */}
        <div className="absolute inset-0 lg:hidden">
          {/* Top center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1 }}
            className="absolute top-28 left-1/2 -translate-x-1/2 -translate-y-12 text-blue-400 font-mono text-xs"
          >
            {'<code>'}
          </motion.div>

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.2 }}
            className="absolute top-1/2 left-4 -translate-y-20 text-cyan-400 font-mono text-xs"
          >
            {'=>'}
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.4 }}
            className="absolute top-1/2 right-4 -translate-y-20 text-purple-400 font-mono text-xs"
          >
            {'{ }'}
          </motion.div>

          {/* Bottom center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 text-pink-400 font-mono text-xs"
          >
            {'</>'}
          </motion.div>
        </div>

        {/* Code symbols background - Clean and minimal */}
        <div className="absolute inset-0 hidden lg:block">
          {/* Top left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1 }}
            className="absolute top-20 left-10 text-blue-400 font-mono text-sm"
          >
            {'<code>'}
          </motion.div>

          {/* Top center-left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.1 }}
            className="absolute top-32 left-1/4 text-cyan-400 font-mono text-sm"
          >
            {'const'}
          </motion.div>

          {/* Top center-right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.2 }}
            className="absolute top-24 right-1/4 text-green-400 font-mono text-sm"
          >
            {'function()'}
          </motion.div>

          {/* Top right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.3 }}
            className="absolute top-20 right-10 text-purple-400 font-mono text-sm"
          >
            {'</code>'}
          </motion.div>

          {/* Middle left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.4 }}
            className="absolute top-1/2 left-16 text-blue-400 font-mono text-sm"
          >
            {'=>'}
          </motion.div>

          {/* Middle right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.5 }}
            className="absolute top-1/2 right-16 text-yellow-400 font-mono text-sm"
          >
            {'[ ]'}
          </motion.div>

          {/* Bottom left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-20 left-10 text-blue-400 font-mono text-sm"
          >
            {'</>'}
          </motion.div>

          {/* Bottom center-left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.7 }}
            className="absolute bottom-32 left-1/3 text-pink-400 font-mono text-sm"
          >
            {'import'}
          </motion.div>

          {/* Bottom center-right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-28 right-1/3 text-purple-400 font-mono text-sm"
          >
            {'export'}
          </motion.div>

          {/* Bottom right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.9 }}
            className="absolute bottom-20 right-10 text-purple-400 font-mono text-sm"
          >
            {'{ }'}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 text-lg sm:text-xl mb-4 font-light tracking-wide"
          >
            {t('greeting')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-300 text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          {/* Specialization badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto"
          >
            <div className="px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 font-medium text-sm sm:text-base flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <span>🌐</span>
              <span>{t('specialties.websites')}</span>
            </div>
            <div className="px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 font-medium text-sm sm:text-base flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <span>🛒</span>
              <span>{t('specialties.ecommerce')}</span>
            </div>
            <div className="px-5 py-2.5 bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm border border-pink-500/30 rounded-full text-pink-300 font-medium text-sm sm:text-base flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <span>⚙️</span>
              <span>{t('specialties.complex')}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <a
              href="#contact"
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-base shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">{t('cta')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#pricing"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-base border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              {t('ctaSecondary')}
            </a>
          </motion.div>
        </motion.div>

        {/* Floating code elements decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1 }}
          className="absolute top-20 left-10 text-blue-400 font-mono text-sm hidden lg:block"
        >
          {'<code>'}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-20 right-10 text-purple-400 font-mono text-sm hidden lg:block"
        >
          {'</code>'}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-white/50 rounded-full mx-auto"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
