import React from 'react'
import { Row, Col, Card, Container } from 'react-materialize'

export default function Home() {
  return (<div>
    <Row className="center valign-wrapper" style={{height: 400}}>
      <Col s={1} />
      <Col s={10} m={5}>
        <h4>Solutions for analytics, optimization, data science, and machine learning</h4>
      </Col>
      <Col s={10} m={5}>
        <img className="center" src="/img/loonsquarecircle.png" alt="logo" height="250" />
      </Col>

      <Col s={1} />
    </Row>

    <Row style={{display: "none"}}>
      <h3 className="center">Testimonials</h3>
      <Container>
        <Col s={6} m={4}>
          <Card className="black white-text">
            Testimony 1
          </Card>
        </Col>

        <Col s={6} m={4}>
          <Card className="black white-text">
            Testimony 2
          </Card>
        </Col>

        <Col s={6} m={4}>
          <Card className="black white-text">
            Testimony 3
          </Card>
        </Col>
      </Container>
    </Row>

  </div>)
}
