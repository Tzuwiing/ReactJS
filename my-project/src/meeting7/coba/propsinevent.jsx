// export default function PropsEvent() {
//   return <Alert message="Hello World!" />;
// }

// function Alert({ message }) {
//   return (
//     <button
//       className="bg-blue-500 w-20 h-20 ml-20 mt-20 rounded-xl"
//       onClick={() => alert(message, console.log("Props Event"))}
//     >
//       Click Me!
//     </button>
//   );
// }

export default function PropsEvent2() {
  return <Alert onClicked={() => alert("hi")} />;
}

function Alert({ onClicked }) {
  return (
    <>
      <button
        className="bg-blue-500 w-20 h-20 ml-20 mt-20 rounded-xl"
        onClick={onClicked}
      >
        Click Me!
      </button>
    </>
  );
}
