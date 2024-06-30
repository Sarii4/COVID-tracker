import { SectionTotalContainer, SectionContainer, Title, Description, StyledButton, ImageContainer, StyledImage,  SponsorContainer, StyledSponsor0, StyledSponsor1, StyledSponsor2, StyledSponsor3, StyledSponsor5, StyledSponsor4, ContainerButtons, StyledShare,StyledCart, StyledSupport } from "./Section-Download.style";

import Phones from "../../assets/images/phones.png";
import SponsorImage0 from "../../assets/images/b-2.png";
import SponsorImage1 from "../../assets/images/b-3.png";
import SponsorImage2 from "../../assets/images/b-4.png";
import SponsorImage3 from "../../assets/images/b-5.png";
import SponsorImage5 from "../../assets/images/b-6.png";
import SponsorImage4 from "../../assets/images/b-2.png";
import Share from "../../assets/images/sharebutton.png";
import ImageSupport from "../../assets/images/botones_carrito_covid_tracker__1_-removebg-preview.png"; 
import ImageCart from "../../assets/images/botones_carrito_covid_tracker__3_-removebg-preview.png";


const SectionDownload1 = () => {
  return (
    <SectionTotalContainer>
      
      <ContainerButtons>
        <StyledShare src={Share} alt="Share" />
        <StyledSupport src={ImageSupport} alt="Support" />
        <StyledCart src={ImageCart} alt="Cart" />
      </ContainerButtons>

      <SectionContainer>
        <Title>Download the covid app for get latest update</Title>
        <Description>
          Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. The coronavirus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.
        </Description>
        <StyledButton>HOW TO PROTECT</StyledButton>
      </SectionContainer>

      <ImageContainer>
        <StyledImage src = {Phones} alt = "Phones" />
      </ImageContainer>


      

      <SponsorContainer>
        <StyledSponsor0 src={SponsorImage0} alt = "Sponsor0" />
        <StyledSponsor1 src={SponsorImage1} alt = "Sponsor1" />
        <StyledSponsor2 src={SponsorImage2} alt = "Sponsor2" />
        <StyledSponsor3 src = {SponsorImage3} alt = "Sponsor3" />
        <StyledSponsor5 src = {SponsorImage5} alt = "Sponsor5" />
        <StyledSponsor4 src = {SponsorImage4} alt = "Sponsor4" />
      </SponsorContainer>



    </SectionTotalContainer>

    
  );
};

export default SectionDownload1