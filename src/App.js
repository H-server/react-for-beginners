import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos(current => [toDo, ...current]);
    setToDo("");
  }
  return (
    <div>
      <h1>To Do List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
          value={toDo}
        />
        <button>to add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  );
}

export default App;
