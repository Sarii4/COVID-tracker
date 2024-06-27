import { useState } from "react";
import styled from "styled-components/macro";

const WorldData = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
width: 320px;
height: 50px;
margin-bottom: 10px;
background-color: lightblue;
//border: blue solid 3px;
border-radius: 5px;
color: #1A1662;
//background-color: lightblue;
border: 3px solid ${(props) => (props.hasColor? "yellow" : "#3c7f8b")};
`;


const DataBar = ({ title, value, hasColor }) => {
  const [hasColor, setHasColor] = useState(false);
   return (
    <WorldData hasColor={hasColor} onClick={() => setHasColor(!hasColor)}>
    {/* css={"background-color: ${props.fondo}"}> */}
      <h3>{title}</h3>
      <h3>{value}</h3>
    </WorldData>
  )
}

export default DataBar