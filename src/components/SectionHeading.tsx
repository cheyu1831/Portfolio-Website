import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  eyebrow,
  title,
  subtitle,
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 sm:mb-20 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className={`flex items-center gap-2.5 mb-3.5 ${isCenter ? 'justify-center' : ''}`}
      >
        {number && (
          <span className="font-mono text-xs text-cyan-400 font-medium">
            {number}
          </span>
        )}
        <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-medium">
          // {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white font-mono"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3.5 text-slate-400 text-sm sm:text-base leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
