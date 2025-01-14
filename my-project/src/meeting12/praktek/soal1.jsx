import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-around bg-gray-100 p-4">
      <Link
        to="/"
        className="text-xl text-blue-500 hover:text-blue-700 hover:underline"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-xl text-blue-500 hover:text-blue-700 hover:underline"
      >
        About
      </Link>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <Navigation />
      <div className="mt-16">
        <h1 className="text-3xl font-bold underline">Halaman Utama</h1>
        <p className="text-lg">
          Halaman ini adalah halaman utama yang berisi informasi tentang React
          Router.
        </p>
      </div>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="mt-16">
        <h1 className="text-3xl font-bold underline">Halaman About</h1>
        <p className="text-lg">
          Halaman ini adalah halaman about yang berisi informasi tentang
          pengembang React Router.
        </p>
      </div>
    </>
  );
}

function NotFoundPage() {
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
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

function App4() {
  return <RouterProvider router={router} />;
}

export default App4;
