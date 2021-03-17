import React from 'react'
import A from '../components/A'

export default function About() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg className="absolute top-12 left-full transform translate-x-32" width={404} height={384} fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width={404} height={384} fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg className="absolute bottom-12 left-full transform translate-x-32" width={404} height={384} fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">About Us</span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Loon Analytics</span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">Loon Analytics is Dr. Josh Day and his network of scientists, researchers, mathematicians, software developers, and engineers.  Here's the story:</p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">

          <h2>A Word from the Owner</h2>

          <p>Hi there, this is Josh.  I created <strong>Loon Analytics, LLC</strong> in 2019 as an entity to funnel consulting work into.  Loon currently operates in Carrboro, NC as a side business while I work full-time for <A className="text-indigo-400" href="https://juliacomputing.com">Julia Computing</A>.  I enjoy researching unsolved problems and making software tools to solve them.  You can take a look at my resume <A className="text-indigo-400" href="https://github.com/loonanalytics/Hosting/files/6158887/JoshDayResume.pdf">here</A>.</p>

          <h3>Why "Loon"?</h3>

          <p>I was born and raised in Minnesota, where the state bird is the loon.  Loons have a very distinct call and bring back strong memories of spending time at my grandfather's cabin in northern MN.  There's no special meaning to using "Loon" other than a nod to my upbringing.</p>

          <figure>
            <img className="w-128 rounded-lg" src="https://user-images.githubusercontent.com/8075494/111521441-889aef80-872f-11eb-9c2c-c8c3f46e65c5.jpg" alt="loon" />
          </figure>

          <h3>Send me a Note</h3>

          <p>Have something interesting to say or a question to ask?  Reach out to me on:</p>
          <ul>
            <li>GitHub: <A href="https://github.com/joshday">@joshday</A></li>
            <li>Twitter: <A href="https://twitter.com/heyjoshday">@heyjoshday</A></li>
          </ul>

        </div>
      </div>
    </div>

  )
}
