'use client'

import dynamic from 'next/dynamic'

const WordSphere = dynamic(() => import('./WordSphere'), { ssr: false })

export default WordSphere