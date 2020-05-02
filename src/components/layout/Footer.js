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
                  <button className="border-0" onClick={() => window.open('http://www.kmitl.ac.th/', '_blank')}>
                    <img src={require('../../img/kmi.jpg')} alt="logo" className="img-footer" />
                  </button>
                  <button className="border-0" onClick={() => window.open('https://ite.kmitl.ac.th/', '_blank')}>
                    <img src={require('../../img/ite-logo.png')} alt="logo" className="img-footer" />
                  </button>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
        <hr className="hr-footer"></hr>
        <div align="center">
          <Container>
            <p className="copyright">Smart Parking Project &copy; 2020 Nattida P. => SRY. All right reserved.</p>
          </Container>
        </div>
      </footer>
    </div>
  )
}
export default Footer
