import React from 'react'
import { Navbar } from 'react-materialize'
import { NavLink } from 'react-router-dom'

const MyNavBar = () => {
  const logo = <NavLink to='/' className="brand-logo no-wrap">
    <img src="/img/loonsquarecircle.png" alt="" className="teal lighten-3 btn-floating nav-logo" />
    Loon Analytics
  </NavLink>

  return (
    <Navbar className="black z-depth-0" alignLinks="right" brand={logo}>
      <NavLink to='/services'>Services</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <a target="_blank" rel="noopener noreferrer" href="http://blog.loonanalytics.com">Blog</a>
    </Navbar>
  )
}

export default MyNavBar