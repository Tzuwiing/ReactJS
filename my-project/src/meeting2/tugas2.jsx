// coba JSX
function App() {
  const title = "Coba JSX";
  const paragraph = "Lorem ipsum dolor sit amet";
  const tema = {
    paragraph: {
      backgroundColor: "blue",
      color: "white",
    },
  };

  return (
    <>
      <img src="fly.png" alt="cobareact" />
      <h1 style={{ color: "red" }}>{title}</h1>
      <p className="testing" style={tema.paragraph}>
        {paragraph}
      </p>
    </>
  );
}

export default App;


  
  
