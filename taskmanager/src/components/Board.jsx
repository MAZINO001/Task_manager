import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import styles from "../styles/Board.module.css";
export default function Board() {
  return (
    <div>
      <h3>
        <span>
          <BsReverseLayoutTextSidebarReverse />
        </span>
        <span className={styles.span}>
        </span>
      </h3>
    </div>
  );
}
