'use client'

import dynamic from 'next/dynamic'

const ParticleSphere = dynamic(() => import('./ParticleSphere'), { ssr: false })

export default ParticleSphere