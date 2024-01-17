import React from "react";

export default function DeleteModal({
  type,
  title,
  onDeleteBtnClick,
  setIsDeleteModalOpen,
}) {
  return (
    // modal container
    <div
      className="fixed right-0 bottom-0 left-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide items-center justify-center flex bg-[#00000080]"
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setIsDeleteModalOpen(false);
      }}
    >
      {/* delete modal  */}
      <div className="scrollbar-hide overflow-y-scroll max-h-[95vh]  max-w-md my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white w-full px-8 py-8 rounded-xl">
        <h3 className="font-bold text-red-500 text-xl">Delete this {type}</h3>
        {type === "task" ? (
          <p className="text-gray-500 font-semibold tracking-wide text-sm pt-6">
            Are you sure you want to delete the "{title}" task and its subtasks?
            This action cannot be reversed.
          </p>
        ) : (
          <p className="text-gray-500 font-semibold tracking-wide text-sm pt-6">
            Are you sure you want to delete the "{title}" board? This action
            will remove all columns and tasks and cannot be reversed.
          </p>
        )}
        <div className=" flex w-full mt-4 items-center justify-center space-x-4">
          <button className="w-full mt-4 items-center text-white hover:opacity-75 bg-red-500 py-2 rounded-full"
            onClick={onDeleteBtnClick}
          >
            Delete
          </button>
          <button
            className="w-full mt-4 items-center text-[#635fc7] hover:opacity-75 bg-[#635fc71a] py-2 rounded-full"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
