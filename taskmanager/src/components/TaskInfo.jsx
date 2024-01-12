import React, { useContext, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "../styles/TaskInfo.module.css";
import { TaskContext } from "../context/TaskContext";
import EdiDel from "./EdiDel";

export default function TaskInfo({ selectedTaskId }) {
  const { tasks } = useContext(TaskContext);
  const [isEdiDelVisible, setIsEdiDelVisible] = useState(false);
  const editDeleteRef = useRef();

  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  if (!selectedTask) {
    return null;
  }

  const subtasks = selectedTask.subtasks;

  const toggleEdiDelVisibility = () => {
    setIsEdiDelVisible((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h3>{selectedTask.title}</h3>
        <span onClick={toggleEdiDelVisibility}>
          <BsThreeDotsVertical />
        </span>
        {isEdiDelVisible && (
          <div ref={editDeleteRef} className={style.ediDel}>
            <EdiDel />
          </div>
        )}
      </div>
      <p>{selectedTask.description}</p>
      <div className={style.checkbox}>
        <label htmlFor="sub">
          subtasks <span>(0 of {subtasks.length})</span>
          <div className={style.input}>
            {subtasks.map((subs, index) => (
              <span key={index}>
                <input
                  type="checkbox"
                  id={`sub-${index}`}
                  name={`sub-${index}`}
                />
                <label htmlFor={`sub-${index}`}>{subs}</label>
              </span>
            ))}
          </div>
        </label>
      </div>
      <div className={style.status}>
        <label htmlFor="status">current status</label>
        <select id="status" name="status">
          <option value="" disabled>
            Task State
          </option>
          <option value="option1">Todo</option>
          <option value="option2">Doing</option>
          <option value="option3">Done</option>
          <option value="option4">Later</option>
        </select>
      </div>
    </div>
  );
}
