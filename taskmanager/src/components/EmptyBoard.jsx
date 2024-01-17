import React, { useState } from "react";
import AddEditBoardModal from "../Modals/AddEditBoardModal";

export default function EmptyBoard({ type }) {
  const [isBoardModalOpen, setisBoardModalOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-[#2b2c37] h-screen w-screen flex flex-col items-center justify-center">
      <h3 className="text-gray-500 text-bold">
        {type === "edit"
          ? "This is empty. Create a new column to get started"
          : "There are no boards available. Create a new board to get started"}
      </h3>

      <button
        className="w-full items-center max-w-xs font-bold hover:opacity-70 dark:text-white dark:bg-[#365fc7] mt-8 relative text-white bg-[#365fc7] py-2 rounded-full"
        onClick={() => {
          setisBoardModalOpen(true);
        }}
      >
        {type === "edit" ? "+ Add New Coumn" : " + Add New Board"}
      </button>
      {isBoardModalOpen && (
        <AddEditBoardModal
          type={type}
          setboardModalOpen={setisBoardModalOpen}
        />
      )}
    </div>
  );
}
