import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AxiosStore2 from "./soal2back2";
import LoginMas from "./login2";
import { ProductDetail } from "./soal2back2";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginMas />,
  },
  {
    path: "/product",
    element: <AxiosStore2 />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
]);

function Axioshop2() {
  return <RouterProvider router={router} />;
}

export default Axioshop2;
