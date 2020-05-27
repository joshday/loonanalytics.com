import React from 'react'
import { Row, Col, Card, Container, Divider } from 'react-materialize'

export default function Home() {
  return <div>
    <Row className="center">
      <Container className="flex" style={{ minHeight: 300 }}>
        <Col s={12} m={6} className="valign-wrapper">
          <Card className="z-depth-0 valign-wrapper" style={{ height: 300 }}>
            <h5>Data Visualization</h5>
            <h5>Big Data Analytics</h5>
            <h5>Numerical Optimization</h5>
            <h5>Machine Learning</h5>
          </Card>
        </Col>
        <Col s={12} m={6}>
          <Card className="z-depth-0 valign-wrapper" style={{ height: 300 }}>
            <img className="hero-logo" src="/img/loonsquarecircle.png" alt="logo" />
          </Card>
        </Col>
      </Container>
    </Row>

    <Container><Divider /></Container>

    <Row>
      <h4 className="center">Reviews</h4>
      <Container className="center">
        <Col s={12} m={6}>
          <Card className="rounded-corners">
            <img src="https://user-images.githubusercontent.com/8075494/66781202-ab710680-eea0-11e9-910a-9e837f6e31d4.png" width="30%" alt="glc logo" className="grayscale center" style={{display: "block", marginBottom: 10, marginLeft: "auto", marginRight: "auto"}} />
            <blockquote>
              Josh has been a savior on our project, not just his in depth understanding of very recent and pertinent issues related to Julia and JuliaDB, but his ability to clearly articulate modern data science approached to solving real business questions.  This combination of technical and communication is rare.  Lastly, his productivity is unmatched with respect to consultants we have used.
            </blockquote>
            <br />
            <p>
              -Chuck Weise at <a target="_blank" rel="noopener noreferrer" href="http://www.glcs.io">GLC</a>
            </p>
          </Card>
        </Col>
      </Container>
    </Row>

  </div>
}
