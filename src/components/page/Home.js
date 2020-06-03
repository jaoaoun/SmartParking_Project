import React, { useEffect, useState } from 'react'
import '../../css/indexApp.css'
import { useHistory } from 'react-router'
import { Container, Row, Col } from 'reactstrap'
import * as firebase from 'firebase'

export const Home = () => {
  const { push } = useHistory()

  const [arrangePlace, setArrangePlace] = useState([])

  useEffect(() => {
    firebase
      .database()
      .ref('Devices')
      .on('value', (data) => {
        const placeData = Object.values(data.val()).map(({ Place: { img, name } }) => ({ img, name }))
        const filteredArrangePlace = placeData.filter(
          ({ name }, index, selfs) => selfs.findIndex((self) => self.name === name) === index
        )
        setArrangePlace(filteredArrangePlace)
      })
    }, [])

  const handlePlace = (name,index) => () => {
    push('./Place'+(index+1),{Place: name})
  }
  const placeList = () => {
    return arrangePlace.map(({ img, name }, index) => (
      <Col key={index}>
        <button className="place-btn" onClick={handlePlace(name,index)}>
          <img src={`${img}`} alt="logo" className="Place-logo" />
          <p align="center">{`${name}`}</p>
        </button>
      </Col>
    ))
  }

  return (
    <div>
      <Container>
        <Row>{placeList()}</Row>
      </Container>
    </div>
  )
}
export default Home
