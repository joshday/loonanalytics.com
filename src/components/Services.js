import React from 'react'
import { Row, Col, Card, Container } from 'react-materialize'

const Service = props => {
  return <Col s={12} m={6}>
  <Card className="medium rounded-corners z-depth-0" 
      style={{ border: "5px solid #80cbc4" }}>
    <h3 className="center">{props.title}</h3>
    <p>{props.text}</p>
    <br />
    <Row className="center">
      <a className="btn btn-large blue" href={`mailto:info@loonanalytics.com?Subject={props.title}`}>
        {props.buttonText}
      </a>
    </Row>
  </Card>
</Col>
}

//-----------------------------------------------------------------------------// Services
export default function Services() {
  return <Container style={{marginTop: 20}}>
    <Row className="flex">

      <Service title="Software"
        text = "We build custom analytical software.  Anything within the realm of machine learning forecasting, interactive dashboards, and optimization."
        buttonText="What Can We Build for You?" />

      <Service title="Consulting"
        text="We provide a variety of general consulting services: everything from code review to statistical analysis"
        buttonText="How Can We Help?" />


      <Col s={12} m={6} style={{display: "none"}}>
        <Card title="Julia Workshops" className="black darken-4 white-text">
          <p>
            Julia workshops are provided in a half-day or full-day format, covering everything from installation and Julia basics to the state-of-the-art of machine learning in Julia.
          </p>
          <br />
          <Row className="center">
            <a className="btn btn-large" href="mailto:info@loonanalytics.com?Subject=Workshops">What do you want to learn?</a>
          </Row>
        </Card>
      </Col>

    </Row>
  </Container>
}
