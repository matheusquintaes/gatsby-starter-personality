import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Wrapper, ImageContainer, IntroContainer} from "./styled"

const Intro = () => (
    <>
    <Wrapper>
      <ImageContainer>
          <Image/>
      </ImageContainer>
      <IntroContainer>
        <header>
          <h1>Hello my name is  <b> <br/>Jane Doe</b></h1>
          <h3>DIGITAL DESIGNER - NEW ZEALAND</h3>
        </header>
        <p>A free, fully responsive gatsby starter template designed by <a target="blank"  href="https://www.twitter.com/matheusquintaes">@matheusquintaes</a> </p>
        <p>You can learn more <a target="blank" href="https://www.gatsbyjs.org/docs/starters/"> about the starters here</a></p>
      </IntroContainer>
    </Wrapper>
    </> 
)

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "intro/photo2.jpg" }) {
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


export default Intro
