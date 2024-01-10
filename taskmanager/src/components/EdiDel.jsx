import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import styles from "../styles/EdiDel.module.css";
export default function EdiDel() {
  function editBoard() {
    console.log("edited");
  }
  function deleteBoard() {
    console.log("deleted");
  }
  return (
    <div className={styles.container}>
      <button className={styles.edit} onClick={editBoard}>
        <span>
          <AiOutlineDelete />
        </span>
        Edit Board
      </button>
      <button className={styles.delet} onClick={deleteBoard}>
        <span>
          <AiOutlineEdit />
        </span>
        delet Board{" "}
      </button>
    </div>
  );
}
