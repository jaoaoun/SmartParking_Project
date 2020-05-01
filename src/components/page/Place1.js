import React, { useEffect, useState } from 'react'
import '../../css/indexApp.css'
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'
import * as firebase from 'firebase'
import Iframe from 'react-iframe'

export const Place1 = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

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
          <h1>Place1</h1>
          <button type="button" class="btn btn-outline-info ml-5" onClick={toggle}>Info</button>
        </Row>
        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>Place Info</ModalHeader>
          <ModalBody>
            <div class="d-flex justify-content-center">
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.40165234832!2d100.7723961!3d13.7275048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2e8705e1eebfc3e!2z4Lit4Liy4LiE4Liy4LijIDEyIOC4iuC4seC5ieC4mSDguKrguJbguLLguJrguLHguJnguYDguJfguITguYLguJnguYLguKXguKLguLXguJ7guKPguLDguIjguK3guKHguYDguIHguKXguYnguLLguYDguIjguYnguLLguITguLjguJPguJfguKvguLLguKPguKXguLLguJTguIHguKPguLDguJrguLHguIc!5e0!3m2!1sth!2sth!4v1588334447113!5m2!1sth!2sth"
                width="600"
                height="450"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <div className="row no-gutter justify-content-center">
          <Row>
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
          </Row>
        </div>

        <Row className="gap" />

        <div className="row no-gutter justify-content-center">
          <Row>
            <Col sm={2} align="center">
              <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
              <p className="No-car">006</p>
            </Col>
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
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Place1
