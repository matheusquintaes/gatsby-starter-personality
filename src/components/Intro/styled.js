import styled from "styled-components"

export const Wrapper = styled.section`
    background: #fff;
    width: auto;
    display:flex;
    width: 1000px;
    flex-direction: row;
    align-items: center;
    position:fixed;
`


export const Left = styled.div`
    text-decoration: none;
    position: relative;
    flex-shrink: 0;
    width: 380px;
    height: 100%;
`

export const Right = styled.div`
    padding: 64px;
    margin-bottom: 0;
    width: 100%;

    h1{
        font-size: 48px;
        font-weight:700;
        line-height: 56px;
        margin-bottom: 16px;
        b{
            color: var(--mainColor);
        }
    }

    h3{
        font-size: 14px;
        leeter-spacing: 1.5px;
        color: var(--gray7);
        font-weight:700;
        margin-bottom: 32px;
    }

    p{
        color: var(--gray7);
    }
`