import { useState } from "react";
import styled from "styled-components";

const WorldData = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
width: 320px;
height: 50px;
margin-bottom: 10px;
border-radius: 5px;
color: #1A1662;
background-color: ${(props => props.fondo)};

&:hover {
  scale: 1.2;
  border: 3px solid ${(props => props.hasColor? "none" : "red")};
}
`;
// css={"background-color: ${props.fondo}"}> */}
//hasColor={hasColor} onClick={() => setHasColor(!hasColor)}

const DataBar = ({ title, value }) => {
  const [hasColor, setHasColor] = useState(false);
  const [fondo, setFondo] = useState(false);
  
    return (
    <WorldData 
      fondo={fondo} onClick ={() => setFondo(!fondo)}
      hasColor={hasColor} onChange={() => setHasColor(!hasColor)}
    > 
      <h3>{title}</h3>
      <h3>{value}</h3>
    </WorldData>
  )
}

export default DataBar

