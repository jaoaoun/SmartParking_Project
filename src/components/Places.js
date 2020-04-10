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

    //Navbar Places
    const [showPlacesbar, setShowPlacesbar] = useState(false)
    //Dropdownbar
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    //Place in home page
    const [showPlace, setShowPlace] = useState(true)
    //Button About Us in home page
    const [showBtnAbout, setShowBtnAbout] = useState (true)


const { push } = useHistory()


const handleClick = () => {
  setShowPlace(false) 
  push('./AboutUs')
  setShowBtnAbout(false)
  
  
}

const handleClick2 = () => {
  push('./Place1.js')
  setShowPlace(false)
  setShowBtnAbout(false)
  setShowPlacesbar(true)
  
}

const handleClick3 = () => {
  push('./Place2.js')
  setShowPlace(false)
  setShowBtnAbout(false)
  setShowPlacesbar(true)
  
}

  return (
    <div >

      <Navbar color="dark" dark expand="md" >
        <NavbarBrand color="dark" href="/places">SmartParking</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        { showPlacesbar &&
        <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto"  >
          <UncontrolledDropdown nav inNavbar >
            <DropdownToggle nav caret >
              Places
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={handleClick2}>Place 1</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={handleClick3}>Place 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        </Collapse>
        }
      </Navbar>
      <div className="App container">
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/Place1.js" component={P1} />
        <Route path="/Place2.js" component={P2} /> 
        <Route path="/AboutUs" component={AU} />
      </div>
      {/* { btnSP &&
      <div>
        <Button  onClick={() => setShowP(!showP) }>
          Show Places
        </Button>
      </div>
      } */}
      {
        showPlace &&
      <Container >
          <Row>
          <Col> 
          <div>
              <button className="place-btn" onClick={handleClick2}>
              <img src={require('../pic/p1.jpg')} alt="logo" className="Place-logo"  />
              </button>
              <p>Place1</p>
          </div>
          </Col>
          <Col>
          <div>
              <button className="place-btn" onClick={handleClick3}>
                <img src={require('../pic/P2.jpg')} alt="logo" className="Place-logo" />
              </button>
              <p>Place2</p>
          </div>
          </Col>
          </Row>
      </Container>
      
      }
      {
        showBtnAbout &&
      
      <div>
        <Button className="btnAbout" onClick={handleClick}>
          About Us
        </Button>
      </div>
       }
    </div>
  
  )
  }
  
  export default Places