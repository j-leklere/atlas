import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/Error";
import Inicio from "./Pages/Inicio";
import Productos from "./Pages/Productos";
import Carrito from "./Pages/Carrito";
import ProductoDetalle from "./Pages/ProductoDetalle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/productos",
        element: <Productos />,
      },
      {
        path: "/carrito",
        element: <Carrito />,
      },
      // {
      //   path: "/productoDetalle",
      //   element: <ProductoDetalle />,
      // },
      {
        path: "/productoDetalle/:id",
        element: <ProductoDetalle />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
