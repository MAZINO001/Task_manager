import React, { useState } from "react";

export default function TaskModal({ colIndex, taskIndex, setIsTaskModalOpen }) {
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive);
  const columns = board.columns;
  const col = board.columns.find((col, i) => i === colIndex);
  const task = col.tasks.find((task, i) => i === taskIndex);
  const subtasks = rask.subtasks;

  let completed = 0;
  subtasks.forEach((subtask) => {
    if (subtask.isCompleted) {
      completed++;
    }
  });
  const [status, setstatus] = useState(task.status)
  const [newColIndex, setnewColIndex] = useState(columns.indexOf(col))


  return <div
  className=""
  ></div>;
}
