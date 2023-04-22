import Card from "../Layout/Card/Card";
import "./Confirmation.css";

const Confirmation = (props) => {
  const okHandler=()=>{
    props.ok();
  }
  return (
    <Card>
      <h1>Taxi Booked</h1>
      <div className="detail">
        <p>
          Hey <span>{props.details.name}</span>, you have succefully booked a taxi from{" "}
          <span>{props.details.start}</span> to <span>{props.details.dest}</span>.
        </p>
        <p>Date: {props.details.date}</p>
        <p>Time: {props.details.time}</p>
        {props.details.text && <p>Additional Requirements: {props.details.text}</p>}
      </div>
      <p className="thanks">Thank you for booking online.</p>
      <button className="ok-btn" onClick={okHandler}>Okay</button>
    </Card>
  );
};

export default Confirmation;
