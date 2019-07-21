import React from "react";
import "./Landing.scss"
function Landing(props) {
  return (
    <>
      <div className="landing-page">

        <h1>Welcome to BuckList!!</h1>
        <div className="main-content-box">
          <div>
            <p>As the name suggests, this is a website to create a Bucket List to help you accomplish your goals in life before, well, you kick the bucket.</p>
          </div>
          
          <div>
            <div className="landing-page-content">
              <p>Already have a profile set up?</p>
              <button onClick={props.onLogin}>Log In Here</button>
            </div>
            <div className="landing-page-content">
              <p>Need to create a profile?</p>
              <button onClick={props.onRegister}>Register Here</button>
            </div>
          </div>
        </div>
       
        
        
      </div>
    </>
  );
}

export default Landing;
