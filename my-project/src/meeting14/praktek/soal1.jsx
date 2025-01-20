import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { BookList } from "./soal1back";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookList />,
  },
]);

function TokoBuku() {
  return <RouterProvider router={router} />;
}

export default TokoBuku;
