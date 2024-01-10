import React, { useContext, useState } from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import styles from "../styles/Board.module.css";
import { SideBareContext } from "../context/SideBareContext";

export default function Board() {
  const { column, name, index } = useContext(SideBareContext);
  const [Clicked, setClicked] = useState(false);

  function handleClick() {
    console.log("Clicked board index:", index);
    setClicked(!Clicked)
  }

  return (
    <div
      className={`${styles.board} ${Clicked ? styles.clickedBoard : ""}`}
      onClick={handleClick}
    >
      <h3>
        <span>
          <BsReverseLayoutTextSidebarReverse />
        </span>
        <span className={styles.span}>
          {name},{column}
        </span>
      </h3>
    </div>
  );
}
