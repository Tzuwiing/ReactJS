function Greeting({ Time }) {
  if (Time < 0 || Time > 23) {
    return <h1>Invalid Time!</h1>;
  }

  if (Time >= 5 && Time <= 11) {
    return <h1>Good Morning!</h1>;
  } else if (Time >= 12 && Time <= 17) {
    return <h1>Good Afternoon!</h1>;
  } else if (Time >= 18 && Time <= 20) {
    return <h1>Good Evening!</h1>;
  } else {
    return <h1>Good Night!</h1>;
  }
}

export default function Waktu() {
  return (
    <div>
      <Greeting Time={7} />
      <Greeting Time={14} />
      <Greeting Time={19} />
      <Greeting Time={3} />
      <Greeting Time={26} />
    </div>
  );
}
