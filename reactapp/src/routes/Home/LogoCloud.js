import Section from './Section'
import A from '../../components/A'

const Logo = ({ src, alt, href, className}) => (
  <A href={href} className={`col-span-1 flex justify-center rounded-sm py-8 px-8 bg-gray-50 ${className}`}>
    <img className="h-16 object-contain hover:border-indigo-500 hover:border-4 " src={src} alt={alt}/>
  </A>
)

//-----------------------------------------------------------------------------// LogoCloud
export default function LogoCloud() {
  return (
    <Section className="bg-gray-900 px-6" title1="Open Source Software" c1="text-white" c2="text-indigo-400" title2="We Love" >
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-0">

        <Logo 
          src="https://raw.githubusercontent.com/JuliaLang/julia-logo-graphics/master/images/julia-logo-color.svg" 
          alt="Julia" 
          href="https://julialang.org"
        />

        <Logo 
          src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype.128b6e12eb85d013bc9f80a917f57efe.svg" 
          alt="TailWind"
          href="https://tailwindcss.com"
        />

        <Logo 
          src="https://images.prismic.io/plotly-marketing-website/bd1f702a-b623-48ab-a459-3ee92a7499b4_logo-plotly.svg" 
          alt="Plotly" 
          href="https://plotly.com"
        />

        <Logo 
          src="https://raw.githubusercontent.com/fonsp/Pluto.jl/dd0ead4caa2d29a3a2cfa1196d31e3114782d363/frontend/img/logo_white_contour.svg"
          alt="Pluto.jl"
          href="https://github.com/fonsp/Pluto.jl"
        />

        <Logo 
          src="https://user-images.githubusercontent.com/8075494/111925031-87462b80-8a7d-11eb-98e2-eae044b13a3f.png"
          alt="OnlineStats.jl"
          href="https://github.com/joshday/OnlineStats.jl"
        />

        <Logo 
          src="/svgs/react.svg"
          alt="React.js"
          href="https://reactjs.org"
        />

      </div>
    </Section>
  )
}
