//Ternary Operator
// condition  ? expressionIfTrue : expressionIfFalse

function TernaryOperator({ nama, benar }) {
  return (
    <ul>
      {benar
        ? nama + " true"
        : nama == "Fathan"
        ? "My name is " + nama
        : nama + " false"}
    </ul>
  );
}

export default function Coba() {
  return (
    <ul>
      <TernaryOperator nama={"Fathan"} benar={false} />
    </ul>
  );
}
