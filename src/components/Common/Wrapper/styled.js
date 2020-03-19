import styled from "styled-components"
import media from "styled-media-query"

export const DivWrapper = styled.div`
    background: #fff;
    width: auto;
    display:flex;
    width: 1000px;
    flex-direction: row;
    padding: 48px;

    ${media.lessThan("large")`
        width: calc(100% - 300px);
        flex-direction: column;
        padding: 36px;
    `}

    ${media.lessThan("medium")`
        width: calc(100% - 150px);
        flex-direction: column;
    `}

    ${media.lessThan("small")`
        width: calc(100% - 50px);
        flex-direction: column;
        padding: 18px;
    `}
`
