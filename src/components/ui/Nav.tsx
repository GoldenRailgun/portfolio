'use client'

import Link from 'next/link'
import { usePortfolioStore } from '@/lib/store'

export default function Nav() {
  const setSphereState = usePortfolioStore((s) => s.setSphereState)

  return (
    <nav className="flex justify-between items-center px-10 py-7">
      <Link
        href="/"
        className="text-[11px] tracking-[0.22em] uppercase text-[#4a4642] hover:text-[#9a8878] transition-colors duration-300"
        onMouseEnter={() => setSphereState('name')}
        onMouseLeave={() => setSphereState('idle')}
      >
        Khush Patel
      </Link>
      <div className="flex gap-7">
        {[
          { label: 'Work', state: 'work' },
          { label: 'About', state: 'about' },
        ].map(({ label, state }) => (
          <Link
            key={label}
            href={`/${label.toLowerCase()}`}
            className="text-[11px] tracking-[0.14em] uppercase text-[#3a3632] hover:text-[#a09080] transition-colors duration-300"
            onMouseEnter={() => setSphereState(state as 'work' | 'about')}
            onMouseLeave={() => setSphereState('idle')}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}