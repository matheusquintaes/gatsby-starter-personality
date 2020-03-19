import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${media.lessThan("large")`
        padding: 1.5em 0;
    `}
    

`
