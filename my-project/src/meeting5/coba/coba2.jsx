 function Test({ name, Benar }) {
  if (Benar) {
    return <li>{name} true</li>;
  } else {
    return <li>{name} false</li>;
  }
}

export default function Conditional() {
  return (
    <>
      <ul>
        <Test name="satu" Benar={false} />
        <Test name="Dua" Benar={true} />
        <Test name="Tiga" Benar={true} />
      </ul>
    </>
  );
}
