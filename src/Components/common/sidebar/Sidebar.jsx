import styled from "styled-components"
import { GrAnalytics, GrAppsRounded } from "react-icons/gr";


const Icons = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  padding:5px;
  margin: 20px;
  `;

const Logo =styled.img`
  margin-bottom: 30px;
  animation: logo-spin infinite 10s linear;
    @keyframes logo-spin {
    from { transform: rotate(0deg);}
    to { transform: rotate(360deg); }
}
`;

const SideBar = () => {
  return (
    <>
      <a href=""><Logo src="../../../images/coronavirus.png" width={80} /></a>
      <Icons>
        <GrAnalytics />
        <GrAppsRounded />
      </Icons>
  </>
  )
}

export default SideBar