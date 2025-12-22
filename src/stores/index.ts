import { create } from 'zustand'

interface store {
  items: Array<{
    id: string,
    title: string,
    check: boolean
  }>,
  addToDos: any,
  changeItemCheck: any,
  reset: () => void,
}

const useStore = create<store>((set) => ({
  items: [
    { id: '1', title: 'Задача №1', check: true },
    { id: '2', title: 'Задача №2', check: true },
    { id: '3', title: 'Задача №3', check: false },
  ],
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
  reset: () => set({ items: [
    { id: '1', title: 'Задача №1', check: true },
    { id: '2', title: 'Задача №2', check: true },
    { id: '3', title: 'Задача №3', check: false },
  ] })
}))

export default useStore