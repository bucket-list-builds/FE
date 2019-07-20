import React, { Component } from "react";

class LogOut extends Component {
    
    handleLogout = (event) => {
        event.preventDefault();
    
        localStorage.removeItem('jwt');
        localStorage.removeItem('user_id')
        this.props.history.push('/login')
      }

    render() {
        return (
            <li><button onClick={this.handleLogout}>Logout</button></li>
        )
    }

}

export default LogOut; 
 