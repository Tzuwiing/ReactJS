// soal 1 start
function Greeting({ name, message }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>{message}</p>
    </div>
  );
}

export default function App3() {
  return (
    <div>
      <Greeting name="Alice" message="Welcome to React !" />
    </div>
  );
}

//soal 1 end

//soal 2 start

// function UserProfile({ username, age, location }) {
//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p>Username: {username}</p>
//       <p>Age: {age}</p>
//       <p>Location: {location}</p>
//     </div>
//   );
// }

// function App() {
//   const userInfo = { username: "johndoe", age: 25, location: "New York" };

//   return (
//     <div>
//       <UserProfile {...userInfo} />
//     </div>
//   );
// }

//soal 2 end
