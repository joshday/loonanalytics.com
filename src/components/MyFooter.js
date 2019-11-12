import React from 'react'
import { Footer } from 'react-materialize'

export default function MyFooter() {
  return (
    <Footer
      copyrights=""
      links={<ul>
        <li><a href="mailto:info@loonanalytics.com?Subject=Hello!">Send us an Email</a></li>
      </ul>}
      className="black"
    >
      <h5>Loon Analytics, LLC</h5>
      <p>We love building software.  What can we build for you?</p>
    </Footer>
  )
}
