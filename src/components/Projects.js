import React from 'react'
import { Row, Col, Card, Container } from 'react-materialize'

// title link oneLiner
const Prod = props => {
  return <Col s={12} m={6}>
    <Card title={props.title} 
        className="large center blue lighten-5">
      <h4><a className="btn btn-large blue" target="_blank" rel="noopener noreferrer" href={props.link}>Link</a></h4>
      <p>{props.oneLiner}</p>
      {props.children}
    </Card>
  </Col>
}

//-----------------------------------------------------------------------------// Products
export default function Projects() {
  return <Container>
    <Row className="" style={{marginTop: 20}}>

      <Prod title="One Click Tuner" link="https://oneclicktuner.com" 
       oneLiner="Chromatic musical instrument tuner for iOS." 
      >
        <a href="https://www.producthunt.com/posts/one-click-tuner?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-one-click-tuner" target="_blank" rel="noopener noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=153658&theme=light" alt="One Click Tuner - The best chromatic tuner for iOS | Product Hunt Embed" style={{width: 250, height: 54}} width="250px" height="54px" /></a>
        <img src="https://user-images.githubusercontent.com/8075494/83570621-61eb2f80-a4f4-11ea-9def-62c9dd8f0d1c.png" alt="one click tuner logo" style={{height: 250}} className="rounded-corners"/>
      </Prod>

      <Prod 
        title="OnlineStats.jl"
        link="https://github.com/joshday/OnlineStats.jl"
        oneLiner="On-line algorithms for statistics on big data."
      >
        <img src="https://user-images.githubusercontent.com/8075494/57313750-3d890d80-70be-11e9-99c9-b3fe0de6ea81.png"     
          alt="onlinestats logo" style={{height: "auto", width: "100%"}}/>
      </Prod>

      <Prod 
        title="HTML Color Helper"
        link="https://htmlcolorhelper.com"
        oneLiner="Easy-to-use tool that helps you design and compare three-color website palettes."
      >
        <img src="https://user-images.githubusercontent.com/8075494/78169166-fc5cc300-741e-11ea-95e4-593b90070425.png" 
          alt="html color helper img" style={{height: "auto", width: "100%", borderRadius: 2}}/>
      </Prod>

    </Row>
  </Container>
}
