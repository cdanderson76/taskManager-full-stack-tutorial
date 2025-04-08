import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { baseURL } from "../utils/constant";
import axios from "axios";

export default function List({ id, task, setUpdateUI }) {

  function deleteTask() {
    axios.delete(`${baseURL}${id}`).then((resp) => {
      setUpdateUI((prev) => !prev);
    });
  };

  return (
    <li>
      {task}
      <div className="icon_holder">
        <BiEdit className="icon"/>
        <BsTrash className="icon" onClick={deleteTask} />
      </div>
    </li>
  )
}