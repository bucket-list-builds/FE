import React from "react";

function Landing(props) {
  return (
    <>
      <div>
        <button onClick={props.onLogin}>Log In</button>
        <button onClick={props.onRegister}>Register</button>
      </div>
    </>
  );
}

export default Landing;
