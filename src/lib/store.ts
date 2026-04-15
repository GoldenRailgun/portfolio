import { create } from 'zustand'

type SphereState =
  | 'idle'
  | 'work'
  | 'about'
  | 'contact'
  | 'name'

interface PortfolioStore {
  sphereState: SphereState
  setSphereState: (state: SphereState) => void
  sphereLarge: boolean
  setSphereLarge: (large: boolean) => void
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  sphereState: 'idle',
  setSphereState: (sphereState) => set({ sphereState }),
  sphereLarge: true,
  setSphereLarge: (sphereLarge) => set({ sphereLarge }),
}))