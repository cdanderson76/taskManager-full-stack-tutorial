import { useEffect, useState } from "react";
import List from "./components/List";
import axios from 'axios';
import { baseURL } from "./utils/constant";

export default function App() {

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}`).then((resp) => {
      setTasks(resp.data.data);
    });
  }, [updateUI]);


  function addTask(e) {
    e.preventDefault();
    axios.post(`${baseURL}/`, { name: input }).then((resp) => {
      setInput('');
      setUpdateUI(prev => !prev);
    })
  }
  

  const taskList = tasks.map(task => <List key={task._id}
                                           id={task._id}
                                           task={task.name}
                                           setUpdateUI={setUpdateUI} />)


  return (
    <main>
      <h1 className="title">CRUD Operations</h1>
      <form className="input_holder" onSubmit={addTask}>
        <input type="text" 
               onChange={(e) => setInput(e.target.value)}
               value={input}
               />
        <button type='submit'>Add Task</button>
      </form>
      <ul>
        {taskList}
      </ul>
    </main>
  )
}
