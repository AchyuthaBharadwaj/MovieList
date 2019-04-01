import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "./globals/navbar"

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
