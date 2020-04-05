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

    // const [btnSP, setBtnSP] = useState (true)
    const [showPbar, setShowPbar] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    const [showP, setShowP] = useState(true)
    
    const [showBtn, setShowBtn] = useState (true)


const { push } = useHistory()


const handleClick = () => {
  setShowP(!showP) 
  push('./AboutUs')
  setShowBtn(!showBtn)
  // setBtnSP(!btnSP)
  
}

const handleClick2 = () => {
  setShowP(!showP)
  push('./Place1.js')
  setShowBtn(!showBtn)
  setShowPbar(!showPbar)
  // setBtnSP(btnSP:false)
}

const handleClick3 = () => {
  setShowP(!showP)
  push('./Place2.js')
  setShowBtn(!showBtn)
  setShowPbar(!showPbar)
  // setBtnSP(!btnSP)
}

  return (
    <div >

      <Navbar color="dark" dark expand="md" >
        <NavbarBrand color="dark" href="/places">SmartParking</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        { showPbar &&
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
        showP &&
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
        showBtn &&
      
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