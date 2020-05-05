import React, { useState, useEffect, useCallback } from 'react'
// import '../../css/indexApp.css'
import '../../css/HeaderFooter.css'
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
  Container
} from 'reactstrap'

export const HeaderBar = () => {
  const { push } = useHistory()
  const location = useLocation()
  //Navbar Places
  const [showPlacesbar, setShowPlacesbar] = useState(null)
  //Dropdownbar
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const [showPlace1, setShowPlace1] = useState(null)
  const [showPlace2, setShowPlace2] = useState(null)
  //Button About Us in home page
  const [showBtnAbout, setShowBtnAbout] = useState(null)
  const [namePlaces, setNamePlaces] = useState('Places')

  const checkPage = useCallback(() => {
    if (location.pathname === '/') {
      setShowBtnAbout(true)
      setShowPlacesbar(false)
    } else if (location.pathname === '/AboutUs') {
      setShowBtnAbout(false)
      setShowPlacesbar(false)
    } else if (location.pathname === '/Place1') {
      setShowBtnAbout(true)
      setShowPlacesbar(true)
      setNamePlaces('Convention Hall')
      setShowPlace2(true)
    } else {
      setShowBtnAbout(true)
      setShowPlacesbar(true)
      setNamePlaces('12 Building Floor')
      setShowPlace1(true)
    }
  }, [location.pathname])

  useEffect(() => {
    checkPage()
  }, [checkPage])

  const AboutusClick = () => {
    push('./AboutUs')
    setShowBtnAbout(false)
  }

  const Place1Click = () => {
    push('./Place1')
    setShowPlacesbar(true)
    setShowBtnAbout(true)
    setShowPlace1(false)
    setShowPlace2(true)
  }

  const Place2Click = () => {
    push({ pathname: './Place2' })
    setShowBtnAbout(true)
    setShowPlacesbar(true)
    setShowPlace1(true)
    setShowPlace2(false)
  }

  return (
    <div>
      <div className="d-nav">
        <Navbar color="dark" dark expand="md" className="fixed-top">
          <NavbarBrand color="dark" href="/">
            <img
              src={require('../../img/logonew.png')}
              width="45"
              height="30"
              class="d-inline-block align-top"
              alt="logo"
              className="logo-sp"
            />
            SmartParking
          </NavbarBrand>
          {showPlacesbar && <NavbarToggler onClick={toggle} />}
          {showPlacesbar && (
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar className="ml-auto">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="ml-auto">
                    {namePlaces}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {showPlace1 && <DropdownItem onClick={Place1Click}>Convention Hall</DropdownItem>}
                    {showPlace2 && <DropdownItem onClick={Place2Click}>12 Building Floor</DropdownItem>}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          )}
        </Navbar>
      </div>

      {showBtnAbout && (
        <div className="btnAbout">
          <Container>
            <Button className="front" onClick={AboutusClick}>
              About Us
            </Button>
          </Container>
        </div>
      )}
    </div>
  )
}
export default HeaderBar
