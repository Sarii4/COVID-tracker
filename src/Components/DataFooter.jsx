import styled from 'styled-components'

const FooterInfo = styled.div`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 20px;
    width: 220px;
    height: 100px;
    margin: 5px 5px;
    border-radius: 5px;
    color: #1A1662;

  img {
    display: flex;
    place-content: center;
}
`;

const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: #ffffff;
& h2 {
  margin: 0;
  padding: 0;
}

& h3 {
  margin: 0;
  padding: 0;
}
`;



const DataFooter = ({title, value}) => {

  return (
    <FooterInfo>
        <img src="../../images/icons/covid-blue.svg" alt="covid" width={50}/>
          <FooterText>
        <h3>{title}</h3>
        <h2>{value}</h2>
          </FooterText>
    </FooterInfo>
  )
}

export default DataFooter