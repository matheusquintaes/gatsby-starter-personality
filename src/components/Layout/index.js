import React from "react"
import PropTypes from "prop-types"
import StyledBackgroundSection from '../BackgroundSection'
import { Wrapper } from "./styled"

import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles/>
      <StyledBackgroundSection>
        <Wrapper>{children}</Wrapper>
      </StyledBackgroundSection>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
