import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";

// Layout Component
function Navbar() {
  return (
    <div>
      <nav className="flex justify-around bg-gray-100 p-4">
        <Link
          to="/"
          className="text-xl text-blue-500 hover:text-blue-700 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/profile/123"
          className="text-xl text-blue-500 hover:text-blue-700 hover:underline"
        >
          Profile (123)
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

// Home Page with userId input
function HomePage() {
  const [userId, setUserId] = useState(""); // State untuk menyimpan userId input
  const navigate = useNavigate(); // Untuk navigasi programatik

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      navigate(`/profile/${userId}`); // Arahkan ke halaman profil berdasarkan userId
    }
  };

  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold underline">Halaman Utama</h1>
      <p className="text-lg">
        Selamat datang! Masukkan User ID untuk menuju ke profil.
      </p>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Masukkan User ID"
          className="border-2 p-2"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2">
          Lihat Profil
        </button>
      </form>
    </div>
  );
}

// Dynamic Profile Page
function ProfilePage() {
  const { userId } = useParams(); // Mengambil nilai dinamis dari URL
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold underline">Halaman Profil</h1>
      <p className="text-lg">Profil untuk User ID: {userId}</p>
    </div>
  );
}

// Not Found Page
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

// Router Configuration
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
        path: "profile/:userId", // Rute dinamis untuk halaman profil
        element: <ProfilePage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

// App Component
export default function App9() {
  return <RouterProvider router={router} />;
}
