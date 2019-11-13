import React from 'react'
import { Footer } from 'react-materialize'

export default function MyFooter() {
  return (
    <Footer
      copyrights=""
      links={<ul>
        <li><a href="mailto:info@loonanalytics.com?Subject=Hello!">Send us an email</a></li>
      </ul>}
      className="grey darken-4"
    >
      <h5>Loon Analytics</h5>
      <p>We love building software of the scientific and technical variety.</p>
    </Footer>
  )
}
