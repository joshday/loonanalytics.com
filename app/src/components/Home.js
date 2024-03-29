// import Contact from './Contact'
import A from './A'
import { MailIcon } from '@heroicons/react/outline'

const stats = [
  { label: 'Founded', value: '2019' },
  { label: 'Number of Ideas', value: '∞' },
  { label: 'Products Built', value: '3' },
  { label: 'Products Profitable', value: '1' },
]

export default function Example() {
  return (
    <div className="relative bg-white py-8">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
              <div className="absolute inset-0 bg-slate-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-600 via-slate-600 opacity-90" />
              <div className="relative px-8">
                {/* <div>
                  <h2 className="text-gray-50 text-3xl">Loon Analytics, LLC</h2>
                </div> */}
                <blockquote className="mt-8">
                  <div className="relative text-lg text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-slate-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Loon Analytics is a venue for me to work on for-profit side projects.  I contribute to <A className="underline" href="https://github.com/joshday">many open source packages</A>, but I often have ideas that make more sense as a product or service.
                    </p>
                    <br />
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-slate-200">Josh Day | Founder</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-indigo-900 font-extrabold tracking-tight sm:text-4xl">
              Who I am
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                My name is Josh Day and Loon Analytics is an entity for me to run side businesses out of.  I love my job at Julia Computing, but I use side projects to scratch the itch for entrepreneurship.  The name <A href="https://en.wikipedia.org/wiki/Loon">Loon</A> comes from an aquatic bird that I have fond memories of while spending time at my grandfather's cabin in northern Minnesota.  They have a very distinct call that is one of the most relaxing sounds in the world.
              </p>
              <p className="text-lg">

              </p>
              <div className="mt-9">
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>josh [at] loonanalytics [dot] com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              {/* <a href="#" className="text-base font-medium text-slate-600">
                {' '}
                Learn more about how we're changing the world <span aria-hidden="true">&rarr;</span>{' '}
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <img src="images/LogoCircle.svg" className="h-32 mx-auto mb-6" alt="logo"/>
    </div>
  )
}
