import styles from "./Destacados.module.css";
import featured1 from "../Assets/featured-1.jpg";
import featured2 from "../Assets/featured-2.jpg";
import featured3 from "../Assets/featured-3.jpg";
import featured4 from "../Assets/featured-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Destacados() {
  return (
    <section className={styles["section-featured"]}>
      <h2 className={styles["featured-title"]}>Productos Destacados</h2>
      <div className={styles["featured-products"]}>
        <div className={styles["featured-product"]}>
          <div className={styles["featured-product--photo"]}>
            <img src={featured1} alt="" />
            <button>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
          <div className={styles["featured-product--info"]}>
            <p>Remera Blanca Mujer</p>
            <p>$4.700</p>
          </div>
        </div>
        <div className={styles["featured-product"]}>
          <div className={styles["featured-product--photo"]}>
            <img src={featured2} alt="" />
            <button>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
          <div className={styles["featured-product--info"]}>
            <p>Remera Negra Hombre</p>
            <p>$4.500</p>
          </div>
        </div>
        <div className={styles["featured-product"]}>
          <div className={styles["featured-product--photo"]}>
            <img src={featured3} alt="" />
            <button>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
          <div className={styles["featured-product--info"]}>
            <p>Remera Negra Mujer</p>
            <p>$4.900</p>
          </div>
        </div>
        <div className={styles["featured-product"]}>
          <div className={styles["featured-product--photo"]}>
            <img src={featured4} alt="" />
            <button>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
          <div className={styles["featured-product--info"]}>
            <p>Remera Beige Hombre</p>
            <p>$4.500</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destacados;
