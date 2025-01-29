import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("foodProducts")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
        Daftar Produk Makanan
      </h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No food products available.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2">Nama</th>
              <th className="p-2">Harga</th>
              <th className="p-2">Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border border-gray-200">
                <td className="p-2 text-center">{product.name}</td>
                <td className="p-2 text-center">Rp {product.price}</td>
                <td className="p-2 text-center">{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;
