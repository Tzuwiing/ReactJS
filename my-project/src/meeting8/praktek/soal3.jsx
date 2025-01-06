import { useState } from "react";

function SimpleCalculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      />
      <button onClick={() => setResult(number1 + number2)}>Tambah</button>
      <button onClick={() => setResult(number1 - number2)}>Kurang</button>
      <button onClick={() => setResult(number1 * number2)}>Kali</button>
      <button onClick={() => setResult(number1 / number2)}>Bagi</button>
      <p>Hasil: {result}</p>
    </div>
  );
}

export default SimpleCalculator;
