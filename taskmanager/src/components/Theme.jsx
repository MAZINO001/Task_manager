import styles from "../styles/Theme.module.css";
export default function Theme() {
  return (
    <div className={styles.toggleWrapper}>
      <input type="checkbox" className={styles.dn} id="dn" />
      <label htmlFor="dn" className={styles.toggle}>
        <span className={styles.toggle__handler}>
          <span className={styles.craterCrater1}></span>
          <span className={styles.craterCrater2}></span>
          <span className={styles.craterCrater3}></span>
        </span>
        <span className={styles.starStart1}></span>
        <span className={styles.starStart2}></span>
        <span className={styles.starStart3}></span>
        <span className={styles.starStart4}></span>
        <span className={styles.starStart5}></span>
        <span className={styles.starStart6}></span>
      </label>
    </div>
  );
}
