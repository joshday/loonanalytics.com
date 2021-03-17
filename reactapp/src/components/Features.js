import React from 'react'
import { ChartSquareBar, Code, Variable, PresentationChartBar } from 'heroicons-react'

//-----------------------------------------------------------------------------// Feature 
const Feature = ({icon, title, desc}) => (
  <div className="pt-6">
    <div className="flow-root bg-gray-200 rounded-lg px-6 pb-8">
      <div className="-mt-6">
        <div>
          <span className="inline-flex items-center w-16 h-16 justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
            {icon}
          </span>
        </div>
        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{title}</h3>
        <p className="mt-5 text-base text-gray-500">
          {desc}
        </p>
      </div>
    </div>
  </div>
)

//-----------------------------------------------------------------------------// Features
export default function Features() {
  return (
    <div className="relative bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Do more faster</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Here's what we work on
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          We figure out technical challenges.  Give us a problem and we provide a solution: a computer program, a web app, whatever.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

            <Feature 
              title = "Julia"
              icon = {<img className="h-10 w-10 bg-white rounded-sm p-1" src="https://raw.githubusercontent.com/JuliaLang/julia-logo-graphics/master/images/julia-dots.svg" alt="julia-circles" />}
              desc = "We are experts with the Julia programming language, a high-performance language for technical computing."
            />

            <Feature 
              title = "React Apps"
              icon = {<img className="h-10 w-10 bg-white rounded-sm" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />}
              desc = "We can build anything for the modern web."
            />

            <Feature 
              title = "Data Viz" 
              icon = {<ChartSquareBar className="bg-white text-indigo-500 h-10 w-10 rounded-sm" />} 
              desc = "We build custom data visualizations tailored to understanding your data."
            />

            <Feature 
              title = "Open Source"
              icon = {<Code className="bg-white text-indigo-500 h-10 w-10 p-2 rounded-sm" />}
              desc = "We use best-of-breed open source libraries to get things done."
            />
            
            <Feature 
              title = "Applied Math"
              icon = {<Variable className="bg-white text-indigo-500 h-10 w-10 p-2 rounded-sm" />}
              desc = "Our staff of PhDs has the know-how to get things done.  We live and breathe ML, AI, statistics, and optimization."
            />
            
            <Feature 
              title = "Teaching"
              icon = {<PresentationChartBar className="bg-white text-indigo-500 h-10 w-10 p-2 rounded-sm" />}
              desc = "We love teaching.  We can help groups get up to speed on a variety of data science topics."
            />
          
          </div>
        </div>
      </div>
    </div>
    
  )
}
