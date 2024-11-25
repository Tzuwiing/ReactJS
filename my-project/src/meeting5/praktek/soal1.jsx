function WelcomeMessage({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back, user !</h1>;
  } else {
    return <h1>Please log in to continue.</h1>;
  }
}

export default function Execution() {
  return (
    <>
      <p className="text-center text-[15px]  text-white  py-3 rounded-lg shadow-lg bg-slate-500">
        <WelcomeMessage isLoggedIn={true} />
        <WelcomeMessage isLoggedIn={false} />
      </p>
    </>
  );
}
