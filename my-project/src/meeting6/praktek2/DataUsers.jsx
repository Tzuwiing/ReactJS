export const users = [
  { id: 1, name: "Alex", age: 30 },
  { id: 2, name: "Belva", age: 22 },
  { id: 3, name: "Chris", age: 27 },
  { id: 4, name: "Diana", age: 24 },
  { id: 5, name: "Evelyn", age: 29 },
];

export default function Profile() {
  // Filter pengguna dengan usia di atas 25 tahun
  const filteredUsers = users.filter((user) => user.age > 25);

  return (
    <div>
      {/* Menampilkan semua nama */}
      <ul className="text-center py-10 bg-slate-200  mx-auto mt-20 w-1/4 rounded-lg shadow-2xl text-[15px] font-semibold">
        <h1>Semua User</h1>
        <br />
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
          </li>
        ))}
        <br />
        {/* Menampilkan nama yang berusia di atas 25 tahun */}
        <h1>User di atas 25 tahun</h1>
        <br />
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
          </li>
        ))}
        <br />
        {/* Menampilkan nama yang mengandung huruf e */}
        <h1>User yang mengandung huruf e</h1>
        <br />
        {users
          .filter((user) => user.name.includes("e"))
          .map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>Age: {user.age}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
