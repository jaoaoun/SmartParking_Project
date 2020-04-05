import React , { useState } from 'react'
import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Place1 from './Place1'
import Place2 from './Place2'
import AboutUs from './AboutUs'
import Places from './Places'
import '../css/indexSP.css'
import { useHistory } from 'react-router'
import {
  Collapse,
  Nav,
  NavbarBrand,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap'



const P1 = () => <Place1 />
const P2 = () => <Place2 />
const AU = () => <AboutUs />
const PS = () => <Places />




export const SmartParking = () => {


 
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);


const { push } = useHistory()

const handleClick = () => {
  push('./AboutUs')
}
  return (
    
    <div>

      <Navbar color="dark" dark expand="md" >
        <NavbarBrand color="dark" href="/places">SmartParking</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto"  >
          <UncontrolledDropdown nav inNavbar >
            <DropdownToggle nav caret >
              Places
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="/Place1.js">Place 1</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/Place2.js">Place 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        </Collapse>
      </Navbar>
      <div className="App container">
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/Place1.js" component={P1} />
        <Route path="/Place2.js" component={P2} />
        <Route path="/AboutUs" component={AU} />
        <Route path="/places" component={PS} />
       
      
      </div>
      


      <div>
        <Button className="btnAbout" onClick={handleClick}>
          About Us
        </Button>
      </div>
    </div>
    
  )
}


export default SmartParking
