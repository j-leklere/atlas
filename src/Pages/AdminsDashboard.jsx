import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./AdminsDashboard.module.css";

import DashboardTotals from "../Components/DashboardTotals";
import DashboardCategories from "../Components/DashboardCategories";
import DashboardProducts from "../Components/DashboardProducts";

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
    <main className={styles["main"]}>
      <div>
        <DashboardTotals products={products} />
        <DashboardCategories products={products} />
        <DashboardProducts products={products} />
      </div>
    </main>
  );
};

export default AdminsDashboard;
