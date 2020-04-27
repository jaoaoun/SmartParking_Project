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
  Button
} from 'reactstrap'

export const HeaderBar = () => {
  const { push } = useHistory()
  const location = useLocation()
  //Navbar Places
  const [showPlacesbar, setShowPlacesbar] = useState(null)
  //Dropdownbar
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  //Button About Us in home page
  const [showBtnAbout, setShowBtnAbout] = useState(null)

  useEffect(() => {
    checkPage()
  }, [location.pathname])
  const checkPage = () => {
    if (location.pathname == '/') {
      setShowBtnAbout(true)
      setShowPlacesbar(false)
    } else if (location.pathname == '/AboutUs') {
      setShowBtnAbout(false)
      setShowPlacesbar(false)
    } else {
      setShowBtnAbout(true)
      setShowPlacesbar(true)
    }
  }

  const AboutusClick = () => {
    push('./AboutUs')
    setShowBtnAbout(false)
  }

  const Place1Click = () => {
    push('./Place1')
    setShowPlacesbar(true)
    setShowBtnAbout(true)
  }

  const Place2Click = () => {
    push({ pathname: './Place2' })
    setShowBtnAbout(true)
    setShowPlacesbar(true)
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand color="dark" href="/">
          SmartParking
        </NavbarBrand>
        {showPlacesbar && <NavbarToggler onClick={toggle} />}
        {showPlacesbar && (
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="ml-auto">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
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
        )}
      </Navbar>

      {showBtnAbout && (
        <div>
          <Button className="btnAbout" onClick={AboutusClick}>
            About Us
          </Button>
        </div>
      )}
    </div>
  )
}
export default HeaderBar
