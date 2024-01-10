import { AiOutlinePlus } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import styles from "../styles/AddTask.module.css";
import { useContext } from "react";
import DropDown from "./DropDown";
import { TaskContext } from "../context/TaskContext";

export default function AddTask() {
  const {
    tasks,
    setTasks,
    subtasks,
    setSubtasks,
    title,
    setTitle,
    description,
    setDescription,
  } = useContext(TaskContext);

  function creatTask(e) {
    e.preventDefault();

    if (title.trim() !== "" && description.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: new Date().getTime(),
          title: title,
          description: description,
          subtasks: [...subtasks],
        },
      ]);
      setTitle("");
      setDescription("");
      setSubtasks([]);
    }
  }

  function creatSubtask(e) {
    e.preventDefault();
    setSubtasks((prevSubtasks) => [...prevSubtasks, ""]);
  }

  function deletSubtask(index) {
    setSubtasks((prevSubtasks) => {
      const newSubtasks = [...prevSubtasks];
      newSubtasks.splice(index, 1);
      return newSubtasks;
    });
  }

  function handleSubtaskChange(index, value) {
    setSubtasks((prevSubtasks) => {
      const newSubtasks = [...prevSubtasks];
      newSubtasks[index] = value;
      return newSubtasks;
    });
  }

  function AddTitle(e) {
    setTitle(e.target.value);
  }

  function AddDescretion(e) {
    setDescription(e.target.value);
  }

  return (
    <div className={styles.container}>
      <h4>Add New Task</h4>
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={AddTitle}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={description}
          onChange={AddDescretion}
        ></textarea>
        <label htmlFor="subtasks">Subtasks</label>

        {subtasks.map((subtask, index) => (
          <div className={styles.SubtasksCon} key={index}>
            <input
              type="text"
              name={`subtask-${index}`}
              id={`subtask-${index}`}
              value={subtask}
              onChange={(e) => handleSubtaskChange(index, e.target.value)}
            />
            <span>
              <FaTimes onClick={() => deletSubtask(index)} />
            </span>
          </div>
        ))}

        <button className={styles.addbtn} onClick={creatSubtask}>
          <span>
            <AiOutlinePlus />
          </span>
          add new Subtask
        </button>

        <DropDown />
        <button className={styles.creatbtn} onClick={creatTask}>
          Create task
        </button>
      </form>
    </div>
  );
}
