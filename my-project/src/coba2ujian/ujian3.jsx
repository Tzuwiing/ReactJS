function Filterdlist(props) {
  const filteredList = props.items.filter((item) => item.length > 5);

  return (
    <ul>
      {filteredList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function Ujian3() {
  const fruits = ["apple", "banana", "cherry", "kiwi", "mango"];

  return <Filterdlist items={fruits} />;
}
