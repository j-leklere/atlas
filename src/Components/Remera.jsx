import styles from "./Remera.module.css";
import { Link } from "react-router-dom";
// import remera from "../Assets/photo-1.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";

function Remeras({ _id, name, price, imageCover }) {
  const imageUrl = `/assets/${imageCover}`;

  return (
    <div className={styles["remera"]}>
      <div className={styles["remera-photo"]}>
        <img src={imageUrl} alt={`Foto de la remera: ${name}`} />
        {/* <button className={styles["remera-button-left"]}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={styles["remera-button-right"]}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button> */}
      </div>
      <div className={styles["remera-info"]}>
        <p>{name}</p>
        <p>${price}</p>
      </div>
      <div className={styles["categories"]}>
        <span className={`${styles.tag} ${styles["tag--remera"]}`}>Remera</span>
        <span className={`${styles.tag} ${styles["tag--oversize"]}`}>
          Oversize
        </span>
      </div>
      <div className={styles["remera-button"]}>
        <Link to={`/productoDetalle/${_id}`}>Ver más</Link>
      </div>
    </div>
  );
}

export default Remeras;
