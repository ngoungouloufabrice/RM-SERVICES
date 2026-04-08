"use client";

import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

// ─────────────────────────────────────────
// 1. VARIANTES DE BASE
// ─────────────────────────────────────────
const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
};

// ─────────────────────────────────────────
// 2. HOOK SCROLL REVEAL
// ─────────────────────────────────────────
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  return { ref, isInView };
}

// ─────────────────────────────────────────
// 3. COMPOSANTS ANIMATIONS D'APPARITION
// ─────────────────────────────────────────

/** Fade simple */
export function FadeIn({ children, delay = 0, className, style }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants.fadeIn}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Fade + montée */
export function FadeInUp({ children, delay = 0, className, style }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants.fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Fade + descente */
export function FadeInDown({ children, delay = 0, className, style }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants.fadeInDown}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Fade + gauche */
export function FadeInLeft({ children, delay = 0, className, style }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants.fadeInLeft}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Fade + droite */
export function FadeInRight({ children, delay = 0, className, style }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants.fadeInRight}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Scale In */
export function ScaleIn({ children, delay = 0, className, style }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants.scaleIn}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Slide Up (plus prononcé) */
export function SlideUp({ children, delay = 0, className, style }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants.slideUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────
// 4. STAGGER CONTAINER (enfants en cascade)
// ─────────────────────────────────────────
export function StaggerContainer({ children, delay = 0, staggerDelay = 0.12, className, style }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Enfant d'un StaggerContainer — FadeInUp automatique */
export function StaggerItem({ children, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={variants.fadeInUp}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────
// 5. TEXT REVEAL (révélation de titre)
// ─────────────────────────────────────────
export function TextReveal({ children, delay = 0, className }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <div ref={ref} style={{ overflow: 'hidden', display: 'inline-block' }} className={className}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────
// 6. WORD STAGGER ANIMATION
// ─────────────────────────────────────────
export function WordStagger({ text, delay = 0, className, wordClassName }) {
  const { ref, isInView } = useScrollReveal();
  const words = text.split(' ');
  return (
    <div ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em' }}>
      {words.map((word, i) => (
        <div key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            className={wordClassName}
            style={{ display: 'inline-block' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.06 }}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────
// 7. PARALLAX SCROLL (léger)
// ─────────────────────────────────────────
export function ParallaxScroll({ children, speed = 0.15, className, style }) {
  return (
    <motion.div
      className={className}
      style={{
        ...style,
        willChange: 'transform',
      }}
      initial={{ y: 0 }}
      whileInView={{ y: `-${speed * 60}px` }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────
// 8. HOVER ANIMATIONS (wrappers)
// ─────────────────────────────────────────

/** Card Hover Lift — élévation au survol */
export function HoverLift({ children, scale = 1.02, y = -6, className, style }) {
  return (
    <motion.div
      className={className}
      style={{ ...style, cursor: 'pointer' }}
      whileHover={{ y, scale, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/** Hover Scale simple */
export function HoverScale({ children, scale = 1.05, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ scale }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/** Button Hover Animation */
export function AnimatedButton({ children, className, style, onClick, href }) {
  const Tag = href ? 'a' : 'div';
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

/** Icon Micro Interaction (rotation légère + scale) */
export function IconPulse({ children, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
}

/** Icon Rotate continu (optionnel, à utiliser sur des loaders / icônes de feature) */
export function IconRotate({ children, className, style, duration = 8 }) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ rotate: 360 }}
      transition={{ duration, ease: 'linear', repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────
// 9. NUMBER COUNTER (KPIs)
// ─────────────────────────────────────────
export function CountUp({ to, suffix = '', duration = 2, className }) {
  const { ref, isInView } = useScrollReveal();
  const nodeRef = useRef(null);

  useEffect(() => {
    if (!isInView) return;
    const node = nodeRef.current;
    if (!node) return;
    let start = 0;
    const end = parseInt(to);
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        node.textContent = end + suffix;
        clearInterval(timer);
      } else {
        node.textContent = Math.floor(start) + suffix;
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, to, duration, suffix]);

  return (
    <span ref={ref} className={className}>
      <span ref={nodeRef}>0{suffix}</span>
    </span>
  );
}
