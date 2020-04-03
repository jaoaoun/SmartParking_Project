import React from 'react'
import { Col, Row, Container, Button} from 'reactstrap'
import { useHistory } from 'react-router'


export const AboutUs = () => {

  const { push } = useHistory()

  const handleClick = () => {
    push('./SmartParking')
  }


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
            <div >
              <img src={require('../pic/Por.jpg')} alt="logo" className="dev" />
              <p className="NameDev">NITHI SEMANUANG</p>
              <p className="NameDev">Hardware Developer</p>
            </div>
          </Col>
          <Col>
            <div >
              <img src={require('../pic/Nine.jpg')} alt="logo" className="dev" />
              <p className="NameDev">PAPON PROMMOOL</p>
              <p className="NameDev">Administration / Document Controller</p>
            </div>
          </Col>
          <Col>
            <div >
              <img src={require('../pic/O.jpg')} alt="logo" className="dev" />
              <p className="NameDev">SORAYUTH CHAROENSRISAN</p>
              <p className="NameDev">Software Developer</p>
            </div>
          </Col>
        </Row>
        <div>
          <Button className="btn-back" onClick={handleClick}>Back</Button>
        </div>
      </Container>
      {/* <p>About Us</p> */}
    {/* </React.Fragment> */}
    </div>
  )
}

export default AboutUs
