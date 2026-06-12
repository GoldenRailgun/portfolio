'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePortfolioStore } from '@/lib/store'
import { usePathname } from 'next/navigation'

export default function HeroSection() {


  const pathname = usePathname()
  const resetState = () => {
    const base = '/' + pathname.split('/')[1]
    const map: Record<string, 'idle' | 'work' | 'about' | 'contact' | 'name'> = {
      '/': 'idle', '/work': 'work', '/about': 'about',
    }
    setSphereState(map[base] || 'idle')
  }

  const heroRef = useRef<HTMLElement>(null)
  const setSphereState = usePortfolioStore(s => s.setSphereState)
  const setSphereLarge = usePortfolioStore(s => s.setSphereLarge)

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
      className="flex flex-col md:flex-row items-center min-h-[calc(100vh-80px)]"
    >
      {/* Left — text */}
      <div className="w-full md:flex-[0_0_52%] pl-8 md:pl-20 pr-8 md:pr-10 py-10">

        {/* Label chip */}
        <motion.div
          className="inline-block border border-[#2a2520] px-3 py-1 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] tracking-[0.22em] uppercase text-[#4a4238]">
            AI Engineer — Building what actually runs.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-serif text-[clamp(28px,3vw,46px)] leading-[1.12] text-[#e8e0d4] font-normal mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          I build the AI layer<br />
          that products{' '}
          <em className="text-[#c4956a]">actually run on</em>
          <br />
          — owned, trained,<br />
          deployed end&#8209;to&#8209;end.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-[11px] text-[#6a6258] tracking-[0.06em] leading-loose mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Fine-tuning &amp; inference. Infra you own.<br />
          <span className="text-[#5a5248]">Currently:</span> AI lead on a VC-backed product.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Link
            href="/work"
            className="text-[11px] tracking-[0.18em] uppercase text-[#e8e0d4] hover:text-[#c4956a] transition-colors duration-300"
            onMouseEnter={() => setSphereState('work')}
            onMouseLeave={resetState}
          >
            See my work →
          </Link>
          <Link
            href="/about"
            className="text-[11px] tracking-[0.18em] uppercase text-[#4a4238] hover:text-[#e8e0d4] transition-colors duration-300"
            onMouseEnter={() => setSphereState('about')}
            onMouseLeave={resetState}
          >
            About me
          </Link>
        </motion.div>

        {/* Status */}
        <motion.div
          className="flex items-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-[5px] h-[5px] rounded-full bg-[#2ecc71] animate-pulse" />
          <span className="text-[10px] tracking-[0.15em] uppercase text-[#3a3632]">
            Open to opportunities
          </span>
        </motion.div>

      </div>

      {/* Right — sphere (empty, SphereContainer handles it) */}
      <div className="hidden md:block md:flex-[0_0_48%] md:h-[calc(100vh-80px)]" />

    </section>
  )
}