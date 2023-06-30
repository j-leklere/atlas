import styles from "./Remeras.module.css";
import Remera from "./Remera";

function Remeras() {
  return (
    <section className={styles["section-remeras"]}>
      <h2 className={styles["remeras-title"]}>Remeras</h2>
      <div className={styles["remeras-products"]}>
        <Remera />
        <Remera />
        <Remera />
        <Remera />
      </div>
      <div className={styles["remeras-products"]}>
        <Remera />
        <Remera />
        <Remera />
        <Remera />
      </div>
    </section>
  );
}

export default Remeras;
