import React from 'react'
import { Row, Col, Card } from 'react-materialize'

const Person = props => {
  const name = props.firstName.toLowerCase()
  const mailto = 'mailto:' + name + '@loonanalytics.com?Subject=Hello'
  return (
    <Col s={12} m={4}>
      <Card className="black-text" title={props.title}>
        <Row className="section">
          <img src={props.img} alt="" width="auto" height="250px" className="rounded-corners" />
        </Row>
        {props.content}
        <Row className="section">
          <a className="btn large" href={mailto} >Email {name}</a>
        </Row>
      </Card>
    </Col>
  )
}

export default function Team() {
  return (
    <Row className="center">
      <h1>Meet the Team</h1>
      <Person title="Dr. Josh Day" firstName="Josh"
        img="https://user-images.githubusercontent.com/8075494/61563204-37f65f00-aa41-11e9-957c-64c51b8e6a63.png"
        content={
          <div>
            <p>
              Josh is part research scientist, data scientist, machine learning engineer, and software engineer.  He loves coding and his niche is the intersection of statistics, computer science, and translating whiteboard solutions into efficient computer programs.  One of his main areas of interest is on-line (single-pass) algorithms for statistics on big data.  He often finds himself learning and building things for fun, such as signal processing in order to build a <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/one-click-tuner/id1448329781">guitar tuner iOS app</a>.
            </p>
            <br />
            <p>
              As an active developer in the open source <a target="_blank" rel="noopener noreferrer" href="https://julialang.org">Julia</a> community, Josh contributes to libraries focused on high performance statistical computing.  His projects are openly shared on <a target="_blank" rel="noopener noreferrer" href="https://github.com/joshday">GitHub</a>.
            </p>
            <br />
            <p>
              Josh received his Ph.D. in Statistics from North Carolina State University in 2018, his B.S in Mathematics and Statistics from Winona State University in 2012, and his B.A. in Economics and Music from Winona State University in 2009.
            </p>
            <br />
            <p>When he's not coding, Josh will be found strumming his guitar, on his bike, or playing ultimate frisbee.</p>
          </div>
        }
      />

      <Person title="Dr. Milo Page" firstName="Milo"
        img="https://user-images.githubusercontent.com/8075494/61563205-37f65f00-aa41-11e9-812c-957bd3480330.png"
        content={
          <div>
            <p>Milo Page has five years of experience developing commercial statistical software. He’s fluent in several computer languages and especially enjoys the creative process of developing technically sophisticated methods that are accessible to a wide variety of researchers and scientists. He designed and implemented <a target="_blank" rel="noopener noreferrer" href="https://www.jmp.com/support/help/14-2/the-missing-value-report.shtml#633088">Automated Data Imputation</a>, a streaming machine learning method available in JMP Pro.</p>
            <br />
            <p>In addition to entrepreneurial ventures with Loon Analytics, Milo works as an independent statistical consultant. He has experience working with clients such as GraphPad Software developing user-friendly statistical software for life scientists.</p>
            <br />
            <p>He earned a PhD in statistics from NC State in 2018. Outside of his tech career, he’s an avid outdoorsman and spends his free time managing a ranch in sunny California overlooking the Pacific Ocean.</p>
          </div>
        }
      />

      <Person title="Dr. Neal Grantham" firstName="Neal"
        img="https://user-images.githubusercontent.com/8075494/61563248-58261e00-aa41-11e9-91c5-a55848137719.png"
        content={
          <div>
            <p>Neal Grantham is a data scientist and machine learning practitioner who specializes in the fields of data visualization (see his <a target="_blank" rel="noopener noreferrer" href="https://github.com/nsgrantham/ggdark">ggdark</a> R package), spatial statistics, hierarchical Bayesian models, and deep learning. He has extensive experience assembling reproducible data science pipelines with Python and R that transform raw, high-throughput DNA sequencing data into informative visualizations and statistical analyses.</p>
            <br />
            <p>Neal’s research has primarily focused on the use of dust-associated microbial communities to geolocate objects with high precision across the United States and the globe. Related work has led to the development of a novel statistical model for the analysis of microbial abundance data from designed experiments. In his years as a research statistician, Neal has collaborated closely with microbial ecologists, horticulturists, marine biologists, EPA atmospheric scientists, and NASA aerospace engineers.</p>
            <br />
            <p>Neal received his Ph.D. in Statistics from North Carolina State University in 2017 and his B.S. in Mathematics, B.S. in Statistics from California Polytechnic State University, San Luis Obispo in 2012.</p>
          </div>
        }
      />
    </Row>
  )
}