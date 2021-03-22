import React from 'react'
import { ChartSquareBar, Code, Variable } from 'heroicons-react'
import Section from './Section'

//-----------------------------------------------------------------------------// Feature 
const Feature = ({icon, title, desc}) => (
  <div className="">
    <div className="flow-root bg-gray-900 rounded-lg px-6 pb-8">
      <div className="-mt-6">
        <h3 className="mt-8 text-lg font-medium text-gray-400 tracking-tight">
          {icon} {title}
        </h3>
        <p className="mt-5 text-base text-gray-100">
          {desc}
        </p>
      </div>
    </div>
  </div>
)

const iconClass = "bg-gray-900 text-indigo-500 h-12 w-12 rounded"



//-----------------------------------------------------------------------------// Expertise


export default function Expertise() {
  return (
    <Section title1="Things We Are" title2="Known For" c1="text-white" c2="text-indigo-400" 
      className="bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            <Feature 
              title = "Data Viz" 
              icon = {<ChartSquareBar className={iconClass} />} 
              desc = "Custom interactive data visualizations tailored to your application."
            />

            <Feature 
              title = "Open Source Software"
              icon = {<Code className={iconClass} />}
              desc = "Avoid vendor lock-in with best-of-breed OSS."
            />
            
            <Feature 
              title = "Applied Math"
              icon = {<Variable className={iconClass} />}
              desc = "Optimization, statistics, machine learning, and everything inbetween."
            />          
          </div>
        </div>
      </div>
    </Section>
  )
}
