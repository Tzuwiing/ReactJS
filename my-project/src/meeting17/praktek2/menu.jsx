import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TambahProduk from "./createprod"; 
import ProductList from "./product.jsx";

function Menu() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-2xl font-bold text-center">Manajemen Produk Makanan</h1>
        </header>

        <nav className="flex justify-center space-x-4 bg-blue-500 py-3 text-white font-semibold shadow">
          <Link className="hover:text-gray-200" to="/">Home</Link>
          <Link className="hover:text-gray-200" to="/tambah">Tambah Produk Makanan</Link>
          <Link className="hover:text-gray-200" to="/list">Daftar Produk</Link>
        </nav>

        <main className="p-6">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="text-center mt-10">
                  <h2 className="text-xl font-semibold">Selamat Datang di Manajemen Produk Makanan</h2>
                  <p className="text-gray-600 mt-2">Kelola daftar produk makanan dengan mudah.</p>
                </div>
              } 
            />
            <Route path="/tambah" element={<TambahProduk />} />
            <Route path="/list" element={<ProductList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default Menu;
