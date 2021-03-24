import React from "react";

function checkRegister(type) {
  if (type === "Register") {
    return <input type="password" placeholder="Confirm Password" />;
  }
}

function Submit(props) {
  return (
    <div>
      {checkRegister(props.name)}
      <button type="submit">{props.name}</button>
    </div>
  );
}

export default Submit;
