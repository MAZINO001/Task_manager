import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import cancel from "../Assets/icon-cross.svg";
export default function AddEditBoardModal({ setboardModalOpen, type }) {
  const [name, setName] = useState("");
  const [newColumns, setNewColumns] = useState([
    { name: "Todo", task: [], id: uuidv4() },
    { name: "Doing", task: [], id: uuidv4() },
  ]);

  const onChange = (id, newValue) => {
    setNewColumns((pervState) => {
      const newState = [...pervState];
      const column = newState.find((col) => col.id === id);
      column.name = newValue;
      return newState;
    });
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
          <label className="text-sm dar:text-white text-gray-500">
            Board Columns
          </label>
          {newColumns.map((column, index) => (
            <div className="flex items-center w-full" key={index}>
              <input
                className="bg-transparent flex-grow px-4 py-2 rounded-md text-sm border border-gray-600 outline-none focus:outline-[#735fc7]"
                onChange={(e) => {
                  onChange(column.id, e.target.value);
                }}
                type="text"
                value={column.name}
              />
              <img src={cancel} alt="" className="ml-2 w-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
