'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCurrency } from '@/contexts/CurrencyContext';

const plans = ['basic', 'standard', 'premium'];

function PricingCard({ plan, index }: { plan: string; index: number }) {
  const t = useTranslations('pricing');
  const { convertPrice } = useCurrency();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isPopular = plan === 'standard';

  const features = [
    t(`${plan}.features.0`),
    t(`${plan}.features.1`),
    t(`${plan}.features.2`),
    t(`${plan}.features.3`),
    t(`${plan}.features.4`),
    t(`${plan}.features.5`)
  ].filter(Boolean);

  if (plan === 'standard' || plan === 'premium') {
    features.push(t(`${plan}.features.6`));
  }
  if (plan === 'premium') {
    features.push(t(`${plan}.features.7`));
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative group ${isPopular ? 'lg:scale-105 lg:-mt-4' : ''}`}
    >
      {isPopular && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-glow">
            ⭐ {t(`${plan}.cta`)}
          </span>
        </div>
      )}

      <div className={`relative h-full bg-gradient-to-br ${
        isPopular
          ? 'from-blue-900/50 to-purple-900/50 border-blue-500/50'
          : 'from-slate-800/50 to-slate-900/50 border-slate-700/50'
      } backdrop-blur-sm p-8 rounded-2xl border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl ${
        isPopular ? 'hover:shadow-blue-500/20' : 'hover:shadow-blue-500/10'
      }`}>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">{t(`${plan}.name`)}</h3>
          <p className="text-slate-400 mb-6">{t(`${plan}.tagline`)}</p>

          <div className="mb-6">
            <span className="text-5xl font-bold text-white">{convertPrice(parseInt(t(`${plan}.price`)))}</span>
            <span className="text-slate-400 ml-2">/ project</span>
          </div>

          <p className="text-blue-400 font-semibold mb-6 pb-6 border-b border-slate-700">
            {t(`${plan}.pages`)}
          </p>

          <ul className="space-y-4 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>

          <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
            isPopular
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105'
              : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40'
          }`}>
            {!isPopular ? t(`${plan}.cta`) : t('standard.cta')}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const t = useTranslations('pricing');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan} plan={plan} index={index} />
          ))}
        </div>

        {/* Price comparison note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            💡 All packages include modern tech stack, clean code, and professional support
          </p>
        </motion.div>
      </div>
    </section>
  );
}
