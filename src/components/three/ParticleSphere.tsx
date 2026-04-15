'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { usePortfolioStore } from '@/lib/store'
import {
  generateSphere,
  generateWave,
  generateNeuralClusters,
  generateHelix,
  generateScatter,
} from './shapes'

const COUNT = 2200

export default function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sphereState = usePortfolioStore((s) => s.sphereState)
  const sphereStateRef = useRef(sphereState)

  useEffect(() => {
    sphereStateRef.current = sphereState
  }, [sphereState])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const W = canvas.parentElement?.offsetWidth || 500
    const H = canvas.parentElement?.offsetHeight || 600

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    // Scene + Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100)
    camera.position.set(0, 0, 2.8)

    // Precompute all shape targets
    const shapes = {
  idle:    generateSphere(COUNT),
  about:   generateWave(COUNT),
  work:    generateNeuralClusters(COUNT),
  name:    generateHelix(COUNT),
  contact: generateSphere(COUNT),
}

    // Initial positions — scattered
    const positions = generateScatter(COUNT)

    // Noise phases — unique per particle for shimmer
    const noisePhase = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT * 3; i++) {
      noisePhase[i] = Math.random() * Math.PI * 2
    }

    // Vertex colors — warm amber variation
    const colors = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      const warm = Math.random()
      colors[i * 3]     = 0.68 + warm * 0.22
      colors[i * 3 + 1] = 0.54 + warm * 0.18
      colors[i * 3 + 2] = 0.38 + warm * 0.14
    }

    // Geometry
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.016,
      vertexColors: true,
      transparent: true,
      opacity: 0.82,
      sizeAttenuation: true,
    })

    const pts = new THREE.Points(geo, mat)
    scene.add(pts)

    // Mouse tracking
    let mouseX = 0
    let mouseY = 0
    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = (e.clientX - rect.left - W / 2) / W
      mouseY = (e.clientY - rect.top - H / 2) / H
    }
    window.addEventListener('mousemove', handleMouse)

    // Animation loop
    let t = 0
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      t += 0.007

      const p = pts.geometry.attributes.position.array as Float32Array
      const target = shapes[sphereStateRef.current]
      const noise = 0.022

      for (let i = 0; i < COUNT; i++) {
        const nx = Math.sin(t * 0.8 + noisePhase[i * 3])     * noise
        const ny = Math.cos(t * 0.6 + noisePhase[i * 3 + 1]) * noise
        const nz = Math.sin(t * 1.1 + noisePhase[i * 3 + 2]) * noise

        p[i * 3]     += (target[i * 3]     + nx - p[i * 3])     * 0.022
        p[i * 3 + 1] += (target[i * 3 + 1] + ny - p[i * 3 + 1]) * 0.022
        p[i * 3 + 2] += (target[i * 3 + 2] + nz - p[i * 3 + 2]) * 0.022
      }

      pts.geometry.attributes.position.needsUpdate = true
      pts.rotation.y += 0.0035
      pts.rotation.x = Math.sin(t * 0.18) * 0.12

      // Mouse parallax on camera
      camera.position.x += (mouseX * 0.25 - camera.position.x) * 0.04
      camera.position.y += (-mouseY * 0.2  - camera.position.y) * 0.04
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouse)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full block" />
}