import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

export default function List({ id, task }) {
  return (
    <li>
      {task}
      <div className="icon_holder">
        <BiEdit className="icon"/>
        <BsTrash className="icon"/>
      </div>
    </li>
  )
}