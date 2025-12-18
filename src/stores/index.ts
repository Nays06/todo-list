import { create } from 'zustand'

interface store {
  items: any,
  addToDos: any,
  reset: () => void,
}

const useStore = create<store>((set) => ({
 items: [],
 addToDos: (item: any) => {
  set((state) => ({ items: [...state.items, item] }))
 },
 reset: () => set({ items: [] })
}))

export default useStore