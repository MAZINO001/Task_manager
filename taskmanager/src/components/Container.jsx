import styles from "../styles/Container.module.css";
import AddColumn from "./AddColumn";
import TaskContainer from "./TaskContainer";

export default function Container() {
  return (
    <div className={styles.container}>
      {columns.map((column) => (
        <TaskContainer />
      ))}
      <AddColumn />
    </div>
  );
}
