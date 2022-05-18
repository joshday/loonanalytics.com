
const products = [
  { name: "One Click Tuner", description: "Chromatic musical instrument tuner for iOS.  This is the (barely) profitable one.", imageUrl: "images/oneclick.png" },
  { name: "Trendspot.io", description: "Keyword research trend analysis", imageUrl: "images/trendspot.png" },
  { name: "Monitoring App", description: "Lightweight statsd-like monitoring app (retired)" },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-16 max-w-7xl sm:px-24 lg:px-32 lg:py-12">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Things I've Built</h2>
            {/* <p className="text-xl text-gray-500">
              Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus
              quis et.
            </p> */}
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {products.map((x) => (
              <li key={x.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover shadow-lg rounded-lg" src={x.imageUrl} alt="" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{x.name}</h3>
                      <p className="text-indigo-600">{x.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
