import { main } from 'framer-motion/client'
import Link from 'next/link'

const projects = [
  {
    number: '001',
    category: 'NLP / Sentiment',
    name: 'VibeNewz',
    description: 'Fine-tuned RoBERTa and DeBERTa locally to classify news sentiment. Built the full inference pipeline — no third-party API, no external dependency.',
    href: '/work/vibenewz',
    external: false,
    linkLabel: '→',
  },
  {
    number: '002',
    category: 'Computer Vision',
    name: 'Droplet Detection Pipeline',
    description: 'Classical CV pipeline for spray droplet sizing — D10/D50/D90 metrics. Chose contour detection over deep learning because the problem didn\'t need it. Otsu thresholding, circularity filtering, calibration-ready.',
    href: 'https://huggingface.co/spaces/GoldenRailgun/droplet-detection-pipeline',
    external: true,
    linkLabel: 'Live demo →',
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen px-8 md:px-20 py-24 max-w-3xl">

      {/* Headline */}
      <div className="mb-20">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#4a4238] mb-4">
          Selected work
        </p>
        <h1 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] text-[#e8e0d4] font-normal">
          Work I&apos;m{' '}
          <em className="text-[#c4956a]">proud of.</em>
        </h1>
      </div>

      {/* Project list */}
      <div className="flex flex-col">
        {projects.map((project) => {
          const inner = (
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0">

              {/* Number + category */}
              <div className="md:w-48 flex-shrink-0">
                <span className="text-[10px] tracking-[0.2em] text-[#3a3632]">
                  {project.number}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#3a3632] mx-3">/</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#4a4238]">
                  {project.category}
                </span>
              </div>

              {/* Name + description */}
              <div className="flex-1">
                <h2 className="font-serif text-[clamp(22px,2.5vw,36px)] text-[#e8e0d4] font-normal mb-3 group-hover:text-[#c4956a] transition-colors duration-500">
                  {project.name}
                </h2>
                <p className="text-[11px] text-[#4a4238] tracking-[0.04em] leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="md:ml-8 mt-2 md:mt-1 text-[#3a3632] group-hover:text-[#c4956a] transition-colors duration-300 text-[11px] tracking-[0.15em]">
                {project.linkLabel ?? '→'}
              </div>

            </div>
          )
          const rowClass = "group block border-t border-[#1e1a16] py-12 hover:border-[#2a2520] transition-colors duration-300"
          return project.external ? (
            <a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={rowClass}
            >
              {inner}
            </a>
          ) : (
            <Link key={project.href} href={project.href} className={rowClass}>
              {inner}
            </Link>
          )
        })}

        {/* Bottom border */}
        <div className="border-t border-[#1e1a16]" />
      </div>

      {/* Closer */}
      <div className="mt-48 mb-16">
        <p className="font-serif italic text-[clamp(24px,3vw,42px)] text-[#4a4238]">
          Want to know more?{' '}
          <Link
            href="/about"
            className="text-[#c4956a] underline underline-offset-4 decoration-[#3a3632] hover:decoration-[#c4956a] transition-colors duration-300">
            Let&apos;s talk.
          </Link>
        </p>
      </div>

    </main>
  )
}