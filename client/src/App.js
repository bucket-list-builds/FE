import React, { Component } from "react";
import Navigation from "./components/functional/Navigation";
import BucketPage from "./components/view/BucketPage";
import AddItemForm from "./components/functional/AddItemForm";
import LogOut from "./components/view/LogOut";
import "./App.scss";
import LoginPage from "./components/view/loginPage";
import RegistrationPage from "./components/view/registrationPage";
import { Route, withRouter } from "react-router-dom";
import Landing from "./components/view/Landing.js";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.state = {
      bucketList: [],
      bucketListID: [],
      users: [],
      user_id: parseInt(localStorage.getItem("user_id"))
    };
  }

  componentDidMount() {
    //fetching/getting bucketlist from API.
    Axios.get("https://bucketlist-builds.herokuapp.com/home")
      .then(response => {
        // console.log(this.state.bucketList);
        this.setState({ bucketList: response.data });
        console.log(this.state.bucketList);
      })
      .catch(error => {
        console.log(error.response);
      });

    Axios.get(
      `https://bucketlist-builds.herokuapp.com/users/${
        this.state.user_id
      }/bucketlist`
    )
      .then(response => {
        // console.log(this.state.bucketList);
        this.setState({ bucketListID: response.data });
        console.log(this.state.bucketListID);
      })
      .catch(error => {
        console.log(error.response);
      });

    //fetching/getting users from API.
    Axios.get("https://bucketlist-builds.herokuapp.com/users")
      .then(response => {
        // console.log(this.state.users);
        this.setState({ users: response.data });
        console.log(this.state.users);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  updateBucket = newBucket => {
    this.setState({ bucketlist: newBucket });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  textInputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onLogin = e => {
    e.preventDefault();
    this.props.history.push("/login");
  };

  onRegister = e => {
    e.preventDefault();
    this.props.history.push("/register");
  };

  render() {
    return (
      <div className="App">
        <Navigation user_id={this.state.user_id} />

        <Route
          exact path="/"
          render={props => (
            <Landing onLogin={this.onLogin} onRegister={this.onRegister} />
          )}
        />

        <Route exact path="/login" render={props => <LoginPage {...props} />} />

        <Route
          path="/register"
          render={props => <RegistrationPage {...props} />}
        />

        <Route
          exact
          path="/bucketlist"
          render={props => (
            <BucketPage
              {...props}
              bucketList={this.state.bucketList}
              bucketListID={this.state.bucketListID}
              user_id={this.state.user_id}
              updateBucket={this.updateBucket}
            />
          )}
        />

        <Route
          path="/bucketlist/item-form"
          render={props => (
            <AddItemForm
              {...props}
              bucketList={this.state.bucketList}
              updateBucket={this.updateBucket}
              user_id={this.state.user_id}
            />
          )}
        />
      </div>
    );
  }
}


export default withRouter(App);
