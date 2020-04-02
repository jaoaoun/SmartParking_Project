import React from 'react'
import { Col, Row, Container } from 'reactstrap'

export const AboutUs = () => {
  return (
    <div>
    {/* <React.Fragment> */}
      <Container fluid>
        <Row>
          <Col>
            <img src={require('../pic/kmi.jpg')} alt="logo" className="kmitl-logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="NameDev">
              <img src={require('../pic/Por.jpg')} alt="logo" className="dev" />
              <p>NITHI SEMANUANG</p>
              <p>Hardware Developer</p>
            </div>
          </Col>
          <Col>
            <div className="NameDev">
              <img src={require('../pic/Nine.jpg')} alt="logo" className="dev" />
              <p>PAPON PROMMOOL</p>
              <p>Administration / Document Controller</p>
            </div>
          </Col>
          <Col>
            <div className="NameDev">
              <img src={require('../pic/O.jpg')} alt="logo" className="dev" />
              <p>SORAYUTH CHAROENSRISAN</p>
              <p>Software Developer</p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <p>About Us</p> */}
    {/* </React.Fragment> */}
    </div>
  )
}

export default AboutUs
