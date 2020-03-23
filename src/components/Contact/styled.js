import styled from "styled-components"
import media from "styled-media-query"


export const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ${media.lessThan("medium")`
        flex-wrap: wrap;
    `}
`

export const InfosWrapper = styled.div`
    flex-basis: 70%;

    ${media.lessThan("medium")`
        flex-basis: auto;
    `}

    h3 {
        margin-bottom: 12px;
    }

    p{
        margin-bottom: 32px;
    }
`

export const ImageWrapper = styled.div`

    padding: 18px; 
    margin: 0 auto;
    
    img {
        width: 250px;

        ${media.lessThan("large")`
            width: 150px;
        
        `}
    }
`
