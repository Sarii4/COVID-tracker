
import { TotalContainer, ItemContainer, PhoneContainer, ImagePhone, TextContainer, ListContainer, BoxContainer, Button, Number, Title, Paragraph, ImagePadlock, ImageUp, ImageCrown, ImageHeart, LeyendNumber, } from "./section-download-2.styles"
import moviles from "../../assets/images/mobiles.png"
import amor from "../../assets/images/amor.png"
import candado from "../../assets/images/candado.png"
import corona from "../../assets/images/corona.png"
import subir from "../../assets/images/subir.png"



function SectionDownload2() {
    return (
        <>

            <TotalContainer>
                <ItemContainer>
                    <PhoneContainer>
                        <ImagePhone src={moviles} alt="moviles" />
                    </PhoneContainer>
                    <TextContainer>
                        <Title>Stay Home, And Prayer For Victim</Title>
                        <Paragraph>
                            Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.
                        </Paragraph>
                        <Paragraph>
                            Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and it can occur on its own, without a cough.
                        </Paragraph>
                        <Button>DOWNLOAD NOW</Button>
                    </TextContainer>
                </ItemContainer>
            </TotalContainer>
            <ListContainer>
                <BoxContainer>
                    <ImagePadlock src={candado} alt="Padlock" />
                    <Number>403</Number>
                    <LeyendNumber>STARTUPS</LeyendNumber>
                </BoxContainer>
                <BoxContainer>
                    <ImageUp src={subir} alt="Up" />
                    <Number>120+</Number>
                    <LeyendNumber>MEMBER</LeyendNumber>
                </BoxContainer>
                <BoxContainer>
                    <ImageCrown src={corona} alt="Crown" />
                    <Number>22m</Number>
                    <LeyendNumber>REVENUE</LeyendNumber>
                </BoxContainer>
                <BoxContainer>
                    <ImageHeart src={amor} alt="Heart" />
                    <Number>5643</Number>
                    <LeyendNumber>DOWNLOAD</LeyendNumber>
                </BoxContainer>
            </ListContainer>

        </>
    )
}

export default SectionDownload2
