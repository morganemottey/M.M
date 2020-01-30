import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" style= {{"borderBottomStyle" : "2px solid black"}}>
        <NavbarBrand href="/">
          <img src={require("../img/mm.png")}
              style={{"border": "2px solid black" , "width" : "55px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">Clothing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart">Cart</NavLink>
            </NavItem>
          </Nav> 
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;