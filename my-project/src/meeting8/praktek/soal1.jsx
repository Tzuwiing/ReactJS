import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Angka : {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah </button>
      <button onClick={() => setCount(count - 1)}>Kurangi </button>
      <button onClick={() => setCount(0)}>Reset </button>
    </div>
  );
}

export default Counter;
