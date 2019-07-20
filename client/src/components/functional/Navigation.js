import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    this.loggedInUser = this.props.loggedInUser
    // this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>BucketList</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink to='/bucketlist'>BucketList</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to='/bucketlist/item-form'>Add Item</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/register'>Register</NavLink>
            </NavItem>
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

export default Navigation;
