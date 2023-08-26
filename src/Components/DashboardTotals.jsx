import styles from "./DashboardTotals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faArrowCircleLeft,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DashboardTotals({ products }) {
  const calculateTotalStock = () => {
    let totalValue = 0;
    products.forEach((product) => {
      totalValue += product.stock;
    });
    return totalValue;
  };
  const calculateTotalBuyValue = () => {
    let totalValue = 0;
    products.forEach((product) => {
      totalValue += product.stock * product.priceOriginal;
    });
    return totalValue;
  };
  const calculateTotalSaleValue = () => {
    let totalValue = 0;
    products.forEach((product) => {
      totalValue += product.stock * product.price;
    });
    return totalValue;
  };

  const totalStock = calculateTotalStock();
  const totalStockBuyPrice = calculateTotalBuyValue();
  const totalStockSalePrice = calculateTotalSaleValue();

  return (
    <div className={styles["container"]}>
      <div className={styles["subcontainer"]}>
        <h2>
          <FontAwesomeIcon className={styles["icon"]} icon={faChartSimple} />{" "}
          Estadísticas Generales
        </h2>
        <div>
          <button>
            Dólares
            <FontAwesomeIcon className={styles["icon"]} icon={faToggleOff} />
            {/* <FontAwesomeIcon className={styles['icon']} icon={faToggleOn /> */}
          </button>
        </div>
      </div>
      <div className={styles["stats"]}>
        <div className={styles["stat"]}>
          <h3>Total Productos</h3>
          <p>{products.length}</p>
        </div>
        <div className={styles["stat"]}>
          <h3>Total Stock</h3>
          <p>{totalStock}</p>
        </div>
        <div className={styles["stat"]}>
          <h3>Valor Stock (compra)</h3>
          <p>
            ${totalStockBuyPrice}
            {/* - USD${(totalStockBuyPrice / 550).toFixed(2)} */}
          </p>
        </div>
        <div className={styles["stat"]}>
          <h3>Valor Stock (venta) </h3>
          <p>
            ${totalStockSalePrice}
            {/* - USD$
            {(totalStockSalePrice / 550).toFixed(2)} */}
          </p>
        </div>
        <div className={styles["stat"]}>
          <h3>Margen Total</h3>
          <p>${totalStockSalePrice - totalStockBuyPrice}</p>
        </div>
      </div>
      <Link to="/admins-login">
        <FontAwesomeIcon
          className={styles["return"]}
          icon={faArrowCircleLeft}
        />
      </Link>
    </div>
  );
}

export default DashboardTotals;
