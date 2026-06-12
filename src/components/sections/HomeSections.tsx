'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7 },
}

export default function HomeSections() {
  return (
    <>
      {/* Selected Work */}
      <section className="px-8 md:px-20 py-32">
        <motion.p
          {...fadeUp}
          className="text-[10px] tracking-[0.25em] uppercase text-[#4a4238] mb-12"
        >
          Selected work
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:gap-24 max-w-6xl">
        <motion.div {...fadeUp} className="max-w-3xl flex-1">
          <Link href="/work" className="group block border-t border-[#1e1a16] pt-10">
            <div className="flex items-baseline gap-4 mb-5">
              <span className="text-[10px] tracking-[0.2em] text-[#3a3632]">001</span>
              <h2 className="font-serif text-[clamp(26px,3.5vw,44px)] text-[#e8e0d4] font-normal group-hover:text-[#c4956a] transition-colors duration-500">
                VibeNewz
              </h2>
            </div>
            <p className="font-serif italic text-[clamp(16px,2vw,22px)] text-[#6a6258] leading-[1.5] max-w-xl mb-5">
              Fine-tuned locally instead of calling an API —{' '}
              <span className="text-[#c4956a]">owning the model means owning reliability.</span>
            </p>
            <p className="text-[11px] text-[#6a6258] tracking-[0.04em] leading-relaxed max-w-xl mb-6">
              RoBERTa + DeBERTa sentiment classification for a news app that optimizes
              emotional balance, not clicks. Training to inference, no external dependency.
            </p>
            <span className="text-[11px] tracking-[0.18em] uppercase text-[#4a4238] group-hover:text-[#c4956a] transition-colors duration-300">
              All work →
            </span>
          </Link>
        </motion.div>

        {/* Technical metadata — quiet counterweight */}
        <motion.div
          {...fadeUp}
          className="hidden lg:block flex-shrink-0 w-64 border-t border-[#1e1a16] pt-10"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#3a3632] mb-8">
            Technical
          </p>
          <dl className="flex flex-col gap-6 text-[10px] tracking-[0.08em]">
            <div>
              <dt className="text-[#3a3632] uppercase tracking-[0.2em] mb-1">Model</dt>
              <dd className="text-[#6a6258]">DeBERTa-v3-base · 184M params</dd>
            </div>
            <div>
              <dt className="text-[#3a3632] uppercase tracking-[0.2em] mb-1">Data</dt>
              <dd className="text-[#6a6258]">53,745 rows · 3 sources · balanced</dd>
            </div>
            <div>
              <dt className="text-[#3a3632] uppercase tracking-[0.2em] mb-1">Accuracy</dt>
              <dd className="text-[#6a6258]">~73% · diagnosed, not dressed up</dd>
            </div>
            <div>
              <dt className="text-[#3a3632] uppercase tracking-[0.2em] mb-1">Inference</dt>
              <dd className="text-[#6a6258]">Self-hosted · $0/mo</dd>
            </div>
          </dl>
        </motion.div>
        </div>

        <motion.p
          {...fadeUp}
          className="text-[11px] text-[#6a6258] tracking-[0.04em] mt-10"
        >
          Also:{' '}
          <a
            href="https://huggingface.co/spaces/GoldenRailgun/droplet-detection-pipeline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6a6258] underline underline-offset-4 decoration-[#3a3632] hover:text-[#c4956a] hover:decoration-[#c4956a] transition-colors duration-300"
          >
            a classical CV pipeline for droplet sizing — live demo
          </a>
        </motion.p>
      </section>

      {/* Currently */}
      <section className="px-8 md:px-20 py-12 border-t border-b border-[#1e1a16]">
        <motion.div {...fadeUp} className="flex items-center gap-4 max-w-3xl">
          <div className="w-[5px] h-[5px] rounded-full bg-[#2ecc71] animate-pulse flex-shrink-0" />
          <p className="text-[11px] tracking-[0.08em] text-[#6a6258]">
            <span className="uppercase tracking-[0.2em] text-[#4a4238] mr-3">Currently</span>
            AI lead on a VC-backed product. Fine-tuning, inference, infra — end to end.
          </p>
        </motion.div>
      </section>

      {/* Closer */}
      <section className="px-8 md:px-20 py-32 max-w-3xl">
        <motion.p
          {...fadeUp}
          className="font-serif italic text-[clamp(24px,3.5vw,42px)] text-[#6a6258] leading-[1.3] mb-10"
        >
          I&apos;m looking for a team{' '}
          <span className="text-[#c4956a]">building something real.</span>
        </motion.p>
        <motion.div {...fadeUp} className="flex flex-wrap items-center gap-8 pb-8">
          <Link
            href="/about"
            className="text-[11px] tracking-[0.18em] uppercase text-[#e8e0d4] hover:text-[#c4956a] transition-colors duration-300"
          >
            About me →
          </Link>
          <a
            href="https://github.com/GoldenRailgun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.18em] uppercase text-[#4a4238] hover:text-[#e8e0d4] transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/khush-patel-mclaren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.18em] uppercase text-[#4a4238] hover:text-[#e8e0d4] transition-colors duration-300"
          >
            LinkedIn
          </a>
        </motion.div>
      </section>
    </>
  )
}