import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TambahMakan() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mengambil data produk dari localStorage atau membuat array kosong jika belum ada
    const products = JSON.parse(localStorage.getItem("foodProducts")) || [];

    // Menambahkan ID unik pada produk yang baru
    const newProduct = {
      id: Date.now(), // Menggunakan timestamp sebagai ID unik
      name: formData.name,
      price: formData.price,
      description: formData.description,
    };

    // Menambahkan produk baru ke dalam array produk
    products.push(newProduct);

    // Menyimpan kembali array produk ke localStorage
    localStorage.setItem("foodProducts", JSON.stringify(products));

    // Navigasi kembali ke daftar produk
    navigate("/list");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
        Tambah Produk Makanan
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nama Makanan"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Harga"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="description"
          placeholder="Deskripsi"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default TambahMakan;
