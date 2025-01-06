import { useState } from "react";

function LoginStatus() {
  const [status, setstatus] = useState("Logged Out");

  return (
    <div>
      <p>Status : {status}</p>
      <button onClick={() =>setstatus("Logged In")}>Login </button>
      <button onClick={() =>setstatus("Logged Out")}>Logout </button>
    </div>
  );
}

export default LoginStatus;

