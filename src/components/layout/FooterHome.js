import React from 'react'
import '../../css/HeaderFooter.css'
import { Container, Card, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap'
import apk from '../../file/Smart-Parking-1.0.apk'

export const FooterHome = () => {
  return (
    <div>
      <Container fluid>
        <Card className="text-center bg-dark" md={6}>
          <CardBody className="pb-4">
            <CardTitle className="text-white">Do you want to book a park?</CardTitle>
            <CardSubtitle className="text-white pb-3">Download Now! Smart Parking Mobile App.</CardSubtitle>
            <Row align="center">
              <Col>
                <Card className="contentApp">
                  <CardTitle>IOS</CardTitle>
                  <p>
                    You can scan this QR code with your{' '}
                    <a
                      href="https://itunes.apple.com/app/apple-store/id982107779"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Expo mobile app
                    </a>{' '}
                    to load this.
                  </p>
                  <div><img src={require('../../img/apple.jpg')} alt="logo" /></div>
                </Card>
              </Col>
              <Col>
                <Card className="contentApp">
                  <CardTitle>Andriod</CardTitle>
                  Direct download .apk file
                  <a href={apk} target="_blank" download rel="noopener noreferrer">
                    <img src={require('../../img/android.png')} alt="logo" />
                  </a>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>

      <div>
        <footer className="footer">
          <div className="div-footer">
            <Container>
              <div align="center">
                <span>
                  <a href="http://www.kmitl.ac.th/" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../img/kmi.jpg')} alt="logo" className="img-footerhome" />
                  </a>
                  <a href="https://ite.kmitl.ac.th/" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../img/ite-logo.png')} alt="logo" className="img-footerhome" />
                  </a>
                </span>
              </div>
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
    </div>
  )
}
export default FooterHome
