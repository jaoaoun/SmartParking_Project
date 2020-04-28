import React from 'react'
import '../../css/indexApp.css'
import { Container, Row, Col, Card, CardTitle, CardText} from 'reactstrap'

export const FooterHome = () => {
  return (
    <div>
      
        <div className="Beforeft-home">
          <Container >
            <Row>
              <Col sm="6" >
                <Card body>
                  <CardTitle>IOS</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>ANDRIOD</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <footer className="footer">
        <div >
            <Container>
                
            </Container>
        </div>
      </footer>
    </div>
  )
}
export default FooterHome
