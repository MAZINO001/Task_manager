import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import elepsis from "../Assets/icon-vertical-ellipsis.svg";
import ElipsesMenu from "../components/ElipsesMenu";
import Subtask from "../components/Subtask";
export default function TaskModal({ colIndex, taskIndex, setIsTaskModalOpen }) {
  const dispatch = useDispatch()
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive);
  const columns = board.columns;
  const col = board.columns.find((col, i) => i === colIndex);
  const task = col.tasks.find((task, i) => i === taskIndex);
  const subtasks = task.subtasks;

  let completed = 0;
  subtasks.forEach((subtask) => {
    if (subtask.isCompleted) {
      completed++;
    }
  });
  const [status, setStatus] = useState(task.status);
  const [newColIndex, setnewColIndex] = useState(columns.indexOf(col));
  const [elipsisMenuOpen, setelipsisMenuOpen] = useState(false);

  const setOpenEditModal = () => {
    //later
  };
  const setOpenDeleteModal = () => {
    //later
  };

  return (
    <div className="fixed right-0 left-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide z-50 bottom-0 justify-center items-center flex bg-[#00000080]">
      <div className="scrollbar-hide  overflow-y-scroll max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl ">
        {/* modal section  */}
        <div className="relative flex justify-between w-full items-center">
          <h1 className="text-lg">{task.title}</h1>
          <img
            src={elepsis}
            className="cursor-pointer h-6"
            onClick={() => {
              setelipsisMenuOpen((state) => !state);
            }}
          />

          {elipsisMenuOpen && (
            <ElipsesMenu
              setOpenDeleteModal={setOpenDeleteModal}
              setOpenEditModal={setOpenEditModal}
              type="Task"
            />
          )}
        </div>
        <p className="text-gray-500 font-semibold tracking-wide text-sm pt-6">
          {task.description}
        </p>
        <p className="pt-6 text-gary-500 tracking-widest text-sm ">
          subtasks ({completed} of {subtasks.length})
        </p>
        {/* subtasks section */}
        <div className="mt-3 space-y-2">
          {subtasks.map((subtask, i) => {
            return (
              <Subtask
                index={i}
                taskIndex={taskIndex}
                colIndex={colIndex}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
