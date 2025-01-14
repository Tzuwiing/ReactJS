import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex justify-around bg-gray-100 p-4">
        <Link
          to="/"
          className="text-xl text-blue-500 hover:text-blue-700 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className="text-xl text-blue-500 hover:text-blue-700 hover:underline"
        >
          Dashboard
        </Link>
      </nav>
      <Outlet /> {/* Tempat anak rute dirender */}
    </div>
  );
}

function HomePage() {
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold underline">Halaman Utama</h1>
      <p className="text-lg">
        Halaman ini adalah halaman utama yang berisi informasi tentang React
        Router.
      </p>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold underline">Halaman Dashboard</h1>
      <Link to="settings" className="text-blue-500 hover:underline">
        Pergi ke Settings
      </Link>
      <Outlet />
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold underline">Halaman Settings</h1>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold underline">404 Not Found</h1>
      <p>Halaman tidak ditemukan</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Kembali ke halaman utama
      </Link>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        children: [
          {
            path: "settings",
            element: <SettingsPage />,
          },
        ],
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default function Part2() {
  return <RouterProvider router={router} />;
}
