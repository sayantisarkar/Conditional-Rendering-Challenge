import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function checkUser() {
  if (userIsRegistered) {
    return <Form name="Login" />;
  } else {
    return <Form name="Register" />;
  }
}

function App() {
  return <div className="container">{checkUser()}</div>;
}

export default App;
