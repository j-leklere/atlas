import styles from "./BuzosCamperas.module.css";
import React, { useState, useEffect } from "react";
import Product from "./Product";

function BuzosCamperas() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        // La propiedad 'data.products' contiene el array de productos
        const buzoscamperas = data.data.products.filter(
          (product) =>
            product.category === "Buzos" || product.category === "Camperas"
        );
        setProducts(buzoscamperas);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className={styles["section-remeras"]}>
      <h2 className={styles["remeras-title"]}>Buzos & Camperas</h2>
      <div className={styles["remeras-products"]}>
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default BuzosCamperas;
