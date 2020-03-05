import styled from "styled-components"

export const Wrapper = styled.div`
    background: #fff;
    width: auto;
    display:flex;
    width: 1000px;
    flex-direction: row;
    padding: 48px;



    width: auto;
    display: flex;
    width: 1000px;
    flex-direction: row;
    align-items: center;
`


export const Content = styled.section`

    display: block;
    width: 100%;

    p{
        margin-bottom: 18px;
    }

    h1{
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 12px;
        color: var(--gray8);
    }
`
export const WorksContainer = styled.div`

    .gatsby-image-wrapper {
        width: 196px;
        height: 196px;
        margin-right: 26px;
        margin-bottom: 26px;
    }
`

export const WorkItem = styled.div`
    display:flex;
    flex-wrap: wrap;
`