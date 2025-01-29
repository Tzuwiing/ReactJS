import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Create() {
  // State untuk form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // default role
    avatar: "https://i.imgur.com/LDOO4Qs.jpg", // default avatar
  });

  // State untuk pesan hasil request
  const [message, setMessage] = useState("");

  // Fungsi untuk mengubah input form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk mengirim data ke API
  const handleCreateUser = (e) => {
    e.preventDefault();

    const newUser = {
      ...formData,
      creationAt: new Date().toISOString(), // Tambah waktu pembuatan
      updatedAt: new Date().toISOString(), // Tambah waktu perubahan
    };

    axios
      .post("https://api.escuelajs.co/api/v1/users", newUser)
      .then((response) => setMessage(`User created: ${response.data.name}`))
      .catch((error) => setMessage(`Error creating user: ${error.message}`));

    // Reset form setelah submit
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
      avatar: "https://i.imgur.com/LDOO4Qs.jpg",
    });
  };

  return (
    <div>
      <h2 className="bg-blue-500 w-40 ml-2 mt-2 mb-4">Create user</h2>

      <Link to="/">
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
      </Link>

      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <button type="submit">Create User</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
