import { AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/AddBoard.module.css";
export default function AddBoard() {
  return (
    <div className={styles.container}>
      <h4>add a new board</h4>
      <form>
        <label htmlFor="name">Name</label>
        <input value={""} type="text" />
        <label htmlFor="columns">Column</label>
        <input value={""}  type="text" />
        {columns}
        <button className={styles.addbtn} >
          <span>
            <AiOutlinePlus />
          </span>
          add a new column
        </button>
        <button className={styles.createbtn} >
          create a new board
        </button>
      </form>
    </div>
  );
}
