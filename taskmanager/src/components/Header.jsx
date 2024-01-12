import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/Header.module.css";
import logo from "../assets/images/logo.png";
import AddTask from "./AddTask";
import EdiDel from "./EdiDel";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isAddBoardFormShown, setIsAddBoardFormShown] = useState(false);
  const [isAddContolShown, setIsAddContolShown] = useState(false);
  const addBoardFormRef = useRef();
  const editDeletRef = useRef();

  function handleForm() {
    setIsAddBoardFormShown(!isAddBoardFormShown);
  }

  function handleEdiDel() {
    setIsAddContolShown(!isAddContolShown);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        addBoardFormRef.current &&
        !addBoardFormRef.current.contains(event.target)
      ) {
        setIsAddBoardFormShown(false);
      }
      if (
        editDeletRef.current &&
        !editDeletRef.current.contains(event.target)
      ) {
        setIsAddContolShown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <h3>Nimbus-Task</h3>
      </div>
      <div className={styles.controls}>
        <button onClick={handleForm}>
          <span>
            <AiOutlinePlus />
          </span>{" "}
          add new task
        </button>
        <h3 onClick={handleEdiDel}>
          <BsThreeDotsVertical />
        </h3>
        {isAddBoardFormShown && (
          <div ref={addBoardFormRef}>
            <AddTask />
          </div>
        )}
        {isAddContolShown && (
          <div ref={editDeletRef}>
            <EdiDel />
          </div>
        )}
      </div>
    </div>
  );
}
