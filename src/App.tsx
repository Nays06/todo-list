import React, { useState } from 'react';
import './App.css';

import useStore from './stores/index.ts';
function App() {
  const { items, addToDos, reset } = useStore()
  const [ title, setTitle ] = useState('123')
  const [ check, setCheck ] = useState(false)

  function changeTitle(event) {
    setTitle(event.target.value)
  }

  function changeCheck() {
    setCheck(!check)
  }

  function addToDo() {
    addToDos({ title: title, check: check})
  }

  return (
    <main>
      { items.map((item) => <li>{ item.title }</li>) }

      <input value={title} onChange={changeTitle} type="text" placeholder='Название' />
      <input checked={check} onChange={changeCheck} type="checkbox" />
      <button onClick={addToDo}>Добавить</button>
      <button onClick={reset}>Reset</button>
    </main>
  )
 }

export default App;
