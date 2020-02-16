import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Wrapper, Left, Right} from "./styled"


const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "photo.png" }) {
          childImageSharp {
            fluid(maxWidth: 386) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  }

const Intro = () => (
    <>
    <Wrapper>
      <Left>
          <Image></Image>
      </Left>
      <Right>
          <h1>Hello my name is  <b> <br/>Jane Doe</b></h1>
          <h3>CREATIVE DESIGN - HUB AUCKLAND</h3>
          <p>Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
      </Right>
    </Wrapper>
    </> 
)

export default Intro
