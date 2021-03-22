import React from 'react'
import Expertise from './Expertise'
import LogoCloud from './LogoCloud'
import Hero from './Hero'


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <main>
          <Hero />
          <Expertise />
          <LogoCloud />
        </main>
      </div>
    </div>
  )
}
