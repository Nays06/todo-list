import { create } from 'zustand'

type item = {
  id?: string ,
  title: string,
  check: boolean
}

interface Store {
  items: item[],
  addToDos: (item: item ) => void,
  changeItemCheck: (itemId: string) => void,
  reset: () => void,
}

const useStore = create<Store>((set) => ({
  items: [
    { id: '1', title: 'Задача №1', check: true },
    { id: '2', title: 'Задача №2', check: true },
    { id: '3', title: 'Задача №3', check: false },
  ],
  addToDos: (item) => {
    item.id = Date.now().toString()
    if(item.id){
      set((state) => ({ items: [...state.items, item] }))
    }
  },
  changeItemCheck: (itemId) => {
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