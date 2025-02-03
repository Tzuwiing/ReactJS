import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [newProductData, setNewProductData] = useState({
    name: "",
    price: "",
    description: "",
  });

  // Memuat produk dari localStorage
  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("foodProducts")) || [];
    setProducts(storedProducts);
  }, []);

  // Menyimpan produk ke localStorage
  const saveProductsToLocalStorage = (updatedProducts) => {
    localStorage.setItem("foodProducts", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  // Menangani penghapusan produk berdasarkan id
  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    saveProductsToLocalStorage(updatedProducts);
  };

  // Menangani pengeditan produk
  const handleEditProduct = (product) => {
    setEditProduct(product.id);
    setNewProductData({
      name: product.name,
      price: product.price,
      description: product.description,
    });
  };

  // Menangani pembaruan produk
  const handleUpdateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editProduct ? { ...product, ...newProductData } : product
    );
    saveProductsToLocalStorage(updatedProducts);
    setEditProduct(null);
    setNewProductData({ name: "", price: "", description: "" });
  };

  // Menangani perubahan input pada form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
        Daftar Produk Makanan
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada produk makanan.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2">Nama</th>
              <th className="p-2">Harga</th>
              <th className="p-2">Deskripsi</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border border-gray-200">
                <td className="p-2 text-center">{product.name}</td>
                <td className="p-2 text-center">Rp {product.price}</td>
                <td className="p-2 text-center">{product.description}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Form Edit Produk */}
      {editProduct && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Edit Produk
          </h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                name="name"
                value={newProductData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Harga
              </label>
              <input
                type="number"
                name="price"
                value={newProductData.price}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Deskripsi
              </label>
              <textarea
                name="description"
                value={newProductData.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="text-center">
              <button
                onClick={handleUpdateProduct}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update Produk
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProductList;
