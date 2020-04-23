import React, { useState, useEffect } from 'react'
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





export const HeaderBar = () => {
  // //Navbar Places
  // const [showPlacesbar, setShowPlacesbar] = useState(false)
  // //Dropdownbar
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(!isOpen)
  //Place in home page
  const [showPlace, setShowPlace] = useState(false)
  //Button About Us in home page
  //const [showBtnAbout, setShowBtnAbout] = useState(false)

  // useEffect(() => {
  //   localStorage.clear()
  //   var btnAboutUs = localStorage.getItem('setBtn')
  //   if (!btnAboutUs) {
  //     setShowBtnAbout(true)
  //   }
  // }, [])

  const { push } = useHistory()

  // const AboutusClick = () => {
  //   push('./AboutUs')
  //   setShowPlace(false)
  //   setShowBtnAbout(false)
  // }

  const Place1Click = () => {
    push('./Place1')
    //setShowPlacesbar(true)
    setShowPlace(false)
    //setShowBtnAbout(true)
  }

  const Place2Click = () => {
    push('./Place2')
    setShowPlace(false)
    //setShowBtnAbout(true)
    //setShowPlacesbar(true)
  }

  return (
    <div >

      <Navbar color="dark" dark expand="md" >
        <NavbarBrand color="dark" href="/places">SmartParking</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        {/* { showPlacesbar &&
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
        } */}
      </Navbar>
      
      {/* {
        showBtnAbout &&
      
      <div>
        <Button className="btnAbout" onClick={AboutusClick}>
          About Us
        </Button>
      </div>
       } */}
    </div>
  )
}
export default HeaderBar