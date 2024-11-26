export default function EventPropagationExample() {
  const handleDivClick = () => {
    console.log("Div clicked");
  };

  const handleButtonClick = (event) => {
    console.log("Button clicked");
    event.stopPropagation();
  };

  return (
    <div onClick={handleDivClick} className="bg-gray-100 p-5">
      <button onClick={handleButtonClick} className="bg-blue-500 p-3">
        Click Me!
      </button>
    </div>
  );
}
