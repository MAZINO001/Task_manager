import React from "react";
import { LuPlus } from "react-icons/lu";
import style from "../styles/AddColumn.module.css";

export default function AddColumn() {
  return (
    <div className={style.container}>
      <button>
        <LuPlus />
        Add new column
      </button>
    </div>
  );
}
