// Container.js
import React, { useContext, useState } from "react";
import styles from "../styles/Container.module.css";
import AddColumn from "./AddColumn";
import TaskContainer from "./TaskContainer";
import { WrapperContext } from "../context/WrapperContext";

export default function Container() {
  const { isopen } = useContext(WrapperContext);
  const containerClass = isopen ? styles.containerOpen : styles.containerClosed;

  const [columns, setColumns] = useState([
    {
      id: 1,
      title: "Todo",
      tasks: [],
    },
  ]);

  const addColumn = () => {
    const uniqueId = new Date().getTime();
    const newColumn = {
      id: uniqueId,
      title: `TODO ${uniqueId}`,
      tasks: [],
    };

    setColumns((prevColumns) => [...prevColumns, newColumn]);
  };

  const addTaskToColumn = (columnId, task) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, tasks: [...column.tasks, task] }
          : column
      )
    );
  };

  return (
    <div className={containerClass}>
      {columns.map((column) => (
        <TaskContainer
          key={column.id}
          id={column.id}
          title={column.title}
          tasks={column.tasks}
          addTaskToColumn={(task) => addTaskToColumn(column.id, task)}
        />
      ))}
      <AddColumn onAddColumn={addColumn} />
    </div>
  );
}
