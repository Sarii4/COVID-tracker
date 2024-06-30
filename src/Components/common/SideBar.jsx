import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"
import { GrAnalytics, GrAppsRounded, GrLineChart} from "react-icons/gr";
import { TiThMenuOutline } from "react-icons/ti";
import { GoFileDirectory,GoComment } from "react-icons/go";
import { TfiLayersAlt } from "react-icons/tfi";
import { PiGlobe } from "react-icons/pi";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  width: 6.25rem;
  height: auto;
  padding: 0.313rem;
  margin: auto;
  `;

  const StyledIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
    font-size: 1.875rem;
    background-color: #F7F8FC;
    color: #3639AE;
    margin: 0.625rem 0.313rem;
    cursor: pointer;
  
  &.active{
    color: white;
    background-color: #3639AE;
  }

  &:hover{
  color: white;
  background-color: #3639AE;
}
  `;

const Logo = styled.img` 
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
      <Link to="/"><Logo src="../../../images/coronavirus.png" width={80} /></Link>
      <Icons>
        <NavLink to="/tracker1"><StyledIcon><GrAnalytics/></StyledIcon></NavLink>
        <NavLink to="/tracker2"><StyledIcon><TiThMenuOutline/></StyledIcon></NavLink>
        <NavLink to="/tracker3"><StyledIcon><GrAppsRounded /></StyledIcon></NavLink>
        <NavLink to="/tracker4"><StyledIcon><GoFileDirectory /></StyledIcon></NavLink>
        <NavLink to="/tracker5"><StyledIcon><TfiLayersAlt /></StyledIcon></NavLink>
        <NavLink to="/tracker6"><StyledIcon><GrLineChart /></StyledIcon></NavLink>
        <NavLink to="/tracker7"><StyledIcon><PiGlobe /></StyledIcon></NavLink>
        <StyledIcon><GoComment /></StyledIcon>
      </Icons>
  </>
  )
}

export default SideBar