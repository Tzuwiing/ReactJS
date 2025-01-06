import React, { useState } from "react";

function Numbers() {
  const [age, setAge] = useState(16);

  return (
    <>
      <h1>Age: {age}</h1>
    </>
  );
}

export default Numbers;
