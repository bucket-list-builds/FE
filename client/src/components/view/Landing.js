import React from "react";

function Landing(props) {
  return (
    <>
      <div className="landing-page">
        <div className="landing-page-content">
          <p>Already have a profile set up?</p>
          <button onClick={props.onLogin}>Log In Here</button>
        </div>
        <div className="landing-page-content">
          <p>Need to create a profile?</p>
          <button onClick={props.onRegister}>Register Here</button>
        </div>
        
        
      </div>
    </>
  );
}

export default Landing;
