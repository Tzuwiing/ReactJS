function ShowAlert({ Message }) {
  const handleButtonClick = () => {
    alert(Message);
  };

  return (
    <>
      <button
        className="bg-blue-500 w-[300px] h-20 ml-50% mt-20 rounded-xl text-center"
        onClick={handleButtonClick}
      >
        Show Message
      </button>
    </>
  );
}

export default function Pesan() {
  return (
    <div className="w-1/3 text-center bg-gray-200 px-10 py-20 mt-20 mx-auto rounded-lg shadow-2xl">
      <h1 className="text-[30px]  font-bold text-slate-700 text-center  py-4  bg-slate-300 rounded-lg uppercase ">
        Pesan
      </h1>
      <ShowAlert Message="Hello World!" />
    </div>
  );
}
