import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

export default function List() {
  return (
    <li>
      LIST
      <div className="icon_holder">
        <BiEdit className="icon"/>
        <BsTrash className="icon"/>
      </div>
    </li>
  )
}