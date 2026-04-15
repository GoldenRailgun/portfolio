'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { usePortfolioStore } from '@/lib/store'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const setSphereState = usePortfolioStore((s) => s.setSphereState)
  const setSphereLarge = usePortfolioStore((s) => s.setSphereLarge)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSphereLarge(entry.isIntersecting)
        if (!entry.isIntersecting) setSphereState('idle')
      },
      { threshold: 0.1 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [setSphereLarge, setSphereState])

  return (
    <section
      ref={heroRef}
      className="flex flex-col md:flex-row items-center md:items-center min-h-[calc(100vh-80px)]"
    >
      <div className="w-full md:flex-[0_0_52%] pl-12 md:pl-16 pr-8 md:pr-10 py-10 md:pb-10">

        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-5 h-px bg-[#2a2620]" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#3a3632]">
            AI Engineer
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-[clamp(28px,3vw,44px)] leading-[1.15] text-[#d8d0c4] font-normal mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I build the AI layer that products{' '}
          <em className="text-[#9a8878]">actually run on</em>{' '}
          — owned, trained, and deployed without relying on someone
          else&apos;s API to stay up.
        </motion.h1>

        <motion.div
          className="w-10 h-px bg-[#252220] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        <motion.p
          className="text-[11px] text-[#3e3c38] tracking-[0.06em] leading-loose mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Fine-tuning &amp; inference. Infra you own.{' '}
          <span className="text-[#5e5a54]">Currently:</span> AI lead on a VC-backed product.
        </motion.p>

        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="/work"
            className="inline-flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#4a4642] hover:text-[#9a8878] transition-colors duration-300 group"
            onMouseEnter={() => setSphereState('work')}
            onMouseLeave={() => setSphereState('idle')}
          >
            View work
            <span className="w-7 h-px bg-current inline-block group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="/about"
            className="inline-flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#4a4642] hover:text-[#9a8878] transition-colors duration-300"
            onMouseEnter={() => setSphereState('about')}
            onMouseLeave={() => setSphereState('idle')}
          >
            About me
          </a>
        </motion.div>

      </div>
    </section>
  )
}