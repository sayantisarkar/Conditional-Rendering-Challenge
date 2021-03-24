import React from "react";
//import Submit from "./Submit.jsx";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.userIsRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {props.userIsRegistered ? (
        <button type="submit">Register</button>
      ) : (
        <button type="submit">Login</button>
      )}
      {/* <Submit name={props.name} /> */}
    </form>
  );
}

export default Form;
