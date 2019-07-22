import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "./Navigation.scss"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleLogout = (event) => {
    event.preventDefault();

    localStorage.removeItem('jwt');
    localStorage.removeItem('user_id')
    this.props.history.push('/login')
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar  color='light' light expand='md'>
        <NavbarBrand href='/'>BucketList</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>

          <div className={this.props.user_id ? "none" : 'display'}>
          <NavItem>
              <NavLink to='/register'>Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/login'>Login</NavLink>
            </NavItem>
            </div>

            <div className={this.props.user_id ? "" : 'none'}>
            <NavItem>
              <NavLink to='/bucketlist'>BucketList</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to='/bucketlist/item-form'>Add Item</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.handleLogout}>Logout</NavLink>
            </NavItem>
            </div>
          
            {this.props.isLoggedIn && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Actions
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to={`/users/${this.props.loggedInUserID}/bucketlist/add-item`}>Add New Item</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to='/user/:id'>Profile</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to='/user/:id/settings'>Settings</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to='/logout'>Logout</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Navigation);
