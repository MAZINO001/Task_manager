import logo from "../Assets/logo-mobile.svg";
import { useState } from "react";
import iconUp from "../Assets/icon-chevron-up.svg";
import iconDown from "../Assets/icon-chevron-down.svg";
import elipsis from "../Assets/icon-vertical-ellipsis.svg";
import HeaderDropDown from "./HeaderDropDown";
import AddEditBoardModal from "../Modals/AddEditBoardModal";
import { useDispatch, useSelector } from "react-redux";
import AddEditTastModal from "../Modals/AddEditTastModal";
export default function Header({ boardModalOpen, setboardModalOpen }) {
  const dispatch = useDispatch();
  const [OpenEditTask, setOpenEditTask] = useState(false);
  const [openDropDown, setopenDropDown] = useState(false);
  const [boardType, setBoardType] = useState("add");
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive);
  return (
    <div className=" p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0">
      <header className="flex justify-between dark:text-white items-center">
        {/* left side */}

        <div className="flex items-center space-x-2 md:space-x-4">
          <img src={logo} alt="logo" className="h-6 w-6 " />
          <h3 className=" hidden md:inline-block  font-bold  font-sans md:text-4xl">
            Nimbus
          </h3>
          <div className=" flex items-center">
            <h3 className=" truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans ">
              {board.name}
            </h3>
            <img
              src={openDropDown ? iconUp : iconDown}
              alt="dropdown icon"
              className="w-3 ml-2 md:hidden cursor-pointer"
              onClick={() => setopenDropDown(!openDropDown)}
            />
          </div>
        </div>

        {/* right side */}
        <div className="flex space-x-4 items-center md:space-x-6">
          <button className="button hidden md:block">+ Add New Task</button>
          <button
            className="button py-1 px-3 md:hidden"
            onClick={() => {
              setOpenEditTask((state) => !state);
            }}
          >
            +
          </button>
          <img src={elipsis} alt="elipsis" className=" cursor-pointer h-6" />
        </div>
      </header>
      {openDropDown && (
        <HeaderDropDown
          setboardModalOpen={setboardModalOpen}
          setopenDropDown={setopenDropDown}
        />
      )}
      {boardModalOpen && (
        <AddEditBoardModal
          type={boardType}
          setboardModalOpen={setboardModalOpen}
        />
      )}
      {OpenEditTask && (
        <AddEditTastModal device="mobile" setOpenEditTask={setOpenEditTask} />
      )}
    </div>
  );
}
