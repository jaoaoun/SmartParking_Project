import React from 'react'
import { Col, Row, Container, Button, Figure } from 'reactstrap'

export const AboutUs = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row >
          <Col>
            <img src={require('../pic/kmi.jpg')} alt="logo" className="kmitl-logo" />
          </Col>
        </Row>
        <Row>   
          
          <img src={require('../pic/Por.jpg')} alt="logo" className="dev"  />
          
          <img src={require('../pic/Nine.jpg')} alt="logo" className="dev" />
          
          
          <img src={require('../pic/O.jpg')} alt="logo" className="dev" />
         
        </Row>
        <Row>
          <Col>
          <p className="NameDev">NITHI SEMANUANG</p>
          <p className="content">Hardware Developer</p>
          </Col>
          <Col>
          <p className="NameDev">PAPON PROMMOOL</p>
          </Col>
          <Col>
          <p className="NameDev">SORAYUTH CHAROENSRISAN</p>
          </Col>
        </Row>
      </Container>
      {/* <p>About Us</p> */}
    </React.Fragment>
  )
}

export default AboutUs


