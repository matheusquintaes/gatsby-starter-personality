import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Wrapper, Content, WorksContainer, WorkItem} from "./styled"


const Works= () => (
    <>
        <Wrapper>
            <Content>
                <h1>Work</h1>
                <p>Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia luctus elit eget interdum.</p>
                <WorksContainer>
                    <WorkItens/>
                </WorksContainer>
            
            </Content>
        </Wrapper>
    </> 
)

const WorkItens = () => {
    const data = useStaticQuery(graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "works"}}) {
          edges {
            node {
              childImageSharp {
                id
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)
      
    return (
        <WorkItem>
          {data.allFile.edges.map((image, key) => (
                <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
                    <Img
                        key={key}
                        fluid={image.node.childImageSharp.fluid}
                    />
                </a>
            ))}
        </WorkItem>
      )

}

export default Works
