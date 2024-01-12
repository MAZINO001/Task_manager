import React, { useContext, useState } from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import styles from "../styles/Board.module.css";
import { SideBareContext } from "../context/SideBareContext";

export default function Board() {
  const { column, name, index } = useContext(SideBareContext);
  const [clickedIndex, setClickedIndex] = useState(null);

  function handleClick() {
    console.log("Clicked board index:", index);
    setClickedIndex(index === clickedIndex ? null : index);
  }

  return (
    <div
      id={`board-${index}`}
      className={`${styles.board} ${
        clickedIndex === index ? styles.clickedBoard : styles.board
      }`}
      onClick={handleClick}
    >
      <h3>
        <span>
          <BsReverseLayoutTextSidebarReverse />
        </span>
        <span className={styles.span}>
          {name}, {column}
        </span>
      </h3>
    </div>
  );
}
