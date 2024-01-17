import logo from "../Assets/logo-mobile.svg";
import { useState } from "react";
import iconUp from "../Assets/icon-chevron-up.svg";
import iconDown from "../Assets/icon-chevron-down.svg";
import elipsis from "../Assets/icon-vertical-ellipsis.svg";
import HeaderDropDown from "./HeaderDropDown";
import AddEditBoardModal from "../Modals/AddEditBoardModal";
import { useDispatch, useSelector } from "react-redux";
import AddEditTastModal from "../Modals/AddEditTastModal";
import ElipsesMenu from "./ElipsesMenu";
import DeleteModal from "../Modals/DeleteModal";
import boardsSlice from "../Redux/boardsSlice";

export default function Header({ boardModalOpen, setboardModalOpen }) {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [OpenEditTask, setOpenEditTask] = useState(false);
  const [openDropDown, setopenDropDown] = useState(false);
  const [IsElipsisOpen, setIsElipsisOpen] = useState(false);

  const [boardType, setBoardType] = useState("add");
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive);

  const setOpenEditModal = () => {
    setboardModalOpen(true);
    setIsElipsisOpen(false);
  };
  const setOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
    setIsElipsisOpen(false);
  };
  const onDeleteBtnClick = () => {
    dispatch(boardsSlice.actions.deleteBoard());
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));
    setIsDeleteModalOpen(false);
  };
  const onDropDownClick = () => {
    setopenDropDown((state) => !state);
    setIsElipsisOpen(false);
    setBoardType("add");
  };
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
              onClick={onDropDownClick}
            />
          </div>
        </div>

        {/* right side */}
        <div className="flex space-x-4 items-center md:space-x-6">
          <button
            className="button hidden md:block"
            onClick={() => {
              setOpenEditTask((state) => !state);
            }}
          >
            + Add New Task
          </button>
          <button
            className="button py-1 px-3 md:hidden"
            onClick={() => {
              setOpenEditTask((state) => !state);
            }}
          >
            +
          </button>
          <img
            src={elipsis}
            alt="elipsis"
            onClick={() => {
              setBoardType("edit");
              setopenDropDown(false);
              setIsElipsisOpen((state) => !state);
            }}
            className=" cursor-pointer h-6"
          />
          {IsElipsisOpen && (
            <ElipsesMenu
              type="Boards"
              setOpenDeleteModal={setOpenDeleteModal}
              setOpenEditModal={setOpenEditModal}
            />
          )}
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
        <AddEditTastModal
          device="mobile"
          type="add"
          setOpenEditTask={setOpenEditTask}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          onDeleteBtnClick={onDeleteBtnClick}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          title={board.name}
          type="board"
        />
      )}
    </div>
  );
}
