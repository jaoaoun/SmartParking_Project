import React, { useEffect } from 'react'
import '../../css/indexApp.css'
import { useHistory } from 'react-router'
import { Container, Row, Col } from 'reactstrap'

export const Home = () => {
  const { push } = useHistory()

  useEffect(() => {}, [])

  const Place1Click = () => {
    push('./Place1')
  }

  const Place2Click = () => {
    push('./Place2')
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <button className="place-btn" onClick={Place1Click}>
                <img src={require('../../img/p1.jpg')} alt="logo" className="Place-logo" />
              </button>
              <p align="center">Place1</p>
            </div>
          </Col>
          <Col>
            <div>
              <button className="place-btn" onClick={Place2Click}>
                <img src={require('../../img/P2.jpg')} alt="logo" className="Place-logo" />
              </button>
              <p align="center">Place2</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Home
