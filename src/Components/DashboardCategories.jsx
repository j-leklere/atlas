import styles from "./DashboardCategories.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function DashboardCategories({ products }) {
  const calculateTotalValue = () => {
    let totalValue = 0;
    products.forEach((product) => {
      totalValue += product.stock * product.price;
    });
    return totalValue;
  };
  const calculateTotalCategoryStock = (category) => {
    let totalValue = 0;
    products.forEach((product) => {
      if (product.category === category) {
        totalValue += product.stock;
      }
    });
    return totalValue;
  };
  const calculateTotalCategoryValue = (category) => {
    let totalValue = 0;
    products.forEach((product) => {
      if (product.category === category) {
        totalValue += product.stock * product.price;
      }
    });
    return totalValue;
  };

  const totalStockPrice = calculateTotalValue();

  const totalRemerasStock = calculateTotalCategoryStock("Remeras");
  const totalBuzosStock = calculateTotalCategoryStock("Buzos");
  const totalCamperasStock = calculateTotalCategoryStock("Camperas");
  const totalPantalonesStock = calculateTotalCategoryStock("Pantalones");

  const totalRemerasPrice = calculateTotalCategoryValue("Remeras");
  const totalBuzosPrice = calculateTotalCategoryValue("Buzos");
  const totalCamperasPrice = calculateTotalCategoryValue("Camperas");
  const totalPantalonesPrice = calculateTotalCategoryValue("Pantalones");

  return (
    <div className={styles["container"]}>
      <h2>
        <FontAwesomeIcon className={styles["icon"]} icon={faBarsStaggered} />
        Categorías
      </h2>
      <div className={styles["categories"]}>
        <div className={styles["remeras"]}>
          <h3>Remeras</h3>
          <div>
            <p>{totalRemerasStock}</p>
            <p>${totalRemerasPrice}</p>
            <p>% {((totalRemerasPrice / totalStockPrice) * 100).toFixed(2)}</p>
          </div>
        </div>
        <div className={styles["buzos"]}>
          <h3>Buzos</h3>
          <div>
            <p>{totalBuzosStock}</p>
            <p>${totalBuzosPrice}</p>
            <p>% {((totalBuzosPrice / totalStockPrice) * 100).toFixed(2)}</p>
          </div>
        </div>
        <div className={styles["camperas"]}>
          <h3>Camperas</h3>
          <div>
            <p>{totalCamperasStock}</p>
            <p>${totalCamperasPrice}</p>
            <p>% {((totalCamperasPrice / totalStockPrice) * 100).toFixed(2)}</p>
          </div>
        </div>
        <div className={styles["pantalones"]}>
          <h3>Pantalones</h3>
          <div>
            <p>{totalPantalonesStock}</p>
            <p>${totalPantalonesPrice}</p>
            <p>
              % {((totalPantalonesPrice / totalStockPrice) * 100).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCategories;
