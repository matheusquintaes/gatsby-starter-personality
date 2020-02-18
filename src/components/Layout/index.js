import React from "react"
import PropTypes from "prop-types"
// import StyledBackgroundSection from '../BackgroundSection'
import { Wrapper, Box } from "./styled"


import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles/>
        <Wrapper>
          <Box>
          {children}
          </Box>
        </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
