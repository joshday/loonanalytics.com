import React from 'react'
import { Row, Col, Card, Container } from 'react-materialize'

export default function Home() {
  return (<div>
    <Row className="center" style={{marginLeft: 50, marginRight: 50, minHeight: 300}}>
      <Col s={12} m={6} className="valign-wrapper" style={{ minHeight: 300 }}>
        <h4>Solutions for analytics, optimization, data science, and machine learning</h4>
      </Col>
      <Col s={12} m={6} className="valign-wrapper" style={{ minHeight: 300 }}>
        <img className="hero-logo" src="/img/loonsquarecircle.png" alt="logo"/>
      </Col>
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
