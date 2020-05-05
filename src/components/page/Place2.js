import React, { useEffect, useCallback, useState } from 'react'
import '../../css/indexApp.css'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import axios from 'axios'
import Iframe from 'react-iframe'

export const Place2 = () => {
  const [carPark, setCarPark] = useState([])
  const parkReport = (num) => {
    if (carPark[num] === 0) {
      return 'Red'
    } else if (carPark[num] === 1) {
      return 'Green'
    } else {
      return 'Grey'
    }
  }

  const fetchingSensor = useCallback(async () => {
    const sensor = await axios.get(`http://127.0.0.1:5000/sensor/`) //http://34.87.153.90:5000/sensor
    setCarPark(sensor.data)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      fetchingSensor()
    }, 5000)
    parkReport()
  }, [fetchingSensor, parkReport])

  return (
    <div>
      <Container>
        <Row>
          <h1>12 Building Floor</h1>
        </Row>
        <div className="row no-gutter justify-content-center">
          <Row>
            <Col sm={2.4} align="center">
              <p className="No-car">001</p>
              <img src={require(`../../img/${parkReport(3)}.png`)} alt="logo" />
            </Col>
            <Col sm={2.4} align="center">
              <p className="No-car">002</p>
              <img src={require('../../img/Grey.png')} alt="logo" />
            </Col>
            <Col sm={2.4} align="center">
              <p className="No-car">003</p>
              <img src={require('../../img/Grey.png')} alt="logo" />
            </Col>
            <Col sm={2.4} align="center">
              <p className="No-car">004</p>
              <img src={require('../../img/Grey.png')} alt="logo" />
            </Col>
            <Col sm={2.4} align="center">
              <p className="No-car">005</p>
              <img src={require('../../img/Grey.png')} alt="logo" />
            </Col>
          </Row>
        </div>

        <Row className="gap" />

        <div className="row no-gutter justify-content-center ">
          <Row>
            <Col sm={2.4} align="center">
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p className="No-car">006</p>
            </Col>
            <Col sm={2.4} align="center">
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p className="No-car">007</p>
            </Col>
            <Col sm={2.4} align="center">
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p className="No-car">008</p>
            </Col>
            <Col sm={2.4} align="center">
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p className="No-car">009</p>
            </Col>
            <Col sm={2.4} align="center">
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p className="No-car">010</p>
            </Col>
          </Row>
        </div>
        <div align="center" className="mt-5">
          <Col sm={6}>
            <Card>
              <CardHeader>Location</CardHeader>
              <CardBody>
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8619671050146!2d100.77695021483021!3d13.726805590363574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzM2LjUiTiAxMDDCsDQ2JzQ0LjkiRQ!5e0!3m2!1sth!2sth!4v1588661034886!5m2!1sth!2sth"
                  width="100%"
                  height="300"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></Iframe>
                />
              </CardBody>
            </Card>
          </Col>
        </div>
      </Container>
    </div>
  )
}

export default Place2
