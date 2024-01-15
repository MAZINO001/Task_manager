import React from "react";
import { useState } from "react";
export default function AddEditBoardModal({ setboardModalOpen, type }) {
  const [name, setName] = useState("");
  const [newColumn, setNewColumn] = useState(
    [
        {name : 'Todo' , task : [] , id : ''},
        {name : 'Todo' , task : [] , id : ''}
    ]
  );
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
            className="bg-transparent px-4 py-2 rounded-md text-sm border border-gray-600 outline-none focus:outline-[#635fc7] outline-1 ring-0"
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
          {}
        </div>
      </div>
    </div>
  );
}
