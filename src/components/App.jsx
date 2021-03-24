import React from "react";
import Form from "./Form";

var userIsRegistered = true;

// function checkUser() {
//   if (userIsRegistered) {
//     return <Form name="Login" />;
//   } else {
//     return <Form name="Register" />;
//   }
// }

function App() {
  //return <div className="container">{checkUser()}</div>;
  return (
    <div className="container">
      {/* Ternary */}
      {/* {userIsRegistered ? <Form name="Login" /> : <Form name="Register" />} */}

      {/* && Operator */}
      {userIsRegistered && <Form name="Login" />}
      {!userIsRegistered && <Form name="Register" />}
    </div>
  );
}

export default App;
