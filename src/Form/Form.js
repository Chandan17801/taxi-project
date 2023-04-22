import React, { useState } from "react";
import Card from "./../Layout/Card/Card";
import "./Form.css";

const Form = (props) => {
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [startIsTouched, setStartIsTouched] = useState(false);
  const [destIsTouched, setDestIsTouched] = useState(false);
  const [dateIsTouched, setDateIsTouched] = useState(false);
  const [timeIsTouched, setTimeIsTouched] = useState(false);
  const [enteredData, setEnteredData] = useState({
    name: "",
    start: "",
    dest: "",
    date: "",
    time: "",
    text: "",
  });

  //Name Validation
  const nameChangeHandler = (event) => {
    setEnteredData({
      ...enteredData,
      name: event.target.value,
    });
  };
  const nameIsTouchedHandler = () => {
    setNameIsTouched(true);
  };
  const nameIsValid = enteredData.name.trim().length >= 1;

  //PickUp Validation
  const startChangeHandler = (event) => {
    setEnteredData({
      ...enteredData,
      start: event.target.value,
    });
  };
  const startIsTouchedHandler = () => {
    setStartIsTouched(true);
  };
  const startIsValid = enteredData.start.trim().length >= 1;

  //Destination Validation
  const destChangeHandler = (event) => {
    setEnteredData({
      ...enteredData,
      dest: event.target.value,
    });
  };
  const destIsTouchedHandler = () => {
    setDestIsTouched(true);
  };
  const destIsValid = enteredData.dest.trim().length >= 1;

  //Date and Time Validation
  const today = new Date();
  const dateChangeHandler = (event) => {
    setDateIsTouched(true);
    setEnteredData({
      ...enteredData,
      date: event.target.value,
    });
  };
  const now = `${today.getFullYear()}-0${
    today.getMonth() + 1
  }-${today.getDate()}`;

  const timeChangeHandler = (event) => {
    setTimeIsTouched(true);
    setEnteredData({
      ...enteredData,
      time: event.target.value,
    });
  };

  const additionalChangeHandler=(event)=>{
    setEnteredData({
      ...enteredData,
      text: event.target.value,
    });
  }

  const dataIsValid =
    nameIsValid &&
    startIsValid &&
    destIsValid &&
    dateIsTouched &&
    timeIsTouched;

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(enteredData);
    setEnteredData({
      name: "",
      start: "",
      dest: "",
      date: "",
      time: "",
      text: "",
    });
    setNameIsTouched(false);
    setStartIsTouched(false);
    setDestIsTouched(false);
    setDateIsTouched(false);
    setTimeIsTouched(false);
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setEnteredData({
      name: "",
      start: "",
      dest: "",
      date: "",
      time: "",
      text: "",
    });
    setNameIsTouched(false);
    setStartIsTouched(false);
    setDestIsTouched(false);
    setDateIsTouched(false);
    setTimeIsTouched(false);
  };

  return (
    <Card>
      <h1>Book a taxi</h1>
      <form className="form">
        <label>Name: </label>
        <input
          type="text"
          value={enteredData.name}
          onChange={nameChangeHandler}
          onBlur={nameIsTouchedHandler}
        ></input>
        {!nameIsValid && nameIsTouched && (
          <p style={{ fontSize: "1rem", color: "red" }}>*Enter a valid Name.</p>
        )}
        <label>Pickup: </label>
        <input
          type="text"
          value={enteredData.start}
          onChange={startChangeHandler}
          onBlur={startIsTouchedHandler}
        ></input>
        {!startIsValid && startIsTouched && (
          <p style={{ fontSize: "1rem", color: "red" }}>*Enter a valid Name.</p>
        )}
        <label>Destination: </label>
        <input
          type="text"
          value={enteredData.dest}
          onChange={destChangeHandler}
          onBlur={destIsTouchedHandler}
        ></input>
        {!destIsValid && destIsTouched && (
          <p style={{ fontSize: "1rem", color: "red" }}>*Enter a valid Name.</p>
        )}
        <label>Date: </label>
        <input
          type="date"
          min={now}
          value={enteredData.date}
          onChange={dateChangeHandler}
        ></input>
        <label>Time: </label>
        <input
          type="time"
          value={enteredData.time}
          onChange={timeChangeHandler}
        ></input>
        <label>Additional Requirements</label>
        <textarea
          rows="3"
          value={enteredData.text}
          onChange={additionalChangeHandler}
        ></textarea>
        <div className="btn">
          <button
            type="submit"
            disabled={`${dataIsValid ? "" : "disabled"}`}
            className={`${dataIsValid ? "" : "disabled"}`}
            onClick={submitHandler}
          >
            Submit
          </button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
