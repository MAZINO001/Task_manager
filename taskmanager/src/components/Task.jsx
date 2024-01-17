import React from "react";
import { useSelector } from "react-redux";

export default function Task({ taskIndex, colIndex }) {
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive);
  const columns = board.columns;
  const col = board.columns.find((col, i) => i === colIndex);
  const task = board.tasks.find((task, i) => i === taskIndex);

  const [isTaskModalOpen, setisTaskModalOpen] = useState(false);
  let completed = 0;
  let subtasks = task.subtasks;
  subtasks.forEach((subtask) => {
    if (subtask.isCompleted) {
      completed++;
    }
  });
  return (
    <div className="w-[280px] first:my-5 rounded-lg bg-white dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg hover:text-[#635fc7] dark:text-white dark:hover:text-[#635fc7] cursor-pointer "></div>
  );
}
