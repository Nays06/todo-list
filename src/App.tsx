import React, { useState } from "react";
import "./App.css";
import useStore from "./stores/index.ts";

function App() {
  const { items, addToDos, changeItemCheck, reset } = useStore();
  const [title, setTitle] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  function changeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function changeCheck() {
    setCheck(!check);
  }
  function addToDo() {
    addToDos({ title: title, check: check });
    setTitle("");
    setCheck(false);
  }
  function changeCheckForItem(itemId: string) {
    changeItemCheck(itemId);
  }

  return (
    <main>
      <div>
        <input value={title} onChange={changeTitle} type="text" placeholder="Название" />
        <input checked={check} onChange={changeCheck} type="checkbox" />
        <button onClick={addToDo}>Добавить</button>
        <button onClick={reset}>Reset</button>
      </div>

      {items.map((item) => (
        <li className={item.check ? "done" : ""} key={item.id}>
          {item.title}{" "}
          <input
            checked={item.check}
            onClick={() => item.id && changeCheckForItem(item.id)}
            type="checkbox"
          />
        </li>
      ))}
    </main>
  );
}

export default App;
