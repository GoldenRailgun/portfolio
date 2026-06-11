import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen px-16 md:px-20 py-24 max-w-3xl">

      {/* Opener */}
      <div className="mb-20">
        <h1 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] font-normal mb-0">
          <span className="text-[#e8e0d4]">I&apos;m Khush.</span><br />
          <em className="text-[#c4956a]">I build AI systems end to end.</em>
        </h1>
      </div>

      {/* Bio */}
      <div className="mb-20 space-y-6 max-w-2xl">
        <p className="text-[14px] text-[#8a8278] leading-[1.9] tracking-[0.02em]">
          I&apos;m an AI engineer who owns the full stack — from training to deployment. I fine-tuned RoBERTa and DeBERTa locally for sentiment classification because I wanted a system I could reason about completely. No third-party API, no external reliability dependency. If it breaks, I know exactly why.
        </p>
        <p className="text-[14px] text-[#8a8278] leading-[1.9] tracking-[0.02em]">
          Right now I&apos;m the AI lead on VibeNewz — a news app that optimizes for emotional balance instead of engagement. The AI layer is mine: the model architecture, the training pipeline, the inference infra. I also collaborate on backend and iOS depending on what the team needs.
        </p>
        <p className="text-[14px] text-[#8a8278] leading-[1.9] tracking-[0.02em]">
          I&apos;m early career but I think carefully about what I build and why. Judgment is the thing I&apos;m most deliberate about developing — not just skills.
        </p>
      </div>

      {/* How I work */}
      <div className="mb-24">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#4a4238] mb-10">
          How I work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: '01',
              title: 'Ownership over convenience',
              body: 'If I can build it myself and understand it completely, I do. Convenience creates invisible dependencies.',
            },
            {
              number: '02',
              title: 'The AI layer is the product',
              body: 'AI shouldn\'t be an add-on. I build systems where the model is deeply coupled with the core business logic.',
            },
            {
              number: '03',
              title: 'Slow is smooth, smooth is fast',
              body: 'I prefer the correct implementation that scales over the fast one that breaks at 3am.',
            },
          ].map(p => (
            <div key={p.number} className="border-t border-[#1e1a16] pt-6">
              <span className="text-[10px] tracking-[0.2em] text-[#3a3632] block mb-4">
                {p.number}
              </span>
              <h3 className="font-serif text-[16px] text-[#e8e0d4] font-normal mb-3">
                {p.title}
              </h3>
              <p className="text-[11px] text-[#4a4238] leading-relaxed tracking-[0.02em]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA block */}
      <div className="border border-[#1e1a16] p-10 mb-16">
        <p className="font-serif italic text-[clamp(20px,2.5vw,32px)] text-[#6a6258] leading-[1.3] mb-8">
          I&apos;m looking for a team building something real.<br />
          If that&apos;s you —
        </p>
        <div className="flex flex-wrap items-center gap-8">
          <a
            href="mailto:your@email.com"
            className="text-[11px] tracking-[0.18em] uppercase text-[#e8e0d4] hover:text-[#c4956a] transition-colors duration-300"
          >
            Get in touch →
          </a>
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
        </div>
      </div>

    </main>
  )
}