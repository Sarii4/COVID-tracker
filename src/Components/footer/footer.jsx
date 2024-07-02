import { FooterWraper, Container, Row, BottomLogo, ImageLogo, Paragraph, UnorderList, List, Img, BottomWidget, WidgetTitle, ContentParagraph, Li, BottomContainer, LowerFooter,Copyright, Design } from "./footer.styles"
import LogoWhite from "../../assets/images/LogoWhite.png"
import FacebookLogo from "../../assets/icons/FacebookLogo.svg"
import TwitterLogo from "../../assets/icons/TwitterLogo.svg"
import LinkedinLogo from "../../assets/icons/LinkedinLogo.svg"
import YoutubeLogo from "../../assets/icons/YoutubeLogo.svg"


function Footer() {
    return (
        <>
            <FooterWraper>
                <Container>
                    <Row>
                        <BottomLogo>
                            <ImageLogo src={LogoWhite} alt="logo covimap" />
                            <Paragraph>  These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.</Paragraph>
                            <UnorderList>
                                <List>
                                    <Img src={FacebookLogo} alt="Facebook" />
                                </List>
                                <List>
                                    <Img src={TwitterLogo} alt="Twitter" />
                                </List>
                                <List>
                                    <Img src={LinkedinLogo} alt="Linkedin" />
                                </List>
                                <List>
                                    <Img src={YoutubeLogo} alt="Youtube" />
                                </List>
                            </UnorderList>
                        </BottomLogo >
                        <BottomContainer>
                            <BottomWidget>
                                <WidgetTitle>Quick Links</WidgetTitle>
                                <ContentParagraph >
                                    <Li>Prevention</Li>
                                    <Li>Qurantine</Li>
                                    <Li>About</Li>
                                    <Li >Help</Li>
                                </ContentParagraph>
                            </BottomWidget>
                            <BottomWidget>
                                <WidgetTitle>About</WidgetTitle>
                                <ContentParagraph>
                                    <Li>Hand Wash</Li>
                                    <Li>Social Distance</Li>
                                    <Li>Isolate</Li>
                                    <Li>Difference</Li>
                                </ContentParagraph>
                            </BottomWidget>
                            <BottomWidget>
                                <WidgetTitle>About</WidgetTitle>
                                <ContentParagraph>
                                    <Li>Hand Wash</Li>
                                    <Li>Social Distance</Li>
                                    <Li>Isolate</Li>
                                    <Li>Difference</Li>
                                </ContentParagraph>
                            </BottomWidget>
                            <BottomWidget>
                                <WidgetTitle>Help</WidgetTitle>
                                <ContentParagraph>
                                    <Li>Hand Wash</Li>
                                    <Li>Social Distance</Li>
                                    <Li>Isolate</Li>
                                    <Li>Difference</Li>
                                </ContentParagraph>
                            </BottomWidget>
                        </BottomContainer>
                    </Row>
                </Container>
                <LowerFooter>
                    <Copyright>© Copyright 2020. All Rights Reserved</Copyright>
                    <Design>Design by <strong>DesignZone</strong></Design>
                </LowerFooter>
            </FooterWraper >
        </>


    )
}

export default Footer
