import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./AdminsDashboard.module.css";

const AdminsDashboard = () => {
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

  const calculateTotalValue = () => {
    let totalValue = 0;
    products.forEach((product) => {
      totalValue += product.stock * product.price;
    });
    return totalValue;
  };

  const totalStockPrice = calculateTotalValue();

  const calculateTotalCategoryValue = (category) => {
    let totalValue = 0;
    products.forEach((product) => {
      if (product.category === category) {
        totalValue += product.stock * product.price;
      }
    });
    return totalValue;
  };

  const totalRemerasPrice = calculateTotalCategoryValue("Remeras");
  const totalBuzosCamperasPrice =
    calculateTotalCategoryValue("Buzos") +
    calculateTotalCategoryValue("Camperas");
  const totalPantalonesPrice = calculateTotalCategoryValue("Pantalones");

  const checkIfUserIsLoggedIn = () => {
    // Obtenemos el token almacenado en el local storage
    const token = localStorage.getItem("token");

    // Aquí puedes agregar la lógica para verificar si el token es válido
    // Por ejemplo, podrías decodificar el token y verificar si contiene la información del usuario administrador

    // En este ejemplo, asumimos que si el token existe, consideramos al usuario como logeado
    // Debes adaptar esta lógica según tu implementación de autenticación
    return !!token;
  };
  const isAdminLoggedIn = checkIfUserIsLoggedIn();

  if (!isAdminLoggedIn) {
    return <Navigate to="/admins-login" />;
  }

  return (
    <main>
      <div>
        <div className={styles["totals"]}>
          <p className={styles["card"]}>
            Cantidad de productos en la base de datos:{products.length}
          </p>
          <p className={styles["card"]}>Dinero en Stock: ${totalStockPrice}</p>
        </div>
        <div className={styles["categories"]}>
          <div className={styles["card"]}>
            <h3 className={styles["heading-tertiary"]}>Dinero en Categorías</h3>
            <p>Dinero en Remeras: ${totalRemerasPrice}</p>
            <p>Dinero en Buzos y Camperas: ${totalBuzosCamperasPrice}</p>
            <p>Dinero en Pantalones: ${totalPantalonesPrice}</p>
          </div>

          <div className={styles["card"]}>
            <h3 className={styles["heading-tertiary"]}>
              Porcentaje de dinero en cada Categoría
            </h3>
            <p>
              Porcentaje en Remeras: %
              {((totalRemerasPrice / totalStockPrice) * 100).toFixed(2)}
            </p>
            <p>
              Porcentaje en Buzos y Camperas: %
              {((totalBuzosCamperasPrice / totalStockPrice) * 100).toFixed(2)}
            </p>
            <p>
              Porcentaje en Pantalones: %
              {((totalPantalonesPrice / totalStockPrice) * 100).toFixed(2)}
            </p>
          </div>
        </div>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
          </li>
        ))}
      </div>
      <div></div>
    </main>
  );
};

export default AdminsDashboard;
