'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { usePortfolioStore } from '@/lib/store'

const routeStateMap: Record<string, 'idle' | 'work' | 'about' | 'contact' | 'name'> = {
  '/': 'idle',
  '/work': 'work',
  '/about': 'about',
}

export default function Nav() {
  const setSphereState = usePortfolioStore(s => s.setSphereState)
  const pathname = usePathname()

  const resetState = () => {
    const base = '/' + pathname.split('/')[1]
    setSphereState(routeStateMap[base] || 'idle')
  }

  return (
    <nav className="flex justify-between items-center px-12 py-7">
      <Link
        href="/"
        className="font-serif italic text-[16px] text-[#6a6258] hover:text-[#c4956a] transition-colors duration-300"
        onMouseEnter={() => setSphereState('name')}
        onMouseLeave={resetState}
      >
        Khush Patel
      </Link>
      <div className="flex gap-8">
        {[
          { label: 'Work', href: '/work', state: 'work' as const },
          { label: 'About', href: '/about', state: 'about' as const },
        ].map(({ label, href, state }) => (
          <Link
            key={label}
            href={href}
            className="text-[14px] tracking-[0.14em] uppercase text-[#6a6258] hover:text-[#e8e0d4] transition-colors duration-300"
            onMouseEnter={() => setSphereState(state)}
            onMouseLeave={resetState}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}