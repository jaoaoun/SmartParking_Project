import React, { useEffect, useState } from 'react'
import '../../css/indexApp.css'
import { useHistory } from 'react-router'
import { Container, Row, Col } from 'reactstrap'
import * as firebase from 'firebase'

export const Home = () => {
  const { push } = useHistory()
 
  const [arrangePlace,setArrangePlace] = useState([])

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

  const _placeList = () => {{/* <Image source={{ uri: img }} /> */}
    return arrangePlace.map(({ img, name }, index) => (
         <Col key={index}>
        <button className="place-btn" onClick={() => push(`./Place${index+1}`)}>
          <img src={`${img}`} alt="logo" className="Place-logo" />
          <p align="center">{`${name}`}{` !พี่อ้วน format code(alt+shift+F) ก่อนcommitด้วยนะงับ!`}</p>
        </button>
        </Col>
    ))
  }

  return (
    <div>
      <Container>
        <Row>
            <_placeList/>
        </Row>
            {/* <div>
              <button className="place-btn" onClick={Place2Click}>
                <img src={require('../../img/P2.jpg')} alt="logo" className="Place-logo" />
              </button>
              <p align="center">Place2</p>
            </div> */}
</Container>
    </div>
  )
}
export default Home
