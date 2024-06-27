import Carousel from "./components/Carousel/Carousel";
import { Body, SectionCarousel, Titulos } from "./styled/styleSections";
import data from "../src/utils/data.json";


const App = () => {
const componente3Data = data.home.find(
  (item) => item.component === 3
).elements;
console.log(componente3Data);

  return (
    <>
      <Body>            
            <SectionCarousel>
              <Titulos>
                <h2>App Feature</h2>
                <h1>Basic Feature You Will Get When You Use</h1>
              </Titulos>
        
        {componente3Data.map((item, index) => (
                        <Carousel
                            key={index}
                            url={`../src/assets/${item.image}`}
                            title={item.title}
                            text={item.paragraph}
                        />
                      ))}
      

            </SectionCarousel>
      </Body> 

    </>
  );
};

export default App;
