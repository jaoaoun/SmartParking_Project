import React from 'react'
import '../../css/Footer.css'
import { Container, Row, Col } from 'reactstrap'

export const Footer = () => {
  return (
    <div className="borderfooter">
      <footer className="footer">
        <div className="div-footer">
          <Container>
            <div>
              <p className="text-footer">Download SmartParking App Free</p>
            </div>
            <Row>
              <div className="mr-auto">
                <Col>
                  <img src={require('../../img/Apple.png')} alt="logo" className="img-download" />
                  <img src={require('../../img/Playapp.png')} alt="logo" className="img-download" />
                </Col>
              </div>
              <div>
                <Col className="ml-auto">
                  <a href="http://www.kmitl.ac.th/" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../img/kmi.jpg')} alt="logo" className="img-footer" />
                  </a>
                  <a href="https://ite.kmitl.ac.th/" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../img/ite-logo.png')} alt="logo" className="img-footer" />
                  </a>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
        <hr className="hr-footer"></hr>
        <div align="center">
          <Container>
            <p className="copyright">Smart Parking Project &copy; 2020. All right reserved.</p>
          </Container>
        </div>
      </footer>
    </div>
  )
}
export default Footer
