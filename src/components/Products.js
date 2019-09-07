import React from 'react'
import { Row, Col, Card, Container } from 'react-materialize'

export default function Products() {
  return <Container>
    <Row className="flex" style={{marginTop: 20}}>

      <Col s={12} m={6}>
        <Card title="ML Monitor" className="center black white-text">
          <h4><a className="btn" target="_blank" rel="noopener noreferrer" href="http://signals.loonanalytics.com">Link</a></h4>
          <a href="https://www.producthunt.com/posts/loon-analytics?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-loon-analytics" rel="noopener noreferrer" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=163769&theme=light" alt="Loon Analytics - Easy long-term trend monitoring | Product Hunt Embed" style={{width: 250, height: 54}} /></a>
          <br /><br />
          <p>Monitoring API/Dashboard for machine learning models in production.</p>
          <br />
          <img src="https://user-images.githubusercontent.com/8075494/62552461-b1f95700-b83b-11e9-9ff1-9dc2b8c587a8.png"
            alt="signal-img" width="100%"/>
        </Card>
      </Col>

      <Col s={12} m={6}>
        <Card title="One Click Tuner" className="center black white-text">
          <h4><a className="btn" target="_blank" rel="noopener noreferrer" href="https://oneclicktuner.com">Link</a></h4>
          <a href="https://www.producthunt.com/posts/one-click-tuner?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-one-click-tuner" rel="noopener noreferrer"  target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=153658&theme=light" alt="One Click Tuner - A simple, innovative tuning solution for musicians | Product Hunt Embed" style={{width: 250, height: 54}}/></a>
          <br /><br />
          <p>Chromatic musical instrument tuner for iOS.</p>
          <br />
          <img src="https://oneclicktuner.com/img/tuner.gif" alt="tuner-gif"
            style={{ height: 300, borderRadius: 10, borderColor: "white", borderWidth: "1px", borderStyle: "solid" }} />
        </Card>
      </Col>

      <Col s={12} m={6}>
        <Card title="statsok.com" className="center black white-text">
          <h4><a className="btn" target="_blank" rel="noopener noreferrer" href="https://statsok.com">Link</a></h4>
          <p>Modern interactive statistics courses.</p>
          <br />
          <img src="https://user-images.githubusercontent.com/8075494/64424484-388d9800-d077-11e9-8652-4ea94df820c9.png" alt="statsok-img" width="100%" style={{borderRadius: 10}}/>
        </Card>
      </Col>

      <Col s={12} m={6}>
        <Card title="OnlineStats.jl" className="center black white-text">
          <h4><a className="btn" target="_blank" rel="noopener noreferrer" href="https://github.com/joshday/OnlineStats.jl">Link</a></h4>
          <p>On-line algorithms for statistics.</p>
          <br />
          <img src="https://user-images.githubusercontent.com/8075494/57313750-3d890d80-70be-11e9-99c9-b3fe0de6ea81.png"
            alt="statsok-img" className="white" width="100%" style={{ borderRadius: 10 }} />
        </Card>
      </Col>
    </Row>
  </Container>
}
