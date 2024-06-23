import styled from "styled-components";

const WorldData = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
width: 320px;
height: 50px;
margin-bottom: 10px;
background-color: lightblue;
border: blue solid 3px;
border-radius: 5px;
color: #1A1662;
`;


const DataBar = ({title, value}) => {
  return (
    <WorldData>
      <h3>{title}</h3>
      <h3>{value}</h3>
    </WorldData>
  )
}

export default DataBar