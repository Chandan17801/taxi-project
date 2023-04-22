import React, { useState } from "react";
import Header from "./Header/Header.js";
import Form from "./Form/Form.js";
import Confirmation from "./Confirmation/Confirmation.js";
import Footer from "./Footer/Footer.js";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [booking, setBooking] = useState(true);

  const dataHandler = (enteredData) => {
    setBooking(false);
    setData(enteredData);
  };

  const showForm = () => {
    setBooking(true);
  };

  return (
    <div className="App">
      <Header />
      <div className="body">
        {booking && <Form onSubmit={dataHandler} />}
        {!booking && <Confirmation details={data} ok={showForm} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
