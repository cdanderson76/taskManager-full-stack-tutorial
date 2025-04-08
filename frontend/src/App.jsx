import { useState } from "react";
import List from "./components/List";

export default function App() {

  const [input, setInput] = useState('');

  function addTask(e) {
    e.preventDefault()
    console.log(input)
    setInput('');
  }

  return (
    <main>
      <h1 className="title">CRUD Operations</h1>
      <form onSubmit={addTask} className="input_holder">
        <input type="text" 
               onChange={(e) => setInput(e.target.value)}
               value={input} />
        <button onClick={addTask}>Add Task</button>
      </form>
      <ul>
        <List/>
      </ul>
    </main>
  )
}
