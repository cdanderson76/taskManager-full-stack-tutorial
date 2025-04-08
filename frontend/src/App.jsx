import List from "./components/List";

export default function App() {

  return (
    <main>
      <h1 className="title">CRUD Operations</h1>
      <div className="input_holder">
        <input type="text" />
        <button>Add Task</button>
      </div>
      <ul>
        <List/>
      </ul>
    </main>
  )
}
