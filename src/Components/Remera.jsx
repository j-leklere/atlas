import styles from "./Remera.module.css";
import remera from "../Assets/photo-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Remeras() {
  return (
    <div className={styles["remera"]}>
      <div className={styles["remera-photo"]}>
        <img src={remera} alt="" />
        <button className={styles["remera-button-left"]}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={styles["remera-button-right"]}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className={styles["remera-info"]}>
        <p>Remera Negra Hombre</p>
        <p>$4.700</p>
      </div>
      <div className={styles["remera-button"]}>
        <a href="/">
          <button>Comprar</button>
        </a>
      </div>
    </div>
  );
}

export default Remeras;
