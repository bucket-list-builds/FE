import React, { Component } from "react";
import axios from "axios";


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
      // error: ''
    };
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  
  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://bucketlist-builds.herokuapp.com/api/auth/login",
        this.state
      )
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        this.props.history.push("/bucketlist");
        setTimeout(() => {
          window.location.reload();
        }, 100);

        console.log(res.data.user_id);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      username: "",
      password: ""
    });
  };

  handleUserChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div className="form-styles">
        <form onSubmit={this.handleSubmit}>
        
          <label>User Name:</label>
          <input
            type="text"
            data-test="username"
            value={this.state.username}
            onChange={this.handleUserChange}
          />
          <label className="password-login">Password:</label>
          <input
            type="password"
            data-test="password"
            value={this.state.password}
            onChange={this.handlePassChange}
          />
          <button type="submit" value="Log In" data-test="submit" > Log In </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
