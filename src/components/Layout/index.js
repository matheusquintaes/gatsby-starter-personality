import React from "react"
import PropTypes from "prop-types"
import Nav from '../Nav'
import Footer from '../Footer'
import { Wrapper } from "./styled"


import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles/>
        <Wrapper>
          <Nav/>
          {children}
          <Footer/>
        </Wrapper>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
