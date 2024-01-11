import React from "react";
import { LuPlus } from "react-icons/lu";
import style from "../styles/AddColumn.module.css";

export default function AddColumn({ onAddColumn, uniqueId }) {
  return (
    <div className={style.container}>
      <button onClick={() => onAddColumn(uniqueId)}>
        {" "}
        <LuPlus />
        Add new column
      </button>
    </div>
  );
}
