// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

import { useState } from "react";
import List from "./List";
// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

let nextId = 0;
function App() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");

  function handleAddList() {
    setList([
      ...list,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
    setTitle("");
  }
  return (
    <>
      <h1>Comments</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <button onClick={handleAddList}>Add comment</button>
      <List list={list} setList={setList} />
    </>
  );
}

export default App;
