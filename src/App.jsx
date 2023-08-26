import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/Error";
import Inicio from "./Pages/Inicio";
import ProductoDetalle from "./Pages/ProductoDetalle";
import AdminsLogin from "./Pages/AdminsLogin";
import AdminsDashboard from "./Pages/AdminsDashboard";

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
        path: "/productoDetalle/:id",
        element: <ProductoDetalle />,
      },
    ],
  },
  {
    path: "/admins-login",
    element: <AdminsLogin />,
  },
  {
    path: "/admins-dashboard",
    element: <AdminsDashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
