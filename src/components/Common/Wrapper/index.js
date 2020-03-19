import React from "react"
import PropTypes from "prop-types"

import { DivWrapper } from "./styled"

const Wrapper = ({ children }) => {
  return (
      <DivWrapper>
        {children}
      </DivWrapper>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
