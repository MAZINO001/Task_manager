import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import cancelIcon from "../Assets/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
import boardSlice from "../Redux/boardsSlice";
export default function AddEditBoardModal({ setboardModalOpen, type }) {
  const [name, setName] = useState("");
  const [isFistLoad, setIsFistLoad] = useState(true);
  const [newColumns, setNewColumns] = useState([
    { name: "Todo", task: [], id: uuidv4() },
    { name: "Doing", task: [], id: uuidv4() },
  ]);
  const board = useSelector((state) => state.boards).find(
    (board) => board.isActive
  );

  if (type === "edit" && isFistLoad) {
    setNewColumns(
      board.columns.map((col) => {
        return { ...col, id: uuidv4() };
      })
    );
    setName(board.name);
    setIsFistLoad(false);
  }
  const [isValid, setisValid] = useState(true);
  const dispatch = useDispatch();
  const onChange = (id, newValue) => {
    setNewColumns((pervState) => {
      const newState = [...pervState];
      const column = newState.find((col) => col.id === id);
      column.name = newValue;
      return newState;
    });
  };

  const onDelete = (id) => {
    setNewColumns((pervState) => pervState.filter((el) => el.id !== id));
  };
  const validate = () => {
    setisValid(false);
    if (!name.trim()) {
      return false;
    }
    for (let i = 0; i < newColumns.length; i++) {
      if (!newColumns[i].name.trim()) {
        return false;
      }
    }
    setisValid(true);
    return true;
  };
  const onSubmit = () => {
    setboardModalOpen(false);
    if (type === "add") {
      dispatch(boardSlice.actions.addBoard({ name, newColumns }));
    } else {
      dispatch(boardSlice.actions.editBoard({ name, newColumns }));
    }
  };
  return (
    <div
      className="fixed right-0 left-0 bottom-0 top-0 px-2 scrollbar-hide py-4 overflow-scroll z-50 justify-center items-center flex bg-[#00000080]"
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setboardModalOpen(false);
      }}
    >
      {/* modal section */}
      <div
        className="scrollbar-hide overflow-y-scroll max-h-[95vh] bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e71a]
       max-w-md mw-auto w-full px-8 py-8 rounded-xl"
      >
        <h3 className="text-lg">
          {type === "edit" ? "Edit" : "Add New"} Board
        </h3>
        {/* task name  */}

        <div className="mt-8 flex flex-col space-y-3">
          <label className="text-sm dark:text-white text-gray-500">
            Board Columns
          </label>
          <input
            className="bg-transparent px-4 py-2 rounded-md text-sm border border-gray-600 outline-none focus:outline-[#635fc7]  ring-0"
            placeholder=" e.g Web Desing"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="border-name-input"
          />
        </div>
        {/* board columns */}
        <div className="mt-8 flex flex-col space-y-3 ">
          <label className="text-sm dark:text-white text-gray-500">
            Board Columns
          </label>
          {newColumns.map((column, index) => (
            <div className="flex items-center w-full" key={index}>
              <input
                className="bg-transparent flex-grow px-4 py-2 rounded-md text-sm border border-gray-600 outline-none focus:outline-[#735fc7] "
                onChange={(e) => {
                  onChange(column.id, e.target.value);
                }}
                type="text"
                value={column.name}
              />
              <img
                src={cancelIcon}
                alt=""
                className=" cursor-pointer m-4"
                onClick={() => {
                  onDelete(column.id);
                }}
              />
            </div>
          ))}
        </div>
        <div>
          <button
            className="w-full items-center hover:opacity-75 dark:text-[#635fc7] dark:bg-white text-white bg-[#635fc7] py-2 rounded-full mt-2"
            onClick={() => {
              setNewColumns((state) => [
                ...state,
                { name: "", task: [], id: uuidv4() },
              ]);
            }}
          >
            + Add New Column
          </button>
          <button
            className="w-full items-center hover:opacity-75 dark:text-white dark:bg-[#635fc7] mt-8 relative text-white bg-[#635fc7] py-2 rounded-full"
            onClick={() => {
              const isValid = validate();
              if (isValid === true) onSubmit(type);
            }}
          >
            {type === "add" ? "Creat New Board" : " Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
