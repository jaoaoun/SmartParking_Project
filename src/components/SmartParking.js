import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Place1 from './Place1'
import Place2 from './Place2'
import AboutUs from './AboutUs'
import '../css/indexSP.css'
import { Nav, Navbar, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button } from 'reactstrap'


const P1 = () => <Place1 />
const P2 = () => <Place2 />
const AU = () => <AboutUs/>


export const SmartParking = () => {

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarText className="mr-auto">SmartParking</NavbarText>
        <Nav navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Placement
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="/place1">Place 1</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/place2">Place 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
      <div className="App container">
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/place1" component={P1} />
        <Route path="/place2" component={P2} />
        <Route path="/aboutus" component={AU} />
      </div>
      <div>
          <Button className="btnAbout" href="/aboutus" >
            About Us
              </Button>
              
      </div>
    </div>
  )
}

export default SmartParking
