import { AiOutlinePlus } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import styles from "../styles/AddTask.module.css";
import DropDown from "./DropDown";
export default function AddTask() {
  return (
    <div className={styles.container}>
      <h4>Add New Task</h4>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="subtasks">Subtasks</label>
        {subtasks.map(() => (
          <div className={styles.SubtasksCon} key={index}>
            <input type="text" />
            <span>
              <FaTimes />
            </span>
          </div>
        ))}
        <button className={styles.addbtn}>
          <span>
            <AiOutlinePlus />
          </span>
          add new Subtask
        </button>
        <DropDown />
        <button className={styles.creatbtn}>Create task</button>
      </form>
    </div>
  );
}
