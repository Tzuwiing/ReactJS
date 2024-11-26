export default function PreventDefaultExample() {
  const handleFormSubmit = (event) => {
    console.log("Form submitted!");
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <button
        className="bg-blue-500 w-20 h-20 ml-20 mt-20 rounded-xl"
        type="submit"
      >
        Kirim
      </button>
    </form>
  );
}
