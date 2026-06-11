'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { usePortfolioStore } from '@/lib/store'
import ParticleSphere from '@/components/three/ParticleSphereWrapper'

const routeStateMap: Record<string, 'idle' | 'work' | 'about' | 'contact' | 'name'> = {
  '/': 'idle',
  '/work': 'work',
  '/about': 'about',
}

export default function SphereContainer() {
  const sphereLarge = usePortfolioStore(s => s.sphereLarge)
  const setSphereState = usePortfolioStore(s => s.setSphereState)
  const pathname = usePathname()

  useEffect(() => {
    const base = '/' + pathname.split('/')[1]
    const state = routeStateMap[base] || 'idle'
    setSphereState(state)
  }, [pathname, setSphereState])

  return (
    <div
      className={`fixed z-50 pointer-events-none transition-all duration-700 ease-in-out ${
        sphereLarge
          ? 'bottom-4 right-4 w-[100px] h-[100px] opacity-50 md:opacity-100 md:bottom-0 md:right-0 md:w-[48%] md:h-[calc(100vh-80px)]'
          : 'bottom-6 right-6 w-[140px] h-[140px] opacity-60'
      }`}
    >
      <ParticleSphere />
    </div>
  )
}