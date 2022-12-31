import A from './A'

const products = [
  {
    name: "One Click Tuner",
    description: "Chromatic musical instrument tuner for iOS.  This is the (barely) profitable one.",
    imageUrl: "images/oneclick.png",
    productHunt: {
      href: "https://www.producthunt.com/posts/one-click-tuner?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-one&#0045;click&#0045;tuner",
      src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=153658&theme=light",
      alt: "One&#0032;Click&#0032;Tuner - The&#0032;best&#0032;chromatic&#0032;tuner&#0032;for&#0032;iOS | Product Hunt"
    },
    appStoreLink: "https://apps.apple.com/us/app/one-click-tuner/id1448329781"
  },
  {
    name: "Trendspot.io",
    retired: true,
    description: "Keyword research trend analysis",
    imageUrl: "images/trendspot.png",
  },
  {
    name: "Monitoring App",
    retired: true,
    description: "Lightweight statsd-like monitoring app",
    imageUrl: "https://user-images.githubusercontent.com/8075494/62552461-b1f95700-b83b-11e9-9ff1-9dc2b8c587a8.png",
  }
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
                    <div className="text-lg leading-6 font-medium space-y-4">
                      <h3>{x.name} {x.retired ? <span className="text-gray-500">(Retired)</span>: null}</h3>
                      <p className="text-indigo-600">{x.description}</p>
                      {x.productHunt && (
                        <div>
                          <A href={x.productHunt.href} className="w-250 h-54"target="_blank">
                            <img src={x.productHunt.src} alt={x.productHunt.alt} />
                          </A>
                        </div>
                      )}
                      {x.appStoreLink && (
                        <div>
                          <A href={x.appStoreLink}>
                            <img src="images/download-on-the-app-store.svg" alt="app store link"/>
                          </A>
                        </div>
                      )}
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
