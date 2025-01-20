


  
import React, { useState, useEffect } from "react";
import axios from "axios";

export function BookList() {
  const [books, setBooks] = useState([]); // State untuk menyimpan data buku
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error handling

  useEffect(() => {
    // Fetch data dari API
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=react")
      .then((response) => {
        setBooks(response.data.items || []); // Pastikan data dari API ada
        setLoading(false); // Set loading selesai
      })
      .catch((err) => {
        console.error(err);
        setError("Gagal memuat data buku. Coba lagi nanti.");
        setLoading(false);
      });
  }, []); // Dependency array kosong agar hanya fetch sekali

  if (loading) {
    return <p>Loading data buku...</p>; // Tampilkan loading saat data belum tersedia
  }

  if (error) {
    return <p>{error}</p>; // Tampilkan pesan error jika terjadi kesalahan
  }

  return (
    <div>
      <h1>Daftar Buku</h1>
      <div>
        {books.map((book) => {
          const { id, volumeInfo } = book;
          const { title, authors, publishedDate, imageLinks } = volumeInfo;
          const thumbnail =
            imageLinks?.thumbnail || "https://via.placeholder.com/128x193?text=No+Image";

          return (
            <div key={id}>
              <img src={thumbnail} alt={title} />
              <h3>{title}</h3>
              <p>{authors ? authors.join(", ") : "Penulis tidak tersedia"}</p>
              <p>{publishedDate || "Tanggal tidak tersedia"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookList;
