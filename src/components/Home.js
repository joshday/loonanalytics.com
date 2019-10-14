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

    <Row>
      <h3 className="center">Testimonials</h3>
      <Container className="center">
        <Col s={6}>
          <Card className="grey lighten-2 black-text">
            <img src="https://user-images.githubusercontent.com/8075494/66781202-ab710680-eea0-11e9-910a-9e837f6e31d4.png" width="40%" alt="glc logo" className="grayscale center" style={{display: "block", marginBottom: 10, marginLeft: "auto", marginRight: "auto"}} />
            <p>
              Josh has been a savior on our project, not just his in depth understanding of very recent and pertinent issues related to Julia and JuliaDB, but his ability to clearly articulate modern data science approached to solving real business questions.  This combination of technical and communication is rare.  Lastly, his productivity is unmatched with respect to consultants we have used.
            </p>
            <br />
            <p>
              -Chuck Weise at <a target="_blank" rel="noopener noreferrer" href="http://www.glcs.io">GLC</a>
            </p>
          </Card>
        </Col>
      </Container>
    </Row>

  </div>)
}
