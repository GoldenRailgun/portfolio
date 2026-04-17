'use client'

import { useEffect, useRef } from 'react'
import { usePortfolioStore } from '@/lib/store'

const NLP_WORDS = [
  'sentiment','roberta','deberta','token','inference','embedding','attention',
  'weight','gradient','loss','fine-tune','softmax','logit','classifier',
  'positive','negative','neutral','corpus','dataset','batch','epoch',
  'transformer','encoder','decoder','layer','head','dropout','bias',
  'activation','relu','bert','huggingface','pytorch','cuda','fp16',
  'quantize','distill','LoRA','adapter','context','sequence','padding',
  'masking','vocab','tokenizer','label','precision','recall','f1',
  'accuracy','baseline','benchmark','latency','throughput','pipeline',
  'checkpoint','weights','architecture','nlp','llm','vector','cosine',
  'similarity','cluster','node','signal','feature','representation',
  'latent','space','manifold','backprop','optimizer','adam','schedule',
  'warmup','overfit','regularize','augment','preprocess','normalize',
]

const ABOUT_WORDS = [
  'Khush Patel','AI Engineer','fine-tuning','RoBERTa','DeBERTa',
  'sentiment analysis','end-to-end','model ownership','reliability',
  'inference infra','VibeNewz','NLP systems','PyTorch','HuggingFace',
  'full stack AI','iOS collab','backend','high judgment',
  'builds what runs','no API dependency','owns the stack',
  'VC-backed product','AI lead','open to work','early career',
  'Next.js','TypeScript','React','Python','Three.js',
]

const WORK_WORDS = [
  'attention heads','token clusters','semantic groups','entity linking',
  'named entity','dependency parse','word vectors','sentence bert',
  'cross-encoder','bi-encoder','reranker','retrieval','augmented generation',
  'fine-grained','multi-label','zero-shot','few-shot','in-context',
  'chain-of-thought','instruction tuned','rlhf','dpo','sft',
  'contrastive','triplet loss','hard negative','label smoothing',
]

const NAME_WORDS = [
  'K','KH','KHU','KHUS','KHUSH','KHUSH PATEL',
  'P','PA','PAT','PATE','PATEL',
  'AI','Engineer','builds','owns','ships',
  'fine-tunes','deploys','thinks','creates',
]

const COUNT = 500

function rnd(a: number, b: number) { return a + (b - a) * Math.random() }

function fibSphere(n: number): [number, number, number][] {
  return Array.from({ length: n }, (_, i) => {
    const phi = Math.acos(-1 + (2 * i) / n)
    const theta = Math.sqrt(n * Math.PI) * phi
    return [Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi)]
  })
}

function genClusters(n: number): [number, number, number][] {
  const centers = fibSphere(8).map(p => p.map(v => v * 0.82) as [number, number, number])
  return Array.from({ length: n }, (_, i) => {
    const c = centers[i % 8]
    const r = 0.22
    return [c[0] + rnd(-r, r), c[1] + rnd(-r, r), c[2] + rnd(-r, r)] as [number, number, number]
  })
}

function genWave(n: number): [number, number, number][] {
  return Array.from({ length: n }, (_, i) => {
    const x = (i / n) * 3.6 - 1.8
    const z = rnd(-0.3, 0.3)
    const y = Math.sin(x * 2.5) * 0.45 + Math.sin(x * 5) * 0.15 + rnd(-0.06, 0.06)
    return [x * 0.52, y, z] as [number, number, number]
  })
}

function genHelix(n: number): [number, number, number][] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2 * 4
    const s = i % 2 === 0 ? 0 : Math.PI
    return [Math.cos(t + s) * 0.55, (i / n) * 2.2 - 1.1, Math.sin(t + s) * 0.55] as [number, number, number]
  })
}

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

function pickWord(state: string): string {
  const pools: Record<string, string[]> = {
    idle: NLP_WORDS, work: WORK_WORDS, about: ABOUT_WORDS, name: NAME_WORDS
  }
  const pool = pools[state] || NLP_WORDS
  return pool[Math.floor(Math.random() * pool.length)]
}

