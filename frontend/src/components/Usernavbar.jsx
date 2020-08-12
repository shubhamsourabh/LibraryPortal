import React, { useState } from "react";
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
  NavbarText,
} from "reactstrap";
import { useHistory } from "react-router-dom";

export default function Userhomescreen(props) {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();
  const toggle = () => setIsOpen(!isOpen);

  const handleClick = (e) => {
    e.preventdefault();
    history.push("/Userlayout");
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Userlayout/" onClick={handleClick}>
                Userlist
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <Nav className="ml-auto" Navbar>
            <NavItem>
              <NavLink>Logout</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Logout</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}
