import React, { useState, useEffect, useRef, useContext } from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/SideBar.module.css";
import Board from "./Board";
import Theme from "./Theme";
import AddBoard from "./AddBoard";
import { WrapperContext } from "../context/WrapperContext";
/*testing */
import { SideBareContext } from "../context/SideBareContext";
/*testing */

export default function SideBar() {
  const { toggleSideBra } = useContext(WrapperContext);
  const [isAddTaskFormShown, setIsAddTaskFormShown] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [boardCount, setBoardCount] = useState(0);
  const [boardsInfo, setBoardsInfo] = useState([]);
  const addTaskFormRef = useRef();
  const boards = Array.from({ length: boardCount }, (v, i) => i);
  /*testing part*/
  const [columns, setColumns] = useState([]);
  const [name, setName] = useState("");
  const [column, setColumn] = useState("");
  /*testing part*/

  function handleForm() {
    setIsAddTaskFormShown(!isAddTaskFormShown);
  }

  const handleSideBarClose = () => {
    setIsSidebarVisible(false);
  };

  const handleSideBarOpen = () => {
    setIsSidebarVisible(true);
  };

  useEffect(() => {
    function handleClickOutside({ target }) {
      if (addTaskFormRef.current && !addTaskFormRef.current.contains(target)) {
        setIsAddTaskFormShown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addBoard = (boardInfo) => {
    setBoardsInfo([...boardsInfo, boardInfo]);
    setBoardCount(boardCount + 1);
  };

  const handleClose = () => {
    toggleSideBra();
  };
  const handleButtonClick1 = () => {
    handleSideBarClose();
    handleClose();
  };
  const handleButtonClick2 = () => {
    handleSideBarOpen();
    handleClose();
  };
  return (
    <div
      className={`${styles.container} ${isSidebarVisible ? "" : styles.show}`}
    >
      <div className={styles.content}>
        <h3>
          all boards <span>({boardCount})</span>
        </h3>
        <div className={styles.boards}>
          {boardsInfo.map((board, index) => (
            <SideBareContext.Provider
              key={index}
              value={{ name: board.name, column: board.column , index }}
            >
              <Board key={index} />
            </SideBareContext.Provider>
          ))}
        </div>
        <button onClick={handleForm} className={styles.addBoardBtn}>
          <span>
            <BsReverseLayoutTextSidebarReverse />
          </span>
          <AiOutlinePlus /> create new board
        </button>
        {isAddTaskFormShown && (
          <div ref={addTaskFormRef}>
            <SideBareContext.Provider
              value={{
                addBoard,
                columns,
                setColumns,
                name,
                setName,
                column,
                setColumn,
              }}
            >
              <AddBoard addBoard={addBoard} />
            </SideBareContext.Provider>
          </div>
        )}
      </div>
      <div className={styles.toggle}>
        <h2>
          <BsFillMoonStarsFill />
        </h2>
        <span>
          <Theme />
        </span>
        <h2>
          <BsFillSunFill />
        </h2>
      </div>
      <div className={styles.hide}>
        <button onClick={handleButtonClick1}>
          <BsEyeSlashFill />
          hide sideBar
        </button>
        <span
          onClick={handleButtonClick2}
          className={`${styles.close} ${
            isSidebarVisible ? styles.hideClose : ""
          }`}
        >
          <BsFillEyeFill />
        </span>
      </div>
    </div>
  );
}
