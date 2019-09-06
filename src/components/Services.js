import React from 'react'
import { Row, Col, Card, Container } from 'react-materialize'

export default function Services() {
  return <Container>
    <Row style={{marginTop: 20}}>
      <Col s={12} m={6}>
        <Card title="Consulting" className="teal darken-4 white-text">
          <p>We provide a variety of general consulting services: everything from code review to statistical analysis.</p>
        </Card>
      </Col>
      <Col s={12} m={6}>
        <Card title="Julia Workshops" className="teal darken-4 white-text">
          <p>
            Julia workshops are provided in a half-day or full-day format, covering:
          </p>
        </Card>
      </Col>
    </Row>
  </Container>
}
