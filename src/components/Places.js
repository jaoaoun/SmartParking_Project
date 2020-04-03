import React , { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Place1 from './Place1'
import Place2 from './Place2'
import AboutUs from './AboutUs'
import SmartParking from './SmartParking'
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
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'



const P1 = () => <Place1 />
const P2 = () => <Place2 />
const AU = () => <AboutUs />



export const Places = () => {
    // const [isOpen, setIsOpen] = useState(false);
  
    // const toggle = () => setIsOpen(!isOpen);


const { push } = useHistory()

const handleClick = () => {
  push('./AboutUs')
}

  return (
    <div>

      <Navbar color="dark" dark expand="md" >
        <NavbarBrand color="dark" href="/places">SmartParking</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar> */}
        {/* <Nav navbar className="ml-auto"  >
          <UncontrolledDropdown nav inNavbar >
            <DropdownToggle nav caret >
              Places
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="/place1">Place 1</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/place2">Place 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        </Collapse> */}
      </Navbar>
      <div className="App container">
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/Place1.js" component={P1} />
        <Route path="/Place2.js" component={P2} /> 
        <Route path="/AboutUs" component={AU} />
      </div>
      
      <Container>
          <Row>
          <Col> 
          <div>
              <Link to="/Place1.js">
              <img src={require('../pic/p1.jpg')} alt="logo" className="Place-logo" href="/Place1.js" />
              </Link>
              <p>Place1</p>
          </div>
          </Col>
          <Col>
          <div>
              <Link to="/Place2.js">
                <img src={require('../pic/P2.jpg')} alt="logo" className="Place-logo" href="/Place2.js"/>
              </Link>
              <p>Place2</p>
          </div>
          </Col>
          </Row>
      </Container>


      <div>
        <Button className="btnAbout" onClick={handleClick}>
          About Us
        </Button>
      </div>
    </div>
  
  )
  }
  
  export default Places