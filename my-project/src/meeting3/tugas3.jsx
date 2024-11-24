function ChildComponent({ title, description, age, ...props }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{age}</p>
      <image {...props} />
    </div>
  );
}

export default function ParentComponent() {
  return (
    <div>
      <Children>
        <ChildComponent
          title="Hello"
          description="Ini Description"
          age={24}
          src="../public/images/fly.png"
          alt="ini alt"
          size="100px"
        ></ChildComponent>
      </Children>
    </div>
  );
}

// value di props
function Coba({
  title = "Coba Judul",
  description = "Coba Deskripsi",
  age = 24,
}) {
  return (
    <>
      <coba />
    </>
  );
}

// props spread syntax

function Image({ src, alt, size }) {
  return (
    <>
      <img src={src} alt={alt} style={{ width: size, height: size }} />
    </>
  );
}

//JSX as children

function Children({ children }) {
  return <div style={{ backgroundColor: "red" }}>{children}</div>;
}

//kembali ke atas
