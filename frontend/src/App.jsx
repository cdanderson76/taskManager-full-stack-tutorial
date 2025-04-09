import List from "./components/List";

export default function App() {

  return (
    <main>
      <h1 className="title">CRUD Operations</h1>
      <form className="input_holder">
        <input type="text" />
        <button>Add Task</button>
      </form>
      <ul>
        <List/>
      </ul>
    </main>
  )
}
