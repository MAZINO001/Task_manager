import style from "../styles/Task.module.css";
import { TaskContext } from "../context/TaskContext";
import { useContext, useState, useRef, useEffect } from "react";
import TaskInfo from "./TaskInfo";

export default function Task() {
  const { tasks } = useContext(TaskContext);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const taskRef = useRef(null);

  const handleTaskClick = (taskId) => {
    setSelectedTaskId(taskId);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (taskRef.current && !taskRef.current.contains(event.target)) {
        setSelectedTaskId(null); // Hide TaskInfo when clicking outside
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={style.wrapper}>
      {tasks.map((task) => (
        <div
          key={task.id}
          className={style.container}
          onClick={() => handleTaskClick(task.id)}
        >
          <h3>{task.title}</h3>
          <p>0 of {task.subtasks.length} subtasks</p>
        </div>
      ))}

      {/* Render TaskInfo component if a task is selected */}
      {selectedTaskId && (
        <div ref={taskRef}>
          <TaskInfo selectedTaskId={selectedTaskId} />
        </div>
      )}
    </div>
  );
}
