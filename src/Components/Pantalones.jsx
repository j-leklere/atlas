import styles from "./Pantalones.module.css";
import React, { useState, useEffect } from "react";
import Product from "./Product";

function Pantalones() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        // La propiedad 'data.products' contiene el array de productos
        const pantalones = data.data.products.filter(
          (product) => product.category === "Pantalones"
        );
        setProducts(pantalones);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className={styles["section-remeras"]}>
      <h2 className={styles["remeras-title"]}>Pantalones</h2>
      <div className={styles["remeras-products"]}>
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Pantalones;
