import {create} from 'zustand'

type Store = {
    turnerMode: 'advertisement' | 'simple',
    setTurnerMode: (mode: 'advertisement' | 'simple') => void
}

export const useStore = create<Store>((set) => ({
    turnerMode: 'simple',
    setTurnerMode: (mode) => set({ turnerMode: mode })
}))


