import styles from "./ProductoDetalle.module.css";
import { useParams } from "react-router-dom";
// import remera from "../Assets/photo-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function ProductoDetalle() {
  const { id } = useParams(); // Obtenemos el _id del producto desde la URL

  // Fetch a la base de datos
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        // La propiedad 'data.products' contiene el array de productos
        setProducts(data.data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Buscamos el producto correspondiente por el _id
  const productoDetalle = products.find((product) => product._id === id);

  // Si el producto no se encuentra, puedes mostrar un mensaje de "Producto no encontrado"
  if (!productoDetalle) {
    return <div>Producto no encontrado</div>;
  }

  // Dirección de la imagen
  const imageUrl = `/assets/${productoDetalle.imageCover}`;

  return (
    <div className={styles["product-detail"]}>
      <div className={styles["product-detail--photo"]}>
        <img
          src={imageUrl}
          alt={`Foto de la remera: ${productoDetalle.name}`}
        />
        <button className={styles["product-detail--button_left"]}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={styles["product-detail--button_right"]}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className={styles["product-detail--info"]}>
        <div className={styles["product-detail--trace"]}>
          <a href="/">Inicio</a>
          <span>/</span>
          <a href="/">Remeras</a>
        </div>
        <h2 className={styles["product-detail--title"]}>
          {productoDetalle.name}
        </h2>
        <div className={styles["product-detail--pricequantity"]}>
          <p className={styles["product-detail--price"]}>
            ${productoDetalle.price}
          </p>
          <div className={styles["product-detail--quantity"]}>
            <p>1</p>
            <div>
              <FontAwesomeIcon icon={faChevronUp} />
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
        <div className={styles["product-detail--sizes"]}>
          <p>XS</p>
          <p>S</p>
          <p>M</p>
          <p>L</p>
          <p>XL</p>
        </div>
        <div className={styles["product-detail--guide"]}>
          Guía de Talle <span>i</span>
        </div>
        <button className={styles["product-info--button_agregar"]}>
          Agregar al Carrito
        </button>
        <button className={styles["product-info--button_seguir"]}>
          Seguir Comprando
        </button>
      </div>
    </div>
  );
}

export default ProductoDetalle;
