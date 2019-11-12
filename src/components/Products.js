import React from 'react'
import { Row, Col, Card, Container } from 'react-materialize'

const Prod = props => {
  return <Col s={12} m={6}>
    <Card title={props.title} 
        className="large center grey darken-4 white-text rounded-corners z-depth-0">
      <h4><a className="btn blue" target="_blank" rel="noopener noreferrer" href={props.link}>Link</a></h4>
      {props.productHunt && 
        <a href={props.productHunt} rel="noopener noreferrer" target="_blank">
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=163769&theme=light" height="100%" width="100"
          alt={`Product Hunt Link: ${props.title}`} style={{ height: "100%", width: 200}} />
        </a>
      }
      <br /><br />
      <p>{props.description}</p>
      <br />
      <img style={{ ...props.imgStyle, maxWidth: "100%", maxHeight: "100%" }} 
        src={props.img} alt={`img: ${props.title}`}/>
    </Card>
  </Col>
}

//-----------------------------------------------------------------------------// Products
export default function Products() {
  return <Container>
    <Row className="" style={{marginTop: 20}}>

      <Prod 
        title="One Click Tuner"
        link="https://oneclicktuner.com"
        productHunt="https://www.producthunt.com/posts/one-click-tuner?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-one-click-tuner"
        img="https://oneclicktuner.com/img/tuner.gif"
        imgStyle={{borderRadius: 10, border: "1px solid white", height: 225 }}
        description="Chromatic musical instrument tuner for iOS." />

      <Prod 
        title="StatsOK.com"
        link="https://statsok.com"
        description="Interactive modern statistics courses."
        img="https://user-images.githubusercontent.com/8075494/64424484-388d9800-d077-11e9-8652-4ea94df820c9.png"
        imgStyle={{borderRadius: 10}} />

      <Prod 
        title="OnlineStats.jl"
        link="https://github.com/joshday/OnlineStats.jl"
        img="https://user-images.githubusercontent.com/8075494/57313750-3d890d80-70be-11e9-99c9-b3fe0de6ea81.png"
        imgStyle={{backgroundColor: "white", borderRadius: 10}}
        description="On-line algorithms for statistics." />

    </Row>
  </Container>
}
