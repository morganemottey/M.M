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
 
} from 'reactstrap';
// import Logout from "./Logout"


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" style= {{"borderBottomStyle" : "2px solid black" ,}}>
        <NavbarBrand href="/">
          <img src={require("../img/mm.png")}
              style={{"border": "2px solid black" , "width" : "55px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Clothing
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/outerwear">Outerwear</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/tops">Tops</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/dresses">Dresses</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/sale">Sale</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/accessoires">Accessoires</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink href="/logout">Logout</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <Nav className="navbar_left" navbar>
            <NavItem>
              <NavLink className="navbar_left" href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar_left" href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar_left" href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar_left" href="/payment">Cart</NavLink>
            </NavItem>
            <NavItem>
              {/* <Button><Logout/></Button> */}
            </NavItem>
            </Nav>
          </Nav> 
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;