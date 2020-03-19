import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const WorksContainer = styled.div`
    display:flex;
    width:100%;
`

export const WorkItem = styled.div`
    display:flex;
    flex-wrap: wrap;
    width:100%;
    margin-left: -12px;
    margin-right: -12px;

    a {
        width: 25%;
        padding-left: 12px;
        padding-right: 12px;
        padding-bottom: 12px;
        max-height: 150px;
        
        ${media.lessThan("medium")`
            width: 33.3333%;
        `}  

        ${media.lessThan("small")`
            width: 50%;
        `}  
    }
`

export const WorkImage = styled(Img)`
    height: 100%;
    width: 100%;
`