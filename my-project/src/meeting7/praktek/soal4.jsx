export default function SimpleClick() {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <button
      className="bg-blue-500 w-[300px] h-20 ml-50% mt-20 rounded-xl text-center"
      onClick={handleButtonClick}
    >
      Click Me !
    </button>
  );
}
