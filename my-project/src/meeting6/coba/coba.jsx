// map

export default function Map() {
  const users = [
    { id: 1, name: "Fathan" },
    { id: 2, name: "Fadgham" },
    { id: 3, name: "Fadhil" },
  ];

  //filter nama  yang berakhiran dengan huruf "N"
  const filteredUsers = users.filter((user) => user.name.endsWith("n"));

  return (
    <ul>
      {/*Menampilkan semua nama*/}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}

      {/*Menampilkan nama yang berakhiran dengan huruf "N"*/}
      {filteredUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
