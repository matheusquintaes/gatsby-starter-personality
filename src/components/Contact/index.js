import React from "react"

import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"

import ContactImage from "../../images/contact/contact.png"

import { ContactWrapper, ImageWrapper, InfosWrapper} from "./styled"

const Contact= () => (
    <>
        <Wrapper>
            <Content>
                <ContactWrapper>
                    <InfosWrapper>
                        <h1>Contact</h1>
                        <p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
                        <p>You can connect with me via <a href="https://twitter.com/">Twitter</a>  and <a href="https://linkedin.com/">Linkedin</a> .</p>
                        <p>If you like to look at good photos, <a href="https://instagram.com/">Instagram</a></p>
                    </InfosWrapper>
                    <ImageWrapper>
                        <img src={ContactImage} alt="" />
                    </ImageWrapper>
                </ContactWrapper>
            </Content>
        </Wrapper>
    </> 
)

export default Contact
