//Menambahkan Event

export default function Event() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      className="bg-blue-500 w-20 h-20 ml-20 mt-20 rounded-xl"
      onClick={handleClick}
    >
      Click Me !
    </button>
  );
}
