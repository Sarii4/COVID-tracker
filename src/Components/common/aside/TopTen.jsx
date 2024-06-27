import styled from "styled-components"
import { US } from 'country-flag-icons/react/3x2'

const TopCountry = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 320px;
height: 30px;
padding: 20px;
margin-bottom: 10px;
background-color: lightgreen;
color: #1a1662;
border: green solid 3px;
border-radius: 5px;
`;


const TopTen = (props) => {
  return (
    <TopCountry>
      <US title="United States" className="..." width={50}/>
      <img src=""></img>
      <h3>{props.country}</h3>
      <h3>{props.value}</h3>
    </TopCountry>
  )
}

export default TopTen