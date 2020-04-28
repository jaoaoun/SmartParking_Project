import React, { useEffect } from 'react'
import '../../css/indexApp.css'
import { Container, Row, Col } from 'reactstrap'
import * as firebase from 'firebase'

export const Place2 = () => {
  const fetchingSensor = () => {
    firebase
      .database()
      .ref('Devices/Node-001')
      .once('value', (data) => {
        console.log(data.toJSON().Sensor)
      })
  }

  useEffect(() => {
    fetchingSensor()
  })

  return (
    <div>
      <Container>
        <Row>
          <h1>Place2</h1>
        </Row>
        <div className="row no-gutter">
        <Row >
          <Col sm={2} align="center">
            <p className="No-car">001</p>
            <img src={require('../../img/Grey.png')} alt="logo" />
          </Col>
          <Col sm={2} align="center">
            <p className="No-car">002</p>
            <img src={require('../../img/Grey.png')} alt="logo" />
          </Col>
          <Col sm={2} align="center">
            <p className="No-car">003</p>
            <img src={require('../../img/Grey.png')} alt="logo" />
          </Col>
          <Col sm={2} align="center">
            <p className="No-car">004</p>
            <img src={require('../../img/Grey.png')} alt="logo" />
          </Col>
          <Col sm={2} align="center">
            <p className="No-car">005</p>
            <img src={require('../../img/Grey.png')} alt="logo" />
          </Col>
          <Col sm={2} align="center">
            <p className="No-car">006</p>
            <img src={require('../../img/Grey.png')} alt="logo" />
          </Col>
        </Row>
        </div>
        <div>
        <Row className="gap">
        </Row>
        </div>
        <div className="row no-gutter">
        <Row>
          <Col sm={2} align="center">
            <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
            <p className="No-car">007</p>
          </Col>
          <Col sm={2} align="center">
            <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
            <p className="No-car">008</p>
          </Col>
          <Col sm={2} align="center">
            <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
            <p className="No-car">009</p>
          </Col>
          <Col sm={2} align="center">
            <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
            <p className="No-car">010</p>
          </Col>
          <Col sm={2} align="center">
            <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
            <p className="No-car">011</p>
          </Col>
          <Col sm={2} align="center">
            <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
            <p className="No-car">012</p>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  )
}

export default Place2
