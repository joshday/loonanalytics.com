import React from 'react'
import A from '../components/A'

//-----------------------------------------------------------------------------// Card 
const Card = ({title, chips, href, desc, img}) => (
  <li className="col-span-1 flex flex-col text-center bg-gray-100 rounded-lg shadow">
    
    <div className="flex-1 flex flex-col p-8">
    
      <A href={href}>
        <h3 className="text-gray-900 text-lg font-medium mb-4">{title}</h3>
        <img className="h-32 object-contain flex-shrink-0 mx-auto bg-gray-100 rounded-lg mb-4" src={img} alt={title} />
      </A>

      <p className="text-gray-600 mb-4">{desc}</p>

      <div>
        {chips.map(c => (
          <span key={`card_${c}`} className="px-2 py-1 mr-2 text-green-800 text-xs font-medium bg-green-100 rounded-full inline-block">
            {c}
          </span>
        ))}
      </div>
    </div>
  </li>
)

//-----------------------------------------------------------------------------// Products
export default function Products() {
  return (
    <div className="bg-gray-900 pt-6 px-12">
      <div className="text-center pb-6">
        <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
          Products
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Here are a few products we've worked on.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 pb-12">
        

        <Card title="One Click Tuner" 
          chips={["iOS", "Swift", "Music"]} 
          href="https://oneclicktuner.com"
          desc="Chromatic musical instrument tuner for iOS."
          img="https://oneclicktuner.com/img/Icon-1024.png"
        />

        <Card title="OnlineStats.jl" 
          chips={["Open Source", "Julia", "Statistics", "Big Data"]} 
          href="https://github.com/joshday/OnlineStats.jl"
          desc="Statistics and data viz for big data."
          img="https://user-images.githubusercontent.com/8075494/57313750-3d890d80-70be-11e9-99c9-b3fe0de6ea81.png"
        />

        <Card title="Trendspot.io" 
          chips={["Data Viz", "Market Analysis"]} 
          href="https://trendspot.io"
          desc="Web search-based market research."
          img="https://user-images.githubusercontent.com/8075494/111532281-dcabd100-873b-11eb-9187-496d33eaaf4f.png"
        />


      </ul>
    </div>
  )
}