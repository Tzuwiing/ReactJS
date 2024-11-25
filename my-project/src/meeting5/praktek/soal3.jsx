function Notification({priority}) {
    if (priority === "high") {
      return <h1>Immediate action required.</h1>;
    } else if (priority === "medium") {
      return <h1>Please address this issue soon.</h1>;
    } else if (priority === "low") {
      return <h1>No immediate action required.</h1>;
    } else {
      return <h1>Invalid priority level.</h1>;
    }
}

export default function Message(){
    return(
        <div>
            <Notification priority="high" />
            <Notification priority="medium" />
            <Notification priority="low" />
            <Notification priority="invalid" />
        </div>
    )
}