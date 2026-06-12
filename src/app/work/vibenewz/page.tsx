import Link from 'next/link'
export const metadata = {
  title: 'VibeNewz — Owning the Sentiment Layer | Khush Patel',
  description:
    'Fine-tuning RoBERTa and DeBERTa for emotional sentiment classification — and why I didn\'t just call an API.',
}

export default function VibeNewzCaseStudy() {
  return (
    <main className="min-h-screen px-8 md:px-20 py-24">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#4a4238] mb-4">
          Case study — 001
        </p>
        <h1 className="font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.12] text-[#e8e0d4] font-normal mb-6">
          VibeNewz — owning the{' '}
          <em className="text-[#c4956a]">sentiment layer.</em>
        </h1>
        <p className="font-serif italic text-[clamp(16px,2vw,22px)] text-[#6a6258] leading-[1.5] mb-16">
          Fine-tuning RoBERTa and DeBERTa for emotional sentiment classification
          — and why I didn&apos;t just call an API.
        </p>

        {/* TL;DR */}
        <div className="border border-[#1e1a16] px-6 py-5 mb-20">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#3a3632] mb-4">
            TL;DR
          </p>
          <p className="text-[12px] text-[#8a8278] leading-[1.9] tracking-[0.02em]">
            News app that optimizes for emotional balance, not clicks. I own the
            AI layer end to end: fine-tuned DeBERTa-v3-base on 53,745 cleaned
            rows to ~73% — then diagnosed exactly why it can&apos;t go higher
            without better labels. Self-hosted inference, $0/mo, no external API
            dependency.{' '}
            <a
              href="https://huggingface.co/spaces/GoldenRailgun/Sentiment-ap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4956a] underline underline-offset-4 decoration-[#3a3632] hover:decoration-[#c4956a] transition-colors duration-300"
            >
              The model is live — try it.
            </a>
          </p>
        </div>

        {/* The problem */}
        <h2 className="font-serif text-[clamp(22px,2.5vw,32px)] text-[#e8e0d4] font-normal mb-6">
          The problem
        </h2>
        <div className="space-y-5 text-[13px] text-[#8a8278] leading-[1.9] tracking-[0.02em] mb-16">
          <p>
            VibeNewz is a news app built on a simple bet: people don&apos;t need
            more engagement-optimized doomscrolling. The feed optimizes for
            emotional balance instead of clicks. That means every article needs
            a sentiment label — Negative, Neutral, Positive — and the label has
            to reflect <em className="text-[#a89e90]">human</em> emotional
            sentiment, not market sentiment.
          </p>
          <p>
            I own the AI layer end to end: model selection, data, training, and
            inference.
          </p>
        </div>

        {/* The decision */}
        <h2 className="font-serif text-[clamp(22px,2.5vw,32px)] text-[#e8e0d4] font-normal mb-6">
          The decision: fine-tune, don&apos;t rent
        </h2>
        <div className="space-y-5 text-[13px] text-[#8a8278] leading-[1.9] tracking-[0.02em] mb-10">
          <p>
            The obvious answer today is &quot;send the headline to an LLM
            API.&quot; I chose to fine-tune and host my own classifier instead.
          </p>
          <p>
            <span className="text-[#c4956a]">Cost structure.</span> Classifying
            every article in a news feed is high-volume, low-complexity
            inference. Paying per-token API rates for 3-class classification is
            renting a freight train to deliver letters. A fine-tuned
            184M-parameter model does the job for the cost of hosting —
            currently zero, on Hugging Face&apos;s free tier behind a Gradio
            wrapper.
          </p>
          <p>
            <span className="text-[#c4956a]">Reliability.</span> If an external
            API has an outage, rate-limits us, deprecates a model, or changes
            pricing, the product&apos;s core feature breaks and there&apos;s
            nothing I can do about it. Owning the weights means the failure
            modes are mine — and I can reason about all of them.
          </p>
          <p>
            <span className="text-[#c4956a]">The task didn&apos;t need more.</span>{' '}
            Sentiment classification is a solved architecture problem. The hard
            part is the data and the training process — which is exactly the
            part you can&apos;t outsource anyway.
          </p>
        </div>

        {/* Technical stack card */}
        <div className="border border-[#1e1a16] px-6 py-5 mb-16">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#3a3632] mb-5">
            Technical stack
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-[11px] tracking-[0.04em]">
            <div>
              <dt className="text-[#3a3632] uppercase tracking-[0.18em] mb-1">Models</dt>
              <dd className="text-[#8a8278]">DeBERTa-v3-base 184M · Cardiff RoBERTa 125M</dd>
            </div>
            <div>
              <dt className="text-[#3a3632] uppercase tracking-[0.18em] mb-1">Framework</dt>
              <dd className="text-[#8a8278]">HuggingFace Transformers · PyTorch</dd>
            </div>
            <div>
              <dt className="text-[#3a3632] uppercase tracking-[0.18em] mb-1">Data</dt>
              <dd className="text-[#8a8278]">53,745 rows · 3 sources · balanced</dd>
            </div>
            <div>
              <dt className="text-[#3a3632] uppercase tracking-[0.18em] mb-1">Hardware</dt>
              <dd className="text-[#8a8278]">RTX 5070 Ti · 16GB VRAM · local</dd>
            </div>
            <div>
              <dt className="text-[#3a3632] uppercase tracking-[0.18em] mb-1">Inference</dt>
              <dd className="text-[#8a8278]">HF Spaces · Gradio · $0/mo</dd>
            </div>
            <div>
              <dt className="text-[#3a3632] uppercase tracking-[0.18em] mb-1">Result</dt>
              <dd className="text-[#8a8278]">~73% · 3-class · diagnosed ceiling</dd>
            </div>
          </dl>
        </div>

        {/* The data */}
        <h2 className="font-serif text-[clamp(22px,2.5vw,32px)] text-[#e8e0d4] font-normal mb-6">
          The data was the real fight
        </h2>
        <div className="space-y-5 text-[13px] text-[#8a8278] leading-[1.9] tracking-[0.02em] mb-16">
          <p>
            The original dataset was 32,569 labeled rows — noisy in ways that
            put a hard ceiling on everything downstream. Truncated text, Twitter
            artifacts, $ticker spam, and outright mislabels (&quot;Dow down 500
            points&quot; labeled <em className="text-[#a89e90]">Positive</em> —
            financially debatable, emotionally absurd).
          </p>
          <p>
            I wrote a cleaning pipeline — dedup, URL/mention/ticker stripping,
            length and alphabetic-ratio filters, class rebalancing — that cut it
            to 30,843 clean, balanced rows. Then I merged in SemEval 2017 and
            the expert-annotated Financial PhraseBank, ending at 53,745 balanced
            rows across three sources.
          </p>
        </div>

        {/* Training */}
        <h2 className="font-serif text-[clamp(22px,2.5vw,32px)] text-[#e8e0d4] font-normal mb-6">
          Training: five runs, one productive failure
        </h2>
        <div className="space-y-5 text-[13px] text-[#8a8278] leading-[1.9] tracking-[0.02em] mb-10">
          <p>
            I evaluated Cardiff&apos;s Twitter-pretrained RoBERTa against
            DeBERTa-v3-base. The baseline runs taught me the boring-but-vital
            lessons: <code className="text-[11px] text-[#a89e90]">ignore_mismatched_sizes=True</code>{' '}
            was silently reinitializing the classifier head, an aggressive LR
            was destroying pretrained weights, and the cosine scheduler&apos;s
            mid-training restart was spiking gradients. LR sweeps landed the
            sweet spot at 1.5e-6 with a linear schedule and gradient clipping —
            but validation loss plateaued by epoch 3. The model had learned
            everything the data could teach it.
          </p>
          <p>
            <span className="text-[#c4956a]">Run 4 is the one I learned the most
            from.</span>{' '}
            I added layer-wise LR decay and swapped cross-entropy for focal loss
            in the same run. Grad norms exploded from a healthy 1–8 range to
            500+, spiking to 2,525. Epoch-1 accuracy: 38% — barely above random.
            Root cause: focal loss starts at roughly half the scale of
            cross-entropy, so an optimizer calibrated for CE was effectively
            getting doubled gradients. The model diverged completely. I killed
            the run.
          </p>
          <p>
            The lesson wasn&apos;t &quot;focal loss is bad&quot; — it&apos;s
            that changing the loss function changes the loss{' '}
            <em className="text-[#a89e90]">scale</em>, and every hyperparameter
            downstream of it was tuned for the old scale. One variable at a
            time.
          </p>
          <p>
            Retraining on the merged 53k dataset landed the final model at ~73%.
          </p>
        </div>

        {/* Decision log */}
        <div className="border border-[#1e1a16] bg-[#0a0908] px-6 py-5 mb-16">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#3a3632] mb-5">
            Decision_log
          </p>
          <div className="space-y-3 text-[11px] leading-[1.7] tracking-[0.02em]">
            <p className="text-[#6a6258]">
              <span className="text-[#3a3632]">run_1 →</span> cosine restart destabilized mid-training · switched to linear
            </p>
            <p className="text-[#6a6258]">
              <span className="text-[#3a3632]">run_2 →</span> LR 1e-6 underfit · stability isn&apos;t the goal, learning is
            </p>
            <p className="text-[#6a6258]">
              <span className="text-[#3a3632]">run_3 →</span> LR 1.5e-6 + clip 1.0 · plateau at epoch 3 → data is the ceiling
            </p>
            <p className="text-[#6a6258]">
              <span className="text-[#3a3632]">run_4 →</span> focal loss + LLRD together · grad norms 2,525 · diverged · killed · one variable at a time
            </p>
            <p className="text-[#6a6258]">
              <span className="text-[#3a3632]">run_5 →</span> merged 53k dataset · healthier grads from epoch 0 · final ~73%
            </p>
          </div>
        </div>

        {/* What 73% means */}
        <h2 className="font-serif text-[clamp(22px,2.5vw,32px)] text-[#e8e0d4] font-normal mb-6">
          What ~73% actually means
        </h2>
        <div className="space-y-5 text-[13px] text-[#8a8278] leading-[1.9] tracking-[0.02em] mb-16">
          <p>
            I could dress that number up. I won&apos;t, because the diagnosis is
            more useful than the dressing.
          </p>
          <p>
            <span className="text-[#c4956a]">The bottleneck is one class.</span>{' '}
            Every run, ~600 Positive articles get predicted Negative. The
            confusion matrices are consistent: Neutral ~80%+, Negative ~77–83%,
            Positive stuck near 57%.
          </p>
          <p>
            <span className="text-[#c4956a]">The cause is in the labels, not the
            model.</span>{' '}
            A chunk of the data labels <em className="text-[#a89e90]">market</em>{' '}
            sentiment, and &quot;financially positive&quot; is frequently
            &quot;emotionally negative&quot; (&quot;Layoffs boost quarterly
            margins&quot;). The model is faithfully learning a contradiction in
            the data.
          </p>
          <p>
            <span className="text-[#c4956a]">Which is the product problem in
            miniature.</span>{' '}
            VibeNewz exists precisely because financial and engagement framing
            diverge from human emotional reality. The dataset has the same
            disease the product treats.
          </p>
          <p>
            The path up is mapped: ensemble DeBERTa with the RoBERTa baseline
            via soft voting, then a hierarchical pipeline (Neutral-vs-not, then
            Positive-vs-Negative) if needed. Both reuse the trained models —
            it&apos;s post-processing, not retraining.
          </p>
        </div>

        {/* What I learned */}
        <h2 className="font-serif text-[clamp(22px,2.5vw,32px)] text-[#e8e0d4] font-normal mb-8">
          What I learned
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="border-t border-[#1e1a16] pt-5">
            <h3 className="font-serif text-[15px] text-[#e8e0d4] font-normal mb-3">
              Own the whole failure surface.
            </h3>
            <p className="text-[11px] text-[#6a6258] leading-relaxed tracking-[0.02em]">
              Renting an API doesn&apos;t remove failure modes — it makes them
              someone else&apos;s roadmap. The fine-tune path was harder, and
              every hour of it produced understanding I apply to every model I
              touch.
            </p>
          </div>
          <div className="border-t border-[#1e1a16] pt-5">
            <h3 className="font-serif text-[15px] text-[#e8e0d4] font-normal mb-3">
              Data beats hyperparameter heroics.
            </h3>
            <p className="text-[11px] text-[#6a6258] leading-relaxed tracking-[0.02em]">
              Three runs of LR tuning bought ~2 points. The plateau at epoch 3
              was the data talking. The biggest single gain came from cleaning
              and merging datasets, not from the optimizer.
            </p>
          </div>
          <div className="border-t border-[#1e1a16] pt-5">
            <h3 className="font-serif text-[15px] text-[#e8e0d4] font-normal mb-3">
              Telemetry over guessing.
            </h3>
            <p className="text-[11px] text-[#6a6258] leading-relaxed tracking-[0.02em]">
              Grad norms told me Run 4 was dead within an epoch. Knowing the
              healthy range for this model came from watching every run — not
              from a blog post.
            </p>
          </div>
        </div>

        {/* Closer */}
        <div className="border-t border-[#1e1a16] pt-10 mb-16">
          <p className="font-serif italic text-[clamp(18px,2.2vw,26px)] text-[#6a6258] leading-[1.4] mb-8">
            The classifier is live. Type a headline, watch it think — and notice
            it&apos;s least confident{' '}
            <span className="text-[#c4956a]">exactly where this writeup says it
            should be.</span>
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="https://huggingface.co/spaces/GoldenRailgun/Sentiment-ap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.18em] uppercase text-[#e8e0d4] hover:text-[#c4956a] transition-colors duration-300"
            >
              Live demo →
            </a>
            <Link
              href="/work"
              className="text-[11px] tracking-[0.18em] uppercase text-[#4a4238] hover:text-[#e8e0d4] transition-colors duration-300"
            >
              All work
            </Link>
            <Link
              href="/about"
              className="text-[11px] tracking-[0.18em] uppercase text-[#4a4238] hover:text-[#e8e0d4] transition-colors duration-300"
            >
              About me
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
