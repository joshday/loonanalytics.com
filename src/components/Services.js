import React from 'react'
import { Row, Col, Card, Container } from 'react-materialize'

export default function Services() {
  return <Container>
    <Row style={{marginTop: 20}}>
      <Col s={12} m={6}>
        <Card title="Consulting" className="black darken-4 white-text">
          <p>We provide a variety of general consulting services: everything from code review to statistical analysis.</p>
          <br />
          <Row className="center">
            <a className="btn btn-large" href="mailto:info@loonanalytics.com?Subject=Consulting">How can we help?</a>
          </Row>
        </Card>
      </Col>

      <Col s={12} m={6}>
        <Card title="Julia Workshops" className="black darken-4 white-text">
          <p>
            Julia workshops are provided in a half-day or full-day format, covering everything from installation and Julia basics to the state-of-the-art of machine learning in Julia.
          </p>
          <br />
          <Row className="center">
            <a className="btn btn-large" href="mailto:info@loonanalytics.com?Subject=Workshops">Contact us for pricing</a>
          </Row>
        </Card>
      </Col>

    </Row>
  </Container>
}
