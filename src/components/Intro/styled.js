import styled from "styled-components"

export const Wrapper = styled.section`
    background: #fff;
    width: auto;
    display:flex;
    width: 1000px;
    flex-direction: row;
    align-items: center;
`
export const ImageContainer = styled.div`
    flex-shrink: 0;
    flex-basis: 380px;
    height: 100%;
`

export const IntroContainer = styled.div`
    padding: 64px;
    margin-bottom: 0;
    width: auto;

    h1{
        font-size: 48px;
        font-weight:700;
        line-height: 56px;
        margin-bottom: 12px;
        color: var(--gray8);
        b {
            color: var(--mainColor);
        }
    }

    h3{
        font-size: 14px;
        letter-spacing: 1.5px;
        color: var(--gray7);
        font-weight:700;
        margin-bottom: 32px;
    }

    p{
        color: var(--gray7);
        font-size: 22px;
        line-height: 26px;
    }
`