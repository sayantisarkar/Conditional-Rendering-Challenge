import React from "react";
import Submit from "./Submit.jsx";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <Submit name={props.name} />
    </form>
  );
}

export default Form;
