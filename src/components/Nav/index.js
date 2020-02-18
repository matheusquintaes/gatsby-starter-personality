import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Wrapper } from "./styled"

const Nav = () => (

    <Wrapper>
    <ul>
        <li><AniLink  paintDrip  hex="#5A67D8" to="/"> Home </AniLink></li>
        <li><AniLink   paintDrip  hex="#5A67D8" to="/work"> Work </AniLink></li>
    </ul>
    </Wrapper> 
)

export default Nav
