import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./styled"


import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles/>
        <Wrapper>
          {children}
        </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
