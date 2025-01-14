import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function CobaRouter() {
  return <h2>Halaman Utama</h2>;
}

function SecondPlace() {
  return <h2>Halaman kedua</h2>;
}

function ErrorPages() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">404 Not Found</h1>
      <p>Halaman tidak ditemukan</p>
      <Link to="/">Kembali ke halaman utama</Link>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <CobaRouter />,
    errorElement: <ErrorPages />,
  },
  {
    path: "/second-place",
    element: <SecondPlace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
