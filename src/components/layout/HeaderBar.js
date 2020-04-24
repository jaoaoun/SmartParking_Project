import React, { useState, useEffect } from 'react'
import '../../css/indexApp.css'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router-dom'
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





export const HeaderBar = () => {
  
  const { push } = useHistory()
  const { location } = useLocation()
  //Navbar Places
  const [showPlacesbar, setShowPlacesbar] = useState(false)
  //Dropdownbar
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  //Place in home page
  const [showPlace, setShowPlace] = useState(false)
  //Button About Us in home page
  const [showBtnAbout, setShowBtnAbout] = useState(null)

  useEffect(() => {
    console.log('locaton',location)
    // localStorage.removeItem('setBtn')
    console.log('setBtn',localStorage.getItem('setBtn'))
    if (localStorage.getItem('setBtn') == null) {
      setShowBtnAbout(true)
    } else {
      setShowBtnAbout(false)
      localStorage.removeItem('setBtn')
    }
    // {showBtnAbout: true} : localStorage.getItem('setBtn') == 'false' ? {showBtnAbout: false} : {showBtnAbout: true}
  }, [])

  

  const AboutusClick = () => {
    push('./AboutUs')
    setShowBtnAbout(false)
    localStorage.setItem('setBtn', false)
  }

  const Place1Click = () => {
    push('./Place1')
    setShowPlacesbar(true)
    setShowPlace(false)
    setShowBtnAbout(true)
  }

  const Place2Click = () => {
    push('./Place2')
    setShowPlace(false)
    setShowBtnAbout(true)
    setShowPlacesbar(true)
  }

  return (
    <div >

      <Navbar color="dark" dark expand="md" >
        <NavbarBrand color="dark" href="/">SmartParking</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        { showPlacesbar &&
        <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto"  >
          <UncontrolledDropdown nav inNavbar >
            <DropdownToggle nav caret >
              Places
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={Place1Click}>Place 1</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={Place2Click}>Place 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        </Collapse>
        }
      </Navbar>
      
      {
        showBtnAbout &&
      
      <div>
        <Button className="btnAbout" onClick={AboutusClick}>
          About Us
        </Button>
      </div>
       }
    </div>
  )
}
export default HeaderBar