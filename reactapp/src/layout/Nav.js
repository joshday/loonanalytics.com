import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
// import { Search } from 'heroicons-react'


class Nav extends Component {
  state = {
    search: "",
    runSearch: false
  }
  handleSearch = e => {(e.key === "Enter") && this.setState({ runSearch: true })}

  render() {
    if (this.state.runSearch) {
      return <Redirect to={`/search?q=${this.state.search}`} />
    }

    const NavLink = ({cls, name, path}) => {
      const loc = this.props.location
      const currentClass = "bg-gray-900 text-white"
      const defaultClass = "text-gray-300 hover:bg-gray-700 hover:text-white"
      return <Link to={path} className={`${loc.pathname === path ? currentClass: defaultClass} ${cls}`}>{name}</Link>
    }
  
    const links = [
      { name: "Projects", path: "/projects" },
      { name: "About", path: "/about" },
      { name: "Newsletter", path: "/newsletter"}
    ]
  
    const Logo = () => (
      <Link to="/">
        <span className="sr-only">Loon Analytics</span>
        <span className="text-indigo-100 text-xl font-bold">Loon Analytics</span>
      </Link>
    )

    return (
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0">
              <div className="flex-shrink-0">
                <Logo />
              </div>
              <div className="hidden lg:block lg:ml-6">
                <div className="flex space-x-4">
                  {links.map(l => (
                    <NavLink path={l.path} key={`nav_${l.name}`} cls="px-3 py-2 rounded-md text-sm font-medium" name={l.name} />
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="search" 
                  onKeyPress={this.handleSearch} onChange={e => this.setState({ search: e.target.value })}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map(l => (
              <NavLink path={l.path} key={`mobnav_${l.name}`} cls="block px-3 py-2 rounded-md text-base font-medium" name={l.name} />
            ))}
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)