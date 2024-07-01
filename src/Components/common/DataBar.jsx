import { useState } from "react";
import styled from "styled-components";

const WorldData = styled.div`
display: flex;
justify-content: space-between;
color:  #1A1662;
padding: 20px;
width: 320px;
height: 50px;
margin-bottom: 10px;
border-radius: 5px;
background-color: ${(props => props.fondo)};

&:hover {
  scale: 1.1;
  border: 3px solid;
  border-color:${(props => props.color)};
}
& h2 {
color:${(props => props.color)};
}
`;

const DataBar = ({ title, value, color, fondo }) => {

    return (
    <WorldData color={color} fondo={fondo}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </WorldData>
  )
}

export default DataBar

      //fondo={fondo} onClick ={() => setFondo(!fondo)}
      //hasColor={hasColor} onchange={() => setHasColor(!hasColor)}