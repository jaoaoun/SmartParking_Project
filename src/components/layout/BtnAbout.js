import React, { useState, useEffect } from 'react'
import '../../css/indexApp.css'
import { useHistory } from 'react-router'
import {
  Button,
} from 'reactstrap'





export const BtnAbout = () => {
  
  //Button About Us in home page
  const [showBtnAbout, setShowBtnAbout] = useState(false)

  const { push } = useHistory()

  const AboutusClick = () => {
    push('./AboutUs')
    setShowBtnAbout(false)
  }

  useEffect(() => {
    localStorage.clear()
    var btnAboutUs = localStorage.getItem('setBtn')
    if (!btnAboutUs) {
      setShowBtnAbout(true)
    }
  }, [])

  

  return (
      <div>

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
export default BtnAbout