import { useDispatch, useSelector } from "react-redux";
import boardIcon from "../Assets/icon-board.svg";
import lightIcon from "../Assets/icon-light-theme.svg";
import DarkIcon from "../Assets/icon-dark-theme.svg";
import { Switch } from "@headlessui/react";
import UseDarkMode from "../Hooks/UseDarkMode";
import { useState } from "react";
import boardsSlice from "../Redux/boardsSlice";
export default function HeaderDropDown({ setopenDropDown, setboardModalOpen }) {
  const dispatch = useDispatch();
  const [colorTheme, setTheme] = UseDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "Light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  const boards = useSelector((state) => state.boards);

  return (
    <div
      className="py-10 px-6 absolute left-0  right-0 bottom-[-100vh] top-16 bg-[#00000080]"
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setopenDropDown(false);
      }}
    >
      {/* dropdown Modal */}
      <div className="bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e7e1a] w-full py-4 rounded-xl">
        <h3 className="dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8">
          All boards ({boards?.length})
        </h3>
        <div>
          {boards.map((board, index) => (
            <div
              className={`flex items-baseline  dark:text-white space-x-2 px-5 py-4 ${
                board.isActive && "bg-[#635fc7] rounded-r-full text-white mr-8"
              }`}
              key={index}
              onClick={() => {
                dispatch(boardsSlice.actions.setBoardActive({ index }));
              }}
            >
              <img src={boardIcon} alt="boardIcon" className="h-4" />
              <p className="text-lg font-bold">{board.name}</p>
            </div>
          ))}
          <div
            className=" cursor-pointer  flex items-center space-x-2 text-[#635fc7] px-5 py-4"
            onClick={() => {
              setboardModalOpen(true);
              setopenDropDown(false);
            }}
          >
            <img src={boardIcon} alt="" />
            <p className="text-lg font-bold">Creat New Board</p>
          </div>
          <div className="mx-2 p-2 space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg">
            <img src={lightIcon} alt="" />
            <Switch
              checked={darkSide}
              onChange={toggleDarkMode}
              className={`${
                darkSide ? "bg-[#635fc7]" : "bg-gray-200"
              }  relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${darkSide ? " translate-x-6" : " translate-x-1"}
                inline-block h-4 w-4 transfrom rounded-full bg-white transition 
                `}
              ></span>
            </Switch>
            <img src={DarkIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