export default function WordSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sphereState = usePortfolioStore(s => s.sphereState)
  const stateRef = useRef(sphereState)

  useEffect(() => {
    stateRef.current = sphereState
  }, [sphereState])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const W = canvas.parentElement?.offsetWidth || 500
    const H = canvas.parentElement?.offsetHeight || 600
    canvas.width = W
    canvas.height = H

    const ctx = canvas.getContext('2d')!

    const shapes = {
      idle: fibSphere(COUNT),
      work: genClusters(COUNT),
      about: genWave(COUNT),
      name: genHelix(COUNT),
      contact: fibSphere(COUNT),
    }

    const particles = Array.from({ length: COUNT }, (_, i) => {
      const sp = shapes.idle[i]
      return {
        x: rnd(-1, 1), y: rnd(-1, 1), z: rnd(-1, 1),
        tx: sp[0], ty: sp[1], tz: sp[2],
        word: NLP_WORDS[i % NLP_WORDS.length],
        nextChange: Math.random() * 600,
        interval: 400 + Math.random() * 300,
        np: [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2],
      }
    })

    let rotY = 0, rotX = 0, t = 0
    let mouseX = 0, mouseY = 0
    let animId: number
    let lastState = 'idle'

    const handleMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouseX = (e.clientX - r.left - W / 2) / W
      mouseY = (e.clientY - r.top - H / 2) / H
    }
    window.addEventListener('mousemove', handleMouse)

    function project(x: number, y: number, z: number) {
      const cy = Math.cos(rotY), sy = Math.sin(rotY)
      const cx = Math.cos(rotX), sx = Math.sin(rotX)
      let nx = x * cy + z * sy
      let nz = -x * sy + z * cy
      let ny = y * cx - nz * sx
      nz = y * sx + nz * cx
    //   const FOV = Math.min(W, H) * 0.28
    //   const dz = nz + 4.2
    const FOV = Math.min(W, H) * 0.38
const dz = nz + 3.0
      const sc = FOV / dz
      return {
        sx: nx * sc + W / 2,
        sy: ny * sc + H / 2,
        // depth: Math.max(0, Math.min(1, (nz + 2.8) / 5.6)),
        depth: Math.max(0, Math.min(1, (nz + 2.2) / 4.4)),
        scale: sc,
      }
    }

    function animate(ts: number) {
      animId = requestAnimationFrame(animate)
      t += 0.006

      const currentState = stateRef.current

      // update targets when state changes
      if (currentState !== lastState) {
        const tgts = shapes[currentState as keyof typeof shapes]
        particles.forEach((p, i) => {
          p.tx = tgts[i][0]; p.ty = tgts[i][1]; p.tz = tgts[i][2]
          p.interval = currentState === 'about'
            ? 2400 + Math.random() * 800
            : currentState === 'name'
            ? 700 + Math.random() * 300
            : 380 + Math.random() * 280
        })
        lastState = currentState
      }

      const spd = currentState === 'about' ? 0.0007 : 0.003
      rotY += spd + mouseX * 0.002
      rotX = Math.sin(t * 0.15) * 0.07 + mouseY * 0.1

      ctx.clearRect(0, 0, W, H)

      const noise = currentState === 'about' ? 0.006 : 0.018
      const ls = currentState === 'about' ? 0.015 : 0.032

      const projected = particles.map(p => {
        const nx = Math.sin(t * 0.8 + p.np[0]) * noise
        const ny = Math.cos(t * 0.6 + p.np[1]) * noise
        const nz = Math.sin(t * 1.1 + p.np[2]) * noise
        p.x = lerp(p.x, p.tx + nx, ls)
        p.y = lerp(p.y, p.ty + ny, ls)
        p.z = lerp(p.z, p.tz + nz, ls)

        if (ts > p.nextChange) {
          p.word = pickWord(currentState)
          p.nextChange = ts + p.interval + (Math.random() - 0.5) * 150
        }

        return { ...project(p.x, p.y, p.z), word: p.word }
      })

      projected.sort((a, b) => a.depth - b.depth)

      projected.forEach(p => {
        if (p.depth < 0.04) return
        const d = p.depth
        // const fs = Math.max(6, 10 * p.scale * 0.28)
        const fs = Math.max(4, 6 * p.scale * 0.18)
        ctx.globalAlpha = 0.06 + d * 0.94
        const r = Math.floor(lerp(28, 196, d))
        const g = Math.floor(lerp(22, 149, d))
        const b = Math.floor(lerp(18, 106, d))
        ctx.font = `${fs}px 'SF Mono','Fira Code','Cascadia Code',monospace`
        ctx.fillStyle = `rgb(${r},${g},${b})`
        ctx.fillText(p.word, p.sx, p.sy)
      })

      ctx.globalAlpha = 1
    }

    requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full block" />
}