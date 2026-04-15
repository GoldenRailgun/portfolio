export function generateSphere(count: number): Float32Array {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count)
    const theta = Math.sqrt(count * Math.PI) * phi
    positions[i * 3]     = Math.cos(theta) * Math.sin(phi)
    positions[i * 3 + 1] = Math.sin(theta) * Math.sin(phi)
    positions[i * 3 + 2] = Math.cos(phi)
  }
  return positions
}

export function generateNeuralClusters(count: number): Float32Array {
  const positions = new Float32Array(count * 3)
  const numClusters = 8
  const centers: [number, number, number][] = []

  for (let c = 0; c < numClusters; c++) {
    const phi = Math.acos(-1 + (2 * c) / numClusters)
    const theta = Math.sqrt(numClusters * Math.PI) * phi
    centers.push([
      Math.cos(theta) * Math.sin(phi) * 0.9,
      Math.sin(theta) * Math.sin(phi) * 0.9,
      Math.cos(phi) * 0.9,
    ])
  }

  for (let i = 0; i < count; i++) {
    const cluster = centers[i % numClusters]
    const density = i < count * 0.7 ? 0.18 : 0.55
    positions[i * 3]     = cluster[0] + (Math.random() - 0.5) * density
    positions[i * 3 + 1] = cluster[1] + (Math.random() - 0.5) * density
    positions[i * 3 + 2] = cluster[2] + (Math.random() - 0.5) * density
  }

  return positions
}

export function generateWave(count: number): Float32Array {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const x = (i / count) * 4 - 2
    const z = (Math.random() - 0.5) * 0.4
    const wave1 = Math.sin(x * 2.5) * 0.5
    const wave2 = Math.sin(x * 5.0) * 0.18
    const y = wave1 + wave2 + (Math.random() - 0.5) * 0.12
    positions[i * 3]     = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z
  }
  return positions
}

export function generateHelix(count: number): Float32Array {
  const positions = new Float32Array(count * 3)
  const turns = 4
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2 * turns
    const strand = i % 2 === 0 ? 0 : Math.PI
    positions[i * 3]     = Math.cos(t + strand) * 0.6
    positions[i * 3 + 1] = (i / count) * 2.4 - 1.2
    positions[i * 3 + 2] = Math.sin(t + strand) * 0.6
  }
  return positions
}

export function generateScatter(count: number): Float32Array {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 4.5
    positions[i * 3 + 1] = (Math.random() - 0.5) * 4.5
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4.5
  }
  return positions
}