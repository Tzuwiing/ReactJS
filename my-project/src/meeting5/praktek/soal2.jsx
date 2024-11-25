function DeliveryStatus({ status }) {
    let message;
  
    if (status === "processing") {
      message = <p>Your Order is being processed</p>;
    } else if (status === "shipped") {
      message = <p>Your Order has been shipped</p>;
    } else if (status === "delivered") {
      message = <p>Your Order has been delivered</p>;
    } else {
      message = <p>Invalid status</p>;
    }
  
    return <div>{message}</div>;
  }
  

  export default function Paket() {
    return (
      <div>
        <DeliveryStatus status="processing" />
        <DeliveryStatus status="shipped" />
        <DeliveryStatus status="delivered" />
        <DeliveryStatus status="invalid" />
      </div>
    );
  }