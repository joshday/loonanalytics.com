import React from 'react'
import { Footer } from 'react-materialize'

export default function MyFooter() {
  return (
    <Footer
      copyrights=""
      links={<ul>
        <li><a href="mailto:info@loonanalytics.com?Subject=Hello!">Contact us</a></li>
      </ul>}
      className="black"
    >
      <h5>Loon Analytics, LLC</h5>
    </Footer>
  )
}
