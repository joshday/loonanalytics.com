import React from 'react'
import { Row, Col } from 'react-materialize'

export default function Home() {
  return (
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
  )
}
