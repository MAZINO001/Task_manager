import { AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/AddBoard.module.css";
import React, { useContext } from "react";
import { SideBareContext } from "../context/SideBareContext";

export default function AddBoard() {
  const { setColumns, setName, addBoard, columns, name, setColumn, column } =
    useContext(SideBareContext);

  function addColumn(e) {
    e.preventDefault();
    const newColumn = (
      <div key={columns.length}>
        <label htmlFor={`column-${columns.length}`}></label>
        <input type="text" id={`column-${columns.length}`} />
      </div>
    );
    setColumns([...columns, newColumn]);
  }

  function handleNameChange(e) {
    setName(e.target.value);
    
  }

  function handleColumnChange(e) {
    setColumn(e.target.value);
  }

  function handleAddColumn(e) {
    e.preventDefault();
    addColumn(e);
  }

  function handleCreateBoard(e) {
    e.preventDefault();
    addBoard({ name, column, columns }); // Pass board data to the addBoard function
    setName(""); // Clear the name field after creating a board
    setColumn(""); // Clear the column field after creating a board
    setColumns([]);
  }

  return (
    <div className={styles.container}>
      <h4>add a new board</h4>
      <form>
        <label htmlFor="name">Name</label>
        <input value={name} onChange={handleNameChange} type="text" />
        <label htmlFor="columns">Column</label>
        <input value={column} onChange={handleColumnChange} type="text" />
        {columns}
        <button className={styles.addbtn} onClick={handleAddColumn}>
          <span>
            <AiOutlinePlus />
          </span>
          add a new column
        </button>
        <button className={styles.createbtn} onClick={handleCreateBoard}>
          create a new board
        </button>
      </form>
    </div>
  );
}
