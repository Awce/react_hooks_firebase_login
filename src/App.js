import React from 'react';
import Routes from './Routes'
import { NavLink } from 'react-router-dom'

export default function () {
  return (
    <div>
      <nav>
        <NavLink
          exact
          className="nav-button"
          activeClassName="active"
          to="/">Home</NavLink>
        {" | "}
        <NavLink
          className="nav-button"
          activeClassName="active"
          to="/login">login</NavLink>
        {" | "}
        <NavLink
          className="nav-button"
          activeClassName="active"
          to="/profile">profile</NavLink>

      </nav>
      <Routes />

    </div>
  )
}
