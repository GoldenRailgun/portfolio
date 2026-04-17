'use client'

import Link from 'next/link'
import { usePortfolioStore } from '@/lib/store'

export default function Nav() {
  const setSphereState = usePortfolioStore(s => s.setSphereState)

  return (
    <nav className="flex justify-between items-center px-12 py-7">
      <Link
        href="/"
        className="font-serif italic text-[16px] text-[#6a6258] hover:text-[#c4956a] transition-colors duration-300"
        onMouseEnter={() => setSphereState('name')}
        onMouseLeave={() => setSphereState('idle')}
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
            onMouseLeave={() => setSphereState('idle')}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}