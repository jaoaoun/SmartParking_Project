import React, { useState, useEffect } from 'react'
import HeaderBar from '../layout/HeaderBar'
import Place1 from './Place1'
import Place2 from './Place2'
import AboutUs from './AboutUs'
import '../../css/indexApp.css'
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

export const Home = () => {
  const { push } = useHistory()

  //Place in home page
  const [showPlace, setShowPlace] = useState(true)

  
  

  //   useEffect(() => {
  //     localStorage.clear()
  //     var places = localStorage.getItem('setPlace')
  //     if (!places) {
  //       setShowPlace(true)
  //     }
  //   }, [])

  const Place1Click = () => {
    push('./Place1')
    setShowPlace(false)
    // setShowBtnAbout(false)
    //setShowPlacesbar(true)
  }

  const Place2Click = () => {
    push('./Place2')
    setShowPlace(false)
    // setShowBtnAbout(false)
    //setShowPlacesbar(true)
  }

  return (
    <div>
      {showPlace && (
        <Container>
          <Row>
            <Col>
              <div>
                <button className="place-btn" onClick={Place1Click}>
                  <img src={require('../../img/p1.jpg')} alt="logo" className="Place-logo"  />
                </button>
                <p>Place1</p>
              </div>
            </Col>
            <Col>
              <div>
                <button className="place-btn" onClick={Place2Click}>
                  <img src={require('../../img/P2.jpg')} alt="logo" className="Place-logo" />
                </button>
                <p>Place2</p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  )
}
export default Home
