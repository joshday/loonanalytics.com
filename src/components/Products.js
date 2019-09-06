import React from 'react'
import { Row, Col, Card, Container } from 'react-materialize'

export default function Products() {
  return <Container>
    <Row className="flex">

      <Col s={12} m={6}>
        <Card title="ML Monitor" className="center indigo darken-4 white-text">
          <h4><a className="btn" target="_blank" rel="noopener noreferrer" href="http://signals.loonanalytics.com">Link</a></h4>
          <p>Monitoring API/Dashboard for machine learning models in production.</p>
          <br />
          <img src="https://user-images.githubusercontent.com/8075494/62552461-b1f95700-b83b-11e9-9ff1-9dc2b8c587a8.png"
            alt="signal-img" width="100%"/>
        </Card>
      </Col>

      <Col s={12} m={6}>
        <Card title="One Click Tuner" className="center indigo darken-4 white-text">
          <h4><a className="btn" target="_blank" rel="noopener noreferrer" href="https://oneclicktuner.com">Link</a></h4>
          <p>Chromatic musical instrument tuner for iOS.</p>
          <br />
          <img src="https://oneclicktuner.com/img/tuner.gif" alt="tuner-gif"
            style={{ height: 300, borderRadius: 10 }} />
        </Card>
      </Col>

      <Col s={12} m={6}>
        <Card title="statsok.com" className="center indigo darken-4 white-text">
          <h4><a className="btn" target="_blank" rel="noopener noreferrer" href="https://statsok.com">Link</a></h4>
          <p>Modern interactive statistics courses.</p>
          <br />
          <img src="https://user-images.githubusercontent.com/8075494/64424484-388d9800-d077-11e9-8652-4ea94df820c9.png" alt="statsok-img" width="100%" style={{borderRadius: 10}}/>
        </Card>
      </Col>
    </Row>
  </Container>
}
