//if you can add a scroll like you learned 
//lean how to add leading screen 
import { FaDotCircle } from "react-icons/fa";
import style from "../styles/TaskContainer.module.css";
import Task from "./Task";
export default function TaskContainer() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <span>
          <FaDotCircle />
        </span>
        <h3> Todo</h3>
        <p>(0)</p>
      </div>
      <div className={style.extra}>
        <Task />
      </div>
    </div>
  );
}

