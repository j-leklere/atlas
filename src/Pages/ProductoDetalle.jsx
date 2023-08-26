import styles from "./ProductoDetalle.module.css";
import { Link, useParams } from "react-router-dom";
// import remera from "../Assets/photo-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
// import { initMercadoPago } from "@mercadopago/sdk-react";
// initMercadoPago("TEST-88b1769f-737f-4951-85f3-43e465133e7e");

function ProductoDetalle() {
  const { id } = useParams(); // Obtenemos el _id del producto desde la URL

  // Fetch a la base de datos
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(1);

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

  const handleIncrement = () => {
    // Sumar 1 a productQuantity
    setProductQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    // Restar 1 a productQuantity, asegurándose de que no sea menor que 1
    setProductQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

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
            <p>{productQuantity}</p>
            <div>
              <FontAwesomeIcon icon={faChevronUp} onClick={handleIncrement} />
              <FontAwesomeIcon icon={faChevronDown} onClick={handleDecrement} />
            </div>
          </div>
        </div>
        <div className={styles["product-detail--sizes"]}>
          <ul>
            {productoDetalle.sizes.map((size) => (
              <li key={size._id}>
                {size.size}
                {/* {size.sizeStock} */}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["product-detail--guide"]}>
          {/* Guía de Talle <span>i</span> */}
        </div>
        <button className={styles["product-info--button_agregar"]}>
          Agregar al Carrito
        </button>
        <Link to="/">
          <button className={styles["product-info--button_seguir"]}>
            Seguir Comprando
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductoDetalle;
