import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/Error";
import Inicio from "./Pages/Inicio";
import Usuario from "./Pages/Usuario";
import Productos from "./Pages/Productos";
import Carrito from "./Pages/Carrito";

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
        path: "/usuario",
        element: <Usuario />,
      },
      {
        path: "/productos",
        element: <Productos />,
      },
      {
        path: "/carrito",
        element: <Carrito />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
