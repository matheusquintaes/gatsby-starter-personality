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
                        <p>Let's get in touch, for any project inquiries or even simply say hi, If you are feeling really adventurous, just drop me a line.</p>
                        <p>You can connect with me via <a href="https://twitter.com/matheusquintaes">Twitter</a>  and <a href="https://linkedin.com/matheusquintaes">Linkedin</a> .</p>
                        <p>If you like to look at good photos, <a href="https://instagram.com/matheusquintaesS">Instagram</a></p>
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
