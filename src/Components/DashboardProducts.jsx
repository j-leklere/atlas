import styles from "./DashboardProducts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

function DashboardProducts({ products }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["subcontainer"]}>
        <h2>
          <FontAwesomeIcon className={styles["icon"]} icon={faLayerGroup} />
          Products
        </h2>
        <div>
          <button>Remeras</button>
          <button>Buzos</button>
          <button>Camperas</button>
          <button>Pantalones</button>
        </div>
      </div>
      <div className={styles["products"]}>
        {products.map((product) => (
          <div className={styles["product-info"]} key={product._id}>
            {/* <img src={`/assets/${product.imageCover}`} alt="" /> */}
            <h3 className={styles["title"]}>{product.name}</h3>
            <p className={styles["price"]}>Precio: ${product.price}</p>
            <p className={styles["price"]}>
              Precio Original en USD:{" "}
              {(product.priceOriginal / product.dolarAtBuy).toFixed(2)}
            </p>
            <p className={styles["price"]}>
              Precio actual sin margen a valor USD (730):
              {((product.priceOriginal / product.dolarAtBuy) * 730).toFixed(2)}
            </p>
            <p className={styles["price"]}>
              Precio actual con margen a valor USD (730):
              {(
                (product.priceOriginal / product.dolarAtBuy) *
                730 *
                1.25
              ).toFixed(2)}
            </p>
            <p className={styles["stock"]}>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardProducts;
