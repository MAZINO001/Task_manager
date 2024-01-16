import { useState } from "react";
import { v4 as uuidv4, validate } from "uuid";
import cancelIcon from "../Assets/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
import boardSlice from "../Redux/boardsSlice";
export default function AddEditTaskModal({
  type,
  device,
  setOpenEditTask,
  pervColIndex = 0,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setisValid] = useState(true);
  const dispatch = useDispatch();

  const board = useSelector((state) => state.boards).find(
    (board) => board.isActive
  );
  const columns = board.columns;
  const col = columns.find((col, index) => index === pervColIndex);
  const [status, setStatus] = useState(columns[pervColIndex].name);
  const [newColIndex, setNewColIndex] = useState(pervColIndex);
  const [subTasks, setSubTasks] = useState([
    { title: "", isComplete: false, id: uuidv4() },
    { title: "", isComplete: false, id: uuidv4() },
  ]);

 const onChange = (id, newValue) => {
  setSubTasks((prevState) => {
    const newState = prevState.map((subtask) =>
      subtask.id === id ? { ...subtask, title: newValue } : subtask
    );
    return newState;
  });
};

  const onDelete = (id) => {
    setSubTasks((perstate) => perstate.filter((el) => el.id !== id));
  };
  const validate = () => {
    setisValid(false);
    if (!title.trim()) {
      return false;
    }
    for (let i = 0; i < subTasks.length; i++) {
      if (!subTasks[i].title.trim()) {
        return false;
      }
    }
    setisValid(true);
    return true;
  };
  const onSubmit = () => {
    setboardModalOpen(false);
    if (type === "add") {
      dispatch(
        boardSlice.actions.addTask({
          title,
          description,
          subTasks,
          status,
          newColIndex,
        })
      );
    } else {
      dispatch(
        boardSlice.actions.editTask({
          title,
          description,
          subTasks,
          status,
          taskIndex,
          pervColIndex,
          newColIndex,
        })
      );
    }
  };
  const onChnageStatus = (e) => {
    setStatus(e.target.value);
    setNewColIndex(e.target.selectedIndex);
  };
  return (
    <div
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setOpenEditTask(false);
      }}
      className={
        device === "mobile"
          ? "py-6 px-6 pb-40 absolute overflow-y-scroll left-0 flex right-0 bottom-[-100vh] top-0 bg-[#00000080]"
          : "py-6 px-6 pb-40 absolute overflow-y-scroll left-0 flex right-0 bottom-0 top-0 bg-[#00000080]"
      }
    >
      {/* modal section */}
      <div
        className="
            scrollbar-hide overflow-y-scroll max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl
        "
      >
        <h3
          className="
            text-lg
            "
        >
          {type === "text" ? "Edit" : "Add New"} Task
        </h3>
        {/* task name  */}
        <div className=" mt-8 flex flex-col space-y-1 ">
          <label className="text-sm dark:text-white text-gray-500">
            Task Name{" "}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent px-4 py-2 outline-none focus:border-0 rounded-md text-sm border border-gray-600 focus:outline-[#635fc7] ring-0"
            placeholder="e.g Take Coffee Break"
          />
        </div>
        {/* description */}
        <div className=" mt-8 flex flex-col space-y-1 ">
          <label className="text-sm dark:text-white text-gray-500">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-transparent px-4 py-2 outline-none focus:border-0 min-h-[200px] rounded-md text-sm border border-gray-600 focus:outline-[#635fc7] ring-0"
            placeholder="e.g. It's always good to take a break. A 15-minute break will recharge the batteries a little."
          />
        </div>
        {/* subtasks section */}
        <div className=" mt-8 flex flex-col space-y-1 ">
          <label className="text-sm dark:text-white  text-gray-500">
            SubTasks
          </label>
          {subTasks.map((subtask, index) => {
            return (
              <div key={index} className="flex items-center w-full">
                <input
                  type="text"
                  onChange={(e) => {
                    onChange(subTasks.id, e.target.value);
                  }}
                  value={subTasks.title}
                  className="bg-transparent outline-none focus:border-0  border flex-grow px-4 py-2 rounded-md text-sm border-gray-500  focus:outline-[#635fc7]"
                  placeholder="e.g Take coffee break "
                />
                <img
                  src={cancelIcon}
                  alt=""
                  onClick={() => {
                    onDelete(subtask.id);
                  }}
                  className="m-4 cursor-pointer"
                />
              </div>
            );
          })}

          <button
            onClick={() => {
              setSubTasks((state) => [
                ...state,
                { title: "", isComplete: false, id: uuidv4() },
              ]);
            }}
            className="w-full items-center dark:text-[#635fc7] dark:bg-white text-white bg-[#635fc7] py-2 rounded-full"
          >
            + Add New Subtask
          </button>
        </div>

        {/* current status section */}
        <div className="mt-8 flex flex-col space-y-3">
          <label className="text-sm dark:text-white text-gray-500">
            Current status
          </label>
          <select
            value={status}
            onChange={(e) => onChnageStatus(e)}
            className="select-status flex flex-grow px-4 py-2 rounded-md text-sm bg-transparent focus:border-0 border border-gray-300 focus:outline-[#635fc7] outline-none"
          >
            {columns.map((column, index) => (
              <option value={column.name} key={index}>
                {column.name}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              const isValid = validate();
              if (isValid) {
                onSubmit(type);
                setOpenEditTask(false);
              }
            }}
            className="w-full items-center text-white bg-[#635fc7] py-2 rounded-full"
          >
            {type === "edit" ? "Save edit" : "Creat Task"}
          </button>
        </div>
      </div>
    </div>
  );
}
