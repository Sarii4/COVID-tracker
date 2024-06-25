import SectionDownload3 from "./Components/Section-Download-3/Section-Download-3";
import SectionPhone from "./Components/SectionPhone/SectionPhone";
import GlobalStyle from "./styled/GlobalStyled";

import Phone1 from './assets/images/phone-1.png';
import { Section6 } from "./styled/styledSections";




const Home = () =>{
    return(
        <>
            <GlobalStyle/>
            
        
            <Section6>
            <SectionDownload3
                titulo="Get the simple app for latest news"
                    parrafo="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold."
                    button="DOWNLOAD NOW"
            />
            <SectionPhone imgUrl={Phone1}/>
            </Section6>
            
        </>
    )
}




export default Home;
