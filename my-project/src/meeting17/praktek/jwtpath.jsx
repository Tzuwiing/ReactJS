import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AxiosStore2 from "./jwtback";
import LoginMas from "./jwtlogin";
import { ProductDetail } from "./jwtback";
import { Navigate } from "react-router-dom";
import Help from "./help";
import Create from "./createacc";
import 
ProtectedRoute from "./jwtprotect";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginMas />,
  },
  {
    path: "/",
    element: <LoginMas />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/product",
    element: (
      <ProtectedRoute>
        <AxiosStore2 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <ProtectedRoute>
        <ProductDetail />
      </ProtectedRoute>
    ),
  },
]);

function Axioshop17() {
  return <RouterProvider router={router} />;
}

export default Axioshop17;
