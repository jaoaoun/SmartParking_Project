import React from 'react'
import '../../css/HeaderFooter.css'
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardContent, Row, Col } from 'reactstrap'

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
                <div>
                  <Card className="contentApp">
                    <CardTitle>IOS</CardTitle>
                    <img src={require('../../img/Apple.png')} alt="logo" className="cardimg-download" />
                  </Card>
                </div>
              </Col>
              <Col>
                <div>
                  <Card className="contentApp">
                    <CardTitle>Andriod</CardTitle>
                    <img src={require('../../img/Playapp.png')} alt="logo" className="cardimg-download" />
                  </Card>
                </div>
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
                  <img src={require('../../img/kmi.jpg')} alt="logo" className="img-footerhome" />
                  <img src={require('../../img/ite-logo.png')} alt="logo" className="img-footerhome" />
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
