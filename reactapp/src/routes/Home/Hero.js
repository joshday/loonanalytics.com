import React from 'react'

export default function Hero() {
  return (
    <div className="pt-6 bg-gray-900 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">R&amp;D and </span>
                <span className="block text-indigo-400">Data Viz</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Using the Best of Open Source, We Build:
              </p>
              <ul className="list-disc pl-12 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <li>Software</li>
                <li>Dashboards</li>
                <li>Prototypes</li>
              </ul>
              <div className="mt-10 sm:mt-12">
                <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <a href="https://newsletter.loonanalytics.com/#/portal/signup" className="sm:flex">
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900">Sign Up for our Newsletter</button>
                    </div>
                  </a>
                  <p className="mt-3 text-sm pl-12 text-gray-300 sm:mt-4">Spam-free!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-16">
              <img 
                className="w-full lg:absolute lg:inset-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" 
                src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg" 
                alt="design" 
              />
              {/* <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg" alt="design" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
