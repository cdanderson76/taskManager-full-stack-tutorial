import { useEffect, useState } from "react";
import List from "./components/List";
import axios from 'axios';
import { baseURL } from "./utils/constant";

export default function App() {

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [ updateId, setUpdateId] = useState(false);


  useEffect(() => {
    axios.get(`${baseURL}`).then((resp) => {
      setTasks(resp.data.data);
    });
  }, [updateUI]);

  // ADD A TASK

  function addTask() {
    axios.post(`${baseURL}/`, { name: input }).then((resp) => {
      setInput('');
      setUpdateUI(prev => !prev);
    })
  }


  function updateMode(id, text) {
    setInput(text);
    setUpdateId(id);
  };


  // EDIT A TASK

  
  function updateTask() {
    axios.put(`${baseURL}${updateId}`, {name: input}).then((resp) => {
      setUpdateUI(prev => !prev);
      setUpdateId(null);
      setInput('');
    });
  };
  

  const taskList = tasks.map(task => <List key={task._id}
                                           id={task._id}
                                           task={task.name}
                                           setUpdateUI={setUpdateUI}
                                           updateMode={updateMode} />)


  return (
    <main>
      <h1 className="title">CRUD Operations</h1>
      <form className="input_holder" onSubmit={ updateId ? updateTask : addTask}>
        <input type="text" 
               onChange={(e) => setInput(e.target.value)}
               value={input}
               />
        <button type='submit'>
          { updateId ? 'Update Task' : 'Add Task' }
        </button>
      </form>
      <ul>
        {taskList}
      </ul>
    </main>
  )
}
