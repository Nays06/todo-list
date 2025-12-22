import { create } from 'zustand'

interface store {
  items: Array<{
    id?: String,
    title: String,
    check: boolean
  }>,
  addToDos: any,
  changeItemCheck: any,
  reset: () => void,
}

const useStore = create<store>((set) => ({
  items: [],
  addToDos: (item: any) => {
    item.id = Date.now().toString()
    set((state) => ({ items: [...state.items, item] }))
  },
  changeItemCheck: (itemId: string) => {
    set((state) => ({
      items: state.items.map(item =>
        item.id === itemId
          ? { ...item, check: !item.check }
          : item
      )
    }))
  },
  reset: () => set({ items: [] })
}))

export default useStore