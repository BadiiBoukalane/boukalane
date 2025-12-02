'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    key: 'atlassia',
    image: '🌿',
    color: 'from-green-500/20 to-emerald-600/20',
    borderColor: 'border-green-500/30',
    tags: ['Frontend', 'Backend', 'API', 'Database', 'auth', 'Stripe', 'SEO']
  },
  {
    key: 'vibentec',
    image: '🏭',
    color: 'from-blue-500/20 to-cyan-600/20',
    borderColor: 'border-blue-500/30',
    tags: ['Frontend', 'Backend', 'API', 'SEO']
  },
  {
    key: 'vibenteceng',
    image: '⚙️',
    color: 'from-purple-500/20 to-violet-600/20',
    borderColor: 'border-purple-500/30',
    tags: ['Frontend', 'SEO']
  },
  {
    key: 'twsila',
    image: '🚚',
    color: 'from-orange-500/20 to-amber-600/20',
    borderColor: 'border-orange-500/30',
    tags: ['Frontend', 'Backend', 'API', 'Database', 'auth']
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const t = useTranslations('portfolio');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
    >
      {/* Image/Icon section */}
      <div className={`relative h-48 bg-gradient-to-br ${project.color} backdrop-blur-sm border-b ${project.borderColor} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <span className="text-8xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
          {project.image}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {t(`${project.key}.title`)}
        </h3>

        <p className="text-slate-400 mb-4 leading-relaxed">
          {t(`${project.key}.description`)}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Category badge */}
        <div className="flex items-center gap-2 text-sm text-blue-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span>{t(`${project.key}.category`)}</span>
        </div>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.key} project={project} index={index} />
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">8+</div>
            <div className="text-slate-400">{t('stats.projects')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-slate-400">{t('stats.clients')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">10+</div>
            <div className="text-slate-400">{t('stats.years')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-slate-400">{t('stats.satisfaction')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
