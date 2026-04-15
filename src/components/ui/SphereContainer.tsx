'use client'

import { usePortfolioStore } from '@/lib/store'
import ParticleSphere from '@/components/three/ParticleSphereWrapper'

export default function SphereContainer() {
  const sphereLarge = usePortfolioStore((s) => s.sphereLarge)

  return (
    <div
      className={`fixed z-50 pointer-events-none transition-all duration-700 ease-in-out ${
        sphereLarge
          ? 'bottom-0 right-0 w-full md:w-[48%] h-[40vh] md:h-[calc(100vh-80px)]'
          : 'bottom-6 right-6 w-[140px] h-[140px] opacity-60'
      }`}
    >
      <ParticleSphere />
    </div>
  )
}