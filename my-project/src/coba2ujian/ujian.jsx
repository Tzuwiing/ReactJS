function Welcome(props) {
  return <h2>Welcome, {props.username}</h2>;
}

export default function Ujian1() {
  return (
    <div>
      <Welcome username="Alice" />
    </div>
  );
}
