function Message(props) {
    if (props.age < 18) {
      return <h1>You are a minor.</h1>;
    } else {
      if (props.age >= 18 && props.age <= 60) {
        return <h1>You are an adult.</h1>;
      } else {
        return <h1>You are a senior.</h1>;
      }
    }
  }

  export default function Ujian4() {
    const userAge = 25;
    return <Message age={userAge} />;
  }