import React, { useState } from "react";

function Array2() {
  const [items, setItems] = useState([
    "Buku",
    "Pensil",
    "Gayung",
    "Penghapus",
    "Pulpen",
    "Penggaris",
  ]);

  return (
    <>
      <h1>{items}</h1>
    </>
  );
}

export default Array2;
