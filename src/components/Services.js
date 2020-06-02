import React from 'react'
import { Row, Col, Card, Container, Icon } from 'react-materialize'

const Service = props => {
  return <Col s={12} m={6}>
  <Card className="medium teal lighten-5">
    <div className="center">
      <Icon large>{props.icon}</Icon>
    </div>
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

      <Service title="Software" icon="build"
        text = "We build custom analytical software.  Anything within the realm of machine learning, forecasting, interactive dashboards, and numerical optimization."
        buttonText="Contact Us" />

      <Service title="Consulting" icon="business"
        text="We provide a variety of general consulting services: everything from code review to statistical analysis."
        buttonText="Contact Us" />

      <Service title="Teaching" icon="school"
        text="Our PhDs have wide-ranging expertise on various topics related to statistics, on-line algorithms, machine learning, and numerical optimization."
        buttonText="Contact Us" />


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
