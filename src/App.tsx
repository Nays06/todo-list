import React, { useState } from 'react';
import './App.css';

import useStore from './stores/index.ts';
function App() {
  const { items, addToDos, changeItemCheck, reset } = useStore()
  const [title, setTitle] = useState('123')
  const [check, setCheck] = useState(false)

  function changeTitle(event) {
    setTitle(event.target.value)
  }

  function changeCheck() {
    setCheck(!check)
  }

  function addToDo() {
    addToDos({ title: title, check: check })
  }

  function changeCheckForItem(itemId) {
    changeItemCheck(itemId)
  }

  return (
    <main>
      {items.map((item) => <li className={item.check ? "done" : ""}>{item.title} <input checked={item.check} onClick={() => changeCheckForItem(item.id)} type="checkbox" /></li>)}

      <input value={title} onChange={changeTitle} type="text" placeholder='Название' />
      <input checked={check} onChange={changeCheck} type="checkbox" />
      <button onClick={addToDo}>Добавить</button>
      <button onClick={reset}>Reset</button>
    </main>
  )
}

export default App;
