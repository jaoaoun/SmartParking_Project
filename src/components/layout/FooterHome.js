import React from 'react'
import '../../css/FooterHome.css'
import { Container} from 'reactstrap'


export const FooterHome = () => {
  return (
    

    // <footer className="footer fixed-bottom">
    //   <div>
    //     <p></p>
    //     <Card.Group centered>
    //       <Card fluid bg="dark" className="text-center p-3" md={6}>
    //         <CardBody>
    //           <CardTitle>Download App Free</CardTitle>
    //           <CardContent>
    //             <Row align="center">
    //               <Col>
    //                 <div>
    //                   <Card>
    //                     <CardTitle>IOS</CardTitle>
    //                     <img src={require('../../img/Grey.png')} alt="logo" className="roecar" />
    //                   </Card>
    //                 </div>
    //               </Col>
    //               <Col>
    //                 <div>
    //                   <Card></Card>
    //                 </div>
    //               </Col>
    //             </Row>
    //           </CardContent>
    //         </CardBody>
    //       </Card>
    //     </Card.Group>
    //   </div>

    //   <div align="center">
    //     <Container>
    //       <p>Smart Parking Project &copy; 2020 Nattida P. All right reserved.</p>
    //     </Container>
    //   </div>
    // </footer>
    <div>
    <footer className="footer fixed-bottom">
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
          <p className="copyright">Smart Parking Project &copy; 2020 Nattida P. All right reserved.</p>
        </Container>
      </div>
    </footer>
  </div>
  )
}
export default FooterHome
