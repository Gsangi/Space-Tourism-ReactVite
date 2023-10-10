import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import React from 'react'

const Layout = ({ windowSize, location }) => {
  return (
    <main>
      <NavBar windowSize={windowSize} location={location} />
      <Outlet />
    </main >
  )
}

export default Layout