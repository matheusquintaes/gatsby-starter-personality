import React from "react"
import PropTypes from "prop-types"
import BackgroundSection from './BackgroundSection'

import "../assets/sass/main.scss"

const Layout = ({ children }) => {
  return (
  
    <BackgroundSection>
      <main>{children}</main>
    </BackgroundSection>
  
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
